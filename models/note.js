'use strict';
const mongoose = require('mongoose'),
      uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const NoteSchema = new Schema({
  text: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

NoteSchema.plugin(uniqueValidator);

const Note = mongoose.model("Note", NoteSchema);

// ------------------------------------------------------------------------- now export it
module.exports = Note;
