# User Registration Endpoint

## Endpoint
**POST** `/users/register`

## Description
This endpoint allows you to register a new user by providing the required user details. Data must pass validation checks before a new user is created.

## Request Data
The request body must be in JSON format and include the following fields:

- **fullname**: An object containing the user's names.
  - **firstname**: *String* (required) - Must be at least 3 characters long.
  - **lastname**: *String* (required) - Must be at least 3 characters long.

- **email**: *String* (required) - A valid email address (minimum 5 characters).

- **password**: *String* (required) - Must be at least 6 characters long.

### Example Request Body
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securePassword123"
}
```

## Response Status Codes

- **201 Created**: The user was successfully registered. The response includes the user object and a JWT token.

- **400 Bad Request**: The input data failed validation. The response includes an array of error messages detailing the validation issues.

## Example cURL Request
```bash
curl -X POST http://localhost:4000/users/register \
  -H "Content-Type: application/json" \
  -d '{
        "fullname": {
            "firstname": "John",
            "lastname": "Doe"
        },
        "email": "john.doe@example.com",
        "password": "securePassword123"
      }'
```

# User Login Endpoint

## Endpoint
**POST** `/users/login`

## Description
This endpoint allows a user to log in by providing valid credentials. It checks the provided email and password, and if they match the records, returns the user object along with a JWT token.

## Request Data
The request body must be in JSON format and include the following fields:

- **email**: *String* (required) - A registered email address.
- **password**: *String* (required) - The user's password.

### Example Request Body
```json
{
  "email": "john.doe@example.com",
  "password": "securePassword123"
}
```

## Response Status Codes

- **200 OK**: The user was successfully logged in. The response includes the user object and a JWT token.
- **401 Unauthorized**: The email or password is invalid. The response includes an error message.

## Example cURL Request
```bash
curl -X POST http://localhost:4000/users/login \
  -H "Content-Type: application/json" \
  -d '{
        "email": "john.doe@example.com",
        "password": "securePassword123"
      }'
```

# User Profile Endpoint

## Endpoint
**GET** `/users/profile`

## Description
This endpoint allows an authenticated user to retrieve their profile information. The request must include a valid JWT token in the Authorization header (or as a cookie) to verify the user's identity.

## Request Headers

- **Authorization**: Must be in the format `Bearer <token>`.

## Response Status Codes

- **200 OK**: The user profile was successfully retrieved. The response contains the user object.
- **401 Unauthorized**: The token is missing, invalid, or expired.

## Example cURL Request
```bash
curl -X GET http://localhost:4000/users/profile \
  -H "Authorization: Bearer <your_token>"
```

# User Logout Endpoint

## Endpoint
**GET** `/users/logout`

## Description
This endpoint allows an authenticated user to log out. It clears the token cookie and optionally blacklists the token to prevent further usage.

## Request Headers

- **Authorization**: Must be in the format `Bearer <token>` if applicable.

## Response Status Codes

- **200 OK**: User has been logged out successfully, and the token is invalidated.
- **401 Unauthorized**: The token is missing or invalid.

## Example cURL Request
```bash
curl -X POST http://localhost:4000/users/logout \
  -H "Authorization: Bearer <your_token>"
```

# Captain Registration Endpoint

## Endpoint
**POST** `/captain/register`

## Description
This endpoint allows you to register a new captain by providing the required captain details. The captain must provide valid personal information along with vehicle details.

## Request Data
The request body must be in JSON format and include the following fields:

- **fullname**: An object containing the captain's names.
  - **firstname**: *String* (required) - Must be at least 3 characters long.
  - **lastname**: *String* (required) - Must be at least 3 characters long.

- **email**: *String* (required) - A valid email address.

- **password**: *String* (required) - Must be at least 6 characters long.

- **vehicle**: An object containing the vehicle details.
  - **color**: *String* (required) - Must be at least 3 characters long.
  - **plate**: *String* (required) - Must be at least 3 characters long.
  - **capacity**: *Number* (required) - Must be an integer of at least 1.
  - **vehicleType**: *String* (required) - Must be one of the following: `car`, `bike`, `auto`.

### Example Request Body
```json
{
  "fullname": {
    "firstname": "Jane",
    "lastname": "Doe"
  },
  "email": "jane.doe@example.com",
  "password": "securePassword123",
  "vehicle": {
    "color": "Black",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

## Response Status Codes

- **201 Created**: The captain was successfully registered. The response includes the captain object and may include a JWT token if implemented.

- **400 Bad Request**: The input data failed validation. The response includes an array of error messages detailing the validation issues.

## Example cURL Request
```bash
curl -X POST http://localhost:4000/captain/register \
  -H "Content-Type: application/json" \
  -d '{
        "fullname": {
            "firstname": "Jane",
            "lastname": "Doe"
        },
        "email": "jane.doe@example.com",
        "password": "securePassword123",
        "vehicle": {
            "color": "Black",
            "plate": "ABC123",
            "capacity": 4,
            "vehicleType": "car"
        }
      }'
```

# Authentication Process

## Overview

Our application uses JSON Web Tokens (JWT) for authenticating both users and captains. Upon successful registration or login, a JWT token is generated using a secret key stored in the environment variable `JWT_SECRET`. This token is then sent to the client, typically stored as an HTTP-only cookie or included in the response. For subsequent requests to protected routes, clients must provide the token in the `Authorization` header in the format `Bearer <token>`.

## User Authentication Workflow

1. **Registration:**
   - **Endpoint:** `POST /users/register`
   - **Request Data:** Includes `fullname` (with `firstname` and `lastname`), `email`, and `password`.
   - **Process:** Upon successful registration, a JWT token is generated and sent along with the user details. The token can be stored in a cookie for future authentication.

2. **Login:**
   - **Endpoint:** `POST /users/login`
   - **Request Data:** Includes `email` and `password`.
   - **Process:** The server validates the credentials. If valid, a JWT token is generated and returned in the response (and optionally set as a cookie).

3. **Protected Routes:**
   - **Example Endpoint:** `GET /users/profile`
   - **Authentication:** These routes require the JWT token to be supplied either in the `Authorization` header or from an HTTP-only cookie. The authentication middleware verifies the token using `JWT_SECRET`. On failure, a `401 Unauthorized` response is returned.

4. **Logout:**
   - **Endpoint:** `GET /users/logout`
   - **Process:** Logging out invalidates the token (either by clearing the cookie or through token blacklisting, if implemented).

## Captain Authentication Workflow

1. **Registration:**
   - **Endpoint:** `POST /captain/register`
   - **Request Data:** Includes `fullname`, `email`, `password`, and `vehicle` details (`color`, `plate`, `capacity`, and `vehicleType`).
   - **Process:** A JWT token is generated upon successful registration and returned in the response.

2. **Login (if implemented):**
   - A similar process to user login may be used, where captains provide their `email` and `password`. Upon successful validation, a JWT token is generated and provided.

3. **Protected Routes:**
   - For any protected captain routes, the JWT token must be provided and is verified using the same authentication middleware employed for user endpoints.

## Security Considerations

- **Token Expiry:** Tokens should have an expiry time to enhance security; clients must fetch a new token upon expiration.
- **HTTP-only Cookies:** When storing tokens in cookies, use HTTP-only flags to prevent access via JavaScript.
- **Environment Variables:** Sensitive data like `JWT_SECRET` is stored in environment variables to prevent exposure in the codebase.
- **Input Validation:** All authentication steps enforce rigorous input validation (e.g., using express-validator) to prevent security breaches.

## Summary

Leveraging JWT for both user and captain authentication ensures secure and functional communication between clients and backend services. The process includes issuing tokens upon successful registration or login, requiring valid tokens for protected endpoints, and ensuring secure storage and transport of the tokens.
