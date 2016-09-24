// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================


var friendArray = [
    {
        name: "Crystal Margaret",
        photo: "https://pbs.twimg.com/profile_images/717885900970074112/8wqHbm7c.jpg",
        scores: [ 5, 5, 1, 2, 5, 1, 5, 2, 5, 5 ]
    },
    {
        name: "Broy Edwards",
        photo: "http://www.thepoke.co.uk/wp-content/uploads/2014/04/background-photo-7.png",
        scores: [ 5, 4, 5, 1, 5, 1, 5, 1, 1, 5 ]
    },
    {
        name: "Hugh Willis",
        photo: "http://static.eharmony.com/dating-advice/wp-content/uploads/2013/06/onlinedatingprofilephotodont.jpg",
        scores: [ 1, 1, 5, 3, 2, 3, 1, 5, 3, 2 ]
    }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendArray;