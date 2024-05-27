const generateID = require("short-unique-id")
const URL = require('../models/url')

async function handleGenerateNewShortURL(req,res){
    const body = req.body;
    if(!body.url) return res.status(400).json({error :  " url required" })
    const shortId = new generateID({length: 8})
    await URL.create({
        shortId: shortId.rnd()
    })

}


