const { Job } = require("../models");

module.exports = {
  async createJobs({ body }, res) {
    const job = await Job.create(body);

    if (!job) {
      return res.status(400).json({ message: "Unable to create job" });
    }

    res.status(200).json(job);
  },

  async getAllJobs(req, res) {
    const allJobs = await Job.find({});

    if (!allJobs) {
      return res.status(400).json({ message: "No Jobs found" });
    }

    res.status(200).json(allJobs);
  },

  async getJobById({ params }, res) {
    const job = await Job.findById(params.id);

    if (!job) {
      return res.status(400).json({ message: "No job found by that id" });
    }

    res.status(200).json(job);
  },
};
