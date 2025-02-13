import app from './app.js';

import config from '../config/http.js';

import { createServer as createHTTPServer } from 'http';

const server = createHTTPServer(app).listen(config.HTTP_PORT);

export default server;
