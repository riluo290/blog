var typingbefore = document.getElementById("typetitle").innerText;//获取标题内容
document.getElementById('typetitle').innerText = "";//将标题内容赋值为空
var i = 0;
function typetitle(){
    var typingafter = document.getElementById('typetitle');//获取标题元素
    if(i <= typingbefore.length){
        typingafter.innerHTML = typingbefore.slice(0,i++)+'|';//将标题内容通过slice()方法返回
        setTimeout('typetitle()',100);//每100毫秒执行一次
    }else{
        typingafter.innerHTML = typingbefore;//当标题内容全部返回后，去掉最后的‘|’
    }
}
typetitle();
