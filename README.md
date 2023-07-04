# Booking Flights Web Application

This is a web application for booking flights developed using modern web technologies. The application allows users to search for flights, view flight details, and make flight reservations.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies](#technologies)
- [Database Schema](#database-schema)
- [API Documentation](#api-documentation)
- [Deployment](#deployment)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This web application provides a user-friendly interface for booking flights. Users can search for available flights based on their preferred destinations, view flight details such as departure time and duration, and make reservations.

## Features

- User authentication and registration
- Search for flights based on departure and destination
- View flight details including departure time, duration, and available seats
- Make flight reservations
- View and manage user reservations
- Admin panel for managing flights and reservations

## Technologies

The application is built using the following technologies:

- Backend:

  - Node.js (JavaScript runtime environment)
  - Express.js (Web application framework for Node.js)
  - MongoDB (NoSQL database)
  - Mongoose (MongoDB object modeling for Node.js)

- Deployment:
  - Amazon Web Services (AWS) Elastic Beanstalk (EB)
  - Docker (Containerization platform)
  - Jenkins (Continuous Integration tool)

For a detailed overview of the technologies used in the project, please refer to the [source code](https://github.com/MostafaMGomaa/Booking-flights-web-application/tree/master/src) repository.

## Database Schema

The [ERD file](https://github.com/MostafaMGomaa/Booking-flights-web-application/blob/master/docs/ERD-egyptSkyway.md) provides a detailed description of the database schema used in the application. It includes information about the various entities and their relationships.

## API Documentation

The API documentation for the web application can be found in the [Postman documentation](https://documenter.getpostman.com/view/19817635/2s8Z6sccEV). It outlines the available endpoints, request formats, and response formats.

## Deployment

The application is deployed using the following methods:

- Amazon Web Services (AWS) Elastic Beanstalk (EB):

  - The application is currently deployed on AWS EB and can be accessed at [AWS EB Deployment Link](http://booking-tours-dev22.us-east-1.elasticbeanstalk.com/). Please note that the EB environment will be deleted after 9/7/2023.

- Render:
  - An alternative deployment option is available using Render, and the application can be accessed at [Render Deployment Link](https://booking-flights-web-application.onrender.com/).

Both deployment options provide a scalable and reliable environment for hosting the application.

## Getting Started

To run the application locally or contribute to its development, follow these steps:

1. Clone the repository:
   `git clone https://github.com/MostafaMGomaa/Booking-flights-web-application.git`
2. Install the dependencies for the backend:
   - Navigate to the project root directory.
   - Run `npm install` to install the required dependencies.

## Continuous Integration

The project includes the following files for continuous integration:

- Dockerfile: The Dockerfile defines the containerization configuration for the application. It specifies the necessary steps to build a Docker image of the application.

- Jenkinsfile: The Jenkinsfile defines the pipeline configuration for continuous integration with Jenkins. It includes stages for building the
