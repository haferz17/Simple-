var db=require('./config');

let sql=`select * from user`;
db.query(sql,function(err,result){
    if(err) throw err;
    result.forEach(data => {
        console.log(`${data.name} \t ${data.address}`);
    });
});