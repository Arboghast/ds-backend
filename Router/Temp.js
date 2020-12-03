const express = require('express');
const router = express.Router();

const db = require('./database');
const User = require('../Models/User');
//const db2 = require('./database2');
//const Prompt = require('../Models/User');

//Test connection
db.authenticate()
    .then(() => console.log("Database connected."))
    .catch(err => console.log(err));

/*
db2.authenticate()
    .then(() => console.log("Database connected."))
    .catch(err => console.log(err));
*/
/*
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: '35.224.12.41',
  user: 'root',
  password: '12345',
  database: 'Users',
})


connection.connect();
*/


//POST - Adds a user to the Users Table
router.post('/addUser',async (req,res) => {
    //{id: ip&mac-based hash}
    let bod = req.body;
    await User.findByPk(bod.Username)
        .then(async name => {

            if(name !== null){

                res.status(422).send("Name taken");

            }
            else{

                await User.create({

                    Username: bod.Username

                });
                res.sendStatus(200);

            }

        });
    
});


//DELETE - Deletes a user from the Users Table
router.delete('/deleteUser',async (req,res) => {

    await User.findByPk(req.body.Username)
        .then(async name => {

            if(name != null){

                await User.destroy({where: {Username: req.body.Username}})
                res.sendStatus(200);
                console.log("User deleted");

            }
            else{
                res.sendStatus(404);
            }

        })
});

//POST - Adds a writing prompt to the Prompt Table 
router.post('/addPrompt', (req,res) => {

    let data = req.body;
    connection.query("INSERT INTO Prompts (Number, Text) VALUES (" + data.Number +",'"+ data.Text + "');",function (err){
        if(err) throw err

        console.log("Prompt inserted");
        res.sendStatus(200);
    });
    /*

    let data = req.body;
    await Prompt.create({

        Number: data.Number,
        Text: data.Text

    })
    .then(res.sendStatus(200));

    */

});

//DELETE - Deletes a writing prompt from the Prompt Table
router.delete('/deletePrompt', (req,res) => {

    connection.query("DELETE FROM Prompts WHERE Text=" + "'" + req.body.Text + "'",function (err){
        if(err) throw err

        console.log("Prompt deleted");
        res.sendStatus(200);
    });

});

//GET - Returns a list of results sorted by category and time period
router.get('/scoreboard', (req,res) => {
    let data = req.query.filterMethod; //contains the value of the users' chosen sortingMethod
    let time =req.query.timePeriod;  //contains the value of the users' chosen timeperiod
    res.send(data + " " +time);
});

module.exports = router;