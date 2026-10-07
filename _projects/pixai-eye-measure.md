---
title: Reference-Free Eye Measurement
subtitle: Measuring IPD and other eye measurements from a camera, with no reference object.
date: 2026-03-01
featured: 7
kind: Industry
context: ML Engineer Intern, PixAI
excerpt: "Measure your own eyes with nothing but a webcam: interpupillary distance and other eye measurements, with no ruler, card or optician."
tags:
- Computer Vision
- Product Development
---

Measuring interpupillary distance (IPD) and other eye measurements usually needs either an
optician or a reference object of known size in the frame, like a credit card held to the
forehead. During my internship at [PixAI](https://pixai.fr) I developed a **reference-free**
method for estimating these measurements, and built a proof-of-concept web app around it.

The trick is to use a reference everyone already carries: the **iris**, which is about
12 mm across in nearly all adults. A React app runs MediaPipe's face landmarker in the
browser, finds the irises, and uses their apparent size to convert pixel distances into
millimetres. No card, ruler or depth camera needed.

<!-- TODO: accuracy vs. ground truth, and a screenshot of the web app. -->
