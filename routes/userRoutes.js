const express = require('express');
const router = express.Router();
const User = require("../controllers/userControllers");
const auth = require("../middleware/auth")

router.get("/", User.getAllUsers);
router.get("/:id", User.getUserById);
router.get("/:id/:scale", User.getPercentage);
router.post("/create", User.createNewUser);
router.post("/submit-quiz", User.gradeQuiz);
router.post("/get-recommendations", User.sortQueryResultByPreference);
router.post("/update_user/", User.editUser);


module.exports = router;