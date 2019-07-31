var db=require('./config');

let sql=`update user set address='Malasan' where id='1'`;
db.query(sql,function(err,result){
    if(err) throw err;
    console.log("Update");
});