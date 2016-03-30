(function insert(arr) {
    if (!(arr instanceof Array)) {
        console.log('参数类型不合法');
        return false;
    }
    console.log('original arr:' + arr);
    var count = arr.length;
    for (var i = 1; i < count; i++) {
        var current = arr[i];
        var k = i;//标记移动的下标
        for (var j = i; j >= 0; j--) {
            if (i !== j) {
                if (arr[k] < arr[j]) {
                    var temp = arr[j];
                    arr[j] = arr[k];
                    arr[k] = temp;
                    k = j;
                }
            }
        }
        console.log(arr);
    }
    console.log('insert sort result:' + arr);
})([100, 200, 30, 54, 56, 78, 43, 45, 11, 10, 33]);

///插入排序
///1、选择首个元素为基准taget[i],并放入list集合
///2、其后面相邻的元素target[i+1]，依次和list中元素比较，并进行“插入”
///重复以上步骤2
///时间复杂度：O(n^2);