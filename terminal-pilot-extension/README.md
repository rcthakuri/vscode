# Terminal Pilot

[![Build Status](https://img.shields.io/travis/your-repo/terminal-pilot.svg)](https://travis-ci.org/your-repo/terminal-pilot)

**Terminal Pilot** is a VS Code extension that automates your workflow by launching multiple terminals with custom configurations in one command.

## Features

- **Automated Terminal Setup:** Launch multiple terminals with user-defined names and commands.
- **Flexible & Dynamic:** Configure your terminal setups via VS Code settings.

## Requirements

- [Visual Studio Code](https://code.visualstudio.com/)
- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)

## Configuration

Add your terminal settings to your `settings.json`:

```json
{
  "terminalPilot.terminalConfiguration": {
    "terminal1": { "command": "echo Hello", "show": true },
    "terminal2": { "command": "npm start", "show": true }
  }
}
```

## Usage

1. Open the Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`).
2. Run **Terminal Pilot: Start Terminals**.

---

This version keeps it short and to the point, while still providing the essential details.
