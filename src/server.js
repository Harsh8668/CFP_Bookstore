const express = require('express');
const app = express();
// Run the app by serving the static files
// in the dist directory
app.use(express.static('./dist/bookstore'));
// Start the app by listening on the default
// Heroku port
app.get('/*',(req,res)=>

res.sendFile('index.html',{root:'dist/bookstore/'}))
app.listen(process.env.PORT || 8080);