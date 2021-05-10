const UserModel = require("../models/UserModel")
const HttpStatus = require("http-status-codes")

exports.login = async (req, res) => {
  try {
    const {email, password} =  req.body
    const user = await UserModel.findOne({email: email})

    if(!user) {
        return res.status(HttpStatus.NOT_FOUND).send("User not found")
    }
    user.comparePassword(password, function(err, isMatch) {
        if (err || !isMatch) return res.status(HttpStatus.BAD_REQUEST).send("Wrong credentials");
        return res.send("Loged in successfully")
    });
  } catch(err) {
      return res.send("Error login in")
  }
}