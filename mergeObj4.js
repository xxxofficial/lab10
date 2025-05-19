function mergeObjects(obj1, obj2) {
    const result = {};
    for (const key in obj1) {
        if (obj1.hasOwnProperty(key)) {
            result[key] = obj1[key];
        }
    }
    for (const key in obj2) {
        if (obj2.hasOwnProperty(key)) {
            result[key] = obj2[key];
        }
    }
    
    return result;
}
mergeObjects({ color: 'red' }, { color: 'blue' });
