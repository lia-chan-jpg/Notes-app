const express = require("express")
const mongoose= require("mongoose")
const Note = require("./models/note.model")
const noteRoute = require("./routes/note.route")
const app = express()

//middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//routes
app.use("/starynote/notes", noteRoute)

app.get("/", (req, res)=>{
    res.send("hello from api update")
});

mongoose.connect('mongodb+srv://lanotlia:jojorocks11@notedb.mkbnn6i.mongodb.net/Note-API?retryWrites=true&w=majority&appName=NoteDb')
 .then(()=>{
    console.log("Connected to database")
    app.listen(8000, ()=>{
        console.log("server running on port 8000")
    });
 })
.catch(()=>{
    console.log("Not Connected")
})

