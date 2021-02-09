var express = require('express');
var router = express.Router();

const usersModel = require('../models/users')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/sign-up', async function(req, res, next) {
  const addUser = new usersModel({
    username: req.body.username,
    password: req.body.password,
    date: new Date(),
  });
  
  const userAdded = await addUser.save()
  
  const message = userAdded.name === req.body.name ? true : false
  console.log('message = ', message)
  res.json({ message });
});

module.exports = router;
