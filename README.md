# NestJS Backend Template

Reusable NestJS backend boilerplate with GraphQL and Prisma.

## Features

- NestJS with TypeScript
- GraphQL (code-first) with Apollo Server
- Prisma ORM with PostgreSQL
- Environment variables support (.env)
- ESLint & Prettier for code quality
- Jest for unit testing
- Modular structure: users, prisma, shared config
- Sample UserResolver, UserService, DTOs, entities
- Docker Compose for local PostgreSQL
- Prisma seed script for dummy data

## Prerequisites

- Node.js >= 18
- Yarn
- Docker (for local PostgreSQL)

## Getting Started

1. Install dependencies:

   ```bash
   yarn install
   ```

2. Copy the example env file and adjust if needed:

   ```bash
   cp .env .env.local
   ```

3. Start PostgreSQL via Docker Compose:

   ```bash
   docker-compose up -d
   ```

4. Run Prisma migrations:

   ```bash
   npx prisma migrate deploy
   ```

5. Seed the database with sample data:

   ```bash
   yarn seed
   ```

6. Start the development server:

   ```bash
   yarn start:dev
   ```

The GraphQL Playground will be available at <http://localhost:3000/graphql>

## Scripts

- `yarn start` - Run the application
- `yarn start:dev` - Run in watch mode
- `yarn build` - Build the app
- `yarn lint` - Lint the codebase
- `yarn format` - Format code with Prettier
- `yarn test` - Run unit tests
- `yarn seed` - Seed the database

## Project Structure

```text
src/
├── main.ts
├── app.module.ts
├── users/
│   ├── dto/
│   ├── entities/
│   ├── users.module.ts
│   ├── users.resolver.ts
│   └── users.service.ts
├── prisma/
│   └── prisma.module.ts
└── shared/
    └── config/
        └── config.module.ts

prisma/
├── migrations/
├── schema.prisma
└── seed.ts

docker-compose.yml
.env
.gitignore
.eslintrc.js
.prettierrc
package.json
```

## License

MIT
