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
router.get('/', async (req,res) => {

    await Prompt.findOne({order:sequelize.random()})
        .then(encounter => {res.status(200).send(encounter.prompt)})
        .catch(err => {res.sendStatus(400)});

})

//POST - Adds a user to the Users Table
router.post('/addUser',async (req,res) => {
    //{id: ip&mac-based hash}
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
router.post('/addPrompt',async (req,res) => {

    let data = req.body;
    let idnum = Math.floor(Math.random() * 1000);
    while(await Prompt.findByPk(idnum) !== null){
        idnum = Math.floor(Math.random * 1000);
    }
    await Prompt.create({

        id:idnum,
        prompt: data.Text

    })
    .then(res.sendStatus(200))
    .catch(err => res.status(400).send(err));

});

//DELETE - Deletes a writing prompt from the prompts Table
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