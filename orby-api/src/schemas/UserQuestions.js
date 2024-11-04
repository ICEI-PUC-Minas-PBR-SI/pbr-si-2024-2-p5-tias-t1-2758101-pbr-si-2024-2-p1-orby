import { Schema, model } from "mongoose";

const UserQuestionsSchema = new Schema({
  question: { type: String, required: true },
  answer: { type: String, default: "" },
  questionId: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, require: true, ref: "users" },
  created_at: { type: Date, default: Date.now() },
});

export default model("userQuestions", UserQuestionsSchema);
