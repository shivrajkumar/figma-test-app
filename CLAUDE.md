# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with Turbopack (fast refresh)
- `npm run build` - Build production application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality

## Architecture Overview

This is a Next.js 15 application with the App Router using React 19 and TypeScript.

### Key Technologies
- **Next.js 15.4.5** with App Router
- **React 19.1.0** with client components marked with `"use client"`
- **TypeScript** with strict mode enabled
- **Tailwind CSS v4** with theme variables for light/dark mode
- **Playwright** for E2E testing (installed but not yet configured)

### Project Structure
- `src/app/` - App Router directory with layout.tsx and page.tsx
- Uses Next.js `@next/font/google` for font optimization (Inter)
- CSS variables for theming with light/dark mode support
- TypeScript path alias: `@/*` maps to `src/*`

### Current Implementation
The main page (`src/app/page.tsx`) contains a simple interactive component that demonstrates:
- State management with React hooks
- Conditional styling based on click state
- Tailwind CSS classes for styling
- Figma-style node IDs for design system integration

### Development Notes
- Uses TypeScript strict mode for type safety
- Project is configured for ES2017 target with modern React features
- Font optimization is handled by Next.js with Geist font family
- Tailwind CSS v4 uses the new `@theme inline` directive for configuration