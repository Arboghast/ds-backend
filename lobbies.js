const express = require('express');
const router = express.Router();

//GET localhost:port/api/lobbies/
router.get('/',(req,res) => {
	
)}

//GET localhost:3000/api/lobbies/1
router.get('/startGame/:lobbycode',(req,res) => {
	
})

//POST localhost:3000/api/lobbies/john/1
router.post('/createLobby/:guest/:lobbycode',(req,res) => {
	
})

//PUT localhost:3000/api/lobbies/john/1
router.put('/joinLobby/:guest/:lobbycode',(req,res) => {
	
})

//PUT localhost:3000/api/lobbies/john/1
router.put('/leaveLobby/:guest/:lobbycode',(req,res) => {
	
})

//PUT localhost:3000/api/lobbies/john/1
router.put('/kickUser/:guest/:lobbycode',(req,res) => {
	
})

//PUT localhost:3000/api/lobbies/1
router.delete('/removeLobby/:lobbycode',(req,res) => {
	
})

module.exports = router;