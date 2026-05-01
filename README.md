**Tenzies Game**

A fast-paced, interactive dice game built with React. The objective is to roll until all ten dice show the same value, "holding" numbers as you go.

**Live Demo**


**Features**
**Interactive Gameplay:** Click individual dice to "freeze" them at their current value between rolls.

**Win Logic:** Automatically detects when all dice match and are held.

**Dynamic Visuals:**

Smooth transitions between "Held" and "Unheld" states.

Confetti explosion upon winning using react-confetti.

**Accessibility (A11y):**

Uses aria-live regions to announce game status to screen readers.

Auto-focuses the "New Game" button upon winning for seamless keyboard navigation.

**Performance:** Optimized state management using lazy state initialization and unique IDs for stable list rendering.

**Tech Stack**
**Framework:** React (Vite)

**Styling:** CSS3 (Grid & Flexbox)

**Components:** Functional Components with Hooks (useState, useEffect, useRef)

**Library:** react-confetti for win celebrations.

**Lessons Learned**
During the development of this project, I focused on:

**State Derived Logic:** Learning how to derive gameWon from existing state rather than creating unnecessary extra state variables.

**Refs & Effects:** Using useRef to manipulate the DOM (focusing buttons) in a declarative way.
