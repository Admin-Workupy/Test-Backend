import '../config/index.js';

import express from 'express';

import * as Middlewares from '../api/middlewares/index.js';
import * as Routes from '../api/routes/index.js';

const app = express();

app.use(Middlewares.BodyParser, Middlewares.CORS);

app.use(Routes.user);

export default app;
