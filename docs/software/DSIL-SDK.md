# Atlas 天枢DSIL SDK · 确定性传感器集成层软件栈

内容定位
本页阐释 Atlas 硬件能力如何转化为可用的软件行为。

在 Atlas 确立硬件级时序之后，DSIL 将这些时序信息转换为结构化数据、同步时间戳和系统可观测性。

这是硬件转化为基础设施的关键环节。

# 🚀 一句话定义
**Atlas 天枢DSIL（确定性传感器集成层）** 是将天枢硬件的**硬件级时间权威**，以稳定、开放、ROS2友好的方式，交付给机器人应用层的软件平台。它不是又一个驱动集合，而是让您的整个软件栈天然获得**硬件级时间确定性的基础设施**。


## 传统软件栈之痛

| 痛点 | 后果 | 团队付出的代价 |
|:---|:---|:---|
| **多传感器时间戳各自为政** | 融合算法永远在"猜"时间，EKF发散 | 3-6个月调试同步问题 |
| **驱动层与硬件强耦合** | 换一个传感器型号，驱动要重写 | 每个新传感器适配2-4周 |
| **ROS2节点无法感知硬件时间** | 拿到的`/image`和`/imu`时间戳对不上 | 算法团队50%时间在预处理数据 |
| **诊断调试黑盒** | 出问题不知道是硬件还是软件 | 故障定位以天为单位 |

## DSIL 的“确定性”答案

**"让硬件的时间确定性，成为软件的默认属性"**

DSIL SDK V1.0 提供一套**完整、稳定、可观测**的核心能力，让数据同步与系统集成问题迎刃而解：

| DSIL 核心能力 | 技术实现 | 对研发团队的价值 |
|:---:|:---:|:---|
| ⏱️ **时间戳关联与校正** | 基于Atlas硬件记录的事件边界（如PPS、SYNC触发），对通过USB到达主机的所有传感器数据进行时间关联和校正 | 数据天然对齐，ROS节点拿到的 `/image_raw` 和 `/imu/data` 时间戳已关联至同一硬件时间域，无需后处理即可用于紧耦合融合 |
| 🔌 **标准化设备抽象** | 通过Linux内核原生支持的CDC和UVC驱动，将所有传感器呈现为标准字符设备（`/dev/video*`、`/dev/ttyACM*`） | 零侵入集成，现有 `usb_cam`、`serial_driver` 等标准ROS2驱动无需任何修改，DSIL在旁提供时间关联信息 |
| 📊 **全系统状态可观性** | 通过独立的CDC通道（`/dev/ttyACM0`），实时上报同步源状态（GNSS/自由运行）、同步质量、传感器健康、板载电源状态等关键遥测数据 | 从黑盒到白盒，通过 `dsil-cli` 或 `/atlas/sync_status` ROS2话题，分钟级定位故障根源，实现预防性维护 |
| 🌐 **统一时间域管理** | 天枢硬件自动跟随GNSS PPS或PTP等外部时间源，外部源丢失时无缝切换至高精度内部晶振保持模式 | 多机系统统一脉搏，为多机器人协同、测绘等场景提供绝对时间基准，确保整个系统时间一致性 |
| 🔄 **跨产品线复用** | DSIL SDK提供稳定的软件边界，上层应用基于标准ROS2接口开发，与具体传感器型号、机器人平台解耦 | 一套软件栈适配所有车型/机器人，从AGV到自动驾驶、从轮式到足式，研发资产可积累、可复用 |

## 🏗️ 软件架构全景

<img src="/_media/Fig 20.png" alt="Atlas 高级架构图" width="50%" title="Atlas Fusion V2 高级架构">

## 📦 DSIL SDK V1.0 核心交付物

**四大核心能力域**

| 能力域 | 包含的核心功能 | 对团队的价值 |
|:---:|:---|:---|
| ⏱️ **时间戳关联与校正引擎** | • 硬件时间戳解码<br>• 多传感器时间关联<br>• 事件边界对齐 | 数据天然对齐，融合算法开箱即用 |
| 📊 **全系统可观性** | • 同步源与同步状态模型<br>• 传感器健康监控<br>• 板载电源监控<br>• 实时遥测传输 | 分钟级故障定位，从黑盒到白盒 |
| 🛠️ **开发者工具链** | • `dsil-cli` 命令行工具<br>• ROS2监控集成<br>• 标准C API | 团队快速上手，无缝集成现有工作流 |
| 🔧 **平台化支撑** | • 完整文档与消息Schema<br>• 标准化安装流程<br>• Ubuntu/Jetson支持 | 可依赖的长期平台，降低维护成本 |

## 📋 完整的V1.0功能清单（供技术评估参考）

DSIL SDK v1.0 包含以下11项核心功能，构成一个稳定、完整的公开软件边界：

| 类别 | 功能项 | 描述 |
|:---:|:---|:---|
| **传输层** | ✅ 稳定CDC遥测传输 | 通过 `/dev/ttyACM0` 等标准接口，无需自定义内核模块 |
| **解码层** | ✅ 运行时遥测解码 | 实时解析来自天枢硬件的遥测数据流 |
| **核心引擎** | ✅ 时间戳关联与对齐引擎 | 将传感器数据关联至硬件事件边界，实现纳秒级对齐 |
| **状态模型** | ✅ 同步源与同步状态模型 | 支持GNSS锁定、PTP跟随、自由运行等状态机 |
| **可观性** | ✅ 传感器健康状态可见性 | 实时监控接入传感器的运行状态 |
| **可观性** | ✅ 板载电源状态可见性 | 监控电压、电流、功耗等关键电源指标 |
| **工具链** | ✅ 命令行界面(CLI)工具 | 提供 `dsil-cli` 用于诊断、监控和调试 |
| **ROS2集成** | ✅ ROS2监控集成 | 将遥测数据发布为标准ROS2话题，如 `/atlas/sync_status` |
| **文档** | ✅ 文档化的消息Schema | 提供完整的消息格式定义，便于二次开发 |
| **文档** | ✅ 文档化的安装流程 | 提供清晰的安装步骤和依赖说明 |
| **平台** | ✅ 支持的Ubuntu/Jetson部署路径 | 支持Ubuntu 20.04/22.04、Jetson (JetPack 5.x/6.x) |

## ⏱️ 核心机制一：硬件时间戳透传
这是DSIL实现“确定性”的基石。它不是通过软件在数据到达主机时打戳，而是在数据进入天枢硬件的一瞬间，由硬件逻辑完成。

**工作流程**： 从“事件”到“数据”的关联 

<img src="/_media/Fig 21.png" alt="Atlas DSIL SDK工作流程" width="50%" title="Atlas DSIL SDK工作流程">

**代码示例：ROS2节点零修改接收硬件时间戳**

// 标准的ROS2相机订阅节点，无需任何DSIL特定代码
// 时间戳已经由天枢硬件保证
#include <rclcpp/rclcpp.hpp>
#include <sensor_msgs/msg/image.hpp>

class ImageSubscriber : public rclcpp::Node
{
public:
  ImageSubscriber() : Node("image_subscriber")
  {
    // 标准的 usb_cam 驱动发布的 topic
    subscription_ = this->create_subscription<sensor_msgs::msg::Image>(
      "/camera/image_raw", 10,
      [this](sensor_msgs::msg::Image::UniquePtr msg) {
        // msg->header.stamp 已经是硬件时间戳！
        // 与IMU数据时间戳严格对齐，可直接用于EKF
        RCLCPP_INFO(this->get_logger(), 
                    "Received image at time: %d.%d", 
                    msg->header.stamp.sec, 
                    msg->header.stamp.nanosec);
    });
  }

private:
  rclcpp::Subscription<sensor_msgs::msg::Image>::SharedPtr subscription_;
};

**传统方案 vs DSIL方案**

| 对比维度 | 传统软件时间戳 | DSIL硬件时间戳 |
|:---|:---|:---|
| **打标时刻** | 数据到达应用层时，CPU打戳 | 传感器数据进入天枢瞬间，**FPGA/MCU硬件打标** |
| **影响因素** | CPU负载、中断延迟、调度抖动 | 纯硬件逻辑，**确定性纳秒级** |
| **多传感器一致性** | 相机和IMU时间戳可能差几十毫秒 | **所有传感器共享同一硬件时钟**，偏差<1μs |
| **ROS2中呈现** | 时间戳在消息头，但不可靠 | 时间戳在消息头，**硬件保证** |

## 🔌 核心机制二：多传感器聚合传输

### 物理层：一根USB线，承载万物
| 数据类型 | 传输通道 | 协议 | 带宽占用 |
|:---|:---|:---|:---|
| 摄像头视频流 | USB Bulk (UVC) | UVC 1.1/1.5 | 3x 1080p@30fps ≈ 600Mbps |
| UART设备数据 | USB CDC ACM 0 | 透明传输 | < 1Mbps |
| I2C设备数据 | USB CDC ACM 1 | 透明传输 | < 100Kbps |
| SPI设备数据 | USB CDC ACM 2 | 透明传输 | < 1Mbps |
| 时间戳元数据 | USB CDC ACM 3 | DSIL同步协议 | < 10Kbps |
| 电源/健康监控 | USB CDC ACM 4 | DSIL监控协议 | < 10Kbps |

### 逻辑层：主控看到的是独立设备
**连接天枢后，主控的 /dev 目录**
$ ls -la /dev/video*
/dev/video0  # 第1个USB摄像头
/dev/video1  # 第2个USB摄像头
/dev/video2  # 第3个USB摄像头

$ ls -la /dev/ttyACM*
/dev/ttyACM0 # UART设备聚合
/dev/ttyACM1 # I2C设备聚合
/dev/ttyACM2 # SPI设备聚合
/dev/ttyACM3 # DSIL同步通道
/dev/ttyACM4 # DSIL电源通道

**ROS2中直接使用标准驱动**
<!-- 启动文件示例：完全使用标准ROS2驱动 -->
<launch>
    <!-- USB摄像头：标准 usb_cam 驱动 -->
    <node pkg="usb_cam" exec="usb_cam_node" name="usb_cam_0">
        <param name="video_device" value="/dev/video0"/>
        <param name="pixel_format" value="yuyv"/>
        <param name="image_width" value="1920"/>
        <param name="image_height" value="1080"/>
    </node>

    <!-- 串口IMU：标准 serial_driver 驱动 -->
    <node pkg="serial_driver" exec="serial_driver_node" name="imu_driver">
        <param name="port" value="/dev/ttyACM0"/>
        <param name="baud_rate" value="921600"/>
    </node>

    <!-- DSIL监控节点：获取电源/同步状态 (可选，用于诊断) -->
    <node pkg="dsil_ros2" exec="dsil_monitor_node" name="dsil_monitor">
        <param name="sync_port" value="/dev/ttyACM3"/>
        <param name="power_port" value="/dev/ttyACM4"/>
    </node>
</launch>

## 📊 核心机制三：时间域统一管理
在多机器人协同或高精度测绘场景中，单一设备内部同步远远不够，整个系统需要一个“绝对”的时间基准。

**时间源自动跟随与保持**
天枢硬件可以自动跟随GNSS的PPS信号或网络PTP时钟。当外部源丢失时，自动切换至高精度内部晶振保持模式，确保系统时间在短期内不漂移。

**状态机与ROS2监控**
同步状态本身也作为一个ROS2 Topic发布，让上层应用能够感知时间源的质量，并做出相应决策（例如，在GNSS失锁时降低融合滤波器的置信度）。

**ROS2中的时间域监控示例**
import rclpy
from rclpy.node import Node
from atlas_msgs.msg import SyncStatus

class TimeDomainMonitor(Node):
    def __init__(self):
        super().__init__('time_monitor')
        self.sub = self.create_subscription(
            SyncStatus,
            '/atlas/sync_status',  # DSIL发布的同步状态话题
            self.sync_callback,
            10)

    def sync_callback(self, msg):
        if msg.sync_source == SyncStatus.GNSS_LOCKED:
            self.get_logger().info(f"✅ 时间域锁定GNSS，精度: {msg.accuracy_ns} ns")
        elif msg.sync_source == SyncStatus.FREERUNNING:
            self.get_logger().warn(f"⚠️ 自由运行模式，漂移: {msg.drift_ppm} ppm")

## 🛠️ SDK组件详解

DSIL SDK的设计遵循“核心稳定，接口开放”的原则。v1.0版本定义了所有公开的、稳定的软件边界。

| 层级 | 组件 | 功能描述 | 源码/包位置 |
|:---|:---|:---|:---|
| 内核驱动层 | cdc_acm (标准) | 多通道虚拟串口聚合，无需额外内核模块 | Linux内核原生 |
| | UVC (标准) | 标准摄像头驱动 | Linux内核原生 |
| 用户态库 | libdsil-dev | 提供C API直接访问时间戳、电源、同步状态 | `apt install libdsil-dev` |
| ROS2集成层 | dsil_ros2 | 核心ROS2节点，将/dev/ttyACM*数据转为ROS2话题 | 独立仓库 |
| | dsil_monitor | 电源、健康、同步状态监控节点 | dsil_ros2包内 |
| 诊断工具 | dsil-cli | 命令行工具，用于查看状态、诊断和调试 | `apt install dsil-cli` |

## 📈 性能指标：用数据说话

### 时间同步精度
| 传感器类型 | 同步方式 | 典型抖动 | 最差情况 |
|:---|:---|:---|:---|
| USB摄像头 | 硬件到达时间戳 | ±50 μs | ±150 μs |
| UART设备 (UART+PPS) | PPS触发硬件捕获 | ±1 μs | ±5 μs |
| I2C/SPI设备 | 硬件中断打标 | ±2 μs | ±10 μs |
| PPS输出 | FPGA扇出 | ±5 ns | ±20 ns |

### 系统吞吐量 (Jetson Orin平台)
| 测试场景 | 上行带宽占用 | CPU占用 |
|:---|:---|:---|
| 3x 1080p@30fps 相机 | 620 Mbps | 12% |
| + 1x 串口IMU (1kHz) | +0.5 Mbps | +1% |
| + 所有监控通道 | +2 Mbps | +2% |
| **总计** | **~1.2 Gbps** | **~15%** |

## 🚀 快速上手 30分钟跑通DSIL

### 步骤1：连接硬件
将天枢通过USB 3.0线缆连接到您的Jetson Orin / RK3588 / x86 PC。

### 步骤2：安装DSIL SDK
**添加DSIL软件源 (占位符，请替换为实际命令)**
sudo bash -c 'echo "deb https://repo.dsil.tech/ubuntu jammy main" > /etc/apt/sources.list.d/dsil.list'
wget -qO- https://repo.dsil.tech/dsil.asc | sudo apt-key add -
sudo apt update

**安装完整SDK (包含命令行工具、库和ROS2包)**
sudo apt install dsil-sdk-full

**将您的用户添加到dialout组，以便访问串口设备**
sudo usermod -a -G dialout $USER
**重要：注销并重新登录使组变更生效**

**验证安装**
dsil-cli --version

### 步骤3：运行示例**
**查看检测到的天枢设备和传感器**
dsil-cli device list

**启动ROS2示例（如果使用ROS2）**
ros2 launch dsil_examples demo.launch.py

**在另一个终端监控同步状态**
ros2 topic echo /atlas/sync_status

## 🤔 常见问题

**Q：一定要用天枢硬件吗？**  
A：是的，DSIL SDK是天枢硬件的软件配套，硬件时间戳能力依赖天枢的FPGA/MCU实现。

**Q：现有ROS2代码需要修改吗？**  
A：完全不需要！天枢将所有传感器呈现为标准Linux设备，您的标准驱动可直接使用。

**Q：支持哪些平台？**  
A：Ubuntu 20.04/22.04、Jetson (JetPack 5.x/6.x)、RK3588。

## 🎯 为什么DSIL是“核弹级”？——对三类工程师的价值

- **对技术负责人/架构师**：研发效率质变，团队从“填同步的坑”转向“做真正的算法”；平台化复用，一套软件栈适配所有车型。

- **对算法工程师**：数据可信，拿到的每一帧数据时间戳都是可信的；调试时间归零，聚焦核心算法。

- **对嵌入式工程师**：驱动开发量减少80%，新传感器适配只需配置参数；系统集成简化，一根USB线搞定供电、数据和同步。

---
## 下一步
DSIL 提供了同步数据和系统可见性，接下来需要了解 Atlas 如何集成到实际的机器人系统中。

👉 继续阅读 [ROS2 集成](./software/ros2-integration.md)

---

**Atlas 天枢系列**

是机器人系统的确定性传感器基础设施层。

将传感器集成从定制化工程工作转变为可部署的基础设施。

通过[**评估套件**](/evaluation/evaluation-kit.md)在您的系统中探索Atlas 天枢。