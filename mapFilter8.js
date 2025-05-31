function mapFilter(obj, callback) {
    const arrElements = [];
    for (const key in obj) {
        arrElements.push(callback(obj[key]));
    }
    const filterElemets = arrElements.filter(function (x){
        const limitation = x > 10
        return limitation === true
    })
    return filterElemets;
}

const elements = {a: 45, b: 2, c: 3, d: 56};
console.log(mapFilter(elements, x => x * 3));


