# Welcome to Poll-eze's GH repo!

Poll-eze is a super tool for creating and managing on-the-spot feedback online **Polls**

## TechStack

Nextjs, Prisma, Clerk Auth(will be moving to Nextauth soon), Tailwind, Zustand

## Contributing guide

Copy the .env.example and add your Postgres uri using Neon,supabase,docker,etc and also add Clerk auth keys and webhook in the copied .env.

- Run the migrations
  `npx prisma migrate dev`

- Generate Client
  `npx prisma generate`
- Finally, run the development server:
  `npm  run  dev`

## Future Improvements

- Moving to NextAuth
- Integrating Websockets for instant Poll Vote changes on Dashboard
- Beautifying the UI
