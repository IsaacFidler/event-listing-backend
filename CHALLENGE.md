# 🧪 Full-Stack Technical Challenge: Event Discovery Platform

## �� Challenge Overview

**Prompt**: Build a simplified version of RA's event discovery and ticketing listing feature.

## 🎯 Requirements

### Backend (Node.js/NestJS)

- [x] **GraphQL API** with Apollo Server
- [x] **Event Model** with:
  - [x] Title, description, location
  - [x] Start/end time
  - [x] Genres, artist list
- [x] **GET /events** – returns list of upcoming events
  - [x] Optional filters: city, date, genre
- [x] **GET /events/:id** – returns event detail
- [x] **POST /events** – create new event with validation
- [x] **Database**: Prisma with PostgreSQL
- [ ] **Bonus**: Pagination and basic search
- [ ] **Bonus**: Event ranking algorithm

### Frontend (Next.js + React) - Separate Repository

- [ ] **Event List Page** with SSR/ISR
- [ ] **Filters**: city, date, genre
- [ ] **Event Detail Pages**
- [ ] **Styling**: styled-components or Tailwind
- [ ] **Bonus**: Client-side navigation with React Query/SWR
- [ ] **Bonus**: Mobile responsiveness and accessibility

### Extra Credit

- [ ] **Event Ranking**: Basic algorithm (popularity/upcoming soonest)
- [ ] **Mobile Responsiveness**: Best practices
- [ ] **Accessibility**: WCAG compliance
- [ ] **Unit Tests**: API and component behavior

## 🏗️ Current Implementation Status

### ✅ Completed

- [x] NestJS backend with GraphQL
- [x] Prisma setup with PostgreSQL
- [x] Basic User module (template)
- [x] Docker Compose for local development
- [x] Environment configuration
- [x] Code quality tools (ESLint, Prettier)

### 🔄 In Progress

- [ ] Event module implementation
- [ ] GraphQL schema for events
- [ ] Event CRUD operations
- [ ] Filtering logic

### 📋 TODO

- [ ] **Database Schema**: Update Prisma schema for events
- [ ] **Event Module**: Create events resolver, service, DTOs
- [ ] **GraphQL Schema**: Define event types and operations
- [ ] **Filtering**: Implement city, date, genre filters
- [ ] **Validation**: Input validation for event creation
- [ ] **Seeding**: Sample event data
- [ ] **Pagination**: Cursor-based pagination
- [ ] **Search**: Full-text search on title/description
- [ ] **Ranking**: Event ranking algorithm
- [ ] **Testing**: Unit tests for events
- [ ] **Frontend**: Next.js application

## �� Design Decisions

### Backend Architecture

- **Framework**: NestJS for modular, scalable architecture
- **API**: GraphQL for flexible querying and type safety
- **Database**: PostgreSQL with Prisma for type-safe operations
- **Code-First**: GraphQL schema generation from TypeScript decorators

### Data Model Considerations

- **Event Model**: Should include all required fields plus metadata
- **Relationships**: Consider artist/venue relationships for future expansion
- **Indexing**: Plan for efficient filtering and search queries

### Performance Considerations

- **Pagination**: Cursor-based for large datasets
- **Caching**: Redis for frequently accessed data
- **Database**: Proper indexing for filter queries
- **Search**: Full-text search vs SQL LIKE performance tradeoffs

## 🧪 Preparation Notes

### Technical Concepts to Review

- **GraphQL**: Schemas, resolvers, filtering, pagination
- **Prisma**: Relationships, filtering, migrations
- **NestJS**: Modules, decorators, dependency injection
- **Testing**: Jest + React Testing Library patterns

### Design Discussion Points

- **Pagination Strategy**: Offset vs cursor-based
- **REST vs GraphQL**: Tradeoffs for this use case
- **SSR vs ISR**: When to use each approach
- **Search Implementation**: Database vs external search service
- **Caching Strategy**: Redis, CDN, browser caching
- **Performance Optimization**: Database queries, API response times

## 📚 Resources

### Documentation

- [NestJS GraphQL](https://docs.nestjs.com/graphql/quick-start)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Apollo Server](https://www.apollographql.com/docs/apollo-server/)
- [Next.js Documentation](https://nextjs.org/docs)

### Testing

- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

## �� Success Criteria

### MVP (Minimum Viable Product)

- [ ] Backend API with event CRUD operations
- [ ] GraphQL playground working
- [ ] Basic filtering functionality
- [ ] Frontend displaying event list
- [ ] Event detail pages

### Enhanced Features

- [ ] Pagination implementation
- [ ] Search functionality
- [ ] Event ranking
- [ ] Mobile responsive design
- [ ] Comprehensive testing

### Production Ready

- [ ] Error handling and validation
- [ ] Performance optimization
- [ ] Security considerations
- [ ] Documentation
- [ ] Deployment setup

## 📝 Notes

- **Focus on quality over quantity** - better to have fewer well-implemented features
- **Document design decisions** - be ready to explain tradeoffs
- **Test as you go** - don't leave testing until the end
- **Consider scalability** - how would this handle 1000+ events?
- **Think about user experience** - what makes a good event discovery platform?

---

_Last Updated: [Current Date]_
_Status: In Progress_
