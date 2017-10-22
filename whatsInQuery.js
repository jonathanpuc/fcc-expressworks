/* Task: Write a route that extracts data from query string in the GET '/search' URL
route, e.g. ?results=recent&include_tabs=true and then outputs it back to
the user in JSON format.
*/

const express = require('express');
const port = process.argv[2];
const app = express();

app.get('/search', (req,res) => {
    var queryString = req.query;
    res.send(JSON.stringify(queryString));
});

app.listen(port);
