const express = require('express')
const router = express.Router()
const AuthController = require("../controllers/AuthController")
const schema = require("../config/schemas/userSchema")
const formValidate = require("../middleware/formValidate")

router.post("/", formValidate(schema), AuthController.login)

module.exports = router