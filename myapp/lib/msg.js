module.exports={
    msg:function(msg,path){
        return `
        alert("${msg}");
        top.location.href="${path}";    
        `
    }
}
	