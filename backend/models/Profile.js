import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
  name: String,
  age: Number,
  gender: String,
  state: String,
  district: String,
  taluka: String,
  city: String,
  caste: String,
  education: String,
  occupation: String,
});

export const Profile = mongoose.model("Profile", profileSchema);

export default Profile