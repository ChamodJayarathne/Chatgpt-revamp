// models/User.js
const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema(
//   {
//     username: {
//       type: String,
//       required: true,
//     },
//     email: {
//       type: String,
//       required: true,
//       unique: true,
//       trim: true,
//       lowercase: true,
//     },
//     password: {
//       type: String,
//       required: true,
//     },
//     googleId: {
//       type: String,
//       sparse: true,
//     },
//     microsoftId: {
//       type: String,
//       sparse: true,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: function () {
        // Only require password if there's no OAuth ID
        return !this.googleId && !this.microsoftId;
      },
    },
    googleId: {
      type: String,
      sparse: true,
    },
    microsoftId: {
      type: String,
      sparse: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
