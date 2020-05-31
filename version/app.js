const express = require('express');
app = express();

var response;

app.get('/', function (req, res) {

    //response = 'This is version 1 of the app.' + '\n';
    response = 'This is version 3 of the app made by Myrembri at 31/05/2020 13:56pm.' + '\n';


    //send the response to the client
    res.send(response);

});

app.listen(8080, function () {
  console.log('Server listening on port 8080...');
});
