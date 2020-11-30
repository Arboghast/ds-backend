const express = require('express');
const router = express.Router();
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: '34.70.48.83',
  user: 'a',
  password: 'a',
  database: 'temp'
})
connection.connect();
//POST - Adds a user to the Users Table
router.post('/addUser', (req,res) => {
    //{id: ip&mac-based hash}
    connection.query("INSERT INTO User (User) VALUES ('" + req.body.id + "')", function (err,entry) {
        if (err) throw err

        console.log("user created");
        res.sendStatus(200);
    });

    
});


//DELETE - Deletes a user from the Users Table
router.delete('/deleteUser',(req,res) => {

    connection.query("DELETE FROM User WHERE User='" + req.body.id + "'", function (err,rows,fields){
        if(err) throw err

        console.log("user deleted");
        res.sendStatus(200);
    });
    
});

//POST - Adds a writing prompt to the Prompt Table 
router.post('/addPrompt', (req,res) => {

    let data = req.body;
    connection.query("INSERT INTO Prompt (Number, Text) VALUES (" + data.Number +",'"+ data.Text + "');",function (err){
        if(err) throw err

        console.log("Prompt inserted");
        res.sendStatus(200);
    });

});

//DELETE - Deletes a writing prompt from the Prompt Table
router.delete('/deletePrompt', (req,res) => {

    connection.query("DELETE FROM Prompt WHERE Text=" + "'" + req.body.Text + "'",function (err){
        if(err) throw err

        console.log("Prompt deleted");
        res.sendStatus(200);
    });

});

//GET - Returns a list of results sorted by category and time period
router.get('/scoreboard', (req,res) => {
    req.query.filterMethod; //contains the value of the users' chosen sortingMethod
    req.query.timePeriod;  //contains the value of the users' chosen timeperiod
});

module.exports = router;
