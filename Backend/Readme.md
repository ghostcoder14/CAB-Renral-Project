# User Registration Endpoint

## Endpoint: `/api/v1/register`

### Method: POST

### Description

This endpoint is used to register a new user. It validates the input data, hashes the password, creates a new user in the database, and returns a JSON Web Token (JWT) along with the user details.

### Request Body

The request body should be a JSON object containing the following fields:

- `firstname` (string, required): The first name of the user. Must be at least 3 characters long.
- `lastname` (string, optional): The last name of the user.
- `email` (string, required): The email address of the user. Must be a valid email format.
- `password` (string, required): The password for the user. Must be at least 8 characters long.

### Example Request

```json
{
  "firstname": "John",
  "lastname": "Doe",
  "email": "john.doe@example.com",
  "password": "password123"
}

{
  "token": "your_jwt_token",
  "user": {
    "_id": "user_id",
    "firstname": "John",
    "lastname": "Doe",
    "email": "john.doe@example.com"
  }
}

{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "First Name must be at Least 3 characters long",
      "param": "firstname",
      "location": "body"
    },
    {
      "msg": "Password must be at 8 character long",
      "param": "password",
      "location": "body"
    }
  ]
}
```


# User Profile and Token Blacklisting Documentation
## This documentation provides details about the getUserProfile function and the TokenSchema model used in a MERN (MongoDB, Express.js, React.js, Node.js) stack application.

 ### Table of Contents
#### getUserProfile Function

TokenSchema Model

Usage

Dependencies

License

getUserProfile Function
Description
The getUserProfile function is an asynchronous middleware function that retrieves the authenticated user's profile information and sends it as a JSON response.

Code
javascript
Copy
export const getUserProfile = async (req, res, next) => {
  res.status(200).json(req.user);
  next();
};
Parameters
req: The request object containing the authenticated user's details.

res: The response object used to send the user's profile data.

next: A callback function to pass control to the next middleware.

Behavior
The function retrieves the authenticated user's data from req.user.

It sends a 200 OK response with the user's profile data in JSON format.

It calls next() to pass control to the next middleware (if any).

Example Response
json
Copy
{
  "_id": "64f1a2b3c4d5e6f7a8b9c0d",
  "email": "user@example.com",
  "firstname": "John",
  "lastname": "Doe"
}
TokenSchema Model
Description
The TokenSchema model is a Mongoose schema used to store blacklisted tokens. Tokens are stored in a MongoDB collection and automatically expire after 24 hours.

Code
javascript
Copy
import mongoose from "mongoose";

const blackListingTokenSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 86400, // 24 hours
  },
});

export const TokenSchema = mongoose.model("TokenSchema", blackListingTokenSchema);
Schema Fields
token:

Type: String

Required: true

Unique: true

Description: The JWT (JSON Web Token) that is blacklisted.

createdAt:

Type: Date

Default: Date.now

Expires: 86400 seconds (24 hours)

Description: The timestamp when the token was blacklisted. The document is automatically deleted after 24 hours.

Usage
This schema is used to blacklist tokens during user logout or token invalidation. For example:

javascript
Copy
await TokenSchema.create({ token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." });
Usage
1. Setting Up
Ensure you have the following dependencies installed:

mongoose: For MongoDB schema and model management.

express: For handling HTTP requests and responses.

2. Integrating getUserProfile
Import the getUserProfile function into your Express router.

Use it as a route handler for authenticated routes.

Example:

javascript
Copy
import { getUserProfile } from "./path/to/controller";
import { authUser } from "./path/to/middleware";

router.get("/profile", authUser, getUserProfile);
3. Integrating TokenSchema
Import the TokenSchema model into your authentication middleware or logout controller.

Use it to blacklist tokens during logout.

Example:

javascript
Copy
import { TokenSchema } from "./path/to/models";

export const logoutUser = async (req, res) => {
  const token = req.cookies.token || req.headers.authorization.split(" ")[1];
  await TokenSchema.create({ token });
  res.clearCookie("token");
  res.status(200).json({ message: "Logged out successfully" });
};
Dependencies
Mongoose: MongoDB object modeling for Node.js.

Express: Web framework for Node.js.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements.

This README provides a comprehensive guide to using the getUserProfile function and the TokenSchema model. Let me know if you need further assistance! 🚀