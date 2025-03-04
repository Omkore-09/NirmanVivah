import mongoose from 'mongoose';  


const RegistrationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    number: { type: String, required: true, unique: true, trim: true }, 
    dob: { type: Date, required: true },
    address: { type: String, required: true, trim: true },
    gender: { 
      type: String, 
      enum: ['Male', 'Female', 'Other'], 
      required: true, 
      trim: true 
    },
    caste: { type: String, required: true, trim: true },
    education: { type: String, required: true, trim: true },
    fatherName: { type: String, required: true, trim: true },
    motherName: { type: String, required: true, trim: true },
    state: { type: String, required: true, trim: true, index: true },
    district: { type: String, required: true, trim: true, index: true },
    taluka: { type: String, required: true, trim: true },
    city: { type: String, required: true, trim: true }
  },
  { timestamps: true }
);

const Registration = mongoose.model('Registration', RegistrationSchema);

export default Registration;
