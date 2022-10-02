//import express
const express = require("express")
//use express

//create a router object to handle the routes
const router = express.Router()

//import middleware
//let auth = require("../middleware/auth")

//import controllers (for admin)
controllers = require("../controllers/users.js")

//establish routes
// router.post("/createUser", [auth.checkJwt, auth.isAdmin], controllers.createUser)
//changed route to exclude auth checks so anyone can create a login
router.get("/getAllUsers", controllers.getAllUsers)

// router.post("/stories", [auth.checkJwt, auth.isAdmin], controllers.createStory)

// //route to modify a story title
// router.put("/stories/:story_id", [auth.checkJwt, auth.isAdmin], controllers.modifyStory)

// //route to delete a story title; will only delete if sections have yet to be created
// router.delete("/stories/:story_id", [auth.checkJwt, auth.isAdmin], controllers.deleteStory)

// //route to see the list of all stories
// router.get("/stories" [auth.checkJwt, auth.isAdmin], controllers.deleteStory)

module.exports = router
