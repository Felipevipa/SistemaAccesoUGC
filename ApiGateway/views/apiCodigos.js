// const axios = require("axios");
// const express = require("express");

const views = {};

views.codeVerifier = async (req, res) => {
    console.log(req.body);
    if(req.body.codigo == "54544028130") {
      res.sendStatus(200)
    } else {
      res.sendStatus(403)
    }
  }

module.exports = views;