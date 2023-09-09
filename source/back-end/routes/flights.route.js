const express = require('express');
const app = express();
const mongoose = require('mongoose');

const Flight = mongoose.model('Flight', flightSchema);