function $(selector) {
   let elements = document.querySelectorAll(selector);
   //定义一个对象将伪数组的标签保存起来且在这个对象中提供对这些标签的DOM操作函数
   let obj = {
    length:0,
   };

  for (let i = 0; i < elements.length; i++) {
        obj[i] = elements[i];
        obj.length++;
  }
  obj.click = function (callback) {
    for (let i = 0; i < this.length; i++) {
        this[i].onclick = callback;
    }
    return this
  }

  // 修改样式
  obj.css = function (stylName, styleValue) {
    for (let i = 0; i < this.length; i++) {
        this[i].style[stylName] = styleValue;
    }
    return this
  }
  return obj;
}