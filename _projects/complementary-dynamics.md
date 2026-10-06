---
title: Complementary Dynamics in C++
date: 2024-10-19
kind: Course project
context: IP Paris
excerpt: A C++ implementation of Complementary Dynamics (SIGGRAPH Asia 2020), adding physically based secondary motion on top of rig-driven animation.
tags:
- Physical Simulation
- Character Animation
- C++
- libigl
---

[Complementary Dynamics](https://www.dgp.toronto.edu/projects/complementary-dynamics/)
(Zhang et al., SIGGRAPH Asia 2020) adds physically based secondary motion, the jiggle and
follow-through, on top of an animator's rig without fighting the rig's own motion. The
original release was in MATLAB. I implemented it in C++, and experimented with different
elastic materials (ARAP, neo-Hookean, StVK, corotational) and stiffness settings on
characters like a fish, frog and elephant.
<!-- TODO: add elephant_arap.gif / fish_arap.gif as the hero. -->
