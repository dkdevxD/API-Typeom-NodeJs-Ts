import { app } from './app';

const port = 3000;
const server = app.listen(port, () => console.log(`App listenning on port ${port}`));

/* Quando o processo é finalizado, o app finaliza tambémn  */
process.on('SIGINT', () => {
  server.close();
  console.log('App finalizado');
});