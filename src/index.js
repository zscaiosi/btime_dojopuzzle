const { app } = require('./config/server');
// Sets PORT accordingly to environment
const PORT = process.env.NODE_ENV === 'production' ? '80' : '8080';
// Instantiates server and listens to HTTP requests on PORT
app().listen(PORT, () => {
    console.log('Listening', PORT);
});