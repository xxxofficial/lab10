function mapObject(obj, callback) {
  const output = {};
  for (const key in obj) {
    output[key] = callback(obj[key]);
  }
  return output;
}
  
const nums = { a: 4, b: 6, c: 23 };
const multTwo = mapObject(nums, x => x * 2);
console.log(multTwo); 
