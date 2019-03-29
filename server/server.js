const express = require('express')
const mongoose = require('mongoose')

//链接mongo,并且使用reactapp这个集合
const BD_URL = 'mongodb://127.0.0.1:27017/reactapp'
mongoose.connect(BD_URL)
mongoose.connection.on('connected',function(){
    console.log('mongo connect success')
})

const User = mongoose.model('user',new mongoose.Schema({
    user:{type:String,require:true},
    age:{type:Number,require:true}
}))
//新增数据
// User.create({
//     user:'jingjing',
//     age:20
// },function(err,doc){
//     if(!err){
//         console.log(doc)
//     }else{
//         console.log(err)
//     }
// })
//new  app
const app = express()

app.get('/',function (req,res) {
    res.send('<h1>Hello World</h1>')
})

app.get('/data',function(req,res){
    //查询数据
    User.find({},function(err,doc){
        res.json(doc)
    })
   // res.json({name:'happy',type:'IT'})
})

app.listen(9093,function(){
    console.log('Node app start at port 9093')
})