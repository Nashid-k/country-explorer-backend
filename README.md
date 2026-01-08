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

Create a `.env` file:

```
PORT=5000
COUNTRIES_API=https://restcountries.com/v3.1
```

## API

The frontend connects to this backend at `http://localhost:5000`.
