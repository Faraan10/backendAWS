const express=require("express")
const app=express();
const port=4005
const cors=require("cors")
const bodyParser=require("body-parser")
const mongoose=require("mongoose")
const Content=require("./contentSchema")

mongoose.connect("mongodb+srv://faraan:faraan@cluster0.akvpjxh.mongodb.net/firstdb?retryWrites=true&w=majority")
	.then(()=>{
		console.log("MongoDB Connected")
	})
	.catch((err)=>{
		console.log(err)
	})
app.use(bodyParser.urlencoded({
	extended:true
}))

app.use(bodyParser.json())

app.use(cors())


app.get("/",(req,res)=>{
	res.send("Backend running")
})
app.get("/bring",(req,res)=>{
	Content.find()
	.then((result)=> res.json(result))
})


app.post("/add",(req,res)=>{
	console.log(req.body)
	const {username,password,mobileNo,email}=req.body;
	const newData=new Content({
		username,password,mobileNo,email
	})
	newData.save()
	res.send("Data added")
})

app.listen(port,()=>console.log("port is running"))