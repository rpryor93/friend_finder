
var path = require('path');

//allows access to server.js
module.exports = function(app){

    //get request that displays the survey.html file
    app.get('/survey', function(req, res){
        res.sendFile(path.join(__dirname + '/../public/survey.html'));
    });

    //if no matching route is found default to home.html
    app.use(function(req, res){
        res.sendFile(path.join(__dirname + '/../public/home.html'));
    });

}