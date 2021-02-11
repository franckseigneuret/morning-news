var express = require('express');
var router = express.Router();

const usersModel = require('../models/users')
const uid2 = require('uid2')
const bcrypt = require('bcrypt')
const cost = 10

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/sign-up', async function (req, res, next) {
  let message
  let token

  if (req.body.username === '' || req.body.email === '' || req.body.password === '') {
    message = 'Merci de saisir tous les champs'
  }
  else {

    // eviter les doublons 
    const findUser = await usersModel.findOne({
      email: req.body.email,
    })

    if (findUser !== null) {
      message = 'L\'email que vous avez saisi est déjà en DB'
    } else {
      token = uid2(32)
      // enregistrer le nouveau user
      const addUser = new usersModel({
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, cost),
        date: new Date(),
        token,
      });

      const userAdded = await addUser.save()
      message = userAdded.name === req.body.name ? true : false
    }
  }

  res.json({ message, token });
});

router.post('/sign-in', async function (req, res, next) {
  let message
  if (req.body.email === '' || req.body.password === '') {
    message = 'Merci de saisir tous les champs'
  }
  else {
    const findUser = await usersModel.findOne({
      email: req.body.email,
    })

    if (findUser && bcrypt.compareSync(req.body.password, findUser.password)) {
      message = true
    } else {
      message = 'Vous avez peut être fait une erreur sur votre mail ou mot de passe'
    }
  }

  res.json({ message });
});

module.exports = router;
