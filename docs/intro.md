---
id: intro
title: Atlas Runtime Governance
sidebar_label: Atlas Runtime Governance
slug: /
description: Atlas 面向机器人 OEM 与传感器厂商，建立跨 SKU、跨平台、跨场景、可复现、可回放并可持续复用的运行时治理与调查基础设施。
hide_title: true
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# Atlas Runtime Governance

**机器人运行时传感器治理与调查基础设施**

Atlas 天枢是一套面向机器人 OEM 与传感器厂商的 Runtime Governance Infrastructure。

Atlas 持续观察机器人从 Sensor 到 SBC 的运行时环境，将原本分散、短暂且难以复用的数据组织为：

- 可调查的 Runtime Evidence
- 可回放的 Evidence Pack
- 可追踪的 REF Investigation
- 可复用的 Historical RGA
- 可持续积累的组织工程资产

Atlas 不替代 ROS 2、传感器驱动程序、Fleet Management、工单系统或 OEM 现有工具链。

Atlas 在这些系统之上建立机器人行业此前缺失的一层：

> **Runtime Sensor Governance Infrastructure™**

![Atlas 天枢系统](/img/11.png)

## 为什么需要 Atlas？

机器人完成研发并进入真实世界后，真正长期而昂贵的问题才开始出现。

机器人每天运行在餐厅、酒店、医院、商场、仓库、工厂和户外环境，并持续面对：

- 光照、反射与遮挡变化
- 温度、湿度与振动变化
- 电源波动与瞬时掉电
- USB、Ethernet、CAN、CSI 等总线状态
- Linux Kernel、Driver、Buffer 与 Scheduler 状态
- ROS Topic 与应用输入连续性
- CPU、Memory、Disk I/O 和资源竞争
- Sensor Firmware、Driver 与 Host Platform 组合差异

即使使用同一款机器人、同一款传感器和同一版本软件，不同部署现场也可能出现完全不同的运行时行为。

机器人行业真正昂贵的问题，不只是一次事故本身。

更大的问题是：

> **每一次 Runtime Execution Failure（REF），往往都从零开始调查。**

REF 发生后，OEM、传感器厂商、客户支持和研发团队通常需要：

- 收集不同版本的日志
- 手工确认异常时间
- 重新切分数据窗口
- 重新整理运行时证据
- 重新寻找历史案例
- 重复已经执行过的排查路径
- 反复向不同团队解释同一个事件

调查结束后，大量工程经验又散落在邮件、工单、聊天记录、本地文件和工程师个人记忆中。

下一次发生相似事件时，团队再次从头开始。

真正流失的，不只是调查时间。

更是组织已经付出成本获得、却无法持续复用的工程知识。

---

## Atlas 如何改变运行时调查？

Atlas 将运行时调查从一次性工程活动，转化为一条可以持续运营的治理链：

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
REF Investigation
    ↓
Historical RGA Recall
    ↓
IR / LL
    ↓
RGA
    ↓
Future REF Reuse
```

> **Atlas 不只是帮助完成一次调查。**
>
> **Atlas 让每一次调查都成为未来可以持续复用的组织工程资产。**

---

## 统一运行时证据链

Atlas Investigation 围绕统一的 Runtime Dataset 和 Evidence Pack 开展。

OEM、传感器厂商和研发团队不再分别维护互不一致的日志副本，而是围绕同一组有来源、有边界、有时间窗口的运行时证据协同。

每一份 Evidence Pack 都可以包含：

- 统一的数据结构
- 统一的时间窗口
- 明确的 Runtime Surface
- 明确的数据来源引用
- 数据完整性记录
- Coverage 与 Boundary 说明
- REF 与调查对象引用

Atlas 使用五段式运行时窗口组织证据：

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

由此形成组织共同使用的 Unified Runtime Evidence Chain。

该证据链支持：

- 可复现
- 可回放
- 可长期保存
- 可验证完整性
- 可跨团队协同
- 可供未来调查复用

调查团队不再围绕“谁手里的日志才正确”反复沟通，而是围绕同一份证据开展工程调查。

---

## 每一次调查都从历史开始

传统调查通常是：

```text
发生事故
    ↓
重新收集日志
    ↓
重新整理证据
    ↓
重新分析
    ↓
重复过去的排查工作
    ↓
关闭工单
```

Atlas Investigation Workflow 是：

```text
发生 REF
    ↓
Atlas Agent 保留相关 Runtime Dataset
    ↓
生成 Evidence Pack
    ↓
召回 Historical RGA
    ↓
参考历史 IR、LL 与 Investigation Path
    ↓
开展 OEM / Sensor Investigation
    ↓
完成本次 IR 与 LL
    ↓
形成或更新 RGA
    ↓
供未来 REF 持续复用
```

Atlas 根据当前 REF 的 Runtime Surface、运行时模式、环境和证据特征，召回可能相关的 Historical Runtime Governance Assets。

调查团队可以优先参考过去已经完成的：

- Investigation Result
- Lesson Learned
- Investigation Path
- Excluded Path
- Runtime Pattern
- Recovery Pattern
- Surface References
- Why Retrieved

Historical RGA 提供的是调查入口、历史上下文和候选路径。

它不会自动升级为当前事件的根因结论。

最终工程结论仍由获得授权的工程师完成。

> **每一次 REF 都从历史开始。**
>
> **每一个完成的新案例，都成为下一次调查的起点。**

---

## 跨 SKU、跨平台、跨场景的基础设施

Atlas 不是围绕一台机器人、一个传感器或一个客户问题编写的内部 Glue Code。

典型项目型 Glue Code 往往绑定于：

```text
One Robot
+
One Sensor
+
One Driver
+
One Script
+
One Customer Issue
```

当 Robot SKU、Sensor SKU、SBC、Linux、ROS 版本或部署环境发生变化时，团队又需要重新开发和维护。

Atlas 使用统一的 Canonical Runtime Governance Model：

```text
Runtime Surface
+
Runtime Observation
+
Runtime Dataset
+
Evidence Pack
+
REF Lifecycle
+
Historical RGA
+
Investigation Workflow
```

产品和平台差异通过以下方式接入：

- Surface Registry
- Runtime Adapter
- Product Metadata
- Runtime Profile
- Deployment Configuration
- Retention Policy
- Export Policy

Atlas Core、Evidence Model、Investigation Chain 和 Historical RGA Model 保持一致。

### 跨 Robot SKU

Atlas 可以逐步扩展到不同机器人型号。

每个 Robot SKU 可以拥有不同的：

- Sensor Combination
- SBC / Host Platform
- Power Architecture
- Linux / ROS Version
- Deployment Environment

但仍然使用同一套 Atlas Governance Infrastructure。

### 跨 Sensor SKU

传感器厂商可以在统一治理模型下管理不同产品，例如：

- LiDAR
- Camera
- IMU
- GNSS
- Radar
- Encoder

每款 Sensor 可以分别建立：

- Sensor Runtime Profile
- Known Environment
- Known Runtime Pattern
- Known Recovery Pattern
- Historical RGA
- FAE Investigation Workflow

### 跨 Host Platform

Atlas 可以部署于不同的：

- x86 Industrial PC
- NVIDIA Jetson
- ARM SBC
- Customer-defined Compute Platform
- ROS 2 System
- Non-ROS Runtime System

Atlas 关注的是 Runtime Surface 与 Evidence Boundary，而不是绑定某一款硬件平台。

### 跨部署场景

Atlas 可以在统一架构下覆盖：

- Restaurant
- Hotel
- Hospital
- Warehouse
- Factory
- Shopping Mall
- Outdoor
- Customer-defined Environment

场景差异被记录为 Investigation Context 和 Runtime Profile，而不是为每个场景重新构建一套调查系统。

> **Atlas 是可跨 SKU、跨平台、跨场景持续复用的基础设施。**
>
> **不是一次性交付后难以维护的内部 Glue Code。**

---

## OEM 与 Sensor 双飞轮

Atlas 采用 OEM 与 Sensor Manufacturer 双飞轮设计。

```text
OEM Runtime Governance Flywheel
            │
            │ Sensor Engagement Pack
            ▼
Sensor Runtime Governance Flywheel
            │
            │ Sensor IR / LL / RGA
            ▼
OEM Runtime Governance Flywheel
```

无论最先采用 Atlas 的是 OEM 还是传感器厂商，Atlas 都可以沿着真实的产品与调查协作关系，逐步建立完整的 Sensor-to-SBC Runtime Governance Ecosystem。

### OEM 先采用

```text
OEM Runtime Deployment
        ↓
OEM REF
        ↓
Evidence Pack
        ↓
Sensor Candidate
        ↓
Sensor Engagement Pack
        ↓
Sensor FAE Investigation
        ↓
Sensor IR / LL / Historical RGA
```

Atlas 可以沿着 OEM 的真实 Sensor Supply Chain，进一步帮助传感器厂商建立标准化运行时治理能力。

### Sensor Manufacturer 先采用

```text
Sensor Runtime Profile
        ↓
Sensor Historical RGA
        ↓
OEM Integration
        ↓
Runtime Surface Mapping
        ↓
OEM REF Investigation
        ↓
OEM Historical RGA
```

Atlas 可以沿着传感器产品进入不同 OEM、不同 Robot SKU 和不同场景，逐步建立完整的 Sensor-to-SBC 治理链。

最终形成：

```text
Sensor
    ↓
Power / Bus / Timing
    ↓
Linux / Driver
    ↓
SBC
    ↓
ROS / Application Input
    ↓
Robot Runtime
```

---

## Atlas 两条产品线

### [Atlas Runtime Sensor Governance™](/products/runtime-sensor-governance)

**面向传感器厂商**

帮助传感器厂商建立可跨 OEM、跨 Robot SKU、跨 Host Platform 和跨部署场景持续复用的运行时治理体系。

核心能力包括：

- Sensor Runtime Profile
- Known Environment
- Known Runtime Pattern
- Known Recovery Pattern
- Sensor Historical RGA
- Sensor REF Workflow
- FAE Investigation
- OEM Sensor Engagement
- Cross-OEM Knowledge Reuse

其目标不是替传感器工程师自动下结论。

它帮助 Sensor FAE、Driver、Firmware、Validation 和 Product Team 围绕统一证据协同，并持续复用过去的调查经验。

### [Atlas Runtime Investigation™](/products/runtime-investigation)

**面向机器人 OEM**

帮助 OEM 建立标准化、可运营和可衡量的 Runtime Investigation System。

核心能力包括：

- Runtime Dataset
- Evidence Pack
- REF Lifecycle
- Historical RGA Recall
- Investigation Context
- Investigation Tier Candidate
- Sensor Engagement Pack
- OEM Tier 1 / Tier 2 / Tier 3 Workflow
- Assist Vault
- Runtime Governance Metrics
- CTO Runtime Governance Dashboard

其目标是将一次性的事故排查，转化为可以持续积累和复用的组织治理能力。

---

## 运行时调查工作流程

```text
Atlas Agent
    ↓
Runtime Dataset
    ↓
Evidence Pack
    ↓
REF Ticket
    ↓
Historical RGA Recall
    ↓
Investigation Context
    ↓
Investigation Tier Candidate
    ↓
OEM Investigation
    ↓
Sensor Engagement Pack
    ↓
Sensor FAE Investigation
    ↓
Investigation Result（IR）
    ↓
Lesson Learned（LL）
    ↓
Ticket Closure
    ↓
Historical RGA / Assist Vault
    ↓
Future REF Reuse
```

该工作流程确保：

- 当前调查使用统一证据
- 历史案例在调查开始时即被召回
- OEM 与 Sensor Manufacturer 各自拥有独立调查
- Sensor 不需要重新生成 OEM Evidence Pack
- IR 与 LL 由获得授权的工程师完成
- 调查结果被结构化保存
- 当前案例可以服务未来 REF
- 第二个客户不必再次从零开始

---

## Atlas Platform

Atlas 两条产品线共享同一套 Runtime Governance Platform。

- [Atlas Agent™](/platform/atlas-agent)  
  持续执行 Observe、Persist、Retain 和 Export。

- [Runtime Surface™](/platform/runtime-surface)  
  定义 Sensor、Power、Bus、Linux Runtime、Driver、ROS Runtime 和 Custom Surface。

- [Runtime Dataset™](/platform/runtime-dataset)  
  保存 Runtime Observation 和 REF Investigation 相关数据。

- [Evidence Pack™](/platform/evidence-pack)  
  将 REF 前后的 Runtime Dataset 组织为标准化调查证据。

- [Historical RGA™](/platform/historical-rga)  
  保存 Runtime Pattern、Investigation Path、IR、LL 和 Recovery Pattern。

- [Investigation Context™](/platform/investigation-context)  
  组织当前 REF、Evidence Pack、Timeline、Historical RGA 和调查问题。

- [Investigation Tier Candidate™](/platform/investigation-tier-candidate)  
  提供候选调查方向、建议 Tier、建议路径和优先级。

- [Sensor Engagement Pack™](/platform/sensor-engagement-pack)  
  帮助 OEM 向 Sensor Manufacturer 提供有边界、有上下文的调查材料。

- [Assist Vault™](/platform/assist-vault)  
  保存授权、去标识化并可共享的调查知识。

- [CTO Runtime Governance Dashboard](/platform/cto-runtime-governance-dashboard)  
  展示 REF、MTTR、RGA Reuse、Tier 3 Involvement、Engineering Cost 和 ROI。

---

## Atlas 治理边界

Atlas 专注于机器人系统中最容易被忽略、但运行时问题高发的边界：

```text
真实世界
    ↓
Sensor
    ↓
Power / USB / Ethernet / CAN / CSI / Trigger / PPS
    ↓
Linux Kernel / Driver / Buffer / Scheduler / Runtime
    ↓
ROS Topic / Application Input
    ↓
Robot Application
```

Atlas 重点治理：

```text
Sensor
    ↓
Bus / Power / Timing
    ↓
Linux / Driver
    ↓
SBC
    ↓
ROS / Application Input
```

Atlas 的职责包括：

- 持续观察运行时行为
- 保存与 REF 相关的 Runtime Dataset
- 生成统一 Evidence Pack
- 建立可复现、可回放的证据链
- 召回 Historical RGA
- 组织 Investigation Context
- 支持 OEM 与 Sensor Manufacturer 协同调查
- 保存 IR、LL 与 RGA
- 支持未来 REF 复用
- 提供治理指标与 ROI 数据

Atlas 不负责：

- Root Cause Confirmation
- Liability Assignment
- Product Defect Certification
- AI Auto Diagnosis
- 自动生成最终 Investigation Result
- 替代工程师作出最终技术判断

Investigation Result 与 Lesson Learned 始终由获得授权的工程师完成。

Atlas 组织证据、提供历史上下文并缩小调查范围，但不替代工程判断。

---

## 让核心工程资源继续创造未来

机器人企业和传感器厂商最重要的资源，是具备产品、系统和现场经验的工程团队。

这些工程师应该将时间投入：

- 新产品研发
- 新算法创新
- 新传感器集成
- 产品可靠性提升
- 新客户交付
- 新场景覆盖
- 系统架构演进

而不是持续重复：

- 收集和搬运日志
- 手工切分异常窗口
- 整理不同格式的证据
- 查询散落的历史案例
- 重复已经执行过的调查路径
- 反复回答相同的问题
- 在多个部门之间传递不完整信息

Atlas 将运行时观察、数据保留、证据组织、历史召回和调查资产沉淀构建为持续运行的治理基础设施。

> **工程师负责创造未来。**
>
> **Atlas 负责组织证据、记住过去，并让过去持续创造价值。**

Atlas 的目标之一，是让 Tier 3 核心工程资源只参与真正需要深度工程判断的少数事件，而不是承担日常日志收集、证据整理和重复排查。

---

## 部署方式

Atlas 通过企业级定制化项目交付，不是公开下载的软件工具。

典型部署路径：

```text
Pilot
    ↓
Controlled Deployment
    ↓
Production Readiness
    ↓
Cross-SKU Expansion
    ↓
Full-scale Deployment
```

Controlled Deployment 遵循：

- OEM：一次扩展一个 Robot Model
- Sensor Manufacturer：一次扩展一个 Sensor Product

每个阶段都应具备独立的：

- Scope
- Budget
- Project Roster
- Organizational Representative
- Milestone
- Acceptance Criteria
- Payment Gate
- Exit Mechanism
- Code Escrow Requirement

相关说明：

- [OEM Deployment](/deployment/oem-deployment)
- [Sensor Manufacturer Deployment](/deployment/sensor-manufacturer-deployment)
- [Pilot to Production Deployment](/deployment/pilot-production-deployment)

---

## 文档导航

### 基础理论

- [Runtime Governance Philosophy](/foundation/runtime-governance-philosophy)
- [Why Atlas](/foundation/why-atlas)
- [Runtime Governance Principles](/foundation/runtime-governance-principles)

### 产品体系

- [Runtime Sensor Governance™](/products/runtime-sensor-governance)
- [Runtime Investigation™](/products/runtime-investigation)

### 平台架构

- [Atlas Agent™](/platform/atlas-agent)
- [Runtime Surface™](/platform/runtime-surface)
- [Runtime Dataset™](/platform/runtime-dataset)
- [Evidence Pack™](/platform/evidence-pack)
- [Historical RGA™](/platform/historical-rga)
- [Investigation Context™](/platform/investigation-context)
- [Investigation Tier Candidate™](/platform/investigation-tier-candidate)
- [Sensor Engagement Pack™](/platform/sensor-engagement-pack)
- [Assist Vault™](/platform/assist-vault)
- [CTO Runtime Governance Dashboard](/platform/cto-runtime-governance-dashboard)

### 部署指南

- [OEM Deployment](/deployment/oem-deployment)
- [Sensor Manufacturer Deployment](/deployment/sensor-manufacturer-deployment)
- [Pilot to Production Deployment](/deployment/pilot-production-deployment)

### 参考资料

- [常见问题](/reference/faq)
- [项目交付物](/reference/downloads)
- [版本说明](/reference/release-notes)

---

## Request Demo

SensorDeck 提供以下产品和架构演示：

- Atlas Runtime Sensor Governance™
- Atlas Runtime Investigation™
- Runtime Investigation Architecture Review
- OEM Pilot Deployment
- Sensor Manufacturer Deployment
- Sensor-to-SBC Runtime Governance Architecture
- Historical RGA Recall and Reuse
- Evidence Pack and Sensor Engagement Workflow

请通过 [SensorDeck 官方网站](https://sensordeck.tech) 联系我们。
