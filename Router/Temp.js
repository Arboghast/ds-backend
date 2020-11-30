const express = require('express');
const router = express.Router();
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: '34.70.48.83',
  user: 'a',
  password: 'a',
  database: 'temp'
})

router.get('/',  (req,res) => {
 
    connection.connect();

    connection.query('SELECT Text FROM prompts WHERE Number = 1',function (err,table) {
        if (err) throw err

        res.send(table);

    });

    connection.end()
})

//POST - Adds a user to the Users Table
router.post('/addUser', (req,res) => {
    //{id: ip&mac-based hash}
    connection.connect();

    connection.query('INSERT INTO user (User) VALUES (' + req.body.id + ")", function (err,entry) {
        if (err) throw err
    });

    connection.end();
    
});


//DELETE - Deletes a user from the Users Table
router.delete('/deleteUser',(req,res) => {
    
    connection.connect();

    connection.query('DELETE FROM user WHERE User=' + req.body.id, function (err,rows,fields){
        if(err) throw err
    });

    connection.end();
    
});

//POST - Adds a writing prompt to the Prompt Table 
router.post('/addPrompt', (req,res) => {

    let data = req.body;
    connection.connect();
    connection.query('INSERT INTO prompt (Number,Text) VALUE (' + data.number +','+ data.prompt + ")",function (err,result){
        if(err) throw err

    });
    connection.end();

});

//DELETE - Deletes a writing prompt from the Prompt Table
router.delete('/deletePrompt', (req,res) => {

    connection.connect();
    connection.query('DELETE FROM prompt WHERE Text=' + req.body.prompt,function (err,result){
        if(err) throw err

    });
    connection.end();

});

//GET - Returns a list of results sorted by category and time period
router.get('/scoreboard', (req,res) => {
    req.query.filterMethod; //contains the value of the users' chosen sortingMethod
    req.query.timePeriod;  //contains the value of the users' chosen timeperiod
});

module.exports = router;