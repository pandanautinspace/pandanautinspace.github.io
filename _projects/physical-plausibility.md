---
title: Physical Plausibility in Generative Video
date: '2026-04-05'
status: Ongoing
featured: 1
kind: Research
context: IP Paris
excerpt: A benchmark that scores image-to-video and world models on physics in metric units, not on how good the pixels look.
gallery:
- { file: physics-falling-kitchen_orange.mp4, label: "Falling · kitchen, orange" }
- { file: physics-falling-playroom_train.mp4, label: "Falling · playroom, train" }
- { file: physics-rolling-kitchen_billiard.mp4, label: "Rolling · kitchen, billiard ball" }
- { file: physics-rolling-kitchen_orange.mp4, label: "Rolling · kitchen, orange" }
- { file: physics-rolling-playroom_train.mp4, label: "Rolling · playroom, train" }
- { file: physics-rollingv-kitchen_orange.mp4, label: "Rolling with initial velocity · kitchen, orange" }
- { file: physics-rollingv-playroom_train.mp4, label: "Rolling with initial velocity · playroom, train" }
- { file: physics-falling_rolling-kitchen_billiard_ball.mp4, label: "Fall then roll · kitchen, billiard ball" }
- { file: physics-falling_rolling-kitchen_orange.mp4, label: "Fall then roll · kitchen, orange" }
- { file: physics-falling_rolling-playroom_train.mp4, label: "Fall then roll · playroom, train" }
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

The grid above shows the first scene family, **BallScene**: a ball falling, rolling, rolling with
an initial velocity, or falling and then rolling, across different rooms and objects. Every
render comes with **ground-truth position and velocity logged at 100 Hz in metres** (you can
read gravity straight off it at 9.81 m/s²) and the exact camera parameters. That's what lets
motion tracked in a generated video be compared with the truth in real units instead of
pixels.

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
