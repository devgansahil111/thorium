const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
const controller = require("../controllers/controller")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.get("/test-1", controller.testOne)
router.get("/test-2", controller.testTwo)

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

router.post("/createBook", BookController.createBook  )

router.get("/getBooksData", BookController.getBooksData)

router.post("/updateBooks", BookController.updateBooks)
router.post("/deleteBooks", BookController.deleteBooks)



// const mid1 = function (req, res, next) {
//     console.log("Hi, I'm a middleware")
//     let loggedIn = true
//     if (loggedIn == true) {
//         next()
//     }
//     else {
//         res.send("Please login to register")
//     }
// }

// router.get("/basicRoute", mid1, userController.basicCode)

// module.exports = router;


//MOMENT JS
const moment = require('moment');
router.get("/dateManipulations", function (req, res) {
    
    // const today = moment();
    // let x= today.add(10, "days")

    // let validOrNot= moment("29-02-1991", "DD-MM-YYYY").isValid()
    // console.log(validOrNot)
    
    const dateA = moment('01-01-1900', 'DD-MM-YYYY');
    const dateB = moment('01-01-2000', 'DD-MM-YYYY');

    let x= dateB.diff(dateA, "days")
    console.log(x)

    res.send({ msg: "all good"})
})

module.exports = router;