---
title: Opti, an AI Cost Auditor
date: 2026-04-26
kind: Hackathon finalist
context: with Soheil Lotfi
excerpt: An LLM proxy dashboard that shadow-tests your traffic against cheaper models, scores quality with an LLM judge, and projects the savings.
tags:
- LLMs
- Next.js
- Evaluation
links:
- label: Live demo
  url: https://opti-gamma.vercel.app/
- label: Code
  url: https://github.com/soheil1lotfi/fintech-hack
---

Opti sits in front of a company's existing LLM API calls. It quietly runs **shadow A/B
tests** against cheaper models, scores each response pair with an LLM-as-judge, clusters
traffic by category, and projects how much you'd save per month by routing each category
to the cheapest model that holds quality. Built in a weekend, and a **finalist** at the hackathon.
