const express = require('express');
const router = express.Router();

router.get('/students/:name', function(req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})

// Project - 1 Players array

let playerInfo = [ {
    name: "sahil",
    dob: "01/01/1997",
    gender: "male",
    city: "kaithal",
    sports: ["swimming"],
    bookings: [

    ],
},

{
    name: "lakshay",
    dob: "02/02/1996",
    gender: "male",
    city: "nagpur",
    sports: ["basketball"],
    bookings: [

    ],
},

{
    name: "kapil",
    dob: "03/03/1995",
    gender: "male",
    city: "kurukshetra",
    sports: ["cricket"],
    bookings: [

    ],
},

{
    name: "devender",
    dob: "04/04/1995",
    gender: "male",
    city: "faridabad",
    sports: ["boxing"],
    bookings: [

    ],
},

{
    name: "dheeraj",
    dob: "05/05/1995",
    gender: "male",
    city: "palwal",
    sports: ["sprinting"],
    bookings: [

    ],
},
]

let players = [];
router.post('/players',function(req,res){
    
    let player = req.body;
    let playerName = player.name
    for(let i=0; i<players.length; i++){
        if(players[i].name==playerName){
            res.send("Player already exists")
    }
        }
    players.push(player);
    console.log("Here is the player array", players);
    res.send(players);
});

router.post('/players/:playerName/bookings/:bookingId',function(req,res){
    let name = req.params.playerName;
    let isPlayerAbsent = true;

    for( let i=0; i<players.length; i++){
        if (players[i].name==name){
            isPlayerAbsent=false;
        }
    }
    if (!isPlayerAbsent){
        res.send("Player not present")
    }
    let booking = req.body;
    let bookingId = req.params.bookingId;
    for (let i=0; i<players.length; i++){
        if(players[i].name==playerName){
            let isBookingPresent=false;
            for(let j=0;j<players[i].bookings.length; j++){
                if(players[i].bookings[j].bookingNumber==bookingId){
                    return res.send("Booking with this id is already present for this player")
                }
            }
            players[i].bookings.push(booking);
        }
    }
    res.send('Players')
});



// Query Params in Express
router.get('/get-query-1',function(req,res){
    let data = req.query
    console.log(data)
    res.send({data:data,status:true})
})

router.get('/get-query-2',function(req,res){
    let marks = req.query.marks
    let result = marks > 40 ? "pass":"fail"
    // let result = "fail"
    // if( marks > 40 ) {result = "pass"}
    // else {result = "fail"}
    res.send({result:result,status:true})
})

router.post('/post-query-1',function(req,res){
    let data = req.query
    console.log(data)
    res.send({data:data,status:true})
})
let arr = [3,6,9,12,15,18,21]
router.post('/get-query-2',function(req,res){
    let input = req.query.input
    let finalArr = arr.filter(ele=> ele>input)
    // for ( let i = 0; i < arr.length; i++){
    //     if (arr[i]>input) { finalArr.push(arr[i])}
    // }
    res.send({ result: finalArr, status: true })
})


let persons = [
    {
        name: "Sahil Devgan",
        age: 24,
        votingStatus: false
    },
    {
        name: "Kapil Dhiman",
        age: 25,
        votingStatus: false
    },
    {
        name: "Paritosh",
        age: 17,
        votingStatus: false
    },
    {
        name: "Chirag",
        age: 16,
        votingStatus: false
    },
    {
        name: "Vinay",
        age: 18,
        votingStatus: false
    }
]
router.post('/post-query-3',function(req,res){
    
    let value = req.query.value
    // let votingAge = value > 18 ? "true":"false"
    let votingAge = persons.filter(ele=> ele.age>value)
    res.send( {result: votingAge, status: true})
})


router.post('/post-query-4',function(req,res){
    
    let value = req.query.value
    let votingAge = value > 18 ? "true":"false"
    res.send( {result: votingAge, status: true})
})

module.exports = router;



// Practise
// function square(num){
//         for(let i=1;i<num;i++){
//             if(i*i==num){
//                 return i
//             }
//         }
//         return false
//     }
    
//     let save=sqrt(1)
//     console.log(save)