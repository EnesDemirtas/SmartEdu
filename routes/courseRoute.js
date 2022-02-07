const express = require("express")
const courseController = require("../controllers/courseController")
const Course = require("../models/Course")

const router = express.Router()

router.route("/").post(courseController.createCourse)

module.exports = router