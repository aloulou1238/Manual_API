const mongoose = require("mongoose")
const Schema = mongoose.Schema

const manualSchema = new Schema({
  user: String,
  details: String,
  country: String,
  description: String
}, {
  timestamps: true
})

module.exports = mongoose.model('manual', manualSchema)