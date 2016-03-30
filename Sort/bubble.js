function bubble(arr) {
    if (!(arr instanceof Array)) {
        return false;
    }
    var count = arr.length, time = 0;
    while (time != count) {
        for (var i = 0; i < count - 1 - time; i++) {
            if (arr[i] < arr[i + 1]) {
                var element = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = element;
            }
            console.log(arr + '--');
        }
        console.log('res' + time + ':' + arr);
        time++;
    }
    console.log('result:' + arr);
}
//冒泡排序，相邻两个元素进行比较
//步骤一：第一轮比较下来，最大(小)的元素排到最后[冒泡：比较形象的描述了元素像气泡一样冒出水面]
//第二轮,比较除了最后一个的元素的其他元素，重复步骤一
//时间复杂度：O(n^2);
bubble([100, 30, 21, 50, 60, 80, 45, 77]);
