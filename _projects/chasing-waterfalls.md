---
title: Chasing Waterfalls
subtitle: Rendering and simulating fluids beyond the rivers and the lakes that you're used to.
date: 2025-11-20
kind: Talk
context: IP Paris
excerpt: A survey talk on how to simulate and render waterfalls, from shallow-water basins and SPH/FLIP streams to procedural spray, raymarched mist and neural fluid methods.
tags:
- Fluid Simulation
- Rendering
---

A talk on what it takes to simulate and render a waterfall, which isn't one fluid problem but
several stitched together:

- **Inflow and basin:** shallow-water equations on a heightmap.
- **The stream:** Eulerian, Lagrangian (SPH) or hybrid (FLIP/APIC) methods. You want
  particles if you care about spray and stray droplets.
- **Splash, spray and foam:** almost always procedurally generated particles.
- **Rendering:** Fresnel reflection, Snell refraction, Beer's-law absorption, level-set streams,
  raymarched mist and particle-rendered foam.
- **Data-driven methods** that learn mappings between cheap and expensive simulations. They're
  limited today, but could eventually make full-scale waterfalls practical in real time.
