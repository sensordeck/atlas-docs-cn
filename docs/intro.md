---
id: intro
title: Atlas Runtime Sensor Governance™
sidebar_label: Atlas Runtime Sensor Governance™
slug: /
---

# Atlas Runtime Sensor Governance™

## 机器人运行时传感器治理基础设施

Atlas 天枢是一套面向机器人 OEM 与传感器厂商的运行时治理基础设施（Runtime Governance Infrastructure）。

不同于传统传感器 SDK、驱动程序或日志工具，Atlas 持续观察机器人运行时环境，将海量运行时数据组织成可调查、可复用、可持续积累的工程资产。

Atlas 不替代 ROS2、驱动程序或 OEM 工具链。

Atlas 建立的是机器人行业此前不存在的一层：

> **Runtime Sensor Governance Infrastructure™**

---

## 为什么需要 Atlas 天枢？

机器人行业最大的成本，并不是事故本身。

而是**每一次运行时事故 REF（Runtime Execution Failure），几乎都从零开始调查。**

机器人部署之后，每天运行于：

- 餐厅
- 医院
- 酒店
- 商场
- 仓库
- 工厂

面对不同的：

- 光照环境
- 网络环境
- 温度变化
- 电源波动
- Linux Runtime
- Sensor Runtime
- 系统负载

即使是同一台机器人，也可能产生完全不同的运行时行为。

REF事故发生后：

OEM 收集日志。

传感器厂收集日志。

研发团队重新分析。

调查结束后，大量工程经验散落在邮件、工单、聊天记录和工程师个人电脑中。

下一次发生相似事故，又重新开始。

真正流失的，不只是调查时间。

而是整个组织不断流失的工程知识。

---

## Atlas 天枢改变什么?

> **Atlas 不只是帮助完成一次调查。**
>
> **Atlas 让每一次运行时调查，都成为整个组织未来可持续复用的工程资产。**

## 统一运行时证据链（Unified Runtime Evidence Chain）

所有 Runtime Investigation 都围绕同一份 Runtime Evidence Pack（EP）开展。

OEM、传感器厂与研发团队，不再各自整理不同版本的日志，而是共同使用同一份运行时证据。

每一份 Evidence Pack 都具有统一结构、统一时间窗口、统一边界。

因此能够实现：

- 可复现（Reproducible）
- 可回放（Replayable）
- 可长期保存（Persistent）
- 可跨团队共享（Shareable）

形成组织唯一可信的运行时证据链。

---

### 每一次调查，都从历史开始

传统调查：

```
发生事故
      ↓
重新收集日志
      ↓
重新分析
      ↓
重新踩坑
      ↓
调查结束
```

Atlas 调查：

```
发生事故
      ↓
Atlas Agent 收集日志
      ↓
生成证据包 Evidence Pack
      ↓
召回历史排查案例 Historical RGA Recall
      ↓
复用历史调查结果 / 经验分享 (IR + LL)
      ↓
完成调查
      ↓
新增组织知识
      ↓
未来持续复用
```

Atlas 自动召回历史排查案例 Historical Runtime Governance Asset (RGA)

调查团队首先参考历史：

- 调查结果 Investigation Result（IR）
- 经验分享 Lesson Learned（LL）

快速缩小调查范围。

每一次调查，都建立在组织过去积累的知识之上，而不是重新摸索。

---

### 每一次事故，都增加组织能力

调查结束后，新产生的：

- 调查结果（IR）
- 经验分享（LL）
- 排查案例（RGA）

都会持续进入组织知识库。

下一次类似事件发生时，可直接复用。

Atlas 将一次事故，转化为整个组织未来持续增长的工程能力。

---

### 让工程团队继续创造价值

机器人企业最重要的资源，是工程师。

他们应该持续投入：

- 新产品研发
- 新算法创新
- 新传感器验证
- 新客户交付

而不是不断重复：

- 收集日志
- 整理证据
- 查询历史案例
- 回答相同问题

这些重复性的运行时治理工作，应交由 Atlas 持续完成。

> **工程师负责创造未来。**
>
> **Atlas 负责记住过去。**

---

# Atlas 两条产品线

## Atlas Runtime Sensor Governance™

**面向传感器厂商（Sensor Manufacturer）**

帮助传感器厂建立运行时治理体系：

- Runtime Profiles（运行时档案）
- Historical RGA（传感器历史排查案例)
- OEM 协同调查流程（Engagement Workflow）
- Sensor Knowledge Vault（传感器知识库）

---

## Atlas Runtime Investigation™

**面向机器人 OEM**

帮助 OEM 建立运行时调查体系：

- Runtime Dataset（运行时数据采集）
- Evidence Pack（运行时证据包）
- Historical RGA Recall（历史排查案例召回）
- Sensor Engagement Pack（OEM 协同调查流程）
- Assist Vault（组织调查知识库）
- CTO Runtime Governance Dashboard（CTO 运行时治理总览）

---

## Runtime Investigation Workflow

```
Runtime Dataset
        ↓
Evidence Pack
        ↓
Historical RGA Recall
        ↓
Investigation Context
        ↓
Sensor Engagement Pack
        ↓
OEM Investigation
        ↓
Sensor Investigation
        ↓
Investigation Result (IR)
        ↓
Lesson Learned (LL)
        ↓
Ticket Closure
        ↓
Assist Vault
        ↓
Future Reuse
```

---

## Atlas Platform

所有产品共享同一运行时平台：

- Atlas Agent™
- Runtime Dataset™
- Evidence Pack™
- Historical RGA™
- Investigation Workspace™
- Sensor Engagement Pack™
- Assist Vault™

---

## Atlas Boundary

Atlas 专注于机器人运行时边界：

```
Sensor
    ↓
Power / USB / Ethernet / CAN / CSI
    ↓
Linux Runtime
    ↓
ROS Runtime
    ↓
Runtime Investigation
```

Atlas 的职责是：

- 持续观察运行时行为
- 统一组织运行时证据
- 支持跨组织调查
- 沉淀可复用调查知识

Atlas **不负责**：

- Root Cause Confirmation（根因确认）
- Liability Assignment（责任归属）
- AI Auto Diagnosis（AI 自动诊断）

Investigation Result（IR）与 Lesson Learned（LL）始终由工程师完成。

---

# Documentation Structure

建议按以下顺序阅读：

1. Runtime Sensor Governance™

2. Runtime Investigation™

3. Atlas Platform™

4. Runtime Boundary™

5. Evidence Pack™

6. Historical RGA™

7. Runtime Investigation Workflow™

8. Sensor Engagement Pack™

9. Atlas Agent™

10. OEM Integration

---

## White Papers

- Runtime Sensor Governance™
- Runtime Investigation™
- Evidence Pack™
- Historical RGA™
- Runtime Boundary™

---

## Documentation

Atlas Documentation：

https://docs.sensordeck.tech

中文开发文档：

https://sensordeck.github.io/atlas-docs-cn/

---

## Request Demo

欢迎预约产品演示：

- Atlas Runtime Sensor Governance™
- Atlas Runtime Investigation™
- Architecture Review
- Pilot Deployment
