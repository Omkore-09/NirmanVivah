import mongoose from 'mongoose';  


const handicapRegistrationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    number: { type: String, required: true, unique: true }, // Mobile number should be unique
    dob: { type: Date, required: true },
    address: { type: String, required: true },
    gender: { type: String, required: true, enum: ['male', 'female', 'other'] },
    motherName: { type: String, required: true },
    fatherName: { type: String, required: true },
    
    handicapCardId: { type: String, required: true },
    handicapType: { type: String, required: true },
    handicapPercentage: { type: Number, required: true },
    state: { type: String, required: true },
    district: { type: String, required: true },
    taluka: { type: String, required: true },
    city: { type: String, required: true }
}, { timestamps: true });

const HandicapRegistration = mongoose.model('HandicapRegistration', handicapRegistrationSchema);
export default HandicapRegistration;
