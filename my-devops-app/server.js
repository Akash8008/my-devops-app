const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/health', (request, response) => {
  response.status(200).json({ status: 'UP' });
});

app.get('/api', (request, response) => {
  response.status(200).json({ message: 'Hello from DevOps project' });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});