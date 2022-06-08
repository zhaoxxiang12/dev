/**
 * 点击加号加+
 * @param {*} id 元素id 
 */
function addNumber (id) {
    let obj = document.getElementById(id)
    let value = parseInt(obj.innerHTML) ;
    value+=1
    obj.innerText =value
}

function reduceNumber (id) {
    let obj = document.getElementById(id)
    let value = parseInt(obj.innerHTML) ;
    value-=1;
    //value大于等于时才减少
    if (value >= 0) {
        obj.innerText = value;
    }
}