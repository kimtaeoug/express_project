var express = require('express');
var router = express.Router();
var studylist_template = require('../lib/studylist_template.js')
var main_template = require('../lib/template.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  var study_form = studylist_template.form();
  res.send(study_form);
});

module.exports = router;
