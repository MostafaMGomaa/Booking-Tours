# ERD: Booky

This document explores the design of Booky web store.

We'll use a basic client/server architecture, where a single server is deployed
on a cloud provider next to a document database, and serving HTTP traffic from
a public endpoint.

## Storage

We 'll use a docment database (mongoDB).
We 'll host db at mongo atlas.

**Look At** Database relations in [Database digram](/DBD.png)

### Schema

We 'll need at least the following documents to implement
the Service

**Flights**:

## Server

A Simple HTTP server us responsible to authentication serving stored data ,
user can filter data via query string.

- Node.js for implementing server .
- Express.js is the web server framework.
- Mongoose ODM to mange data base.

### Auth

A simple JWT-based auth mechanism is to be used with passwords

### API

### Error handling

We will implement :

- AppError class to handling non exsisting routes

* Error controller as global error handler

- Catch Async use to grab catch block in all async functions

## Clients

For now we'll start with a single web client, possibly adding mobile clients later.

The web client will be implemented in HTML, CSS, JS, Bootstrap.

## Hosting

The code will be hosted on Github, PRs and issues welcome.
The web client will be hosted using any free web hosting platform such as netlify , heroku or alts.
