import { Schema, model } from "mongoose";

const ThreadSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: false },
  userId: { type: Schema.Types.ObjectId, require: true, ref: "users" },
  created_at: { type: Date, default: Date.now() },
});

export default model("threads", ThreadSchema);
