(function select(arr) {
    if (!(arr instanceof Array)) {
        console.log('传入参数类型错误');
        return false;
    }
    var count = arr.length;
    for (var i = 0; i < count-1; i++) {
        var changeId = 0;
        var min = arr[i];
        for (var j = i + 1; j < count; j++) {
            if (min > arr[j]) {
                min = arr[j];
                changeId = j;
            }//选出最小项的id
        }
        if (changeId != 0) {
            var temp = arr[i];
            arr[i] = arr[changeId];
            arr[changeId] = temp;
        }//交换当前基准和最小项
        console.log(arr);
    }
    console.log('result:' + arr);
})([100, 20, 30, 55, 80, 16, 99, 43, 57]);

///选择排序
///默认选定首个元素为基准target[i]，此target[i]和后面的元素中的最小(大)元素min进行比较
///若 min<target[i] 交换min和target[i]位置
///target[i] 中i加一，之后重复上面步骤 
///时间复杂度：O(n^2);
