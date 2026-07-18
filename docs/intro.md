---
id: intro
title: Atlas Runtime Governance
sidebar_label: Atlas Runtime Governance
slug: /
description: Atlas 面向机器人 OEM 与传感器厂商，建立统一、可复现、可回放并可持续复用的运行时证据与调查体系。
toc_min_heading_level: 2
toc_max_heading_level: 2
---

# Atlas Runtime Governance

**机器人运行时传感器治理基础设施**

Atlas 天枢是一套面向机器人 OEM 与传感器厂商的运行时治理基础设施（Runtime Governance Infrastructure）。

不同于传统传感器 SDK、驱动程序或日志工具，Atlas 持续观察机器人运行时环境，将海量运行时数据组织成统一、可调查、可复用、可持续积累的工程资产。

Atlas 不替代 ROS2、传感器驱动程序或 OEM 现有工具链。

Atlas 建立的是机器人行业此前不存在的一层：

> **Runtime Sensor Governance Infrastructure™**

---

## 为什么需要 Atlas？

机器人部署之后，真正困难的往往不是完成产品开发，而是如何持续处理真实世界中的运行时问题。

机器人每天运行在餐厅、医院、酒店、商场、仓库和工厂，并持续面对不同的：

- 光照与环境条件
- 网络与通信状态
- 温度与振动变化
- 电源与总线波动
- Linux Runtime 状态
- Sensor Runtime 状态
- 系统负载与资源竞争

即使是同一型号的机器人，在不同客户现场也可能表现出完全不同的运行时行为。

机器人行业真正昂贵的问题，不只是一次事故本身，而是：

> **每一次运行时执行失效 REF（Runtime Execution Failure），几乎都从零开始调查。**

REF 发生后，OEM、传感器厂和研发团队通常分别收集日志、重新整理证据并重复分析。

调查结束后，大量工程经验又散落在：

- 邮件
- 工单系统
- 聊天记录
- 个人电脑
- 工程师记忆

下一次发生相似事件，团队再次从头开始。

真正流失的，不只是调查时间。

更是整个组织已经付出成本获得、却无法持续复用的工程知识。

---

## Atlas 如何改变运行时调查？

> **Atlas 不只是帮助完成一次调查。**
>
> **Atlas 让每一次运行时调查，都成为整个组织未来可持续复用的工程资产。**

### 统一运行时证据链

所有 Runtime Investigation 都围绕同一份 Runtime Evidence Pack（EP）开展。

OEM、传感器厂和研发团队不再分别整理不同版本的日志，而是基于同一份运行时证据开展协作。

每一份 Evidence Pack 都具有：

- 统一的数据结构
- 统一的时间窗口
- 统一的运行时边界
- 统一的来源引用
- 统一的完整性记录

由此形成组织共同采用的唯一运行时证据链（Unified Runtime Evidence Chain）。

该证据链支持：

- 可复现（Reproducible）
- 可回放（Replayable）
- 可长期保存（Persistent）
- 可验证完整性（Verifiable）
- 可跨团队使用（Shareable）

调查团队不再围绕“谁手里的日志才正确”反复沟通，而是围绕同一份证据开展工程调查。

### 每一次调查，都从历史案例开始

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
调查结束
```

Atlas 调查流程是：

```text
发生 REF
    ↓
Atlas Agent 持续观察并保留运行时数据
    ↓
生成 Runtime Evidence Pack
    ↓
召回 Historical RGA
    ↓
参考历史 IR 与 LL
    ↓
开展 OEM / Sensor Investigation
    ↓
完成本次调查
    ↓
形成新的 RGA
    ↓
供未来 REF 持续复用
```

Atlas 会根据当前 REF 的运行时证据，召回历史 Runtime Governance Assets（RGA）。

调查团队可以首先参考过去已经完成的：

- Investigation Result（IR，调查结果）
- Lesson Learned（LL，经验沉淀）
- Investigation Path（历史排查路径）
- Excluded Path（历史已排除路径）

每一次调查都从组织过去积累的经验开始，而不是重新摸索。

### 每一个新案例，都会增加组织能力

调查完成后，新产生的：

- Investigation Result（IR）
- Lesson Learned（LL）
- Runtime Governance Asset（RGA）

会进入组织的调查知识库。

下一次发生相似 REF 时，这些资产可以再次被召回和复用。

因此，每一次 Runtime Investigation 不只是关闭一个工单。

它还会增加整个组织处理未来事件的能力。

> **每一次 REF 都从历史开始。**
>
> **每一个完成的新案例，都成为下一次调查的起点。**

### 让核心工程资源继续创造价值

机器人企业和传感器厂商最重要的资源，是具备产品、系统和现场经验的工程团队。

这些工程师应该将时间投入：

- 新产品研发
- 新算法创新
- 新传感器验证
- 产品可靠性提升
- 新客户和新场景交付

而不是持续重复：

- 收集和搬运日志
- 手工切分异常窗口
- 整理不同格式的证据
- 查询散落的历史案例
- 重复已经执行过的排查路径
- 反复回答相同的问题

Atlas 将运行时数据采集、证据组织、历史召回和调查资产沉淀构建为持续运行的治理基础设施。

> **工程师负责创造未来。**
>
> **Atlas 负责组织证据、记住过去，并让过去持续创造价值。**

---

## Atlas 两条产品线

Atlas 通过两条产品线，分别服务传感器厂商与机器人 OEM。

### Atlas Runtime Sensor Governance™

**面向传感器厂商（Sensor Manufacturer）**

帮助传感器厂建立可跨客户、跨项目持续复用的运行时治理体系：

- Runtime Profiles（运行时档案）
- Historical RGA（历史排查案例）
- Sensor Engagement Pack（EGP，传感器协同调查包）
- OEM 协同调查工作流程
- Sensor Knowledge Vault（传感器调查知识库）

其目标不是替传感器工程师自动下结论，而是让传感器厂能够基于统一证据，更高效地参与 OEM 运行时调查，并持续复用过去的调查经验。

### Atlas Runtime Investigation™

**面向机器人 OEM**

帮助 OEM 建立标准化的运行时调查与组织治理体系：

- Runtime Dataset（运行时数据采集）
- Evidence Pack（运行时证据包）
- Historical RGA Recall（历史排查案例召回）
- Investigation Context（调查上下文）
- Sensor Engagement Pack（EGP）
- Investigation Workspace（调查工作空间）
- Assist Vault（组织调查知识库）
- CTO Runtime Governance Dashboard（CTO 运行时治理总览）

其目标是将一次性的事故排查，转化为可运营、可衡量并可持续积累的组织能力。

---

## 运行时调查工作流程

Atlas 将运行时调查组织为一条完整、可追踪的治理链路：

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
Sensor Engagement Pack
    ↓
OEM Investigation
    ↓
Sensor FAE Investigation
    ↓
Investigation Result（IR）
    ↓
Lesson Learned（LL）
    ↓
Ticket Closure
    ↓
Assist Vault
    ↓
Future REF Reuse
```

该工作流程确保：

- 当前调查使用统一证据
- 历史案例在调查开始时即被召回
- OEM 与传感器厂围绕同一上下文协同
- IR 与 LL 被结构化保存
- 本次调查结果可以服务下一次 REF

---

## Atlas Platform

Atlas 两条产品线共享同一套运行时治理平台。

平台核心能力包括：

- **Atlas Agent™**  
  持续观察、采集、保留并导出机器人运行时数据。

- **Runtime Dataset™**  
  保存与 REF 调查相关的运行时数据和来源信息。

- **Evidence Pack™**  
  将异常前后运行时数据组织为结构化、可回放的证据包。

- **Historical RGA™**  
  保存历史调查结果、经验沉淀与排查路径。

- **Investigation Workspace™**  
  支持 OEM、Tier 2 / Tier 3 工程师和传感器 FAE 开展协同调查。

- **Sensor Engagement Pack™**  
  向传感器厂提供有边界、有上下文的协同调查材料。

- **Assist Vault™**  
  保存已完成的调查资产，并支持未来 REF 召回与复用。

这些能力不是彼此孤立的工具。

它们共同构成从运行时观察、证据生成、历史召回、工程调查到未来复用的完整基础设施。

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
Runtime Investigation
```

Atlas 的职责包括：

- 持续观察运行时行为
- 保存与 REF 相关的运行时数据
- 生成统一 Evidence Pack
- 建立可复现、可回放的证据链
- 召回历史调查资产
- 支持 OEM 与传感器厂协同调查
- 保存 IR、LL 与 RGA
- 支持未来 REF 复用

Atlas不负责：

- Root Cause Confirmation（根因确认）
- Liability Assignment（责任归属）
- AI Auto Diagnosis（AI 自动诊断）
- 自动生成最终调查结论

Investigation Result（IR）与 Lesson Learned（LL）始终由获得授权的工程师完成。

Atlas 组织证据、提供历史上下文并缩小调查范围，但不替代工程判断。

---

## 文档导航

建议按以下顺序了解 Atlas：

1. **Runtime Sensor Governance™**  
   了解 Atlas 如何帮助传感器厂建立运行时档案、协同调查和历史知识资产。

2. **Runtime Investigation™**  
   了解机器人 OEM 如何建立标准化 REF 调查体系。

3. **Atlas Platform™**  
   了解 Agent、Evidence Pack、Historical RGA、EGP 与 Assist Vault。

4. **Runtime Boundary™**  
   了解 Atlas 观察和治理的系统边界。

5. **Evidence Pack™**  
   了解统一运行时证据如何生成、保存和回放。

6. **Historical RGA™**  
   了解每一次 REF 如何从历史案例开始。

7. **Runtime Investigation Workflow™**  
   了解 OEM、Tier 2 / Tier 3 和 Sensor FAE 的完整协作流程。

8. **Sensor Engagement Pack™**  
   了解 OEM 如何向传感器厂提供有边界的调查材料。

9. **Atlas Agent™**  
   了解运行时观察、数据保留与证据导出机制。

10. **OEM Integration**  
    了解 Atlas 如何进入试点、受控部署和正式生产环境。

### White Papers

- Runtime Sensor Governance™
- Runtime Investigation™
- Evidence Pack™
- Historical RGA™
- Runtime Boundary™

### Documentation

Atlas Documentation：

<https://docs.sensordeck.tech>

中文文档：

<https://sensordeck.github.io/atlas-docs-cn/>

### Request Demo

可预约以下产品与架构演示：

- Atlas Runtime Sensor Governance™
- Atlas Runtime Investigation™
- Runtime Investigation Architecture Review
- OEM Pilot Deployment
- Sensor Manufacturer Engagement
