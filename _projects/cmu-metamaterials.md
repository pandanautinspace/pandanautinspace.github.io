---
title: Robotic Metamaterial Mechanisms
subtitle: A design tool for self-actuated machines built out of printed cells.
date: 2023-08-01
kind: Research
context: Human-Computer Interaction Institute, Carnegie Mellon
excerpt: A software design tool for active metamaterial mechanisms (import a motion path, generate cell layouts, simulate them), validated against 3D-printed, Arduino-actuated prototypes.
tags:
- HCI
- Fabrication
- Physical Simulation
- C++
---

**Metamaterial mechanisms** are tessellated structures whose cell geometry gives them designed
mechanical behaviour, such as auxetic cells with a negative Poisson's ratio that can embed
whole machines inside a single printed block. The lab's question was how to make these
**self-actuated**: robotic systems built out of metamaterial cells.

## What I did

- **Design tool.** Import a motion path as an SVG, automatically generate a cell
  configuration that produces it, edit the cells by hand, and check the result in a physical
  simulation. The lab's original pipeline was constraint-based optimisation with no physics,
  and I explored bringing physical simulation into that loop.
- **Physical prototyping.** I 3D-printed and laser-cut prototypes, actuated them with Arduinos,
  and wrote the measurement code used to test how accurate and repeatable they were.
- **Validation.** I compared the physical tests against the simulation.

## What I'd do differently

Prototyping was the bottleneck: most of the time went into debugging unreliable actuation.
With the simulation methods I've learned since, I think the optimisation could be much
better. I'd also love to make the tool approachable enough for a novice, or even a kid.
