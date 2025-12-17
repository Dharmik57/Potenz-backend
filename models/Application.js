import mongoose from "mongoose";


const applicationSchema = new mongoose.Schema({
user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
jobTitle: { type: String, required: true },
company: { type: String, required: true },
resume: { type: String, required: true },
status: { type: String, default: "Applied" }
}, { timestamps: true });


export default mongoose.model("Application", applicationSchema);