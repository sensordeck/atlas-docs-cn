# 天枢系列开发文档 | Atlas 开发文档

### 面向机器人系统的确定性传感器基础设施

为 IMU、GNSS、LiDAR 等多源传感器提供 **微秒级统一时间基准**。  
天枢系列（Atlas）是一套面向确定性机器人应用的高吞吐传感器基础设施。

Atlas 在机器人系统中引入：

- 硬件级时间权威（Time Authority）
- 统一的传感器集成层（Sensor Infrastructure Layer）

不同于传统“传感器直连算力平台”的模式，Atlas 在中间建立一层 **专用基础设施层**，用于：

- 传感器时间同步  
- 数据流聚合  
- 感知链路标准化  

从而将“传感器集成”从一次性工程问题，转变为 **可复用的系统能力**。

---

## 为真实机器人系统设计

<img src="/img/3cards.png" alt="Atlas 3cards" width="100%" />

---

## 🚀 快速上手（ROS2 几分钟接入）

Atlas 可以直接接入现有 ROS2 技术栈，无需修改现有驱动。

### 运行：

```bash
atlas_start
ros2 launch atlas_dsil_bridge telemetry.launch.py

系统行为

### 启动后，Atlas 会在 ROS2 中发布标准化遥测：

```bash
- `/atlas/status` → 系统健康状态
- `/atlas/pps` → timing 信号状态
- `/atlas/sync_drift` → 实时同步误差
```

## 对比效果

### 未使用 Atlas

- 传感器各自独立时钟  
- 时间漂移不可控  
- 系统调试困难  

### 使用 Atlas

- 统一硬件时间基准  
- 确定性时间对齐  
- 可观测的同步状态  

---

## 集成特性

- 无需修改现有驱动  
- 无需更改传感器固件  
- 与 ROS2 完全兼容  

---

## Atlas 核心能力

### 1. 时间权威（Time Authority）

为所有传感器提供统一时间基准，消除时间漂移问题。

---

### 2. 统一传感器集成

统一以下要素：

- 电源  
- 接口  
- 数据路径  

降低系统复杂度，避免碎片化设计。

---

### 3. 可观测性与同步状态

通过遥测层输出：

- 同步状态  
- timing 关系  
- 传感器健康信息  

实现系统级可观测性。

---

### 1. [传感器同步](./software/sensor-synchronization.md)

理解 Atlas 所要解决的核心问题。

### 4. 跨平台基础设施

Atlas 可跨以下场景复用：

- 不同机器人平台  
- 不同产品 SKU  

### 2. [硬件架构](./hardware/fusion-platform.md)

复用同一套传感器基础设施。

---

## Atlas 系统位置

Atlas 位于：

### 3. [DSIL 软件开发包](./software/dsil-sdk.md)
了解 Atlas 硬件如何通过软件实现其价值。

**传感器层 → Atlas → 机器人算力平台**

### 数据路径

传感器 → Atlas（同步 + 聚合） → 主控计算平台

### 4. [ROS2 集成](./software/ros2-integration.md)
将 Atlas 部署到您现有的机器人技术栈中。

---

## 文档阅读路径

👉 [**定义集成模型**](./evaluation/oem-pilot.md)

建议按以下顺序阅读：

### 1. 传感器同步

理解核心问题：

- 时间漂移  
- 多传感器不一致  
- SLAM 不稳定  

👉 定义问题空间  

---

### 2. 硬件架构

理解 Atlas 如何实现：

👉 [**申请 Atlas 评估套件**](./software/evaluation-kit.md)

- 硬件同步  
- 统一供电  
- 接口整合  

👉 定义系统结构  

---

- 👉 [集成问答 FAQ](/evaluation/faq)
- 👉 [下载中心](/evaluation/download)

### 3. DSIL SDK

理解软件层能力：

- 时间戳校正  
- 遥测数据  
- 系统状态输出  

👉 定义基础设施层  

---

### 4. ROS2 集成

理解实际部署方式：

- 无侵入集成  
- ROS2 对接  
- 快速上线  

👉 进入 OEM 集成流程  

---

## 核心价值

Atlas 将传感器集成从：

**一次性工程问题 → 标准化基础设施**

带来：

- 确定性时间同步  
- 统一接口架构  
- 降低系统复杂度  
- 提升系统可观测性  

---

## 下一步

在真实系统中验证 Atlas：

👉 申请评估套件  

---

## 资源

- 👉 [集成问答 FAQ](./evaluation/faq.md)
- 👉 [下载中心](./evaluation/download.md)

---

## Atlas 天枢系列

Atlas 是机器人系统的：

**确定性传感器基础设施层**

将传感器集成从“工程问题”转变为“系统能力”。

👉 通过 [评估套件](/software/evaluation-kit) 在您的系统中探索 Atlas 天枢
