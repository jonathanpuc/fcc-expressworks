/* Task: Write a server that reads a file, parses it to JSON and outputs the content
to the user.

The port is passed in process.argv[2].  The file name is passed in process.argv[3].

Respond with:

    res.json(object)

Everything should match the '/books' resource path.
*/

const express = require('express');
const fs = require('fs');
const port = process.argv[2];
const file = process.argv[3];

const app = express();

app.get('/books', (req, res) => {

   fs.readFile(file, (err, data) => {
       if (err) throw err;

       var object = JSON.parse(data);
       var str = JSON.stringify(object);
       res.end(str);
   });
});

app.listen(port);
