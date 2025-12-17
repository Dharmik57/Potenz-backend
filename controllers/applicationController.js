import Application from "../models/Application.js";


export const applyJob = async (req, res) => {
const application = await Application.create({
user: req.user._id,
jobTitle: req.body.jobTitle,
company: req.body.company,
resume: req.file.path
});


res.status(201).json(application);
};


export const getMyApplications = async (req, res) => {
const applications = await Application.find({ user: req.user._id });
res.json(applications);
};  