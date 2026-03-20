---
title: ROS2 集成
sidebar_label: ROS2 集成
---

# ROS2 集成

内容定位

本页展示 Atlas 和 DSIL 如何集成到现有的基于 ROS2 的机器人系统中。

在理解了硬件和软件层之后，本节演示了如何在无需修改现有驱动或感知流程的情况下部署 Atlas。

这是 Atlas 实现即插即用的关键环节。

## 面向 ROS2 机器人系统的确定性传感器集成

> **ROS2 解决通信问题，不解决时间问题。**  
> **Atlas 让时间戳变得可信。**

---

## 🚀 30 秒上手

> **复制这一行，启动 Atlas**

```bash
ros2 launch atlas_dsil_bridge telemetry.launch.py
```

验证系统：

```bash
ros2 topic list
```

你应该看到：

```text
/imu/data
/gps/fix
/atlas/pps
/atlas/sync
/atlas/health
```

👉 无需修改驱动  
👉 无需修改感知栈  
👉 即插即用进入 ROS2 图

---

## 🧠 为什么 ROS2 不够

ROS2 是中间件，不是时间权威。

它默认：

👉 **所有传感器时间戳已经对齐**

现实中：

* USB 摄像头 → 抖动（jitter）
* LiDAR → 内部时钟
* IMU / GNSS → 独立漂移

结果：

* ❌ 时间错位
* ❌ SLAM 漂移
* ❌ 融合不稳定
* ❌ 调试困难

---

## 🧩 Atlas 做了什么

👉 **在 ROS2 之下建立“硬件时间基准 + 软件对齐层”**

---

## 🏗 系统架构

![Atlas ROS2 的集成管道](/img/Fig%2013.png)

Sensors → Atlas（时间对齐）→ DSIL → ROS2 Topics → SLAM / Nav2 / Perception

👉 Atlas = 时间边界  
👉 DSIL = 映射到 ROS2

---

## ⚙️ 核心机制：时间戳是如何被修正的？

所有关键逻辑只做一件事：

👉 **修改 ROS2 Header.stamp**

---

### 📌 ROS2 Header（关键结构）

```text
std_msgs/Header
```

---

### 🔬 DSIL 时间校正（核心伪代码）

```cpp
// DSIL 时间校正逻辑（核心）
msg.header.stamp = atlas_hardware_time + calculated_offset;
```

---

### 🧠 这个 offset 从哪里来？

DSIL 实时计算：

* USB 传输延迟
* 系统调度延迟
* 数据到达时间偏差

👉 得到一个 **动态补偿值（calculated_offset）**

---

### 🎯 设计原则（Why engineers trust this）

* 不修改传感器固件
* 不依赖传感器内部时钟
* 不破坏 ROS2 driver

✔ 完全兼容现有系统  
✔ 可验证  
✔ 可解释

---

## 🔌 ROS2 话题映射（Plug-and-Play）

| Atlas 数据 | ROS2 话题 | 类型 | 应用价值 |
| --- | --- | --- | --- |
| IMU | `/imu/data` | `sensor_msgs/Imu` | SLAM / 姿态 |
| GNSS | `/gps/fix` | `sensor_msgs/NavSatFix` | 定位 |
| PPS（Pulse Per Second） | `/atlas/pps` | `std_msgs/Bool` | 时间基准 |
| 同步事件 | `/atlas/sync` | `std_msgs/Bool` | 对齐触发 |
| 系统健康 | `/atlas/health` | `diagnostic_msgs/DiagnosticStatus` | 诊断 |

👉 可直接接入：

* Nav2
* SLAM Toolbox
* RTAB-Map
* Isaac ROS

---

## 📍 TF2 与物理对齐（SLAM 关键）

Atlas 引入统一参考坐标系：

```text
atlas_link
```

---

### TF 树结构

![Atlas TF 树结构](/img/Fig%2015.png)

---

### 为什么重要？

👉 时间对齐 + 空间对齐 = 可用数据

没有 atlas_link：

* 传感器坐标混乱
* SLAM 不稳定

---

### 实践建议

* URDF 中定义 `atlas_link`
* 使用 `static_transform_publisher`
* 与实际安装位置一致

---

## ⚡ 性能表现（Real Numbers）

在 Jetson Orin Nano（实测典型）：

* 延迟：**< 1 ms（端到端）**
* CPU：**< 2%**
* 内存：**< 20 MB**

---

### 📊 实际负载场景

同时处理：

* 400 Hz IMU
* 10 Hz GNSS

结果：

👉 DSIL 调度开销可忽略  
👉 上下文切换几乎为 0

✅ **98%+ CPU 保留给 SLAM / Nav2 / Perception**

---

## 🔧 为什么使用 USB CDC？

设备路径：

```text
/dev/ttyACM0
```

---

### 设计选择理由

* ✔ 跨平台（x86 / ARM）
* ✔ 即插即用
* ✔ 无需驱动

---

### ❗ 那 USB 不确定性怎么办？

👉 DSIL 已解决：

* 延迟补偿算法
* 时间重映射

✔ 屏蔽 USB 抖动  
✔ 保持时间一致性

---

## 🧰 常见问题排查（工程必备）

| 现象 | 原因 | 解决 |
| --- | --- | --- |
| 无 `/atlas/` | USB 未识别 | `ls /dev/ttyACM*` |
| IMU 不动 | 未供电 | 检查 Atlas 电源 |
| 时间跳变 | PPS 丢失 | `ros2 topic echo /atlas/pps` |
| 频率异常 | 节点未运行 | `ros2 node list` |

---

## 🔄 驱动兼容性（No Rewrite）

完全兼容：

* `usb_cam`
* `ouster_ros`
* `velodyne_driver`
* `microstrain`

👉 Atlas 不替换驱动，只增强时间

---

## 🎯 多传感器对齐效果

### ❌ 无 Atlas

* 时间漂移
* 数据错位
* SLAM 精度下降

---

### ✅ 使用 Atlas

* PPS 对齐
* 同步触发
* 单一时间轴

---

### 📌 真实场景

自动驾驶小车：

* 30 FPS 摄像头
* 200 Hz IMU

👉 时间严格对齐  
👉 消除运动模糊误差

---

## 📦 ROS2 版本兼容性

| 版本 | 支持 |
| --- | --- |
| Humble | ✅ |
| Iron | ✅ |
| Rolling | ✅ |
| Foxy | ⚠️ |

---

## 🧱 系统边界（Very Important）

Atlas 负责：

* 感知传感器时间
* 同步
* 遥测

Atlas 不负责：

* 电机控制
* 实时控制回路

---

## 💡 为什么工程师选择 Atlas

### 对比传统方案

| 维度 | 传统方案 | Atlas |
| --- | --- | --- |
| 同步方式 | 软件补偿 | 硬件 + 软件 |
| 部署 | 手工调试 | 即插即用 |
| 可观测性 | 黑盒 | 完全可见 |
| 调试时间 | 小时级 | 秒级 |

---

### 🚀 核心优势

🔷 硬件级同步 → 精度提升数量级  
🔷 即插即用 → 部署从天 → 分钟  
🔷 全可观测 → Debug 从小时 → 秒

---

## 📋 最低集成要求

* Linux
* ROS2
* USB
* DSIL SDK

👉 无需内核驱动

---

# ✅ 总结

> **Atlas = ROS2 之下的时间基础设施层**

👉 不改变你的系统  
👉 让你的系统“时间正确”

---

## 下一步

至此，您已了解 Atlas 如何：

* 确立硬件时序边界
* 将时序转换为可用数据
* 集成到 ROS2 系统

下一步是在您自己的环境中评估 Atlas。

👉 申请 [Atlas 评估套件](/software/evaluation-kit)

---

**Atlas 天枢系列**

是机器人系统的确定性传感器基础设施层。

将传感器集成从定制化工程工作转变为可部署的基础设施。

通过 [**评估套件**](/software/evaluation-kit) 在您的系统中探索 Atlas 天枢。