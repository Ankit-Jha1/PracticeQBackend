// imports-----------------------------------
const express = require("express")
const router = express.Router();
import { Request, Response } from 'express';


// controllers fxns--------------------------


// 
const getAllEvents = async (req:Request, res:Response) => {
    // first dummy data send
    const events = {"name":"ankit", "class":"tenth"}
    // find all and return
    // const events = await 

    // status was showing error due to not importing the response and request from express in ts file
    res.status(200).json({events});
}


const createEvent = async (req:Request, res:Response) => {
    res.status(200).json({"hello":"ankit"})
}




// routes-----------------------------------

router.route("/create").get(getAllEvents).post(createEvent)





// export-----------------------------------
module.exports = router;