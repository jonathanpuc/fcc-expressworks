/* Task: Style your HTML from previous example with some Stylus middleware.

Your solution must listen on the port number supplied by process.argv[2].

The path containing the HTML and Stylus files is provided in process.argv[3]
(they are in the same directory).
*/

const express = require('express');
const bodyparser = require('body-parser');
const port = process.argv[2];
const path = process.argv[3];
const app = express();

app.use(express.static(path));
app.use(require('stylus').middleware(path + '/public'));

app.post('/form', (req,res) => {
    res.end(req.body.str.split('').reverse().join(''));
})

app.listen(port);
