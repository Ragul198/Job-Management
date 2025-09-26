
# Job Management Backend

## Overview
Node.js Express REST API backend for managing job listings. Connects to MongoDB and exposes API endpoints for frontend consumption.

## Features
- Create and list jobs.
- Splits job description into succinct lines.
- Sets default fields like work mode based on location.
- Includes input validation and error handling.
- Enables CORS for frontend integration.

## Technologies
- Node.js, Express
- MongoDB with Mongoose
- dotenv for managing secrets
- cors middleware to solve cross-origin issues

## Environment Variables
Create `.env` file with:
MONGODB_URI=<your-mongo-connection-string>
PORT=5000

text

## Running Locally
npm install
node server.js

text

## API Routes
- `GET /jobs` - get all jobs
- `POST /jobs` - add new job

## Notes
- Use connection pooling for MongoDB for performance.
- Deploy backend suitable for scale and low latency.
- Add CORS configuration to allow frontend domain.
