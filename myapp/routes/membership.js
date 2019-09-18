var express = require('express');
var router = express.Router();
var template = require('../lib/membership_template.js');
var db= require('../lib/db.js');
var qs = require('querystring');
router.get('/', function(req, res, next) {
    var html = template.template();
    res.send(html);
});
router.post('/signup', function(req, res, next) {
    var body='';
    req.on('data', function(data){
        console.log('insert data');
        body+=data;
    })
    req.on('end',function(){
        console.log('insert end');
        var post=qs.parse(body);
        if(post.member_pwd===post.member_pwd2){
            console.log('insert end2');
            db.query(`INSERT INTO member (member_name, member_email, member_pwd)
    VALUES(?,?,?)`),
    [post.member_name,post.member_email,post.member_pwd],
    function(err, result){
        if(err){
            throw err;
        }
        console.log('insert end3');
        res.writeHead(302, {Location:`/`});
        res.end();
    }
        }else{
            res.writeHead(302, {Location:`/`})
            res.end('wrong!');
        }
        
    })
});
router.post('/login', function(req, res, next) {
    var body='';
    req.on('data', function(data){
        console.log('insert data');
        body+=data;
    })
    req.on('end',function(){
        console.log('insert end');
        var post=qs.parse(body);
        if(post.member_pwd===post.member_pwd2){
            console.log('insert end2');
            db.query(`SELECT * FROM member 
    WHERE member_email=? AND member_pwd=?`, [post.member_email, member_pwd],
        function(err, result){
            if(err){
                throw err;
            }else{
                res.writeHead(302,{Location:`/`})
            }
        }        
    
    )}
    });
});
module.exports = router;
