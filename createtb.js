var db=require('./config');

let sql=`CREATE TABLE user(
    id int NOT NULL AUTO_INCREMENT,
    name VARCHAR(50),
    address VARCHAR(50),
    PRIMARY KEY(id)
)`;
db.query(sql,function(err,result){
    if(err) throw err;
    console.log("TB Created");
});