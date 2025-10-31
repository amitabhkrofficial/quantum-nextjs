# Quantum (`quantum-state`)

[![NPM Version](https://img.shields.io/npm/v/quantum-state.svg?style=for-the-badge&labelColor=black&color=FF00A8)](https://www.npmjs.com/package/quantum-state)
[![License: MIT](https://img.shields.io/badge/License-MIT-black.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![Build Status](https://img.shields.io/badge/Build-Passing-black.svg?style=for-the-badge&logo=github&logoColor=FF00A8)](https://github.com/your-repo/quantum-state/actions)
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-black.svg?style=for-the-badge&color=FF00A8)](https://github.com/your-repo/quantum-state/pulls)

**Quantum is a 2kb, zero-dependency atomic state machine for server-first React apps.**

It's built from the ground up for the Next.js App Router and React Server Components. No boilerplate. No providers. Just state.



---

## 🚀 The Philosophy

State management is too complex. `quantum-state` is the brutalist, no-nonsense solution.

* **1. Atomic & Zero-Boilerplate:** No reducers, no actions, no dispatchers. Define a single 'quantum' of state (an `atom`) and use it anywhere. Components subscribe directly to only the atoms they need.
* **2. "Quantum" Microtask Batching:** Why 2kb? It's all in the scheduler. `quantum-state` automatically batches all state updates within a single event loop tick. This provides extreme performance for high-frequency updates (e.g., real-time CSI data, financial tickers) with zero re-render tearing.
* **3. Server-First Native:** This is not an old library with a new wrapper. It's built for the App Router. You can safely pass state from Server Components to Client Components. It's free of 'context provider hell.'

## ⚡ Installation

```bash
npm install quantum-state
