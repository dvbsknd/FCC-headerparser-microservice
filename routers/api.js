const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
  console.log('api.js accessed');
  next();
});

router.get("/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

module.exports = router;
