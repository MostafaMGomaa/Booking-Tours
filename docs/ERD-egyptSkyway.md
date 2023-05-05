# ERD: Egypt-skyway

This document explores the design of Egypt-skyway web app.

We'll use a basic client/server architecture, where a single server is deployed
on a cloud provider next to a document database, and serving HTTP traffic from
a public endpoint.

## Storage

We 'll use a docment database (mongoDB).
We 'll host db at mongo atlas.

**Look At** Database relations in [Database digram](DBD.jpg)

### Schema

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
|Review| String|
|Rating| Number|
|CreatedAt| Date |
|Tour|TourID|
|User|UserObject |

**Ticket**:
| Attribute | Type |
|---------- |----- |
| Tour | TourID|
| User | UserID |
| SeatNum | Num |

## Server

A Simple HTTP server us responsible to authentication serving stored data ,
user can filter data via query string.

- Node.js for implementing server .
- Express.js is the web server framework.
- Mongoose ODM to mange data base.

### Auth

A simple JWT-based auth mechanism is to be used with passwords

### API

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
