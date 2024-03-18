const express = require('express');
const viewRouter = express.Router();

viewRouter.get('/', (req, res) => {
  res.status(200).render('indexView');
});
module.exports = viewRouter;
