const mongoose=require('mongoose')
// creating a person schema model
const PersonModelSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    age:Number,
    favoriteFoods:{
        type:[String],
    }
})
const Person=mongoose.model("Person",PersonModelSchema)
module.exports=Person