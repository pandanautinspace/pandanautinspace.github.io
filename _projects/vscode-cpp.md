---
title: VS Code, in C++
date: 2026-08-07
kind: Side project
excerpt: A native reimplementation of the VS Code editing experience on Dear ImGui, with tree-sitter highlighting, a real terminal, git and LSP.
tags:
- C++
- Dear ImGui
- Tools
---

How much of VS Code is Electron, and how much is just a good editor? This is a native C++
reimplementation of the core editing experience built on Dear ImGui:

- tabs, multi-cursor-style editing, find/replace, undo with typing coalescing
- incremental **tree-sitter** highlighting using each grammar's own `highlights.scm`
- an integrated **terminal** on a real PTY (forkpty / ConPTY) with an xterm emulator
- **git** status, gutter diff marks and a Source Control view
- an **LSP client** for diagnostics, completion, hover and go-to-definition (clangd, pyright…)

<!-- TODO: screenshot. If this was built largely with AI coding tools, say so in one line. That's a strength if framed as "how far can you push agentic coding". -->
