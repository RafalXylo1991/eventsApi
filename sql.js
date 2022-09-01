
const { Client } = require('pg');
const { symlinkSync } = require('fs');
const client = new Client({
  host: 'ec2-50-19-255-190.compute-1.amazonaws.com',
  port: 5432,
  user: 'fqwlgpbmahxrza',
  database:'dd3ues1j43iln2',
  password: '54195ef5a658458a0a0d8bbcba325fec0b244d299e7f4ec45968b7ab406134cf',
  ssl: { rejectUnauthorized: false }
    
})
const connect=async()=>{
 
    client.connect();
    
  
   
   
  
  
  }
  const insertEvent=async(data)=>{
    console.log(typeof(data.week))
    let weekup = data.week.charAt(0);
    weekup.toUpperCase();
   let y= weekup+data.week[1,data.week.length]
    console.log(capitalizeFirstLetter("cycki"));

    client.query(x, (err, res) => {
      
      
      if (err) throw err
     
      console.log(res)
   
    })
  }
  

  module.exports = {connect,insertEvent}