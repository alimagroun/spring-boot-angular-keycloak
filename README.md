# Spring Boot Angular Keycloak Integration

## Overview
This project demonstrates how to integrate Spring Boot, Angular, and Keycloak for authentication.

## Setup Instructions
1. Install Java, Node.js, and Angular CLI.
2. **Set up Keycloak:**
   - Access the Keycloak admin console.
   - Create a new realm named "realm-1".
   - Within "realm-1", create a new client with the Client ID "client-1".
   - Configure the client settings, such as Root URL, Valid Redirect URIs, Valid post logout.
   - Define roles and permissions within Keycloak as needed.
3. Build and run the Spring Boot backend.
4. Build and run the Angular frontend.