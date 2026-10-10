# Pasha DevPilot — Autonomous AI Software Engineer Architecture

**Repository**: [https://github.com/pasha804/pasha-devpilot](https://github.com/pasha804/pasha-devpilot)  
**System Type**: Autonomous Multi-Agent Software Development Lifecycle (SDLC) Platform  
**Core Engine**: IBM Bob LLM Agent Framework + FastAPI Asynchronous Orchestrator  
**Runtime**: Python 3.12 / TypeScript / Docker Containerized Sandboxes  

---

## 1. High-Level Architecture Overview

Pasha DevPilot is an enterprise-grade autonomous software engineering system designed to ingest feature specifications, understand entire multi-file codebases, generate verified pull requests, and orchestrate automated testing pipelines.

```
+-----------------------------------------------------------------------------------+
|                                  USER / CLIENT HUD                                |
|  - Web UI (TypeScript / React)        - CLI Terminal Stream (WebSocket)          |
+-----------------------------------------------------------------------------------+
                                          |
                                    HTTPS / WSS
                                          v
+-----------------------------------------------------------------------------------+
|                        ORCHESTRATION LAYER (FastAPI / Python)                     |
|  - Task Decomposer & Planner          - Context Window Optimizer (Token Budget)  |
|  - Agent Dispatcher                   - Git Workspace Synchronizer                |
+-----------------------------------------------------------------------------------+
       |                                   |                                   |
       v                                   v                                   v
+---------------------+         +---------------------+         +---------------------+
|  PLANNER AGENT      |         |  CODER AGENT        |         |  REVIEWER & QA AGENT|
|  - AST Analyzer     |         |  - Multi-file Diff  |         |  - Linter Runner    |
|  - Dependency Graph |         |  - Type-safe Logic  |         |  - Pytest & Vitest  |
+---------------------+         +---------------------+         +---------------------+
                                          |
                                          v
+-----------------------------------------------------------------------------------+
|                         SECURE DOCKER EXECUTION SANDBOX                           |
|  - Isolated Filesystem Mount          - Resource Throttling (cgroups)             |
|  - Ephemeral Git Branches             - Subprocess Execution Telemetry            |
+-----------------------------------------------------------------------------------+
```

---

## 2. Core Subsystems

### A. Context Engine & AST Analysis
- Parses user repositories into tree-sitter Abstract Syntax Trees (AST).
- Extracts symbols, cross-module dependencies, and type signatures.
- Computes token embeddings to retrieve only relevant context chunks per coding step.

### B. Autonomous Multi-Agent Loop
1. **Specification Decomposition**: Breaks down high-level feature requests into atomic, testable coding subtasks.
2. **Context Retrieval**: Pulls relevant source files and documentation into the prompt budget.
3. **Code Mutation**: Generates targeted unified diffs rather than entire file overwrites.
4. **Automated Verification**: Runs local linting, type checks (`mypy`, `tsc`), and test suites inside Docker.
5. **Self-Correction**: On failure, parses stack traces and iterates autonomously up to 5 attempts.

---

## 3. Technology Stack Breakdown
- **Frontend HUD**: React 19, TypeScript, Tailwind CSS, Terminal Stream Canvas
- **Backend Orchestrator**: Python 3.12, FastAPI, Pydantic v2, AsyncIO
- **AI Agent Integration**: IBM Bob, OpenAI API, Anthropic Claude SDK, Ollama Local
- **Sandboxing & Isolation**: Docker Engine, Alpine Linux, Ephemeral Volumes
- **CI/CD & Deployment**: GitHub Actions, Docker Compose, Linux VPS
