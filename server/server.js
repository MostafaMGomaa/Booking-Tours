const express = require("express");
const mongoose = require("mongoose");

const app = require("./app");

app.listen(3000, () => {
  console.log(`PORT listen in 3000`);
});
