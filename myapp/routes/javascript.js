var express = require('express');
var router = express.Router();
var studylist_template = require('../lib/studylist_template.js')
var main_template = require('../lib/template.js')
var db = require('../lib/db.js');
var qs = require('querystring')
var url= require('url')
var get_msg = require('../lib/msg.js');

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
var get_submit_button = require('../lib/sumit__button.js');
var submit_button = get_submit_button.button('../stylesheets/write_button.css');

//-------------javascript--------------------
router.get('/', function(req, res, next) {
  //게시판
  var study_form = studylist_template.page(paging,write_button);
  var main_form = main_template.html(topscript, bottomscript, navigation, study_form, section, projectsection, signup, contact, footer)
  res.send(main_form);
});
router.get('/write', function(req, res, next) {

  //글쓰기

  var topscript2 = main_template.topscript('../');
  var bottomscript2 = main_template.bottomscript('../');
  var study_form = studylist_template.wrtie();
  var main_form = main_template.html(topscript2, bottomscript2, navigation, study_form, section, projectsection, signup, contact, footer)
  res.send(main_form);
});
  //글쓰기 로직
router.post('/create', function(req, res, next) {
  var body = '';
  req.on('data', function(data){
    body+=data;
  })
  req.on('end', function(){
    var post = qs.parse(body);
    db.query(`INSERT INTO javascript_board (javascript_title, javascript_contents, javascript_reg_date) VALUES(?,?, NOW())`, [post.title, post.contents],
    function(err, result){ 
  var smsg = get_msg.msg('글작성에 성공하셨습니다', '/javascript');
  var fmsg = get_msg.msg('글작성에 실패하셨습니다', '/javascript/write');
      if(err){
        console.log(err);
        res.send(fmsg);
      }else{
        res.send(smsg);
      }
    })
  })
});

router.get('/view/:pageId', function(req, res, next) {
  //조회
  var topscript2 = main_template.topscript('../../');
  var bottomscript2 = main_template.bottomscript('../../');
  var section = main_template.section('../../img/javascript.png');
  var projectsection = main_template.projectsection('../../img/node.png','../../img/express.png');
  var study_form = studylist_template.view(javascript);
  var main_form = main_template.html(topscript2, bottomscript2, navigation, study_form, section, projectsection, signup, contact, footer)
  res.send(main_form);
});

router.get('/update/:pageId', function(req, res, next) {
  //수정
  var _url=request.url;
  var queryData = url.parse(_url, true).query;
  db.query(`SELECT * FROM javascript_board`, function(error, javascript){
    if(error){
      throw error;
    }
    db.query(`SELECT * FROM javascript_board WHERE javascriptId=?`, [queryData.javascriptId], function(err, data){
      if(err){
        throw err;
      }
      var html = studylist_template.update('javascript', 
      data.javascriptId, data.javascript_register, data.javascript_title, data.javascript_contents, data.javascript_view, javascript_contents);
      res.send(html);
    })
  })
});
router.post('/update_process', function(req, res, next){
  var body='';
  req.on('data',function(data){
    body+=data;
  })
  req.on('end',function(){
    var post =qs.parse(body);
    db.query(`UPDATE javascript_board SET javascript_title=?, javascript_contents=? WHERE javascriptId=?`, [post.title, post.contents, post.id], function(error2, result){
      var smsg = get_msg.msg('글 수정에 성공하셨습니다', '/javascript');
      var fmsg = get_msg.msg('글 수정에 실패하셨습니다', '/javascript/update');
      if(error2){
        console.log(error2);
        res.send(fmsg);
      }
      else{
        res.send(smsg);
      }
    })
  })
})

router.get('/delete', function(req, res, next) {
  //삭제
  var body = '';
  req.on('data', function(data){
    body += data;
  })
  req.on('end', function(){
    var post = qs.parse(body);
    db.query(`DELETE FROM javascript_board WHERE javascriptId=?`,[post.id],function(error, result){
      var smsg = get_msg.msg('글 삭제에 성공하셨습니다', '/javascript');
      var fmsg = get_msg.msg('글 삭제에 실패하셨습니다', '/javascript');
      if(error){
        console.log(error);
        res.send(fmsg);
      }
      else{
        res.send(smsg);
      }
    })
  })
});

module.exports = router;
