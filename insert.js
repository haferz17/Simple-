var db=require('./config');

let sql=`insert into user(name,address) values('rizqi','Trenggalek')`;
db.query(sql,function(err){
    if(err) throw err;
    console.log("Added");
});