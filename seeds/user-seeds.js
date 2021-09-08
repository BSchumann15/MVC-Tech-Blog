const { User } = require('../models');

const userData = [
  {
    username: "Bruce",
    email: "BWayne@gmail.com",
    password: "password1234"
  },
  {
    username: "Arthur",
    email: "ACurry@gmail.com",
    password: "password1234"
  },
  {
    username: "Dick",
    email: "DGrayson@gmail.com",
    password: "password1234"
  },
  {
    username: "Diana",
    email: "DPrince@gmail.com",
    password: "password1234"
  },
  {
    username: "Harley",
    email: "HQuinn@gmail.com",
    password: "password1234"
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;