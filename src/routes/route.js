const express = require('express');
const router = express.Router();

router.get('/students/:name', function(req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})

// 1.
router.get('/movies/:name', function (req,res){
    // let movies = ["The Shining","Incendies","Rang De Basanti","Finding Demo"]
    let moviesName = req.params.name
    console.log(moviesName)
    res.send(moviesName)
})

// 2. and 3.
router.get('/movies/:movieId',function(req,res){
    mov=["Fukrey","Delhi","Dabang","Rockstar","Suryavanshi"]
    let value = req.params.movieId;
    if (value>mov.length-1){
        res.send("not exist")
    } else {
        res.send(mov[value])
    }
});

// 4.
router.get('/moviez',function(req,res){
    res.send([{id:1,name:"The Shining"},{id:2,name:"Incendies"},{id:3,name:"Rang De Basanti"},{id:4,name:"Finding Demo"}])
});

// 5.
router.get('/films/:filmId',function(req,res){
    res.send([{id:1,name:"The Shining"},{id:2,name:"Incendies"},{id:3,name:"Rang De Basanti"},{id:4,name:"Finding Demo"}])
    let value = req.params.filmId;
    let found=false;
    for (i=0;i<movi.length;i++){
        if (movi[i].id==value){
            found=true
            res.send(movi[i])
            break
        }
    }
});



module.exports = router;
