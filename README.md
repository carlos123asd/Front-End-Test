# Mobile Store SPA

A modern Single Page Application built with React and TypeScript for browsing mobile devices, viewing product details and adding products to a shopping cart.

This project was developed as a frontend technical assessment with a strong focus on:

* Clean architecture
* User experience
* Responsive design
* Maintainable code
* Client-side caching
* Performance
* Scalability
* Code quality

---

# Preview

## Main Features

* Product listing page
* Product detail page
* Real-time search filtering
* Responsive product grid
* Dynamic routing
* Product configuration selectors
* Add to cart functionality
* Persistent cart counter
* Client-side API caching with expiration
* Loading and error states

---

# Tech Stack

## Core

* React
* TypeScript
* Vite

## Routing

* React Router DOM

## Server State & Cache

* TanStack Query
* TanStack Query Persist Client

## State Management

* Zustand

## Styling

* TailwindCSS

## Quality & Tooling

* ESLint
* Vitest

---

# Architecture

The project follows a modular and scalable frontend structure focused on separation of concerns and maintainability.

```bash
src/
├── api/
├── app/
├── assets/
├── components/
│   ├── atoms/
│   ├── molecules/
│   └── organisms/
├── hooks/
├── pages/
├── store/
├── styles/
├── types/
├── utils/
└── main.tsx
```

---

# Client-Side Cache Strategy

The application implements client-side caching as requested in the technical requirements.

## Implemented solution

* API responses are cached using TanStack Query
* Cached data persists using localStorage
* Cache expiration time is set to 1 hour
* Automatic cache revalidation after expiration

This approach reduces unnecessary network requests while improving performance and user experience.

---

# Application Pages

## Product List Page (PLP)

Features:

* Responsive product grid
* Real-time search filtering
* Brand and model filtering
* Navigation to product details
* Loading states
* Empty states

## Product Details Page (PDP)

Features:

* Detailed product information
* Product configuration selectors
* Storage selection
* Color selection
* Add to cart functionality
* Persistent cart counter
* Navigation back to product listing

---

# Scripts

## Start development server

```bash
npm run start
```

## Build production bundle

```bash
npm run build
```

## Run tests

```bash
npm run test
```

## Run linter

```bash
npm run lint
```

---

# Installation

## Clone repository

```bash
git clone <repository-url>
```

## Install dependencies

```bash
npm install
```

## Start application

```bash
npm run start
```

---

# Technical Decisions

## Why React Query?

TanStack Query was selected to manage:

* API synchronization
* Server state
* Client-side caching
* Cache persistence
* Automatic revalidation
* Loading and error states

This allowed implementing the caching requirements cleanly and efficiently.

## Why Zustand?

Zustand was used for lightweight global state management of the shopping cart.

It provides:

* Minimal boilerplate
* Simple API
* Excellent developer experience
* Clean separation from server state

## Why TypeScript?

TypeScript improves:

* Scalability
* Maintainability
* Type safety
* Developer experience
* Refactoring confidence

---

# Responsive Design

The application is fully responsive and adapts to different screen sizes.

The product listing dynamically adjusts the number of columns depending on the available viewport width.

---

# Code Quality

The project includes:

* ESLint configuration
* Strict TypeScript rules
* Modular architecture
* Reusable components
* Consistent code structure

---

# Future Improvements

Possible future enhancements:

* Pagination or infinite scroll
* Product sorting
* Unit and integration test coverage expansion
* Accessibility improvements
* Skeleton loading components
* Dark mode support
* Internationalization (i18n)

---

# Author

Carlos Alexander Medina Salas
