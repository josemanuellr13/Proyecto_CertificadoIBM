const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
  const authorizationHeader = req.headers["authorization"];
  console.log(req.headers)
  
  if (authorizationHeader) {
    const token = authorizationHeader.split(" ")[1];

    jwt.verify(token, "secreto", (error, data) => {
      if (error) return res.status(400).json({ mensaje: "Error: " + token });
      else {
        req.user = data;
        next();
      }
    });
  } else {
    res.status(400).json({ mensaje: "Debes enviar un token" });
  }
};

module.exports = verifyToken;