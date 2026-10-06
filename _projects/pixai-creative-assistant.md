---
title: PixAI Creative Assistant
subtitle: An AI art director that turns a brief into several visual directions at once.
date: 2026-09-21
featured: 2
kind: Industry
context: ML Engineer, PixAI
excerpt: A conversational assistant for brand imagery that plans a brief, fans it out into parallel creative directions, and keeps every result on-brand through house styles and moodboards.
tags:
- Generative AI
- LLM Agents
- TypeScript
- WebGPU / Shaders
- Product Design
---

At [PixAI](https://pixai.fr) I spent most of my time building the core of the product: a
conversational assistant that helps teams produce on-brand visuals with generative models.
I worked across both the frontend and the backend (200+ commits).

## What it does

- **Reads the brief like a planner.** The assistant works out how many ideas you asked for,
  which constraints are fixed, and which axis you actually want to vary, such as setting,
  lighting or styling. It then holds everything else still.
- **Fans out into directions.** A single request becomes several distinct creative
  directions. Each one is compiled into its own prompt ahead of time and streamed in live.
  You can pick several directions and generate or rerun them as a batch.
- **Stays on brand.** Companies get swappable *house styles* and a moodboard editor with
  style-candidate comparison and versioning. A brand's look is enforced in the prompt
  rather than lost between turns.

The hard part was less "call an image model" and more state: keeping a conversation, a set of
parallel directions, and a brand's locked traits consistent as the user changes their mind.

<!-- TODO: add 1–2 screenshots or a short screen recording once PixAI OKs it. Avoid client names. -->
