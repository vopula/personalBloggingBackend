require('dotenv').config();
const app = require('./app');

console.log('[DEBUG] Is app defined?', typeof app); // should be 'object'
console.log('[DEBUG] Does app.listen exist?', typeof app?.listen); // should be 'function'

// Define banner output
function printStartupBanner(port) {
    const line = '='.repeat(50);
    console.log('\n' + line);
    console.log('🚀 Fastify Server Started');
    console.log(`🌐 Listening on: http://localhost:${port}`);
    console.log(`📦 Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log(`🕒 Started at: ${new Date().toLocaleString()}`);
    console.log(line + '\n');
}

// Launch Fastify app
(async () => {
    try {
        console.log('[DEBUG] BACKEND_PORT =', process.env.BACKEND_PORT);
        await app.listen({ port: 3000, host: '0.0.0.0' });
        printStartupBanner(process.env.BACKEND_PORT);
    } catch (err) {
        console.error('🔥 Fastify failed to start. The Error is', err);
        process.exit(1);
    }
})();