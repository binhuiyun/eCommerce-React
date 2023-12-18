const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Users = require("../models/User");
const generateResetToken = require("../middlewares/AuthToken");
const generateLoginToken = require("../middlewares/AuthToken");
require("dotenv").config();
