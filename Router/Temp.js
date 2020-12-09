const express = require('express');
const router = express.Router();

const db = require('./database');
const User = require('../Models/User');
const Prompt = require('../Models/Prompt');
const { sequelize } = require('../Models/User');

//Test connection
db.authenticate()
    .then(() => console.log("Database connected."))
    .catch(err => console.log(err));


//GET - Gets a random prompt from prompts table
//localhost:8000/prompt sends back a random prompt from the db
//Takes 1 entry from the top in random order sends 200 if completed
//and 400 is there was an error.
router.get('/prompt',(req,res) => {

    Prompt.findOne({order:sequelize.random()})
        .then(encounter => {res.status(200).send(encounter.prompt)})
        .catch(err => {res.sendStatus(400)});

})

//POST - Adds a user to the Users Table
//localhost:8000/addUser Generates a random number used to identify an username
//and then checks the if the username is already in the database. then sends back
//a status of 422 Name taken, if the user does not exist then create it and send back a status of 200
//otherwise catch the error and send it.
router.post('/addUser',async (req,res) => {
    let bod = req.body;
    let idnum = Math.floor(Math.random() * 100000000);
    while(await User.findByPk(idnum) !== null){
        idnum = Math.floor(Math.random * 100000000);
    }
    await User.findOne({where: {username: bod.Username}})
        .then(async name => {

            if(name !== null){

                res.status(422).send("Name taken");

            }
            else{

                await User.create({

                    id:idnum,
                    username:bod.Username

                });
                res.sendStatus(200);

            }

        })
        .catch(err => {

            res.status(400).send(err);

        });
    
});


//DELETE - Deletes a user from the Users Table
//localhost:8000/deleteUser Searches the database for the username provided by 
//the front end, if the user is found then delete that username from the database and send status 200.
//if not found send 404 and 400 for errors along with the error recieved.
router.delete('/deleteUser',async (req,res) => {

    await User.findOne({where: {username: req.body.Username}})
        .then(async name => {

            if(name != null){

                await User.destroy({where: {Username: req.body.Username}});
                res.sendStatus(200);

            }
            else{
                res.sendStatus(404);
            }

        })
        .catch(err => res.status(400).send(err));
});

//POST - Adds a writing prompt to the Prompt Table 
//localhost:8000/addPrompt accepts a prompt and inserts it into the database.
//creates a unique id and accepts the text and language of the codeing prompt.
//sends 200 if success and 400 if error.
router.post('/addPrompt',async (req,res) => {

    let data = req.body;
    let idnum = Math.floor(Math.random() * 1000);
    while(await Prompt.findByPk(idnum) !== null){
        idnum = Math.floor(Math.random * 1000);
    }
    await Prompt.create({

        id:idnum,
        prompt: data.Text,
        language: data.Language

    })
    .then(res.sendStatus(200))
    .catch(err => res.status(400).send(err));

});

//DELETE - Deletes a writing prompt from the prompts Table
//localhost::8000/deletePrompt finds the prompt and deletes it. accepts an id.
//if the prompt is not found then sends 404 and 200 if success, otherwise sends error 400.
router.delete('/deletePrompt', async (req,res) => {

    let data = req.body;
    await Prompt.findByPk(data.id)
        .then(async text => {
            if(text != null){

                await Prompt.destroy({where: {id: data.id}});
                res.sendStatus(200);

            }
            else{
                res.sendStatus(404);
            }

        })
        .catch(err => res.status(400).send(err));


});

//GET - Returns a list of results sorted by category and time period
router.get('/scoreboard', (req,res) => {
    let data = req.query.filterMethod; //contains the value of the users' chosen sortingMethod
    let time =req.query.timePeriod;  //contains the value of the users' chosen timeperiod
    res.send(data + " " +time);
});

module.exports = router;