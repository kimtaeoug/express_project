var express = require('express');
var router = express.Router();
var studylist_template = require('../lib/studylist_template.js')
var main_template = require('../lib/template.js')

var topscript = main_template.topscript('../');
var bottomscript = main_template.bottomscript('../');
var navigation = main_template.navigation();
var section = main_template.section('../img/javascript.png');
var projectsection = main_template.projectsection('../img/node.png','../img/express.png');
var signup = main_template.signup()
var contact = main_template.contact();
var footer = main_template.footer();

var get_paging = require('../lib/paging.js');
var paging = get_paging.paging();
var get_write_button= require('../lib/write_button.js');
var write_button = get_write_button.button('../stylesheets/write_button.css');

//-------------express--------------------
router.get('/', function(req, res, next) {
  //게시판
  var study_form = studylist_template.wrtie();
  res.send(study_form);
});
router.get('/write', function(req, res, next) {
  //글쓰기
  var study_form = studylist_template.wrtie();
  res.send(study_form);
});
router.get('/update', function(req, res, next) {
  //수정
  var study_form = studylist_template.wrtie();
  res.send(study_form);
});
router.get('/delete', function(req, res, next) {
  //삭제
  var study_form = studylist_template.wrtie();
  res.send(study_form);
});
module.exports = router;
