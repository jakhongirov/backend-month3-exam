const express = require("express");
const router = express.Router();

const restaurants = require("./restaurants/restaurants");
const menus = require("./menus/menus");
const nodemailer = require("./nodemailer/nodemailer");

router
  .get("/restaurants", restaurants.GET_ALL)
  .get("/restaurants/menu", menus.GET_ALL)
  .post("/restaurants/order", nodemailer.POST_MESSAGE);

module.exports = router;
