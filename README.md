# Country Explorer Backend

A Node.js + Express backend that fetches country data from REST Countries API.

## Features

- GET `/api/countries` - Returns list of all countries with name, flag, region, capital, population, and languages

## Tech Stack

- Node.js
- Express
- Axios
- dotenv

## Setup

```bash
npm install
npm run dev
```

## Environment Variables

Create a `.env` file for local development:

```
PORT=5000
COUNTRIES_API=https://restcountries.com/v3.1
```

For Render deployment, set these in the dashboard:

| Variable | Value |
|----------|-------|
| `COUNTRIES_API` | `https://restcountries.com/v3.1` |

## API

The frontend connects to this backend.
