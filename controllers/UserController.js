const UserModel = require("../models/UserModel")
exports.signup = (req, res) => {
    const user = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    };

    const newUser = UserModel(user)

    newUser.save()

    return res.send(user)
}