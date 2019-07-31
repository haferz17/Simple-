var db=require('./config');

let sql="delete from user where id=1";
db.query(sql,function(err){
    if(err) throw err;
    console.log("Deleted");
});