# playground

An AI playground repo.

## Getting Started

This project sets up a Node.js environment that combines **Express** and **LoopBack 4** with a MongoDB datasource.

### Install dependencies

```bash
npm install
```

### Run the server

```bash
npm start
```

The Express application is available at `http://localhost:3000/` and the LoopBack 4 API is mounted at `/api`.

Set the `MONGO_URL` environment variable to configure the MongoDB connection. It defaults to `mongodb://localhost:27017/testdb`.
