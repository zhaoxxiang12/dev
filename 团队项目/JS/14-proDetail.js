// 点击切换图片
function one(){
    var img=document.getElementById("image");
    img.src="../image/temp/proDet01_big.jpg";
}
function two(){
    var img=document.getElementById("image");
    img.src="../image/temp/proDet02_big.jpg";
}
function three(){
    var img=document.getElementById("image");
    img.src="../image/temp/proDet03_big.jpg";
}
function four(){
    var img=document.getElementById("image");
    img.src="../image/temp/proDet04_big.jpg";
}

// 数量加
function add(){
    var num=document.getElementById("number")
    var number=document.getElementById("number").value
    // 将获取的字符串转换为数值型
    var intnumber=parseInt(number)
    num.value=intnumber+1;
}
// 数量减
function sub(){
    var num=document.getElementById("number")
    var number=document.getElementById("number").value
    // 将获取的字符串转换为数值型
    var intnumber=parseInt(number)
    num.value=intnumber-1;
    // 不要让数量减为负值
    if(intnumber<=0){
        num.value=0;
    }
}


