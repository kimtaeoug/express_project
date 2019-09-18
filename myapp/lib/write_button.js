module.exports={
    button:function(path){
        return `  
        <link rel="stylesheet" href="${path}">    
            <div class="button_base b03_skewed_slide_in">
                <div>글쓰기</div>
                <div></div>
                <div><a href="javascript/write">글쓰기</a></div>
            </div>
        `
    }
}