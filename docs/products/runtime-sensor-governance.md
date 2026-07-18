---
title: Runtime Sensor Governance™
sidebar_label: Runtime Sensor Governance™
---

# Runtime Sensor Governance™

## Overview

Atlas Runtime Sensor Governance™ 是一套面向机器人传感器运行时边界的持续观察、证据保留与事件窗口生成系统。

它将传感器、总线、电源、Linux Runtime、Driver 与 ROS Topic 之间分散的运行时数据，组织为可保留、可导出、可调查的 Runtime Evidence。

Runtime Sensor Governance™ 的核心不是生成更多日志，而是建立一条持续运行的证据链：

```text
Observe
    ↓
Persist
    ↓
Retain
    ↓
Export
```

当 Runtime Execution Failure（REF）发生时，Atlas 可以根据人工提供的事件时段，或运行时异常与跨数据流关联，生成标准化 Evidence Pack，并进一步形成 Investigation Tier Candidate。

---

# 核心运行链路

```text
Sensor / Bus / Power / Linux Runtime / ROS Topic
                         │
                         ▼
                    Atlas Agent
                         │
          Observe → Persist → Retain → Export
                         │
                         ▼
                  Runtime Dataset
                         │
          ┌──────────────┴──────────────┐
          │                             │
          ▼                             ▼
 Manual REF Window                 Automatic Detection
 Tier 1 提供约莫时段               Dataset Abnormal
          │                        Cross-stream Correlation
          └──────────────┬──────────────┘
                         ▼
                 Five-Window Slicing
                         │
                         ▼
                   Evidence Pack
                         │
                         ▼
             Investigation Tier Candidate
```

---

# 1. Atlas Agent

Atlas Agent 是 Runtime Sensor Governance™ 的现场运行组件。

Agent 在机器人主控板或指定运行环境中持续工作，负责四项核心能力：

## Observe

持续观察运行时状态，包括：

- Sensor data continuity
- Sensor metadata
- Timestamp behaviour
- Power-related signals
- USB / Ethernet / CAN / MIPI 状态
- Linux Runtime 状态
- Driver Runtime 状态
- ROS Topic frequency
- Runtime Event
- Surface availability

Observe 的目标不是立即判断根因，而是持续建立运行时事实记录。

---

## Persist

将观察到的运行时数据持续写入 Runtime Dataset。

Persist 确保事件发生前后的运行状态不会只存在于瞬时内存或临时日志中。

Persist 的数据可以包括：

- Runtime metadata
- Timestamp records
- Topic frequency
- Connectivity status
- Kernel and driver events
- Sensor status
- Surface snapshots
- Event markers
- Correlation signals

具体采集内容由部署范围、Surface Registry 和数据策略决定。

---

## Retain

按照 Retention Policy 保留历史运行时数据。

Retention Policy 可以定义：

- 保留时长
- 数据粒度
- 数据类型
- 循环保留空间
- 事件前后窗口
- 本地保留范围
- 导出条件
- 客户数据所有权要求

Atlas 不要求无限保存所有原始数据。

它的目标是在成本、隐私、存储空间和调查价值之间建立可执行的保留策略。

---

## Export

按照授权将运行时数据或 Evidence Pack 导出至：

- OEM REF 调查服务器
- 指定本地目录
- 客户私有存储
- Investigation Workspace
- Sensor Manufacturer 协作流程

Export 由客户策略控制。

Atlas 不要求客户运行时数据进入 SensorDeck 外部数据平台。

---

# 2. Runtime Dataset

Runtime Dataset 是 Atlas Agent 持续观察并保留的运行时数据集合。

它不是单一日志文件，而是多个 Runtime Surface 在统一时间轴下形成的调查数据基础。

Runtime Dataset 可以覆盖：

```text
Sensor
    ↓
Power / Bus
    ↓
Linux Runtime
    ↓
Driver
    ↓
ROS Topic
```

典型数据包括：

- Sensor availability
- Packet or frame continuity
- Topic frequency
- Timestamp continuity
- Power-event metadata
- Device reconnect events
- Driver lifecycle events
- Linux runtime disturbances
- Runtime surface status
- Controlled event markers

Runtime Dataset 是 Evidence Pack 的来源，但 Runtime Dataset 本身不等于 Evidence Pack。

---

# 3. Evidence Pack 如何生成？

Evidence Pack（EP）是围绕特定 REF 时段生成的标准化运行时证据包。

Atlas 支持两种主要生成方式。

---

## 3.1 手动生成：T0 / Tier 1 提供约莫 REF 时段

在许多真实事故中，最终用户只能提供大约时间，例如：

> “机器人在下午 2:30 左右突然停住。”

Tier 1 首先记录：

- 客户报告时间
- 设备或机器人编号
- 部署地点
- REF 类型候选
- 大约发生时段
- 事件前后可见现象
- Runtime Dataset 是否可用

这一步属于 T0 Intake。

Tier 1 不需要确认精确故障时刻，也不需要完成技术判断。

Atlas 根据最终用户提供的约莫 REF 时段，在 Runtime Dataset 中建立初始事件中心点，并向前、向后扩展证据范围。

```text
最终用户提供约莫时段
          ↓
Tier 1 建立 T0 Intake
          ↓
Atlas 定位候选时间范围
          ↓
Five-Window Slicing
          ↓
Evidence Pack
```

这种方式适用于：

- 客户电话报障
- 售后工单
- 人工观察到异常
- 没有明确机器触发事件
- 只能确认大约时间范围

---

## 3.2 自动生成：Dataset Abnormal + Cross-stream Correlation

Atlas Agent 也可以根据 Runtime Dataset 中的异常及相关性，自动建立候选事件窗口。

自动触发可以来自单一数据流异常，例如：

- LiDAR topic frequency 归零
- Camera frame interruption
- USB device disconnect
- Ethernet packet interruption
- Driver process disappearance
- Timestamp discontinuity
- CPU or memory disturbance

也可以来自多个 Runtime Surface 之间的关联，例如：

- Timing anomaly 与 sensor interruption 同时出现
- Power event 与 USB reconnect 时间一致
- Driver lifecycle event 与 ROS Topic 停止相关
- Network packet loss 与 LiDAR point cloud disappearance 相关
- Linux disturbance 与 camera frame stall 时间重叠

```text
Dataset Abnormal
        +
Cross-stream Correlation
        ↓
Candidate Event Time
        ↓
Five-Window Slicing
        ↓
Evidence Pack
```

Atlas 在这里生成的是：

- Candidate event
- Candidate correlation
- Candidate investigation direction

Atlas 不因此自动确认：

- Root cause
- Causality
- Liability

关联关系是调查入口，不是最终工程结论。

---

# 4. Five-Window Evidence Model

Atlas 不只截取异常发生的一瞬间。

每个 Evidence Pack 按五段时间窗口组织，以保留异常前、异常中和恢复后的完整运行时变化。

```text
Pre-Guard
    ↓
Baseline
    ↓
Deviation
    ↓
Recovery
    ↓
Post-Guard
```

---

## Pre-Guard

保留事件前较早阶段的运行状态。

用途：

- 确认系统此前是否已经出现弱异常
- 观察异常是否逐步形成
- 避免只看到事故瞬间

---

## Baseline

建立事件发生前的正常运行参考。

用途：

- 确认正常频率、连续性与连接状态
- 为 Deviation 提供对比基础
- 识别正常行为与异常行为的差异

---

## Deviation

记录主要异常出现和发展的时间段。

用途：

- 聚合关键运行时变化
- 对齐多个 Runtime Surface
- 形成调查候选窗口

---

## Recovery

记录系统恢复、重连、重启或持续失败阶段。

用途：

- 判断是否自动恢复
- 观察恢复顺序
- 记录重连、重启与恢复行为

---

## Post-Guard

保留恢复后的运行状态。

用途：

- 验证恢复是否稳定
- 判断异常是否重复发生
- 防止把短暂恢复误认为完整恢复

---

# 5. 从 Five Windows 到 Investigation Tier Candidate

Five-Window Evidence Pack 生成后，Atlas 根据证据完整度、运行时 Surface 覆盖范围、异常强度和跨数据流关联，生成 Investigation Tier Candidate。

```text
Five-Window Evidence
          ↓
Surface Coverage
          ↓
Runtime Correlation
          ↓
Evidence Completeness
          ↓
Investigation Tier Candidate
```

Investigation Tier Candidate 用于建议事件应进入哪一级调查流程。

它可以帮助组织判断：

- 是否可以由 Tier 1 继续补充信息
- 是否需要进入 Tier 2 工程调查
- 是否需要 Tier 3 专项工程参与
- 是否需要生成 Sensor Engagement Pack
- 是否需要升级至 Sensor Manufacturer FAE

Investigation Tier Candidate 是路由建议，不是根因结论。

最终调查层级仍由客户组织根据 Admission Policy 和工程判断确认。

---

# 6. 主要输出

Runtime Sensor Governance™ 主要输出以下运行时资产：

## Runtime Dataset

持续保留的运行时数据基础。

## Evidence Window

围绕候选 REF 时段形成的五段时间窗口。

## Evidence Pack

面向具体 REF 的标准化运行时证据包。

## Runtime Timeline

将多个 Runtime Surface 对齐到统一时间轴。

## Surface Coverage Snapshot

说明本次 Evidence Pack 覆盖和未覆盖的 Runtime Surface。

## Investigation Tier Candidate

基于证据完整度和事件特征生成的调查层级候选。

## Export Bundle

按照客户策略导出的调查数据与完整性清单。

---

# 7. 支持的 Runtime Boundary

Atlas 主要治理以下边界：

```text
Physical Sensor
        ↓
Sensor Raw Output
        ↓
Power / USB / Ethernet / CAN / CSI / Trigger / PPS
        ↓
Linux Kernel / Driver / Buffer / Scheduler
        ↓
ROS Topic / Application Callback
```

典型 Runtime Surface 包括：

- Camera
- LiDAR
- IMU
- GNSS
- USB
- Ethernet
- CAN
- Power
- Timing / PPS
- Linux Runtime
- Driver Runtime
- ROS Topic

实际覆盖范围取决于部署配置和可访问数据。

---

# 8. Atlas Supports

Runtime Sensor Governance™ 支持：

- 7×24 小时持续运行时观察
- Runtime Dataset 持久化
- Retention Policy 管理
- 客户授权下的数据导出
- Tier 1 约莫 REF 时段切片
- Dataset abnormal 自动触发
- Cross-stream correlation
- Five-Window Evidence Model
- Evidence Pack 生成
- Runtime Timeline 对齐
- Runtime Surface Coverage
- Investigation Tier Candidate
- OEM 私有环境部署

---

# 9. Atlas Does Not Support

Runtime Sensor Governance™ 不负责：

- 自动确认 Root Cause
- 自动确认因果关系
- Liability Assignment
- 替代 OEM 工程师
- 替代 Sensor FAE
- SLAM 调试
- Navigation 调试
- Motion Planning 调试
- AI Model 调试
- Robot Business Logic 调试

Atlas 负责建立运行时证据基础和调查入口。

最终工程判断由获得授权的工程团队完成。

---

# 10. 与 Runtime Investigation™ 的关系

Runtime Sensor Governance™ 负责：

```text
Observe
    ↓
Persist
    ↓
Retain
    ↓
Export
    ↓
Evidence Pack
    ↓
Investigation Tier Candidate
```

Runtime Investigation™ 负责：

```text
REF Admission
    ↓
Historical RGA Recall
    ↓
Investigation Context
    ↓
OEM / Sensor Investigation
    ↓
Investigation Result
    ↓
Lesson Learned
    ↓
Ticket Closure
    ↓
Assist Vault
```

两条产品线共同构成 Atlas Runtime Governance™。

---

# Summary

Atlas Runtime Sensor Governance™ 不是单一的数据采集工具。

它建立了一条完整的运行时证据链：

```text
Observe
    ↓
Persist
    ↓
Retain
    ↓
Export
    ↓
Manual or Automatic Event Window
    ↓
Five-Window Evidence Pack
    ↓
Investigation Tier Candidate
```

Tier 1 可以根据最终用户提供的约莫 REF 时段手动启动 Evidence Pack。

Atlas Agent 也可以根据 Runtime Dataset 异常和跨数据流关联自动建立候选事件窗口。

Five-Window Evidence Model 保留事件发生前、异常期间及恢复后的完整运行时上下文，并为后续 Runtime Investigation 提供统一证据基础。

---

# 下一步阅读

- Runtime Investigation™
- Atlas Agent™
- Runtime Dataset™
- Evidence Pack™
- Investigation Tier Candidate
