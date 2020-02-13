const express = require("express");

const server = express();
server.use(express.json());

server.get('/', (req, res) => {
    const songs =[
        {
            id: 1,
            title: "Call me baby"
        },
        {
            id: 2,
            title: "Love me right"
        },
        {
            id: 3,
            title: "Lucky One"
        },
        {
            id: 4,
            title: "Unfair"
        },
        {
            id: 5,
            title: "Overdose"
        },
    ];

    res.status(200).json(songs);
})


const port = process.env.PORT || 5000;
server.listen(port, () => 
    console.log(`Running magic on ${port}`));