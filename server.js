const express = require('express')
const app = express()
const port = 3000
var path = require("path")
var friendData = require("../redniT/app/data/friends")
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/home', (req, res) => res.sendFile(path.join(__dirname, './app/public', 'survey.html')));

app.post("/bestmatch", function (req, res) {
    console.log("-------")
    console.log(req.body)
    var newFriendTotal = 0
    var friendRoom = [];
    
    console.log("total: " + newFriendTotal)
  });

  function findFriend (){
    for (a=0; a<req.body.length; a++){
      for(i=0; i<req.body.scores.length; i++){
        friendroom += req.body[i];
        newFriendTotal += parseInt(req.body.scores[i])
        var compatibility = newFriendTotal - anwerValue.compScore
        var compatibility2 = newFriendTotal[i + 1] - anwerValue.compScore
    }
    if (compatibility < compatibility2){
      compatibility2 = compatibility
    }
    else (alert(req.body))
    }
  }
console.log(friendData);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

