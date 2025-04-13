const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
  userId: { type: String, required: true }, // Supabase UID later
  title: { type: String, required: true },
  description: { type: String },
  category: {
    type: String,
    enum: ["Sports", "Study", "Music", "Chill", "Other"],
    default: "Other"
  },
  location: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true }
  },
  time: { type: Date, required: true },
  duration: { type: Number, required: true }, // in minutes
  expiresAt: { type: Date, required: true }
}, { timestamps: true });

const Activitys=mongoose.model("Activity", activitySchema);
module.exports =Activitys


