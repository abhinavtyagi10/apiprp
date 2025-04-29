const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://tyagi10abhinav:a!122436@cluster0.zzmxjwk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/sece', {})
.then((res)=> console.log("connected to db"))
.catch((err)=> console.log("Error occoured " + err));