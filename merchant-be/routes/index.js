const router = require('express').Router();

// vars used to tell required packages
var express = require('express');
var app = express();
var fs = require("fs");

//server creation , port 8081
var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})

/* GET home page. */
router.get('/', (req, res, next) => {
  res.status(200).send('Home page!');
});

// list items is the path like google.com/listItems with encoding and other bs
app.get('/listItems', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})



//sample one
Walmart = {
    "Walmart" : {
        "items" : [
          {
            "UPC" : 1010100,
            "Name" : "REDBULL",
            "Price" : 10.00,
            "Quantity" : 1
          },
          {
            "UPC" : 102353456,
            "Name" : "Donuts",
            "Price" : 5.00,
            "Quantity" : 10
          },
          {
            "UPC" : 10900356,
            "Name" : "Coffee",
            "Price" : 15.14,
            "Quantity" : 5
          }
        ]
    }
}
module.exports = router;
