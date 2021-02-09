var express = require('express');
var router = express.Router();

const usersModel = require('../models/users')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/sign-up', async function (req, res, next) {
  let message

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
      // enregistrer le nouveau user
      const addUser = new usersModel({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        date: new Date(),
      });

      const userAdded = await addUser.save()
      message = userAdded.name === req.body.name ? true : false
    }
  }

  res.json({ message });
});

router.post('/sign-in', async function (req, res, next) {
  let message
  if (req.body.email === '' || req.body.password === '') {
    message = 'Merci de saisir tous les champs'
  }
  else {
    const findUser = await usersModel.findOne({
      email: req.body.email,
      password: req.body.password,
    })
    
    if (!findUser) {
      message = 'Vous avez peut être fait une erreur sur votre mail ou mot de passe'
    } else {
      message = true
    }
  }

  res.json({ message });
});

module.exports = router;
