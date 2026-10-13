# My DevOps App

A minimal Express application for practicing DevOps workflows. It provides a health endpoint and a simple API response, with no database, authentication, or frontend.

## Prerequisites

- Node.js 18 or newer
- npm (included with Node.js)

## Installation

From the project directory, install the dependencies:

```sh
npm install
```

## Start the application

```sh
npm start
```

The application listens on port `3000` by default. Set the `PORT` environment variable to use a different port.

## Test the endpoints

With the application running, make these requests in another terminal:

```sh
curl -i http://localhost:3000/health
curl -i http://localhost:3000/api
```

`/health` returns HTTP `200` and `{"status":"UP"}`. `/api` returns HTTP `200` and `{"message":"Hello from DevOps project"}`.

## Project files

- `server.js` defines the Express server, port configuration, and both endpoints.
- `package.json` contains the project metadata, Express dependency, and `npm start` command.
- `package-lock.json` records the exact installed dependency tree for repeatable installs.
- `.gitignore` excludes installed modules, environment files, and logs from Git.
- `README.md` documents prerequisites, setup, startup, and endpoint checks.