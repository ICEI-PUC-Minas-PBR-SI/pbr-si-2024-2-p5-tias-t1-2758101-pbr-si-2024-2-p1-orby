import { Schema, model } from "mongoose";

const ReplieSchema = new Schema({
  text: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, require: true, ref: "users" },
  threadId: { type: Schema.Types.ObjectId, require: true, ref: "threads" },
  created_at: { type: Date, default: Date.now() },
});

export default model("replies", ReplieSchema);
