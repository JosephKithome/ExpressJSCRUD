const express = require('express');
const app = express()
var mysql = require('mysql');
const router = express.Router();
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "techhubdb",
  port: 3306,
  multipleStatements:true
});

con.connect(function(err) {
  if (err) 
  con.on('error', function(err) {
    console.log("[mysql error]",err);
  });
  console.log("Connected!");
  
});

//Retrieve all posts
router.get('/', (req,res)=>{
    con.query('SELECT * FROM posts',(err,rows,fields)=>{
        if(!err){
            res.send(rows)

        }else{
            console.log(err)
        }
    })
    
});

//Get a particular post by id
router.get('/posts/:id',(req,res)=>{
    con.query('SELECT * FROM posts WHERE id=?',[req.params.id],(err,rows,fields)=>{
        if(!err){
            res.send(rows)

        }else{
            console.log(err)
        }
    });
});
//post or add a  new post 
router.post('/post',(req,res)=>{
    //store the user post inputs
    const postDetails = req.body;

    var sql = "INSERT INTO posts SET ?";

    con.query(sql,postDetails,(err,data)=>{
        if (err) throw err;
        console.log("User data is inserted successfully ");

        res.send(data);
    })

});

//update single entry in the database
router.post('/post/:id',(req,res)=>{
    const updateDetails = req.body;
    con.query('UPDATE posts SET ? WHERE id =?',[updateDetails,req.params.id], function (error, results, fields){
        if (error) {
    console.log("error ocurred",error);
    res.send({
      "code":400,
      "failed":"failed"
    })
  }else{
    console.log('Results: ', results);
    res.send({
      "code":200,
      "success":"Record updated successfully ! "
        });
  }
  });
})

//Delete  a particular post by id
router.delete('/posts/:id',(req,res)=>{
    con.query('DELETE FROM posts WHERE id=?',[req.params.id],(err,rows,fields)=>{
        if(!err){
            res.send("Deleted Successfully")

        }else{
            console.log(err)
        }
    })
});


module.exports = router