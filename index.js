var express = require('express'),
    app = express(),
    port = 7000,
    bodyParser = require('body-parser')

var postRoutes = require('./routes/posts');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
    res.send('Root Route Reached');
});

app.use('/api/posts', postRoutes);

app.listen(port, function(){
    console.log("App is running on Port " + port);
})