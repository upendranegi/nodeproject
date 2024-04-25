const mongoose=require('mongoose');
const mongourl="mongodb://localhost:27017/mydb";
const connectTOMongo = ()=>{
    mongoose.connect(mongourl).then(success=>
        console.log('db connect')
);
}
module.exports = connectTOMongo;