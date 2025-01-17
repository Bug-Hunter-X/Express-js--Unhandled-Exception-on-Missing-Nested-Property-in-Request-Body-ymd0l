# Express.js: Unhandled Exception on Missing Nested Property
This repository demonstrates a common error in Express.js applications: unhandled exceptions arising from accessing nested properties in the request body without proper error handling.  The `bug.js` file shows the problematic code, while `bugSolution.js` provides a corrected version.

## Problem
The original code attempts to access a nested property (`data.user.name`) without checking if `data`, `data.user`, or `data.user.name` exist. If any of these are undefined, it throws an error, causing the server to crash.

## Solution
The solution demonstrates the importance of checking for the existence of nested properties before accessing them. This prevents unexpected errors and improves the robustness of the application.

## How to run
1. Clone this repository.
2. Navigate to the project directory.
3. Run `npm install` to install Express.js.
4. Run `node bug.js` (to see the error) or `node bugSolution.js` (to see the corrected version).
