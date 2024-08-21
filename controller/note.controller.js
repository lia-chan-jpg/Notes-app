const Note = require("../models/note.model")


const getnotes = async (req,res)=>{
        try{
            const notes= await Note.find({})
            res.status(200).json(notes)
        }catch (error){
          res.status(500).json({message: error.message})
        }
    
};

const getsinglenote = async (req, res)=>{

    try {
        const { id } = req.params;
        const note= await Note.findById(id)
        res.status(200).json(note)
        
    } catch (error) {
        res.status(500).json({message: error.message}) 
    }
};

const addnewnote = async (req,res)=>{
    try{
        const note = await Note.create(req.body)
        res.status(200).json(note)
    }catch (error){
        res.status(500).json({message: error.message})
    }

};

const updatenote =  async (req, res)=>{
    try{
       const { id }=req.params
       const note= await Note.findByIdAndUpdate(id, req.body)

       if(!note){
        return res.status(404).json({message:"Note not found"})
       }
        const updatedNote = await Note.findById(id)
        res.status(200).json(updatedNote)

    }catch{
        res.status(500).json({message: error.message})
    }
};


const deletenote =  async (req, res)=>{
    try{
        const { id }=req.params
        const note= await Note.findByIdAndDelete(id)

        if(!note){
            return res.status(404).json({message:"note not found"})
           }

        res.status(200).json({message: "note deleted sucessfully"})

    }catch(error){
        res.status(500).json({message: error.message});
    }
};

module.exports ={
    getnotes,
    getsinglenote,
    addnewnote,
    updatenote,
    deletenote

}