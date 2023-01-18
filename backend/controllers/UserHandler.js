const UserService = require('../models/UserService')

const addUser = async (req, res) => {
  const newUser = {
    name: 'hanktsai',
    password: "hanktsai123456"
  }

  const result = await UserService.addUser(newUser);

  if (result) {
    res.status(200).json();
  } else {
    res.status(400).json();
  }
}

module.exports = {
  addUser
}