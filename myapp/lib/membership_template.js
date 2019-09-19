module.exports={
    template:function(){
    return `
   <html>
   <head>
   <link rel="stylesheet" href="../stylesheets/membership.css">
   <script src="//developers.kakao.com/sdk/js/kakao.min.js"></script>
   <head>
   <body>
   <div class="login-wrap">
	<div class="login-html">
		<input id="tab-1" type="radio" name="tab" class="sign-in" checked><label for="tab-1" class="tab">Sign In</label>
		<input id="tab-2" type="radio" name="tab" class="sign-up"><label for="tab-2" class="tab">Sign Up</label>
		<div class="login-form">
			<div class="sign-in-htm">
			<form action="/membership/login" method="post">
				<div class="group">
					<label for="user" class="label">EMAIL ADDRESS</label>
					<input name="member_email" id="email" type="text" class="input">
				</div>
				<div class="group">
					<label for="pass" class="label">Password</label>
					<input name="member_pwd" id="pass" type="password" class="input" data-type="password">
				</div>
				
				<div class="group">
					<input type="submit" class="button" value="Sign In">
				</div>
				<div class="hr"></div>
				<div class="foot-lnk">
				</form>
				</div>
				<div>
				<a id="kakao-login-btn" style="margin-left:20%;"></a>
					<a href="http://developers.kakao.com/logout"></a>
				</div>
				<div>
				<a href="/">Go Main</a>
			</div>
			</div>
			<div class="sign-up-htm">
			<form action="/membership/signup" method="post">
				<div class="group">
					<label for="user" class="label">Username</label>
					<input name="member_user" id="user" type="text" class="input">
				</div>
				<div class="group">
					<label for="pass" class="label">Password</label>
					<input name="member_pwd" id="pass" type="password" class="input" data-type="password">
				</div>
				<div class="group">
					<label for="pass" class="label">Repeat Password</label>
					<input name="member_pwd2" id="pass" type="password" class="input" data-type="password">
				</div>
				<div class="group">
					<label for="pass" class="label">Email Address</label>
					<input name="member_email" id="pass" type="text" class="input">
				</div>
				<div class="group">
					<input type="submit" class="button" value="Sign Up">
				</div>
				</form>
				<div class="hr"></div>
				<div class="foot-lnk">
					<label for="tab-1">Already Member?</a>
				</div>
				
			</div>
		</div>
	</div>
</div>
</div>
<script type='text/javascript'>
    // 사용할 앱의 JavaScript 키를 설정해 주세요.
    Kakao.init('77fd161acf1ad99c32300ce6ea8cda0b');
    // 카카오 로그인 버튼을 생성합니다.
    Kakao.Auth.createLoginButton({
container: '#kakao-login-btn',
success: function(authObj) {
  Kakao.API.request({
    url: '/v1/user/me',
    success: function(res) {
		$.ajax({
			url:"/session",
			type:"post",
			dataType:"json",
			data:"res"+res,
			//res안에 kakao에서 받아온 데이터가 json형태로 들어있음
			//ex)res.id는 id값, res.kaccount_email은 email정보,res.properties['nickname']은 닉네임
			success:function(data){
				console.log(data);			
			},
			error:function(request, status, error){
				console.log(error);
			}
		})
        }
      })
    },
    fail: function(error) {
      alert(JSON.stringify(error));
    }
  });
</script>
</body>
</html>
    `
    }
}
