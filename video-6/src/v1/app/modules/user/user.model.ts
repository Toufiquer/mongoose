import { Schema, model } from "mongoose";
import { IUser } from "./user.interface";

// crete Schema
const UserSchema = new Schema<IUser>({
  id: { type: Number, required: true, unique: true },
  name: {
    firstName: { type: String, required: true },
    middleName: { type: String }, // optional
    lastName: { type: String, required: true },
  },
  roll: { type: Number, required: true },
  email: { type: String }, // optional
  contactNo: { type: String, required: true },
  gender: {
    type: String,
    enum: ["Male", "Female"],
    required: true,
  },
  school: [
    { type: String, required: true },
    { type: Number, required: true },
    { type: String, required: true },
  ],
  dateOfBirth: {
    type: String,
    required: true,
  },
});

// create modal and export
export const User = model<IUser>("UserModel", UserSchema);
