const mongoose = require("mongoose");

const NoteSchema = mongoose.Schema({

    title: {
        type: String,
        required: [true, "Please enter Title"]
    },

    content: {
        type: String,
        required: [true, "Please enter note content"]
    },

    class:{
        type:String,
        required: false,
        },
},
{
    timestamps: true,
});

const Note = mongoose.model("Note", NoteSchema)

module.exports=Note;