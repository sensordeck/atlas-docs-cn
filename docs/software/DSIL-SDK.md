# Atlas 天枢DSIL SDK · 确定性传感器集成层软件栈

## 内容定位

本页阐释 Atlas 硬件能力如何转化为可用的软件行为。

在 Atlas 确立硬件级时序之后，DSIL 将这些时序信息转换为结构化数据、同步时间戳和系统可观测性。

这是硬件转化为基础设施的关键环节。

---

# 🚀 一句话定义

**Atlas 天枢DSIL（确定性传感器集成层）** 是将天枢硬件的**硬件级时间权威**，以稳定、开放、ROS2友好的方式，交付给机器人应用层的软件平台。它不是又一个驱动集合，而是让您的整个软件栈天然获得**硬件级时间确定性的基础设施**。

---

## 传统软件栈之痛

| 痛点                 | 后果                       | 团队付出的代价         |
| :----------------- | :----------------------- | :-------------- |
| **多传感器时间戳各自为政**    | 融合算法永远在"猜"时间，EKF发散       | 3-6个月调试同步问题     |
| **驱动层与硬件强耦合**      | 换一个传感器型号，驱动要重写           | 每个新传感器适配2-4周    |
| **ROS2节点无法感知硬件时间** | 拿到的`/image`和`/imu`时间戳对不上 | 算法团队50%时间在预处理数据 |
| **诊断调试黑盒**         | 出问题不知道是硬件还是软件            | 故障定位以天为单位       |

---

## DSIL 的“确定性”答案

**"让硬件的时间确定性，成为软件的默认属性"**

DSIL SDK V1.0 提供一套**完整、稳定、可观测**的核心能力，让数据同步与系统集成问题迎刃而解：

|    DSIL 核心能力    |                            技术实现                           | 对研发团队的价值                                                  |
| :-------------: | :-------------------------------------------------------: | :-------------------------------------------------------- |
| ⏱️ **时间戳关联与校正** | 基于Atlas硬件记录的事件边界（如PPS、SYNC触发），对通过USB到达主机的所有传感器数据进行时间关联和校正 | 数据天然对齐，ROS节点拿到的 `/image_raw` 和 `/imu/data` 时间戳已关联至同一硬件时间域 |
|  🔌 **标准化设备抽象** |          通过Linux内核原生支持的CDC和UVC驱动，将所有传感器呈现为标准字符设备          | 零侵入集成                                                     |
| 📊 **全系统状态可观性** |             `/dev/ttyACM0` 遥测通道输出同步状态、健康、电源信息             | 分钟级定位故障                                                   |
|  🌐 **统一时间域管理** |                   GNSS / PTP 自动跟随 + 本地保持                  | 多机统一时间基准                                                  |
|  🔄 **跨产品线复用**  |                          标准ROS2接口                         | 软件资产可复用                                                   |

---

## 🏗️ 软件架构全景

![Atlas 软件架构](/img/Fig 20.png)

---

## ⏱️ 核心机制一：硬件时间戳透传

![Atlas 硬件时间戳透传](/img/Fig 21.png)

### 代码示例（ROS2无需修改）

```cpp
#include <rclcpp/rclcpp.hpp>
#include <sensor_msgs/msg/image.hpp>

class ImageSubscriber : public rclcpp::Node
{
public:
  ImageSubscriber() : Node("image_subscriber")
  {
    subscription_ = this->create_subscription<sensor_msgs::msg::Image>(
      "/camera/image_raw", 10,
      [this](sensor_msgs::msg::Image::UniquePtr msg) {
        RCLCPP_INFO(this->get_logger(),
                    "Received image at time: %d.%d",
                    msg->header.stamp.sec,
                    msg->header.stamp.nanosec);
      });
  }

private:
  rclcpp::Subscription<sensor_msgs::msg::Image>::SharedPtr subscription_;
};
```

---

## 🔌 核心机制二：多传感器聚合

### /dev 设备表现

```bash
ls -la /dev/video*
/dev/video0
/dev/video1
/dev/video2

ls -la /dev/ttyACM*
/dev/ttyACM0
/dev/ttyACM1
/dev/ttyACM2
/dev/ttyACM3
/dev/ttyACM4
```

---

### ROS2 启动示例

```xml
<launch>
    <node pkg="usb_cam" exec="usb_cam_node" name="usb_cam_0">
        <param name="video_device" value="/dev/video0"/>
    </node>

    <node pkg="serial_driver" exec="serial_driver_node" name="imu_driver">
        <param name="port" value="/dev/ttyACM0"/>
    </node>
</launch>
```

---

## 📊 核心机制三：时间域管理

```python
import rclpy
from rclpy.node import Node
from atlas_msgs.msg import SyncStatus

class TimeDomainMonitor(Node):
    def __init__(self):
        super().__init__('time_monitor')
        self.sub = self.create_subscription(
            SyncStatus,
            '/atlas/sync_status',
            self.sync_callback,
            10)

    def sync_callback(self, msg):
        if msg.sync_source == SyncStatus.GNSS_LOCKED:
            self.get_logger().info("GNSS Locked")
```

---

## 🚀 快速上手

### 安装

```bash
sudo apt update
sudo apt install dsil-sdk-full
sudo usermod -a -G dialout $USER
```

---

### 运行

```bash
dsil-cli device list
ros2 launch dsil_examples demo.launch.py
ros2 topic echo /atlas/sync_status
```

---

## 🤔 常见问题

**Q：需要修改ROS2代码吗？**
A：不需要。

**Q：支持平台？**
A：Ubuntu / Jetson / RK3588。

---

## 下一步

👉 继续阅读 [ROS2 集成](/software/ros2-integration)

---

通过 [**评估套件**](/software/evaluation-kit) 在您的系统中探索 Atlas 天枢。
