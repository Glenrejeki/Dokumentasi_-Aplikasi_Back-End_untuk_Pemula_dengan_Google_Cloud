const Hapi = require('@hapi/hapi');

const init = async () => {
  const server = new Hapi.Server({
    host: 'localhost',
    port: 3000,
  });

  server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      return 'Hello, World!';
    },
  });

  const cpuInformation = process.memoryUsage();
  console.log('Memory Usage:', cpuInformation);

  console.log('NODE_ENV:', process.env.NODE_ENV);
  console.log('Server host:', server.info.host);

  // Tampilkan argumen baris perintah
  console.log('Arguments:', process.argv.slice(2));

  await server.start();
  console.log(`Server running on ${server.info.uri}`);
};

init().catch((err) => {
  console.error(err);
  process.exit(1);
});