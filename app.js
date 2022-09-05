const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs")
const app = express();
const sql= require("./sql")
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
router.post("/postHours",async(req,res)=>{

var cycki=Object.values(req.body);
sql.insertEvent(cycki).then(()=>{ return res.send("done")})
 


})
router.get("/getEvents",async(req,res)=>{

  sql.getEvents().then((data)=>{return res.send(data)})
     
    
    
    })

    router.get("/setState",async(req,res)=>{
console.log(req.body)
         
        
        
        })
    router.delete("/delEvent/:data",async(req,res)=>{

     console.log(req.params.data)
      sql.deleteEvent(req.params.data).then(()=>{return res.send("event was deleted....")})   
        
        
        })
app.listen(port, () =>{ console.log(`Server running on localhost:${port}`)

sql.connect();

});
