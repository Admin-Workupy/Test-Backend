import bodyParser from 'body-parser';

const BodyParser = bodyParser.json({ limit: '50mb' });

export { BodyParser };
