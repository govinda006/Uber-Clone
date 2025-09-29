# User Registration Endpoint

## Endpoint
**POST** `/user/register`

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
curl -X POST http://localhost:4000/user/register \
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
