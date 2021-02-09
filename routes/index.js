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
  // res.json({ message: 'pas le droit :(' });
  res.json({ message });
});

router.post('/sign-in', async function(req, res, next) {
  const findUser = await usersModel.findOne({
    username: req.body.username,
    password: req.body.password,
  })

  if(findUser) {
    res.json({ message: true });
  } else {
    res.json({ message: 'Vous avez peut être fait une erreur sur votre nom ou mot de passe' });
  }
});

module.exports = router;
