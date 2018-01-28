var express = require('express');
var bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

// start of requests
//models
const locations = require('./models/Location');

app.post('/locations/', function(req, res) {
  const newLocation = req.body;
  locations.create(newLocation).then( function(createdLocation) {
    res.json(createdLocation);
  })
});

app.get('/locations/', function(req, res) {
  locations.get().then( function(foundLocations) {
    res.json(foundLocations);
  })
});

app.delete('/locations/:id', function(req, res) {
  const locationId = req.params.id;
  locations.remove(locationId).then( function(deletedLocation) {
    res.json(deletedLocation);
  });
})



// end of requests
//
app.listen(3500);