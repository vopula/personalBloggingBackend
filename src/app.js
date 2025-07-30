// const fastify = require('fastify')({ logger: false });
// const healthRoutes = require('./routes/healthRoute');

// async function buildApp() {
//     fastify.register(require('@fastify/cors'));
//     fastify.register(healthRoutes, {prefix: '/api/v1'});
//     return fastify;
// }

// module.exports = buildApp;


const fastify = require('fastify');
const cors = require('@fastify/cors');
const app = fastify({ logger: false });

app.register(cors, {origin: true, methods: ['GET', 'POST', 'PUT', 'DELETE']});
app.register(require('./routes/articleRoute'), {prefix: '/api/v1/post'});

module.exports = app;