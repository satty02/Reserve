const express = require('express');
const router = express.Router();
const main = require('./connector');


// get request for fetching districts

router.get('/state', async(req,res)=>{
    try{
        const db =await main();
        const collection = db.collection('state_district');
        const data = await collection.aggregate([
            {
                $unwind: "$districts"
            },
            {
                $project:{
                    _id:0,
                    district:"$districts"
                }
            }
        ]).toArray();

        const district = data.map(item=>item.district)

        res.json(district)
    }catch(err){

    }
})

// post request for adding trips
router.post('/trips' , async (req,res)=>{

    try{
        // {date,from,to,busOwnerId,startTime,EndTime,category,seatBooked,bus_no,animeties_list,busFare,busName}
        const tripData = req.body;
        console.log(tripData)
        const db = await main();
        const collection = db.collection('trips');
        const insertTrips = await collection.insertOne(tripData);
        res.json(insertTrips);

    }catch(err){
        console.error(err)
    }
    
});

// get request to retrive last 50 trips 
router.get('/trips' , async (req,res)=>{
    try{
        const db = await main();
        const collection = db.collection('trips');
        const data = (await collection.find({}).toArray()).slice(0,50);
        res.json(data);
    }catch(err){
        console.error(err);
    }
    
});

// post request for adding bookings
router.post('/bookings' , async(req,res)=>{
    try{
        const {PassangerName , from , to ,  date , fare , busName ,seatBooked} = req.body;


        const db = await main();
        const collection = db.collection('bookings');

        const alreadyBooked = await collection.findOne({PassangerName , from , to ,  date , fare , busName ,seatBooked});

        // check if the passenger is already booked or not
        if(alreadyBooked){
            res.json('Bookings have already done');
        }

        const data = await collection.insertOne({
            PassangerName : PassangerName,
            from: from,
            to: to,
            date: date,
            fare: fare,
            busName: busName,
            seatBooked: seatBooked
        });
        res.json('Bookings added successfully');

    }catch(err){
        console.error(err)
    }
});


//  get the trips by date
router.get('/byDate/:date', async(req,res)=>{
    try{
        const {date} = req.params;
        console.log(date)
        const db = await main();
        const collection = db.collection('trips');
        console.log(collection)
        const bookingByDate = await collection.findOne({date});
        console.log(bookingByDate)
        res.json(bookingByDate);

    }catch(err){
        console.error(err)
    }
});

// get the list by query
router.get('/byQuery/query', async(req,res)=>{

    try {
        const {from,to,date} = req.query;
    
        console.log(from)
        const query = {};
    
        if (from) query.from = from;
        if (to) query.to = to;
        if (date) query.date = date;
    
        const db = await main();
        const collection = db.collection('trips');
        const trips = await collection.find(query);
    
        res.json(trips);
      } catch (error) {
        console.error(error);
        res.json({ message: 'Internal Server Error' });
      }

});




module.exports = router;