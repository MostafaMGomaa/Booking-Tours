# Booking Flights Web Application

This is a web application for booking flights developed using modern web technologies. The application allows users to search for flights, view flight details, and make flight reservations.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies](#technologies)
- [Database Schema](#database-schema)
- [API](#api)
- [API Documentation](#api-documentation)
- [Error Handling](#error-handling)
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
  - A simple JWT-based auth mechanism is to be used with passwords

- Deployment:
  - Amazon Web Services (AWS) Elastic Beanstalk (EB)
  - Docker (Containerization platform)
  - Jenkins (Continuous Integration tool)

For a detailed overview of the technologies used in the project, please refer to the [source code](https://github.com/MostafaMGomaa/Booking-flights-web-application/tree/master/src) repository.

## Database Schema

We 'll need at least the following documents to implement
the Service

**Tours**:
| Attribute | Type |
|-----------| ----- |
| Name | String |
| Slug | String |
| FromCountry | String |
| ToCountry | String |
| FromCity | String |
| ToCity | String |
| FromSite | String |
| ToSite | String |
| Description | String |
| Summary | String |
| Transportation | String |
| Ratings Average | Number |
| Ratings Quantity | Number |
| Distance | String |
| Duration | Number |
| Total Seats | Number |
| Available Seats | Number |
| Price | Number |
| Price Discount | Number |
| Start Dates | Date |
| Total Tickets | Number |
| Available Ticket | Number |
| Type | String |
| Baggage | Number |
| Class | String |
| startLocation | Object {Geo location} |
| endLocation | Object {Geo location} |

**User**:
| Attribute | Type |
|-----------|------|
| Name | String|
| Email | String |
| Photo | String |
| Role | String |
| Password | String|  
| PasswordConfirm| String|  
| PasswordChangedAt | Date |
| PasswordResetToken | String |
| PasswordResetExpires | Date |
| Active | Boolean |

**Reviews**:
| Attribute | Type |
|---------- |----- |
| Review | String|
| Rating | Number|
| CreatedAt | Date |
| Tour | TourID|
| User | UserID |

**Ticket**:
| Attribute | Type |
|---------- |----- |
| Tour | TourID |
| User | UserID |
| SeatNum | Num |
| Paid | Boolean |
| createdAt | Date |
| numOfTickets | Number |

# API

**Auth :**

```
/signup                 [POST]
/login                  [POST]
/signout                [GET]
/forgotPassword         [POST]
/resetPassword/:token   [PATCH]
/updatePassword         [PATCH]

```

**Flight :**

```
/flights        [GET]
/flights        [GET]
/flights/:id    [GET]
/flights/:id    [PATCH]
/flights/:id    [DELETE]

```

**Users**:

```
/users/                     [GET]
/users/:id                  [GET]
/users/me                   [GET]
/users/deleteMe             [DELETE]
/users/updateMyPassword     [PATCH]
```

**Reviews**:

```
/reviews       [GET]
/reviews       [POST]
/reviews/:id   [GET]

```

**Reviews on flights**:

```
/:fligtId/reviews    [Get]
/:fligtId/reviews    [POST]
```

**Tickets**:

```
/tickets        [GET]
/tickets        [POST]
/tickets/:id    [GET]
/tickets/:id    [PATCH]
/tickets/:id    [DELETE]
```

## API Documentation

The API documentation for the web application can be found here:

[![Postman Documentation](https://img.shields.io/badge/Postman-Documentation-orange?style=for-the-badge&logo=postman)](https://documenter.getpostman.com/view/19817635/2s8Z6sccEV)

. It outlines the available endpoints, request formats, and response formats.

## Error Handling

We will implement :

- AppError class to handling non exsisting routes

* Error controller as global error handler

- Catch Async use to grab catch block in all async functions

## Deployment

The application is deployed using the following methods:

- Amazon Web Services (AWS) Elastic Beanstalk (EB):

  - The application is currently deployed on AWS EB and can be accessed at

  [![AWS EB Deployment](https://img.shields.io/badge/AWS%20EB-Deployment-blue?style=for-the-badge&logo=amazon-aws)](http://booking-tours-dev22.us-east-1.elasticbeanstalk.com/)

  > **Please Note**: that the EB environment will be deleted after 9/7/2023.

- Render:

  - An alternative deployment option is available using Render, and the application can be accessed at

  [![Render Deployment](https://img.shields.io/badge/Render-Deployment-blue?style=for-the-badge&logo=render)](https://booking-flights-web-application.onrender.com/)

Both deployment options provide a scalable and reliable environment for hosting the application.

## Getting Started

To run the application locally or contribute to its development, follow these steps:

1. Clone the repository:

```git
   git clone https://github.com/MostafaMGomaa/Booking-flights-web-application.git
```

2. Install the dependencies for the backend:

   - Navigate to the project root directory.
   - Run

   ```shell
   npm install
   ```

   to install the required dependencies.

## Continuous Integration

The project includes the following files for continuous integration:

- Dockerfile: The Dockerfile defines the containerization configuration for the application. It specifies the necessary steps to build a Docker image of the application.

- Jenkinsfile: The Jenkinsfile defines the pipeline configuration for continuous integration with Jenkins. It includes stages for building the

# Contributing

Contributions to Booking-Tours are welcomed! If you find any issues or have suggestions for improvement, please feel free to open a pull request. We appreciate your contributions.

# License

Booking-Tours is licensed under the [MIT License](LICENSE). You are free to use, modify, and distribute the code in this repository.
