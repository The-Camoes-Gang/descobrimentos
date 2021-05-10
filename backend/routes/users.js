const express = require('express')
const router = express.Router()
const UserController = require("../controllers/UserController")
const schema = require("../config/schemas/userSchema")
const formValidate = require("../middleware/formValidate")

router.post("/", formValidate(schema), UserController.signup)

module.exports = router