
# Express + Routing-Controllers on Firebase Functions

## Overview
A lightweight, flexible approach to building a serverless API with Firebase Functions, leveraging the `routing-controllers` library in conjunction with Express.js. Unlike the heavier NestJS framework, which also builds upon `routing-controllers` and `typedi`, this setup opts for simplicity and flexibility, making it easier to understand and customize for your specific needs.

## Why `routing-controllers`?
- **Simplicity and Flexibility**: Offers a straightforward way to define routes and middleware, making it easier to work with and adapt than more complex frameworks like NestJS.
- **Compatibility**: Seamlessly integrates with any Express application, allowing for the use of existing Express middleware and patterns.
- **Dependency Injection**: Utilizes `typedi` for dependency injection, simplifying the management of service instances and their dependencies.
- **Reduced Overhead**: Avoids the extra complexity and overhead introduced by frameworks like NestJS, focusing instead on the core functionalities needed for routing and control.

## Project Structure

- **Middleware**: Custom middleware, such as `LoggingMiddleware` for logging requests and `CustomErrorHandler` for handling errors, can be globally applied before controller actions.
- **Controllers**: Business logic is encapsulated within controllers, e.g., `ThingController`, keeping the code organized and maintainable.
- **Decorators**: Utilizes decorators for routing, middleware, and dependency injection, making the code cleaner and more expressive.

## Features

- **Express Setup**: Basic Express server setup with JSON body parsing and a simple root route.
- **Global Middleware**: Demonstrates how to use global middleware for logging and custom error handling.
- **Dependency Injection**: Shows how to integrate `typedi` for dependency injection in controllers and services.
- **Custom Decorators**: Implements custom decorators for authorization and current user context, showcasing the extensibility of `routing-controllers`.

## Getting Started

1. **Install Dependencies**: Run `npm install` to install the required packages, including `express`, `reflect-metadata`, `routing-controllers`, and `typedi`.

2. **Local Development**:
   - Start the local development server using Firebase Emulator or deploy it to Firebase Functions for testing.
   - Use `firebase serve` (if using the Firebase CLI) to test locally.

3. **Deployment**:
   - Deploy your function to Firebase using `firebase deploy` and specify your project details in `firebase.json`.

## Configuration

- **Controllers**: Add or modify controllers in the `controllers` directory, following the `ThingController` example for handling specific routes.
- **Middleware**: Implement custom middleware for global or route-specific functionality, ensuring they are registered in the Express application setup.
- **Error Handling**: Customize the `CustomErrorHandler` to manage how application errors are handled and responses are sent.

## Security and Authentication

- **Authorization Checker**: The `authorizationChecker` function is a placeholder for implementing route-specific authorization logic.
- **Current User Context**: The `currentUserChecker` function demonstrates how to integrate user context into your controllers, potentially using session or token-based authentication.

## Conclusion

This project template offers a streamlined approach to building serverless APIs with Firebase Functions, emphasizing simplicity, flexibility, and the effective use of `routing-controllers` and `typedi`. It's an excellent starting point for developers looking to create scalable, maintainable serverless applications without the overhead of more complex frameworks.
