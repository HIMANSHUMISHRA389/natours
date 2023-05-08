const express = require('express');
const getAllUsers = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defind',
  });
};
const getUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defind',
  });
};
const createUsers = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defind',
  });
};
const updateUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defind',
  });
};
const deleteUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defind',
  });
};

const Router = express.Router();
Router.route('/').get(getAllUsers).post(createUsers);
Router.route('/:id').get(getUser).patch(updateUser);
module.exports = Router;
