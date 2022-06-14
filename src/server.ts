import express, {Request, Response} from 'express';
import { router } from './routes';

const app = express();
app.use(express.json());

const port = 3333;

app.use(router);

app.listen(port, () => console.log('server online'))

