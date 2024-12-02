import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  phoneNumber: { type: String, required: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() },
  aptitudeStatus: { type: String, default: "" },
  isDonor: { type: Boolean, default: null },
  age: { type: String, default: null },
});

export default model("users", UserSchema);
