---
title: Stylizing Animation with Physical Simulation
subtitle: Can simulation add the "12 principles" to a novice's keyframes automatically?
date: 2025-08-01
status: Paused
kind: Research
context: IP Paris
excerpt: Extracting skeletons from animal-like meshes and running stylized simulations on them, so that rough keyframe animation picks up squash, stretch and follow-through.
tags:
- Character Animation
- Physical Simulation
- Geometry Processing
- C++
- Python
---

Good animation follows the **12 principles of animation**: squash and stretch,
follow-through, anticipation and so on. Novices mostly don't. This project asks whether
physical simulation with carefully chosen constraints can add some of that stylization
automatically to a rough keyframed animation.

## What I built

- **Skeletonization** of animal-like meshes. In Python I used loop centroids and Skeletor-style
  iterative contraction, and in C++ a generalized-cylinder decomposition (ROSA).
- **Mapping motion back to the surface** with linear blend skinning, and later free-form
  deformation (FFD) on a cube lattice. This turns out to be harder than it looks.
- **A simulation pipeline** with explicit integrators and easing functions, plus a lot of
  parameter tuning to see which constraints produce which stylized effects.

## Where it stands

It's a research prototype. The cube-lattice FFD works best on simple shapes, and the
parameter choices are driven by intuition rather than theory. The next steps would be to
formalise *why* a given parameter produces a given effect, and to cover more of the 12
principles.
<!-- TODO: add one of the SpringAnimation screen captures (May 2025). -->
