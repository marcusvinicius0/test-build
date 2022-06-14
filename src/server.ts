import express, {Request, Response} from 'express';
const cors = require('cors');
import { router } from './routes';

const app = express();
app.use(express.json());
app.use(cors);



app.use(router);

app.listen(process.env.PORT || 3000, () => console.log('server online'))

