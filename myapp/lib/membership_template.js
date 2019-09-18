module.exports={
    template:function(){
    return `
   <html>
   <head>
   <link rel="stylesheet" href="../stylesheets/membership.css">
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
</body>
</html>
    `
    }
}
