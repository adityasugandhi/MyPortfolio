# MyPortfolio Project Guidelines

## Commands
- 👉 Dev: `npm run dev` (Next.js dev server)
- 👉 Build: `npm run build` (production build)
- 👉 Start: `npm run start` (production server)
- 👉 Lint: `npm run lint` (ESLint check)

## Code Style
- **Imports**: Use absolute imports from project root with aliases (`@components/`, `@utils/`)
- **Components**: React functional components with named exports
- **TypeScript**: Use TS for new files (.tsx), JSDoc comments for JS files
- **Formatting**: Components and files use camelCase (folders) and PascalCase (component files)
- **CSS**: Tailwind classes with cn utility for conditional classes
- **Props**: Use TypeScript interfaces for props, destructure in component params
- **Animations**: Use Framer Motion for animations, consistent with existing patterns

## Best Practices
- Use React hooks for state management
- Follow Next.js routing conventions
- Leverage UI components from `/components/ui/` for consistent styling
- Update portfolio data in `/data/portfolio.json`