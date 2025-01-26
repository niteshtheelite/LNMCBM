import { courseDetails } from "../models/courseSchema";

const createCourse = async (req, res) => {
  try {
    const newCourse = new courseDetails(req.body);
    await newCourse.save();
    res.status(201).json(newCourse);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error creating course", error: err });
  }
};

const getCourses = async (req, res) => {
  try {
    const courses = await courseDetails.find();
    res.status(200).json(courses);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error getting courses", error: err });
  }
};

const getCourseById = async (req, res) => {
  try {
    const course = await courseDetails.findById(req.params.id);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
    res.status(200).json(course);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error getting course", error: err });
  }
};

const updateCourse = async (req, res) => {
  try {
    const course = await courseDetails.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
    res.status(200).json(course);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error updating course", error: err });
  }
};

const deleteCourse = async (req, res) => {
  try {
    const course = await courseDetails.findByIdAndDelete(req.params.id);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
    res.status(200).json({ message: "Course deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error deleting course", error: err });
  }
};

export { createCourse, getCourses, getCourseById, updateCourse, deleteCourse };