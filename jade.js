/* Task: Create an Express.js app with a home page rendered by Jade template engine.

The homepage should respond to /home.

The view should show the current date using toDateString.
*/

const express = require('express');
const port = process.argv[2];
const jade = process.argv[3];
const app = express();

app.set('views', jade)
app.set('view engine', 'jade');

app.get('/home', (req,res) => {
    res.render(jade, {date: new Date().toDateString()} )
})

app.listen(port);
