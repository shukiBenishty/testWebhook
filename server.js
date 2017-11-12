var express = require('express');

var app = express();

app.get('/payload', function(req, res) {
  console.log('Received');

  res.send(200, 'received');
})

app.listen(4567, function() {

  console.log('Listeting to port 4567');
});
