const express = require('express');
const router = express.Router();

const newAuthorController= require("../controllers/newAuthorController")
const newBookController= require("../controllers/newBookController")
const newPublisherController = require("../controllers/newPublisherController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", newAuthorController.createAuthor  )

router.get("/getAuthorsData", newAuthorController.getAuthorsData)

router.post("/createBook", newBookController.createBook  )

router.get("/getBooksData", newBookController.getBooksData)

router.get("/getBooksWithAuthorDetails", newBookController.getBooksWithAuthorDetails)

router.post("/createPublisher", newPublisherController.createPublisher)

router.get("/getPublishersData", newPublisherController.getPublishersData)

router.get("/getBooksWithPublisherDetails", newBookController.getBooksWithPublisherDetails)

router.get("/x", newBookController.x)

router.post("/createNewPublisher", newPublisherController.createNewPublisher)
router.get("/getNewPublishersData", newPublisherController.getNewPublishersData)

router.post("/createNewAuthor", newAuthorController.createNewAuthor)
router.get("/getNewAuthorsData", newAuthorController.getNewAuthorsData)

router.post("/createNewBook", newBookController.createNewBook)
router.get("/getNewBooksData", newBookController.getNewBooksData)

router.put("/putBook", newBookController.putBook)
router.put("/updatePrice", newBookController.updatePrice)

module.exports = router;