# TypeScript: Handling undefined in string | null

This repo demonstrates a common TypeScript error: "Object is possibly 'undefined'" when working with types like `string | null`.  The error occurs because TypeScript doesn't automatically narrow the type when checking for `null` – it still considers the possibility of `undefined`.

The `bug.ts` file shows the error, while `bugSolution.ts` provides a fix.

## Problem

The `printName` function accepts either a string or `null`.  When you pass `null`, it works, but passing `undefined` causes the error.

## Solution

The solution involves explicitly checking for both `null` and `undefined` before using `toUpperCase()`.  This ensures TypeScript understands that the value is a string before accessing its methods.