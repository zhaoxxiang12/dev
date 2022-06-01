// 设计了一个函数，这个函数用于获取屏幕的宽度，动态给html标签设置内联样式font-size
(function(doc, win) {
    // 获取到html这个标签
    let docEL = doc.documentElement;
    // 检测目前屏幕时横屏还是竖屏
    let resizeEvent = "orientationchange" in window ? "orientationchange" : "resize",
    //设置不同屏幕对应的font-size
        recalc = function() {
            // 获取的当前的设备的宽度
            const clientWidth = docEL.clientWidth;
            if (!clientWidth) return;
            // 屏幕宽度大于750px，设置html标签的font-size为100px
            if (clientWidth > 750) {
                docEL.style.fontSize = "100px";
            } else {
                // 屏幕宽度小于或等于750px：屏幕的宽度除以750 * 100px  得出当前屏幕应该html设置font-size的值
                // 以iphone 678为例 375px font-size：50px
                docEL.style.fontSize = (clientWidth / 750) * 100 + "px";
            }
        }
    recalc();
    // 窗口发生变化，重新计算
    win.addEventListener(resizeEvent, recalc, false);
    // 页面加载了，重新计算
    doc.addEventListener("DOMContentLoaded", recalc, false)

})(document, window)