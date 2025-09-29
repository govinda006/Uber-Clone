# User Authentication API

## Register User
**POST** `/users/register`

Registers a new user with validated data.

**Request Body** (JSON):
- `fullname`: Object
  - `firstname`: String (min 3 chars, required)
  - `lastname`: String (min 3 chars, required)
- `email`: String (valid email, min 5 chars, required)
- `password`: String (min 6 chars, required)

**Example**:
```json
{
  "fullname": { "firstname": "John", "lastname": "Doe" },
  "email": "john.doe@example.com",
  "password": "securePassword123"
}
```

**Responses**:
- **201 Created**: Returns user object and JWT token.
- **400 Bad Request**: Validation errors with error messages.

**cURL**:
```bash
curl -X POST http://localhost:4000/users/register -H "Content-Type: application/json" -d '{"fullname":{"firstname":"John","lastname":"Doe"},"email":"john.doe@example.com","password":"securePassword123"}'
```

## Login User
**POST** `/users/login`

Authenticates a user and returns a JWT token.

**Request Body** (JSON):
- `email`: String (registered email, required)
- `password`: String (required)

**Example**:
```json
{ "email": "john.doe@example.com", "password": "securePassword123" }
```

**Responses**:
- **200 OK**: Returns user object and JWT token.
- **401 Unauthorized**: Invalid credentials.

**cURL**:
```bash
curl -X POST http://localhost:4000/users/login -H "Content-Type: application/json" -d '{"email":"john.doe@example.com","password":"securePassword123"}'
```

## Get User Profile
**GET** `/users/profile`

Retrieves authenticated user's profile.

**Headers**:
- `Authorization`: `Bearer <token>`

**Responses**:
- **200 OK**: Returns user object.
- **401 Unauthorized**: Invalid or missing token.

**cURL**:
```bash
curl -X GET http://localhost:4000/users/profile -H "Authorization: Bearer <your_token>"
```

## Logout User
**GET** `/users/logout`

Logs out user, invalidates token.

**Headers**:
- `Authorization`: `Bearer <token>` (if applicable)

**Responses**:
- **200 OK**: Logout successful.
- **401 Unauthorized**: Invalid or missing token.

**cURL**:
```bash
curl -X GET http://localhost:4000/users/logout -H "Authorization: Bearer <your_token>"
```

# Captain Authentication API

## Register Captain
**POST** `/captains/register`

Registers a new captain with personal and vehicle details.

**Request Body** (JSON):
- `fullname`: Object
  - `firstname`: String (min 3 chars, required)
  - `lastname`: String (min 3 chars, required)
- `email`: String (valid email, required)
- `password`: String (min 6 chars, required)
- `vehicle`: Object
  - `color`: String (min 3 chars, required)
  - `plate`: String (min 3 chars, required)
  - `capacity`: Number (integer, min 1, required)
  - `vehicleType`: String (`car`, `bike`, `auto`, required)

**Example**:
```json
{
  "fullname": { "firstname": "Jane", "lastname": "Doe" },
  "email": "jane.doe@example.com",
  "password": "securePassword123",
  "vehicle": { "color": "Black", "plate": "ABC123", "capacity": 4, "vehicleType": "car" }
}
```

**Responses**:
- **201 Created**: Returns captain object and JWT token.
- **400 Bad Request**: Validation errors with error messages.

**cURL**:
```bash
curl -X POST http://localhost:4000/captains/register -H "Content-Type: application/json" -d '{"fullname":{"firstname":"Jane","lastname":"Doe"},"email":"jane.doe@example.com","password":"securePassword123","vehicle":{"color":"Black","plate":"ABC123","capacity":4,"vehicleType":"car"}}'
```

## Login Captain
**POST** `/captains/login`

Authenticates a captain, returns JWT token and sets HTTP-only cookie.

**Request Body** (JSON):
- `email`: String (registered email, required)
- `password`: String (min 6 chars, required)

**Example**:
```json
{ "email": "jane.doe@example.com", "password": "securePassword123" }
```

**Responses**:
- **200 OK**: Returns captain object and JWT token.
- **400 Bad Request**: Validation errors or invalid credentials (`"message": "Invalid email or password"`).

**Example Response (Success)**:
```json
{
  "token": "<jwt_token>",
  "captain": {
    "_id": "<captain_id>",
    "fullname": { "firstname": "Jane", "lastname": "Doe" },
    "email": "jane.doe@example.com",
    "vehicle": { "color": "Black", "plate": "ABC123", "capacity": 4, "vehicleType": "car" }
  }
}
```

**cURL**:
```bash
curl -X POST http://localhost:4000/captains/login -H "Content-Type: application/json" -d '{"email":"jane.doe@example.com","password":"securePassword123"}'
```

## Get Captain Profile
**GET** `/captains/profile`

Retrieves authenticated captain's profile.

**Headers**:
- `Authorization`: `Bearer <token>` (optional if token in cookie)

**Responses**:
- **200 OK**: Returns captain object.
- **401 Unauthorized**: Invalid or missing token.

**Example Response**:
```json
{
  "captain": {
    "_id": "<captain_id>",
    "fullname": { "firstname": "Jane", "lastname": "Doe" },
    "email": "jane.doe@example.com",
    "vehicle": { "color": "Black", "plate": "ABC123", "capacity": 4, "vehicleType": "car" }
  }
}
```

**cURL**:
```bash
curl -X GET http://localhost:4000/captains/profile -H "Authorization: Bearer <your_token>"
```

## Logout Captain
**GET** `/captains/logout`

Logs out captain, clears cookie, and blacklists token.

**Headers**:
- `Authorization`: `Bearer <token>` (optional if token in cookie)

**Responses**:
- **200 OK**: `{ "message": "Logged out successfully" }`
- **401 Unauthorized**: Invalid or missing token.

**cURL**:
```bash
curl -X GET http://localhost:4000/captains/logout -H "Authorization: Bearer <your_token>"
```

# Authentication Process

## Overview
Uses JSON Web Tokens (JWT) for user and captain authentication. Tokens are generated with `JWT_SECRET` on successful registration/login, sent as HTTP-only cookies or in responses. Protected routes require `Authorization: Bearer <token>` or cookie.

## User Workflow
1. **Register**: `POST /users/register` - Creates user, returns JWT.
2. **Login**: `POST /users/login` - Validates credentials, returns JWT.
3. **Protected Routes**: e.g., `GET /users/profile` - Requires valid JWT.
4. **Logout**: `GET /users/logout` - Invalidates token/cookie.

## Captain Workflow
1. **Register**: `POST /captain/register` - Creates captain, returns JWT.
2. **Login**: `POST /captain/login` - Validates credentials, returns JWT, sets cookie.
3. **Protected Routes**: e.g., `GET /captain/profile` - Requires valid JWT.
4. **Logout**: `GET /captain/logout` - Clears cookie, blacklists token.

## Security
- **Token Expiry**: Tokens expire for security.
- **HTTP-only Cookies**: Prevent JavaScript access.
- **Environment Variables**: `JWT_SECRET` stored securely.
- **Validation**: Uses `express-validator` for input validation.

## Summary
JWT-based authentication ensures secure client-server communication with validated inputs, token-based access to protected routes, and secure token storage.
