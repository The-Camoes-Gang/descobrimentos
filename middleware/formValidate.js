const HttpStatus = require("http-status-codes")

function validateForm(schema) {
  return async (req, res, next) => {
    try {
      const validatedBody = await schema.validate(req.body)
      
      if(validatedBody.error) {
        return res
        .status(HttpStatus.BAD_REQUEST)
        .send({ message: validatedBody.error.details[0].message })
      }

      next()
    } catch (err) {
      return res
        .status(HttpStatus.BAD_REQUEST)
        .jsend.fail({ message: "Could not validate request" })
    }
  }
}

module.exports = validateForm