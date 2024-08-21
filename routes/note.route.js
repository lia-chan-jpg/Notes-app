const express = require("express")
const Note = require("../models/note.model")
const router= express.Router()
const {getnotes, getsinglenote , addnewnote, updatenote, deletenote} = require("../controller/note.controller")

router.get("/", getnotes)

router.get("/:id", getsinglenote)

router.post("/" , addnewnote)

router.put("/:id", updatenote)

router.delete("/:id", deletenote)


module.exports = router