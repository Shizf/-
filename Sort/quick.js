function quick(arr, firstIndex, lastIndex) {
    if (!(arr instanceof Array)) {
        console.log('传入参数类型不合法');
        return false;
    }
    if (firstIndex === lastIndex) {
        return;
    }
    console.log('original:' + arr);
    var target = arr[firstIndex], index = firstIndex;
    for (var i = firstIndex + 1; i < lastIndex; i++) {
        if (target > arr[i]) {
            var temp = arr[i];
            for (var j = i - 1; j >= index; j--) {
                var temp2 = arr[j];
                arr[j + 1] = arr[j];
                arr[j] = temp2;
            }
            arr[index] = temp;
            index++;
        }
    }
    console.log('res:' + arr);
    quick(arr, firstIndex, index);
    quick(arr, index + 1, lastIndex);
}
//
var demo = [20, 100, 30, 22, 15, 5, 34, 38, 2, 8];
quick(demo, 0, demo.length);
//快速排序
//步骤一：以首元素为基准X;依次和后面的元素比较，一轮比较下来：比X小的放在X前面，比X大的排在X的后面；
//之后以此元素为分割点，为两个数组，分别进行步骤一的递归
//

console.log('large number');
var arr = [];
for (var i = 0; i < 1000; i++) {
    arr.push(Math.ceil(Math.random(1) * 1000));
}
quick(arr, 0, arr.length);