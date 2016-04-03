//绘制图像帮助类api
//基于canvas画布
//create by Shizf at 2016年4月2日

var WIDTH = 10;
var SIZE = 10;


function init(cavId, arr) {
    var canvas = document.getElementById(cavId);
    var ctx = canvas.getContext('2d');
    var base = new Point(10, 0);
    SIZE = canvas.width / (arr.length + 1);
    initScreen(ctx, base, arr);
    // ctx.fillRect(50, 10, 100, 100);
}

//类：坐标点
function Point(x, y) {
    this.x = x;
    this.y = y;
}

/**
 * 初始化场景
 * @param  {any} 画笔
 * @param  {any} 初始化坐标地址
 * @param  {any} 样本数据
 */
function initScreen(ctx, basePoint, arr) {
    ctx.fillStyle = '#3ee';
    var help = new Help();
    var maxItem = help.getMax(arr);
    for (var index = 0; index < arr.length; index++) {
        var item = arr[index];
        ctx.fillRect(basePoint.x + index * SIZE, maxItem - item - basePoint.y, WIDTH, item);
    }
}

function drawRect(location, width, height) {

}

///帮助类
function Help() {
}
Help.prototype.getMax = function(arr) {
    var temp = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > temp) {
            temp = arr[i];
        }
    }
    return temp;
};