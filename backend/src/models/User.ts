import { Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs';
import { ObjectId } from 'mongodb';

export interface IUser {
  _id?: ObjectId;
  firstName: string;
  lastName: string;
  email: string;
  mobileNo: string;
  role: string;
  password: string;
}

const userSchema = new Schema<IUser>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  mobileNo: { type: String, required: true },
  role: { type: String, required: true },
  password: { type: String, required: true },
});

// Hash password before saving
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

export const User = model<IUser>('User', userSchema);
