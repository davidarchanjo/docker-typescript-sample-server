import express, { Response } from 'express';

const app = express();
const port = 8080;

app.get('/', (_, res: Response) => {
  res.send('🚀 Hello World from TypeScript 🚀');
});

app.listen(port, () => {
  console.log(`Application is listening at http://localhost:${port}`);
});