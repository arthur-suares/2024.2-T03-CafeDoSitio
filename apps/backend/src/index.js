import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectionDatabase from './database/db.js';
dotenv.config();

import router from './routes/index.js';

const port = process.env.PORT || 3000;
const app = express();

const allowedOrigins = [
  'http://localhost:3000'
];

const corsOptionsDelegate = function(req, callback) {
  let corsOptions;
  if(allowedOrigins.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true };
  } else {
    corsOptions = { origin: false };
  }
  callback(null, corsOptions);
};

app.use(cors(corsOptionsDelegate));
app.use(express.json());
app.use(router);
connectionDatabase();

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));