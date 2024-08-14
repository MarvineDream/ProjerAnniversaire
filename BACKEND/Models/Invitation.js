// models/Invitation.js
import mongoose from 'mongoose';

const invitationSchema = new mongoose.Schema({
    age: { type: Number, required: true },
    date: { type: Date, required: true },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
    address: { type: String, required: true },
    sender: { type: String, required: true },
    contact: { type: String, required: true },
});

const Invitation = mongoose.model('Invitation', invitationSchema);

export default Invitation;