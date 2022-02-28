const nodeMailer = require("../../nodemailer/nodemailer");

module.exports = nodemailer = {
  POST_MESSAGE: (req, res) => {
    try {
      const { name, address, email } = req.body;

      nodeMailer(email);

      res.json({
        status: 200,
        message: "OK",
      });
    } catch (error) {
      console.log(err);
      res.json({
        status: 500,
        message: "Internal Server Error",
      });
    }
  },
};
