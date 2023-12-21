const mongoose = require("mongoose");

const ScheduleMeeting = new mongoose.Schema({
  roomName: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  roomID: {
    type: Number,
    required: true,
  },
});

module.exports = new mongoose.model("Schedule", ScheduleMeeting);
