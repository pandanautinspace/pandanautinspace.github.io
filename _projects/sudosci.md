---
title: SudoSci
subtitle: Fact-check verdicts pinned to the YouTube timeline.
date: 2026-07-25
featured: 2
kind: Hackathon winner
context: "Gemma × Alien AI hackathon, with Soheil Lotfi"
excerpt: "Helps viewers see which claims in a YouTube video actually hold up, with verdicts checked against the literature and pinned right on the timeline."
tags:
- Misinformation
- Chrome Extension
- LLMs
- HCI
links:
- label: Code
  url: https://github.com/soheil1lotfi/sudosci
---

Winner of the **Gemma × Alien AI hackathon**.

Claims in videos go by too fast to check. SudoSci is a Chrome extension (MV3) for YouTube.
When you open a video it fetches the transcript, or transcribes tab audio if there are no
captions. A backend detects the claims, checks them against the scientific literature, and
returns timestamped verdicts.

Those verdicts show up as **markers on the player's timeline**. Problems get tall, saturated
pins (red for false, amber for questionable). Clicking a pin pauses the video, jumps to the
claim and opens a panel with the evidence. It takes about 45 seconds from opening a video to
seeing markers, with no clicks, and results are cached per video.

Built with Soheil Lotfi.
