var express = require('express');
var request = require('request');
var app = express();
var cors = require('cors');
var Yelp = require('yelp');

app.use(cors()); //allows overriding cross origin policy (use npm install if needed)

app.get('/test', function(req, res){ // listens for request on /api route
 console.log('working!');
 res.send('working!'); // if no errors, send the body of data back to front end
});

/* PUT YOUR CODE BETWEEN COMMENTS */

app.get('/search', function(req, res){
  console.log('testing');

var yelp = new Yelp({
  consumer_key: 'Hzr3VSFscgB31A5BkRm6Eg',
  consumer_secret: 'hTU57lOnqFmc-inxI4-8V291QJ0',
  token: 'enveednxnepSefZxKyfjN_iZ4UW9qwAs',
  token_secret: 'yuI_ubJANjmQw8fuVfoBp3ODyEQ',
});

var gluten_free_restaurants  = req.query.gluten_free_restaurants;
var greenville_sc = req.query.greenville_sc;

yelp
  .search({ term: 'Gluten Free Restaurants', location: 'Greenville SC' })
  .then(function (data){
    res.send(data);
  }).catch(console.error);
});

/* PUT YOUR CODE ABOVE THIS COMMENT */

var port = process.env.PORT || 3000;
app.listen(port);
console.log('Server running on port 3000');


/* BreweryDB API Example */

// app.get('/api', function(req, res){ // listens for request on /api route
//   var lat = req.query.lat; // grabs lat and lng queries from the request object
//   var lng = req.query.lng;
//   request('https://api.brewerydb.com/v2/search/geo/point?lat=' + lat + '&lng=' + lng + '&type=beer&hasImages=Y&key=72a751214ab8b53056ac0a6d8376dc2d', function (error, response, body) { // api url
//     if (!error && response.statusCode === 200) {
//       console.log('beer');
//       res.send(body); // if no errors, send the body of data back to front end
//     }
//    });
// });
