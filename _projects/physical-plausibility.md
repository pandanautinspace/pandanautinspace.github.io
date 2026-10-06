---
title: Physical Plausibility in Generative Video
date: '2026-04-05'
status: Ongoing
featured: 1
kind: Research
context: IP Paris
excerpt: A benchmark that scores image-to-video and world models on physics in metric units, not on how good the pixels look.
gallery:
- { file: physics-unity.mp4, label: Unity (ground truth) }
- { file: physics-veo3-fast.mp4, label: Veo 3 Fast }
- { file: physics-kling-2.5-turbo.mp4, label: Kling 2.5 Turbo }
- { file: physics-seedance.mp4, label: Seedance }
- { file: physics-wan-2.5.mp4, label: Wan 2.5 }
- { file: physics-wan-2.1.mp4, label: Wan 2.1 }
- { file: physics-hailuo-02-fast.mp4, label: Hailuo 02 Fast }
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

## How the benchmark works

- **Scenes.** Physics scenarios built in Unity, each targeting one physical notion. Each one
  comes in several *settings* (physical parameters) and *variants* (textures, background,
  lighting).
- **Observers.** Vision modules written per scene type that track the relevant physical
  quantities in generated video, condense them into a score, and flag when their own
  assumptions are violated.
- **Generation.** Each model gets the scene's first frame and physical setup, prompted
  according to its own best practices and sampled many times. I tested 5–6 open models
  plus a reduced set on closed models like Veo and Kling.

<!-- TODO: 2–3 sentences on your actual approach (metric? simulation-in-the-loop? dataset?) and one figure or GIF comparing a plausible vs. implausible clip. -->
