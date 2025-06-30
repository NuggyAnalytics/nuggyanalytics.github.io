---
name: Refactoring
about: Describe this issue template's purpose here.
title: "[REFACTOR]"
labels: refactor
assignees: ''

---

**What part of the code needs to be refactored?**  
A clear and concise description of what area or file needs improvement. Ex. The pricing logic in `utils/pricing.js` is duplicated and hard to maintain.

**Why does it need to be refactored?**  
Describe any tech debt, readability issues, testing difficulties, or upcoming dependencies. Ex. We want to reuse margin logic in the simulator without introducing bugs.

**What approach would you like to take?**  
Briefly outline the refactor plan. Ex. Extract core logic to a shared helper file, add unit tests, and deprecate duplicate functions.

**Additional context**  
Add links to related issues, PRs, files, or decisions. Ex. Related to #10. This refactor unblocks the new simulator component.
