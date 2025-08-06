const Users = require("../models/userModel");
const userEntry = async (req, res) => {
    try {
         const { userName, password } = req.body;
  const newUser = new Users({
    userName,
    password,
  });

  await newUser.save();
  res.json({ message: "User Created succesfully." });
  res.status(201).send('success');
    } catch (error) {
        
    }
 
};

module.exports = userEntry;
