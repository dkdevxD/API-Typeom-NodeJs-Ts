import express, { json } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { connectServerWithDb } from './database/db-config';
import {usersRouter} from './routes/users-routes';

/* Cria aplicação */
export const app = express();

/* Libera o acesso externo */
app.use(cors());

/* Interpreta em json */
app.use(json())
app.use(bodyParser.json());

/* Conexão com o banco de dados */
connectServerWithDb();

/* Config rotas */
app.use('/', usersRouter);