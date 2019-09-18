var express = require('express');
var router = express.Router();
var template = require('../lib/template.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  var topscript = template.topscript('');
  var bottomscript = template.bottomscript('');
  var navigation = template.navigation();
  var header = template.header();
  var section = template.section('img/javascript.png');
  var projectsection = template.projectsection('img/node.png','img/express.png');
  var signup = template.signup();
  var contact = template.contact();
  var footer = template.footer();
  var html = template.html(topscript, bottomscript, navigation, header, section, projectsection, signup, contact, footer);
  res.send(html);
});

module.exports = router;
