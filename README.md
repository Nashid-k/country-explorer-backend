# Country Explorer API — Express Proxy

A small Express 5 API that retrieves country data from the REST Countries service, normalizes the response and exposes search, region-filtering and pagination to the frontend.

## Endpoints

| Method | Endpoint | Purpose |
| --- | --- | --- |
| GET | `/api/countries` | List countries with `page`, `limit`, `search` and `region` query parameters |
| GET | `/api/countries/:name` | Retrieve details for a country by name |

The API maps country names, flags, regions, capitals, populations, languages, currencies, borders and area into a frontend-friendly response.

## Stack

- Node.js
- Express 5
- Axios
- REST Countries API
- dotenv

## Run locally

```bash
git clone https://github.com/Nashid-k/country-explorer-backend.git
cd country-explorer-backend
npm install
cp .env.example .env
npm run dev
```

The API listens on port `5000` by default.

## Environment

| Variable | Purpose |
| --- | --- |
| `PORT` | API port (defaults to 5000) |

No database or JWT secret is required by the current implementation.

## Scripts

- `npm run dev` — start with Nodemon
- `npm start` — start the API
