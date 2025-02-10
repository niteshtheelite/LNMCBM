import { Section } from "../models/sectionSchema.js";

const createSection = async (req, res) => {
  try {
    const newSection = new Section(req.body);
    await newSection.save();
    res.status(201).json(newSection);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error creating section", error: err });
  }
};

const getSections = async (req, res) => {
  try {
    const sections = await Section.find();
    res.status(200).json(sections);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error getting sections", error: err });
  }
};
const getSection = async (req, res) => {
  try {
    const { courseId } = req.query;
    const sections = await Section.find(courseId ? { course: courseId } : {});
    res.status(200).json(sections);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error getting sections", error: err });
  }
};

const getSectionById = async (req, res) => {
  try {
    const section = await Section.findById(req.params.id);
    if (!section) {
      return res.status(404).json({ message: "Section not found" });
    }
    res.status(200).json(section);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error getting section", error: err });
  }
};

const updateSection = async (req, res) => {
  try {
    const section = await Section.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!section) {
      return res.status(404).json({ message: "Section not found" });
    }
    res.status(200).json(section);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error updating section", error: err });
  }
};

const deleteSection = async (req, res) => {
  try {
    const section = await Section.findByIdAndDelete(req.params.id);
    if (!section) {
      return res.status(404).json({ message: "Section not found" });
    }
    res.status(200).json({ message: "Section deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error deleting section", error: err });
  }
};

export {
  createSection,
  getSections,
  getSection,
  getSectionById,
  updateSection,
  deleteSection,
};
