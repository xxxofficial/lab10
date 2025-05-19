function uniqueElements(arr) {
    var result = {};
    for (var i = 0; i < arr.length; i++) {
        var currentElement = String(arr[i]);
        if (result[currentElement] === undefined) {
            result[currentElement] = 1;
        } else {
            result[currentElement] += 1;
        }
    }
    return result;
}

var example = uniqueElements(['привет', 'hello', 1, '1', 'hello']);
console.log(example);
