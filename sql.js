
const { Client } = require('pg');
const { symlinkSync } = require('fs');
const client = new Client({
  host: 'ec2-34-234-240-121.compute-1.amazonaws.com',
  port: 5432,
  user: 'hcrjrwqinuhycb',
  database:'d83no383kv7p48',
  password: '00a838892a1d712bd4c2d6625acc9bdd98c77599d9e0f26c83d84bbb2b02473c',
  ssl: { rejectUnauthorized: false }
    
})
const connect=async()=>{
 
    client.connect();
    
  
   
   
  
  
  }
  const insertEvent=async(data)=>{
  
  let x = "insert into events values('"+data[1]+"','"+data[2]+"',"+data[3]+",'"+data[5]+"','"+data[0]+"','"+data[4]+"','"+data[6]+"')  ";
  console.log(x)
    client.query(x, (err, res) => {
      
      if(err){console.log(err)}
  
     
      
   
   })
  }
  const setState=async(data)=>{
  
    let x = "update events set State = '"+data["state"]+"' where  date =   '"+data["date"]+"'";
    console.log(x)
      client.query(x, (err, res) => {
        
        if(err){console.log(err)}
    
       
        
     
     })
    }
  const deleteEvent=async(data)=>{
  
    let x = "delete from events where date='"+data+"'";
    console.log(x)
      client.query(x, (err, res) => {
        
        if(err){console.log(err)}
    
       
        
     
     })
    }
  const getEvents=async()=>{
    return new Promise((resolve,recive)=>{
      let x ="SELECT * from events"
      client.query(x, (err, res) => {
          
        
          resolve(res.rows)
         
         
          if(err){console.log(err)}
       
        })
  
  
  
    })
  
  
  }
  const setReminderOne=async(data)=>{
    return new Promise((resolve,recive)=>{
      let x ="update events set hours="+data["hours"]+",  reminderOne='"+data["date"]+"'";
      console.log(x)
      client.query(x, (err, res) => {
          
        
         
         
         
          if(err){console.log(err)}
       
        })
  
  
  

    })
  
  
  }
  


  module.exports = {connect,insertEvent,getEvents,deleteEvent,setState,setReminderOne}