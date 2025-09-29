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
