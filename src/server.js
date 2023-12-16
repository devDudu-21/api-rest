import app from './app';
import 'dotenv/config';

const port = process.env.APP_PORT;
app.listen(port);
