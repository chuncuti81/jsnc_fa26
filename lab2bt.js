const names = ["An", "Bình", "Nam", "Hòa", "Lan"];
console.log(names);
console.log("Phần tử đầu tiên: ", names[0]);
console.log("Phần tử cuối cùng: ", names[4]);
console.log("Số lượng phần tử: ", names.length);
names.push("Hoàng");
console.log(names);
names.pop();
console.log(names);

console.log("Bài 2");
for(i = 0; i < names.length; i++){
    console.log(names[i]);
}