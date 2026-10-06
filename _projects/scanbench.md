---
title: ScanBench
subtitle: Can a phone run a vision-language model fast enough to describe the world in real time?
date: 2026-07-25
kind: Prototype
excerpt: An Android probe that times on-device Gemma 4 E2B image inference, as a feasibility test for a near-real-time scanning assistant for blind users.
tags:
- On-device ML
- Android
- Kotlin
- Accessibility
---

A feasibility probe for a scanning assistant for blind and low-vision users. The app sends
one fixed prompt with a camera frame every *N* seconds, **fully on-device** with Gemma 4 E2B.
It breaks down where the milliseconds go: time to first token (when you could start
speaking), prefill cost of the image, decode throughput, JPEG encode and end-to-end
capture-to-result. It also shows a rolling headroom readout against the interval, so the
question goes from "does it run" to "does it keep up on *this* phone".
