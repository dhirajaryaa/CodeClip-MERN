import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

export const app = express();

// Middleware

// express.json() parses the request body and populates req.body
app.use(express.json({ limit: process.env.LIMIT }));

// express.urlencoded() parses the request body and populates req.body
app.use(
  express.urlencoded({
    limit: process.env.LIMIT,
    extended: true,
  })
);

// cookie-parser() parses the request cookies and populates req.cookies
app.use(cookieParser());

// cors() enables Cross-Origin Resource Sharing
app.use(
  cors({
    origin: process.env.ALLOW_ORIGIN,
    credentials: true,
  })
);

// express.static() serves static files from the 'public' directory
app.use(express.static('public'));
