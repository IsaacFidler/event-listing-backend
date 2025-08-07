# Event Discovery Platform - Progress Checklist

## 🚀 Project Setup & Foundation

- [x] Started with NestJS template (GraphQL + Prisma + PostgreSQL)
- [x] Set up Docker Compose for PostgreSQL database
- [x] Created `.env` file with DATABASE_URL connection
- [x] Started the database with `docker-compose up -d`

## 🗄️ Database Schema Design

- [x] Updated Prisma schema with Event, User, Location, Artist models
- [x] Fixed timestamp mapping issues (`created_at` vs `create_at`)
- [x] Added Genre enum with music genres
- [x] Set up relationships:
  - [x] User → Events (one-to-many)
  - [x] User → Artists (one-to-many)
  - [x] Event → Artists (many-to-many)
  - [x] Location → Venues (one-to-many)
- [x] Fixed unique constraint issues for one-to-many relationships
- [x] Ran migrations with `npx prisma migrate dev`

## 📊 Data Population

- [x] Created seed script (`prisma/seed.ts`) with sample data
- [x] Added sample users, locations, and events
- [x] Ran seed script with `yarn seed`
- [x] Verified data in Postico/SQL

## 🔧 GraphQL Development

- [x] Created Events module structure (`src/events/`)
- [x] Built CreateEventInput DTO with proper type decorators
- [x] Fixed type decorator issues (Int, Date, arrays, nullable fields)
- [x] Learned GraphQL code-first vs schema-first approaches

## ��️ Tools & Testing

- [x] Set up Postico for database exploration
- [x] Learned SQL commands for data exploration
- [x] Tested GraphQL Playground at `http://localhost:3000/graphql`
- [x] Explored database schema with SQL queries

## 📚 Learning Points

- [x] Understanding Prisma relationships (one-to-one, one-to-many, many-to-many)
- [x] GraphQL type decorators and their importance
- [x] Database connection and environment setup
- [x] SQL vs TypeScript approaches for data management

## �� Current Status

- [x] Database schema and relationships
- [x] Sample data population
- [x] Basic DTO structure
- [x] Development environment setup

## 📋 Next Steps (In Progress)

- [x] Complete Events resolver and service for createEvent
- [x] Create Event entity
- [x] create event type
- [x] check why we need separate prisma service?

  - Lifecycle Management: Automatically connects/disconnects
    NestJS Integration: Better dependency injection
    Error Handling: Built-in connection management
    Testing: Easier to mock in tests

- [x] Nest can't resolve dependencies of the EventsService error - went back to using prisma client instead of dedicated prisma service. then import prisma module in event module.
- [x] registered genre enum in enum dir, genre.enum.ts file
- [x] swap graphql ide port to 4000
- [x] test using graph ql IDE on localhost:3000/graphql
- [x] test failed as no locationId on event table
- [x] experiment with query - graphql will only return what you specify. you need to add include in the service method, and on in the graphql query

```graphql
query {
  events {
    id
    title
    description
    genre
    creator {
      id
      email
      firstName
      lastName
    }
    location {
      id
      city
      addressLine1
    }
    artists {
      id
      artistName
    }
  }
}
```

- [x] - update events entity file with relations e.g location, creator, artists. create resoureces for each
- [] - start consuming endpoints on the frontend. We have an event mutation, and a query. so we should be able to start

- [ ] look at single event query

- [ ] Add filtering capabilities (city, date, genre)
- [ ] Test GraphQL queries and mutations
- [ ] Add pagination and search
- [ ] Create frontend application
- [ ] Add event ranking algorithm
- [ ] Implement mobile responsiveness
- [ ] Add comprehensive testing
