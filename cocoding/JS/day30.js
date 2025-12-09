// Set & Map
const set1 = new Set([1, 2, 2, 3, 4, 5]); // set 중복 x
console.log(set1);

const set2 = new Set("Hello"); // 문자열 중복도 불가능
console.log(set2); // H e l o

set1.add(6);
console.log(set1);

console.log(set1.has(3)); // has : 가지고 있는지?
console.log(set1.has(10));

console.log(set1.delete(2));
console.log(set1);

set2.clear(); // 모든요소 제거
console.log(set2);

set1.forEach(value => console.log(value));

// Map
const map = new Map([
    ["k1", "v1"], // entry : 키와 밸류의 쌍
    ["k2", "v2"],
]);
console.log(map);

map.set("k3", "v3");
console.log(map);

console.log(map.get("k1")); // k1의 value 값 return
console.log(map.get("k4")); // undefined

console.log(map.has("k2")); // has : 가지고 있는지? true
console.log(map.has("k4")); // has : 가지고 있는지? false

console.log(map.delete("k2")); // 삭제시 true
console.log(map);

map.clear();
console.log(map);

const map2= new Map([
    ["a", 1],
    ["b", 2],
    ["c", 3]
]);

console.log([...map2.keys()]); // a b c
console.log([...map2.values()]); // 1 2 3
console.log([...map2.entries()]); // 키 : 값 

map2.forEach((value, key)=> {
    console.log(key, value); 
});





