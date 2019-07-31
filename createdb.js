var db=require("./config"); 

let sql="CREATE DATABASE crud_nodejs";    
db.query(sql,function(err,result){
    if(err) throw err;
    console.log("Created");
});

