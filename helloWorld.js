/* Task: Create an Express.js app that outputs "Hello World!" when somebody goes to /home.

The port number will be provided to you by expressworks as the first argument of
the application, ie. process.argv[2].
*/

const express = require('express');
const port = process.argv[2];
const app = express();



app.get('/home', (req,res) => {
    res.end('Hello World!')
})

app.listen(port);
