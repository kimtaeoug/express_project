module.exports={
    form:function(){
     return `
     <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
     <link rel="stylesheet" href="stylesheets/studylist.css">
     <link rel="stylesheet" href="stylesheets/button.css">
     <div class="container" id="container">
     <ul>
         <li class="active"><img src="http://static.burnmind.com/demos/blinds-slideshow/photo_1.jpg" alt="" /></li>
         <li><img src="imag/express.png" alt="" /></li>
         <li><img src="img/node.png" alt="" /></li>
         <li><img src="img/javascript.png" alt="" /></li>
     </ul>
     </div>
     <style>
        .wrap {
            
            position: absolute;
            top: 35%;
            left: 33%;
            margin-top: -86px;
            margin-left: -89px;
            text-align: center;
        }
        .wrap2 {
            
            position: absolute;
            top: 35%;
            left: 50%;
            margin-top: -86px;
            margin-left: -89px;
            text-align: center;
        }
        .wrap3 {
           
            position: absolute;
            top: 35%;
            left: 66%;
            margin-top: -86px;
            margin-left: -89px;
            text-align: center;
        }
     </style>
     <div class="wrap">
     <a href="/javascript" class="button">Javascript</a>	
    </div>
     <div class="wrap2">
     <a href="/node" class="button">Node</a>	
    </div>
    <div class="wrap3">
    <a href="/express" class="button">Express</a>	
    </div>
     <script>
     $(document).ready(function(){
         var width = 960;
           height = 538;
           var numberOfBlinds = 20;
           var margin = 2;
           var color = '#000';
         gapHeight = 100;
           var container = $('#container');
           container.width(width).height(height);
           var blindWidth = width / numberOfBlinds;
         images = new Array();
           $('ul li', container).each(function() {
           images.push($(this)); 
         });
         images[0].addClass('active');
         activeImage = 0;
         for (var i = 0; i < numberOfBlinds; i++) {
           var tempEl = $(document.createElement('span'));
           var borders = calculateBorders();
           tempEl.css({
             'left': i * blindWidth,
             border: margin + 'px solid ' + color,
             borderTop: borders.borderWidthTop + 'px solid ' + color,
             borderBottom: borders.borderWidthBottom + 'px solid ' + color,
             'height': height,
             'width': blindWidth
           });              
           container.prepend(tempEl);
         };
         blinds = $('span', container);
         setTimeout(animateBorders, 1000);
       });
       function calculateBorders() {
         var random = Math.floor((Math.random()*9)+1);
         var borderWidthTop = (random / 10) * gapHeight;
         var borderWidthBottom = gapHeight - borderWidthTop;
         return {borderWidthTop: borderWidthTop, borderWidthBottom: borderWidthBottom};
       }  
       function animateBorders() {
         var changeOccuredOnce = false;  
         blinds.animate({
           borderTopWidth: height / 2,
           borderBottomWidth: height / 2
         }, 1000, function() {
           if(!changeOccuredOnce) {
             images[activeImage].removeClass('active');
             activeImage = (activeImage + 1) % images.length;
             images[activeImage].addClass('active');
             setTimeout(animateBorders, 3000);
             changeOccuredOnce = true;
           }
           var borders = calculateBorders();   
           $(this).delay(300).animate({
             borderTopWidth: borders.borderWidthTop,
             borderBottomWidth: borders.borderWidthBottom
           }, 1000);
         });
       }
     </script>
     `
    },page:function(paging,writebutton,page,path){
        return `
        <script src="https://code.jquery.com/jquery-1.11.1.js"></script>
        <link rel="stylesheet" href="../stylesheets/study_list_board.css">  
        <header class="masthead">
        <div class="container d-flex h-100 align-items-center">
          <div class="mx-auto text-center">
          <div style="width:250%; margin-left:-75%;">
        <table cellspacing='0'>
            <tr>
                <th style="width:10%;">글 번호</th>
                <th style="width:40%;">글 제목</th>
                <th style="width:20%;">등록자</th>
                <th style="width:15%;">등록일</th>
                <th style="width:15%;">조회수</th>
            </tr>
            <tr>
                <td>1</td>
                <td><a href="/javascript/view/1">100%</a></td>
                <td>Yes</td>
                <td>Yes</td>
                <td>Yes</td>
            </tr>
        </table>
        </div>
        <div id="paging">
        </div>
        <div style="margin-top:5%; margin-left:80%;">
        ${writebutton}
        </div>
        </div>
        </div>
        
        </header>
        ${paging}
        
        `
    }, wrtie:function(){
        return `
        <script src="https://code.jquery.com/jquery-1.11.1.js"></script>
        <link rel="stylesheet" href="../stylesheets/study_list_board.css">  
        <header class="masthead">
        <link rel="stylesheet" href="../stylesheets/board_css.css">  
        <div class="container d-flex h-100 align-items-center">
          <div class="mx-auto text-center">
          <div style="width:250%; margin-left:-75%;">
        <table cellspacing='0' style="font-size:20px;">
        <form action="/javascript/create" method="post">
            <tr>
            <div class="in-line">
                <th style="width:10%; text-align:center;">제목</th>      
                <th style="width:40%;"><input type="text" placeholder="Insert post title.." name="title" style="width:100%;"></th>
            </div>
                </tr>
            <tr>
            <div class="in-line">
                <td style="height:200px; text-align:center;">내용</td>
                <td><textarea name="contents" placeholder="Insert content" style="width:100%; height:200px"></textarea></td>
                </tr>
            </div>
                <tr>
            <td colspan="2">
            <div class="in-line" style="margin-left:70%;">
             <input type="submit" value="submit">
             <input type="reset" value="reset">
             <a href="/javascript">목록</a>
            </div>
            </td>           
            </tr>
            </form>
        </table>
        </div>
        </div>  
        </header>
        `
    },view:function(path){
      return `
      <script src="https://code.jquery.com/jquery-1.11.1.js"></script>
        <link rel="stylesheet" href="../../stylesheets/study_list_board.css">  
        <header class="masthead">
        <link rel="stylesheet" href="../../stylesheets/board_css.css">  
        <div class="container d-flex h-100 align-items-center">
          <div class="mx-auto text-center">
          <div style="width:250%; margin-left:-75%;">
        <table cellspacing='0' style="font-size:20px;">
            <tr>
            <input type="hidden" name="javascripId">
            <div class="in-line">
                <th style="width:10%; text-align:center;">제목</th>          
                <th style="width:40%;">제목코드</th>
            </div>
                </tr>
                <tr>
                <div class="in-line">
                <td style="width:10%; text-align:center;">등록자</td>            
                <td style="width:40%;">등록자 코드</td>      
               <td style="width:10%; text-align:center;">조회수</td>
                <td style="width:40%;">조회수 코드</td>
                </div>
                </tr>
            <tr>
            <div class="in-line">
                <td style="height:200px; text-align:center;">내용</td>
                <td colspan="3">내용코드</td>         
            </div>
            </tr>
            <tr>
            <td colspan="4">
            <div class="in-line" style="margin-left:70%;">
             <a href="/${path}/update"        
            <input type="submit" value="삭제">        
           <a href="/${path}">목록</a>
          </div>
            </td>           
            </tr>
        </table>
        </div>
        </div>  
        </header>
      `
    },update:function(path,id,register, title,view,contents){
      return `
      <script src="https://code.jquery.com/jquery-1.11.1.js"></script>
      <link rel="stylesheet" href="../../stylesheets/study_list_board.css">  
      <header class="masthead">
      <link rel="stylesheet" href="../../stylesheets/board_css.css">  
      <div class="container d-flex h-100 align-items-center">
        <div class="mx-auto text-center">
        <div style="width:250%; margin-left:-75%;">
      <table cellspacing='0' style="font-size:20px;">
      <form action="/${path}/update_process" method="post">
          <tr>
          <input type="hidden" name="id" value="${id}">
          <div class="in-line">
              <th style="width:10%; text-align:center;">제목</th>          
              <th style="width:40%;"><input type="text" placeholder="Insert post title.." name="title" style="width:200%" value="${title}"></th>
          </div>
              </tr>
              <tr>
              <div class="in-line">
              <td style="width:10%; text-align:center;">등록자</td>            
              <td style="width:40%;" value="${register}"></td>      
             <td style="width:10%; text-align:center;">조회수</td>
              <td style="width:40%;" value="${view}"></td>
              </div>
              </tr>
          <tr>
          <div class="in-line">
              <td style="height:200px; text-align:center;">내용</td>
              <td colspan="3"><textarea name="contents" placeholder="Insert content" style="width:100%; height:200px" value=${contents}></textarea></td>         
          </div>
          </tr>
          <tr>
          <td colspan="4">
          <div class="in-line" style="margin-left:70%;">
           <input type="submit" value="수정">        
           <input type="reset" value="reset">        
           <a href="/javascript">목록</a>
           </form>
        </div>
          </td>           
          </tr>
      </table>
      </div>
      </div>  
      </header>
      `
    }
  }
  