# Welcome to Poll-eze's GH repo!

Poll-eze is a super tool for creating and managing on-the-spot feedback online **Polls**

## TechStack

Nextjs, Prisma, Clerk Auth(will be moving to Nextauth soon), Tailwind, Zustand

## Contributing guide

## Docker Setup

Copy the .env.example to .env, comment out the Database_URL and add Clerk auth keys and webhook in the copied .env.

- Run `docker compose up`

## Normal Setup

Copy the .env.example to .env and add your PostgresDB URI using Neon,supabase,docker,etc and also add Clerk auth keys and webhook in the copied .env.

- Copy .env.example to .env file

- Run the migrations

  `npx prisma migrate dev`

- Seeding Script

  `npx prisma db seed`

- Generate Client

  `npx prisma generate`

- Finally, run the development server:

  `  npm run dev`

## Future Improvements

- Moving to NextAuth

- Integrating Websockets and rabbitmq for instant Poll Vote changes on Dashboard

- Beautifying the UI
