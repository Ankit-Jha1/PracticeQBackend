// 
// db online - server run pr connect function 



//
const express = require('express')

const app = express();
const port = 3001;

// Define the root route
app.get('/', (req, res) => {
  console.log('hello to console')
  res.send('Hello ankit');
});


// use , v1/event => to event in routes
// const events = require("./server/routes/events")
// app.use("/v1/event", events);


// writing everything here for now
const getAllEvents = async (req, res) => {
  const events = {"name":"ankit", "class":"tenth"}
    // find all and return
    // const events = await 

    // status was showing error due to not importing the response and request from express in ts file
    res.status(200).json({events});
}

app.get("/v1/event", getAllEvents);




const createEvent = async (req, res) => {
  const events = {"name":"ankit", "class":"tenth"}
    // find all and return
    // const events = await 

    // status was showing error due to not importing the response and request from express in ts file
    res.status(200).json({events});
}

app.post("/v1/event/create", createEvent)















// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


// call the db function to start the db 



/*

/v1/events/create

/v1/manage/events/



*/