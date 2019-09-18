module.exports={
    navigation:function(){
      return `
      <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
      <div class="container">
        <a class="navbar-brand js-scroll-trigger" href="#page-top">Project Kim</a>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
          <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="/">Main</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#projects">Projects</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#signup">Contact</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="/membership">Membership</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="/studyList">StudyList</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
      ` 
    },
    header:function(){
      return `
      <!-- Header -->
    <header class="masthead">
      <div class="container d-flex h-100 align-items-center">
        <div class="mx-auto text-center">
          <h1 class="mx-auto my-0 text-uppercase">Study</h1>
          <h2 class="text-white-50 mx-auto mt-2 mb-5">about node & express</h2>
          <a href="#about" class="btn btn-primary js-scroll-trigger">About</a>
        </div>
      </div>
    </header>
      `
    },
    section:function(path){
      return `
      <!-- About Section -->
    <section id="about" class="about-section text-center">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <h2 class="text-white mb-4">Javascript</h2>
            <p class="text-white-50">객체 기반의 스크립트 프로그래밍 언어</p>
          </div>
        </div>
        <img src="${path}" class="img-fluid" alt="">
      </div>
    </section>
      `
    },
    projectsection:function(path1,path2){
      return `
      <!-- Projects Section -->
      <section id="projects" class="projects-section bg-light">
        <div class="container">
    
          
          <!-- Project One Row -->
          <div class="row justify-content-center no-gutters mb-5 mb-lg-0">
            <div class="col-lg-6">
              <img class="img-fluid" src="${path1}" alt="">
            </div>
            <div class="col-lg-6">
              <div class="bg-black text-center h-100 project">
                <div class="d-flex h-100">
                  <div class="project-text w-100 my-auto text-center text-lg-left">
                    <h4 class="text-white">Node</h4>
                    <p class="mb-0 text-white-50">비동기 이벤트 주도 JavaScript 런타임이자 확장성 있는 네트워크 어플리케이션 설계 기술</p>
                    <hr class="d-none d-lg-block mb-0 ml-0">
                  </div>
                </div>
              </div>
            </div>
          </div>
    
          <!-- Project Two Row -->
          <div class="row justify-content-center no-gutters">
            <div class="col-lg-6">
              <img class="img-fluid" src="${path2}" alt="">
            </div>
            <div class="col-lg-6 order-lg-first">
              <div class="bg-black text-center h-100 project">
                <div class="d-flex h-100">
                  <div class="project-text w-100 my-auto text-center text-lg-right">
                    <h4 class="text-white">Express</h4>
                    <p class="mb-0 text-white-50">Node.js를 위한 빠르고 개방적인 간결한 웹 프레임워크</p>
                    <hr class="d-none d-lg-block mb-0 mr-0">
                  </div>
                </div>
              </div>
            </div>
          </div>
    
        </div>
      </section>
      `
    },
    signup:function(){
      return `
      <!-- Signup Section -->
      <section id="signup" class="signup-section">
        <div class="container">
          <div class="row">
            <div class="col-md-10 col-lg-8 mx-auto text-center">
                <!--
              <i class="far fa-paper-plane fa-2x mb-2 text-white"></i>
              <h2 class="text-white mb-5">Subscribe to receive updates!</h2>
    
              <form class="form-inline d-flex">
                <input type="email" class="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0" id="inputEmail" placeholder="Enter email address...">
                <button type="submit" class="btn btn-primary mx-auto">Subscribe</button>
              </form>
                -->
            </div>
          </div>
        </div>
      </section>
      `
    },
    contact:function(){
      return `
      <!-- Contact Section -->
    <section class="contact-section bg-black">
      <div class="container">
  
        <div class="row">
  
          <div class="col-md-4 mb-3 mb-md-0">
            <div class="card py-4 h-100">
              <div class="card-body text-center">
                <i class="fas fa-map-marked-alt text-primary mb-2"></i>
                <h4 class="text-uppercase m-0">Address</h4>
                <hr class="my-4">
                <div class="small text-black-50">경기도 광주시 태전동</div>
              </div>
            </div>
          </div>
  
          <div class="col-md-4 mb-3 mb-md-0">
            <div class="card py-4 h-100">
              <div class="card-body text-center">
                <i class="fas fa-envelope text-primary mb-2"></i>
                <h4 class="text-uppercase m-0">Email</h4>
                <hr class="my-4">
                <div class="small text-black-50">
                  tkdldjs312@naver.com
                </div>
              </div>
            </div>
          </div>
  
          <div class="col-md-4 mb-3 mb-md-0">
            <div class="card py-4 h-100">
              <div class="card-body text-center">
                <i class="fas fa-mobile-alt text-primary mb-2"></i>
                <h4 class="text-uppercase m-0">Phone</h4>
                <hr class="my-4">
                <div class="small text-black-50">010-8870-5464</div>
              </div>
            </div>
          </div>
        </div>
  
        <div class="social d-flex justify-content-center">
          <a href="#" class="mx-2">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#" class="mx-2">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="https://github.com/kimtaeoug/" class="mx-2">
            <i class="fab fa-github"></i>
          </a>
        </div>
  
      </div>
    </section>
      `
    },
    footer:function(){
      return `
      <!-- Footer -->
    <footer class="bg-black small text-center text-white-50">
      <div class="container">
        Made by Kim Tae Wook
      </div>
    </footer>
      `
    },
    topscript:function(path){
      return `
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <meta name="description" content="">
      <meta name="author" content="">
      <title>Project Kim</title>
      <link href="${path}vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
      <link href="${path}vendor/fontawesome-free/css/all.min.css" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css?family=Varela+Round" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">
      <link href="${path}css/grayscale.min.css" rel="stylesheet">
      `
    },
    bottomscript:function(path){
      return `
      <script src="${path}vendor/jquery/jquery.min.js"></script>
      <script src="${path}vendor/bootstrap/js/bootstrap.bundle.min.js"></script>   
      <script src="${path}vendor/jquery-easing/jquery.easing.min.js"></script>
      <script src="${path}js/grayscale.min.js"></script>
      `
    },
    html:function(topscript, bottomscript, navigation, header, section, projectsection, signup, contact, footer){
      return `
          <!DOCTYPE html>
      <html>
      ${topscript}
      <head>
      </head>
      <body id="page-top">
              ${navigation}
              ${header}
              ${section}
              ${projectsection}
              ${signup}
              ${contact}
              ${footer}
      ${bottomscript}
      </body>
      </html>
      `
    }
  }