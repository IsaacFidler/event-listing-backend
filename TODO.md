# Event Discovery Platform - Full-Stack Interview Prep

## ✅ Backend Tasks (Completed)

### Task 1: Add Event Capacity ✅

- [x] Add capacity field to Event model in Prisma schema
- [x] Generate and run migration
- [x] Add capacity field to Event GraphQL entity
- [x] Add capacity field to CreateEventInput DTO

### Task 2: Add Event Search by Genre ✅

- [x] Add new query method to events resolver
- [x] Add corresponding service method
- [x] Use Prisma where clause to filter by genre

### Task 3: Add Event Registration System ✅

- [x] Create Registration model in Prisma schema
- [x] Add relationships to User and Event models
- [x] Create registration entity, service, resolver
- [x] Add registration mutation

### Task 4: Add Event Reviews ✅

- [x] Create Review model with rating and comment
- [x] Create review entity, service, resolver
- [x] Add queries to get reviews for events
- [x] Add mutation to create reviews

### Task 5: Add Event Date Filtering ✅

- [x] Add query with startDate and endDate parameters
- [x] Use Prisma date filtering in service
- [x] Test with various date ranges

---

## 🎯 **PHASE 1: Frontend Setup & Basic Integration**

### Task 6: Apollo Client Setup (IN PROGRESS)

- [x] Install Apollo Client in Next.js frontend (`@apollo/client`, `graphql`)
- [x] Configure Apollo Client to connect to GraphQL backend (<http://localhost:3000/graphql>)
- [x] Set up Apollo Provider in `_app.tsx`
- [x] Test connection with a simple query

### Task 7: Build Basic Events List Page

- [x] Create events list component (`/events`)
- [x] Use Apollo Client to fetch events with GraphQL query
- [x] Display basic event cards with title, description, genre, capacity
- [x] Add loading and error states
- [x] Test backend `events` query from frontend

### Task 8: Style Events Page

- [x] Add proper styling to event cards (MUI X components)
- [x] Improve layout and spacing with styled-components
- [x] Add hover effects and animations
- [x] Make it responsive for mobile/desktop

---

## 🎯 **PHASE 2: Event Detail & User Interactions**

### Task 9: Add Event Details Page

- [ ] Create event detail page component (`/events/[id]`)
- [ ] Write GraphQL query for single event with reviews and users
- [ ] Display full event information, reviews, and registration count
- [ ] Test nested relationship queries from frontend
- [ ] Add routing between list and detail pages

### Task 10: Add Event Registration UI

- [ ] Add registration button to event cards and detail page
- [ ] Create registration mutation with Apollo Client
- [ ] Handle registration success/error states
- [ ] Update UI after successful registration
- [ ] Show registration status (registered/not registered)

### Task 11: Add Event Reviews UI

- [ ] Display reviews on event detail page with ratings
- [ ] Add "Write Review" form component
- [ ] Connect to `createReview` mutation
- [ ] Display average rating calculation
- [ ] Handle review submission success/error

---

## 🎯 **PHASE 3: Backend Extensions (As Frontend Needs Them)**

### Task 12: Add Update/Delete Event Endpoints

- [ ] Add `updateEvent` mutation when frontend needs editing
- [ ] Add `deleteEvent` mutation when frontend needs deletion
- [ ] Add proper authorization (only event creator can edit/delete)
- [ ] Test mutations from frontend forms

### Task 13: Connect Registration to Capacity Logic

- [ ] Add capacity validation in registration service
- [ ] Prevent registration when event is full
- [ ] Return proper error messages for frontend
- [ ] Update registration count in real-time

### Task 14: Add Advanced Filtering Backend

- [ ] Add location/city filtering to events query
- [ ] Add sorting options (date, popularity, rating)
- [ ] Add pagination support for large event lists
- [ ] Test complex queries from frontend

---

## 🎯 **PHASE 4: Error Handling & Polish**

### Task 15: Frontend Error Handling

- [ ] Handle GraphQL errors in all components
- [ ] Add error boundaries for unexpected errors
- [ ] Show user-friendly error messages
- [ ] Handle network errors and offline states

### Task 16: Backend Error Improvements

- [ ] Add try/catch blocks in all service methods
- [ ] Improve error responses based on frontend needs
- [ ] Add proper validation errors with details
- [ ] Add not found handling for events/users

### Task 17: Form Validation Integration

- [ ] Add frontend form validation for create event
- [ ] Add frontend validation for reviews (1-10 rating)
- [ ] Add corresponding backend validation
- [ ] Ensure consistent error messages

---

## 🎯 **PHASE 5: Advanced Features**

### Task 18: Add Event Search/Filter UI

- [ ] Add search/filter form component
- [ ] Implement genre dropdown filter
- [ ] Add location search input
- [ ] Add date range picker
- [ ] Update query variables based on filters

### Task 19: Add Event Creation Form

- [ ] Create comprehensive event creation form
- [ ] Add form validation and error handling
- [ ] Connect to `createEvent` mutation
- [ ] Handle success states and navigation
- [ ] Add image upload capability

### Task 20: Add User Authentication Context

- [ ] Create user context/state management
- [ ] Add login/logout functionality
- [ ] Protect registration and review features
- [ ] Show user-specific data (my events, my reviews)

---

## 🧪 **TESTING & QUALITY**

### Task 21: Write Integration Tests

- [ ] Test complete user flows: Create event → View event → Add review
- [ ] Test registration flow with capacity limits
- [ ] Test error scenarios end-to-end
- [ ] Test form validation flows

### Task 22: Write Unit Tests

- [ ] Write 2-3 service method tests (findOne, create, with mocking)
- [ ] Test frontend components with React Testing Library
- [ ] Test Apollo Client queries and mutations
- [ ] Test error handling in both frontend and backend

### Task 23: Performance & UX Polish

- [ ] Add loading spinners and skeleton screens
- [ ] Implement optimistic updates for mutations
- [ ] Add pagination for event lists
- [ ] Test with realistic data volumes

---

## 🎤 **Interview Presentation Prep**

### Task 24: Demo Preparation

- [ ] Have a working event creation → viewing → review flow
- [ ] Prepare to explain full-stack data flow
- [ ] Practice adding new features live
- [ ] Show error handling in action
- [ ] Demonstrate GraphQL benefits in practice

### Task 25: Technical Deep-Dive Prep

- [ ] Practice explaining schema design decisions
- [ ] Be ready to discuss Apollo Client vs alternatives
- [ ] Know your way around both codebases
- [ ] Prepare to explain async/await patterns
- [ ] Practice explaining relationship modeling

---

## 🔧 **Quick Reference**

**Backend Commands**:

- `npx prisma migrate dev --name migration_name`
- `npx prisma generate`
- `yarn dev` (start backend on port 3000)

**Frontend Commands**:

- `yarn dev` (start frontend on port 3001)
- `yarn build` (build for production)

**Testing Endpoints**:

- GraphQL Playground: `localhost:3000/graphql`
- Frontend: `localhost:3001`
- Altair GraphQL Client for API testing

---

## 📋 **CURRENT FOCUS**

**Next Priority**: Task 6 - Apollo Client Setup

- Install and configure Apollo Client
- Test connection to GraphQL backend
- Then move to Task 7 - Basic Events List Page

**Philosophy**: Build features end-to-end, let frontend needs drive backend development, discover and fix issues through real usage patterns.

**Interview Date**: Friday, 9th August at 3:30 PM BST

---

## 🧪 **TESTS!!!!!!**

**Testing Strategy**:

1. **Integration First** - Test complete user journeys
2. **Unit Tests** - Focus on business logic in services
3. **Frontend Tests** - Key components and user interactions
4. **Error Scenarios** - Test failure cases and recovery
5. **Performance** - Test with realistic data loads

**Test Priority**:

- [ ] User can create event and see it in list
- [ ] User can view event details with reviews
- [ ] User can register for event (with capacity limits)
- [ ] User can add review to attended event
- [ ] Error handling for all failure cases
