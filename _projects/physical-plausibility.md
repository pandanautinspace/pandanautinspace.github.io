---
title: Physical Plausibility in Generative Video
date: '2026-04-05'
status: Ongoing
featured: 1
kind: Research
context: IP Paris
excerpt: A benchmark that scores image-to-video and world models on physics in metric units, not on how good the pixels look.
tags:
- Physical Simulation
- Computer Graphics
- Computer Vision
- Generative AI
---

Video generation models can produce footage that looks photoreal frame by frame but breaks
basic physics: objects pass through each other, fall the wrong way, or change mass mid-motion.
This ongoing project looks at ways to **measure** physical plausibility in generated video and to
**push** generators toward more physically consistent results, drawing on my background in
physical simulation and graphics.

As part of this I built **scene-sim-benchmark**, a benchmark for generative vision models
that uses Unity scenes as ground-truth baselines. Because the scene is simulated, we know what
*should* happen, and we can score how far a model's output drifts from physically correct
motion.

The current version is a **physical-accuracy benchmark for image-to-video and world models**.
It scores generated video on physics *in metric units*, comparing measured motion against
simulated ground truth rather than judging how realistic the pixels look.

<!-- TODO: 2–3 sentences on your actual approach (metric? simulation-in-the-loop? dataset?) and one figure or GIF comparing a plausible vs. implausible clip. -->
