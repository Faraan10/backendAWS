const mongoose=require("mongoose")
const contentSchema= new mongoose.Schema({
	username:String,
	password:String,
	mobileNo:String,
	email:String
})
const Content=mongoose.model("try4",contentSchema)
module.exports=Content