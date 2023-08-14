const mongoose = require("mongoose");
const { Schema } = mongoose;
const NotesSchema = new Schema({
  title: {
    type: string,
    require: true,
  },
  description: {
    type: string,
    require: true,
  },
  tag: {
    type: string,
    default: "General",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
// below line not under stand
module.exports = mongoose.model("Notes", NotesSchema);
