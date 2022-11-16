const express = require('express');
const dotenv = require('dotenv');

const app = express();

dotenv.config('./config.env');

module.exports = app;
