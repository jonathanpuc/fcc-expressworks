/* Task: Apply static middleware to serve index.html file without any routes.

Your solution must listen on the port number supplied by process.argv[2].

The index.html file is provided and usable via the path supplied by
process.argv[3].
*/

const express = require('express');
const port = process.argv[2];
const file = process.argv[3];
const app = express();

app.use(express.static(file));

app.listen(port);
