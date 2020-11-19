const express = require("express");
const cors = require("cors");

const app = express();
const msg = "INICIO";

app.use(cors());


app.get("/api", (_, res) => 
    res.json({
        data: msg,
    })
);

app.listen(process.env.Port || 3333, () => console.log(msg));