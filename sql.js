
const { Client } = require('pg');
const { symlinkSync } = require('fs');
const client = new Client({
  host: 'ec2-34-234-240-121.compute-1.amazonaws.com',
  port: 5432,
  user: 'qcnlglgoklfcdd',
  database:'dd7oguiu2chgb6',
  password: '8471d4b88c0932ed33f747a9f068f6166519bbf5408868cda811be2262d6023d',
  ssl: { rejectUnauthorized: false }
    
})
const connect=async()=>{
 
    client.connect();
    
  
   
   
  
  
  }
  const insertEvent=async(data)=>{
  
  let x = "insert into events values('"+data[1]+"','"+data[2]+"',"+data[3]+",'"+data[5]+"','"+data[0]+"','"+data[4]+"')  ";
  console.log(x)
    client.query(x, (err, res) => {
      
      if(err){console.log(err)}
  
     
      
   
    })
  }
  const getEvents=async()=>{
    return new Promise((resolve,recive)=>{
      let x ="SELECT * from values"
      client.query(x, (err, res) => {
          
        
          resolve(res.rows)
         
         
          
       
        })
  
  
  
    })
  
  
  }
  


  module.exports = {connect,insertEvent,getEvents}