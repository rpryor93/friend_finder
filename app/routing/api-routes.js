var friendData = require('../data/friends.js');
var path = require('path');


module.exports = function(app){


    app.get('/api/friends', function(req, res){
        res.json(friendData);
    });

    //post that receives the form from survey.html
    app.post('/api/friends', function(req, res){

        //initialize empty array to hold converted numbers from strings
        var tempArray = [];
        // console.log(req.body);
        //loop through the user survey answers
        for(var i = 0; i < req.body.scores.length; i++){
            //convert to a number and push to tempArray
            tempArray.push(parseInt(req.body.scores[i]));
        }

        //change req.body.scores to tempArray (the converted numbers)
        req.body.scores = tempArray;

        //initialize object to hold potential matches
        //will be overwritten as closer matches are found
        var match = {
            name: "",
            photo: "",
            total: 50
        };

        //loop through objects in friends.js
        for(var i = 0; i < friendData.length; i++){
            //console.log(friendData[i].scores);
            //store scores in checkArray
            var checkArray = friendData[i].scores;

            //gets the difference between user scores(answers) and stored scores
            var sum = tempArray.map(function (num, idx) {
                return Math.abs(num - checkArray[idx]); //returns each number without negatives
            });
            //console.log(friendData[i].name);
            //console.log(sum);

            //gets the sum of the differences from above
            var absoluteSum = sum.reduce(add, 0);

            function add(a, b) {
                return a + b;
            }

            //console.log(absoluteSum);

            //checks if the current score found is lower than total currently stored in match object
            //if it is lower the current match is stored in the match object
            if(absoluteSum <= match.total){
                match.name = friendData[i].name;
                match.photo = friendData[i].photo;
                match.total = absoluteSum;
            }
            //console.log(match);

        }
        //user survey inputs are pushed to friends.js
        friendData.push(req.body);
        //match found is sent back to survey.html to display
        res.json(match);

    });

}