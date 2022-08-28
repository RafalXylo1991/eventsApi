const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs")
const app = express();

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = process.env.PORT || "200";


const router = express.Router();
app.set("port", port);


// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/", router);
router.get("/cycki",async(req,res)=>{
    res.send("<img src='https://cdni.pornpics.com/1280/7/542/92761819/92761819_008_f09b.jpg'>")
})
app.listen(port, () =>{ console.log(`Server running on localhost:${port}`)



});
