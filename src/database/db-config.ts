import { createConnection } from 'typeorm';

/* Estabele conexao */
export const connectServerWithDb = async () => {
  const connection = await createConnection();
  console.log('Connection as open database!');

  /* Encerra conexao */
  process.on('SIGINT', () => {
    connection.close();
    console.log('Connection as closed database!');
  });
}