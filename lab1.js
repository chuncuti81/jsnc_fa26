console.log("day la lab 1");

console.log("Bài 1");
let name = "Hoangnt";
let age = 19;
let address = "Hà Nội";
let isStudent = true;

console.log("Họ tên:", name);
console.log("Tuổi:", age);
console.log("Địa chỉ:", address);
console.log("Sinh viên:", isStudent);

console.log("Bài 2");
let age2 = 19;

console.log(age2);

age2 = 20;

console.log(age2);


console.log("Bài 3");
const a = 10;
const b = 5;

console.log("Tổng:", a + b);
console.log("Hiệu:", a - b);
console.log("Tích:", a * b);
console.log("Thương:", a / b);

console.log("Bài 4");
function sayHello(name) {
    console.log("Xin chào", name);
    return 10;
}

sayHello("Hòa");
sayHello("Dũng");
sayHello("Hoàng");

console.log("Bài 5");
function sum(c, d){
    tong = c + d;
    return tong;
}
const result = sum(10, 20);
console.log(result);

console.log("Bài 6");
function calculateTotal(price, quantity){
    money = price * quantity;
    return money;
}
const total = calculateTotal(50000, 3);
console.log(total);

console.log("Bài 7");
const math = 8;
const english = 7;
const javascript = 9;
function calculateAverage(math, english, javascript){
    avg = (math + english + javascript) / 3;
    return avg;
}
const average = calculateAverage(8, 7, 9);
console.log(average);