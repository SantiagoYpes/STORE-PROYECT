import { Schema, model } from "mongoose";
import { transformAuthInfo } from "passport";

// If I want that the title be a primary key
const taskSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
      unique: true,
      //Trim is used to cut the space
      trim: true,
    },
    description: {
      type: String,
      require: true,
    },
    done: {
      type : Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey : false
  }
);

export default model("Task", taskSchema);
