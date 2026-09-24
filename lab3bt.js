// Template Literal
console.log("Bài 1");
const name = "Nguyễn Văn An";
const age = 20;
const major = "Lập Trình Web";
const a = `Xin chào ${name}`;
const b = `Bạn ${age} tuổi`;
const c = `Ngành học: ${major}`;
console.log(a);
console.log(b);
console.log(c);

console.log("Bài 2");
const student = {
id: 1,
name: "Nguyễn Văn An",
age: 20,
major: "Lập trình Web",
};
const d = `Mã sinh viên: ${student.id}`;
const e = `Họ tên: ${student.name}`;
const g = `Tuổi: ${student.age}`;
const h = `Ngành: ${student.major}`;
console.log(d);
console.log(e);
console.log(g);
console.log(h);

console.log("Bài 3");
function add(a, b){
    return a + b;
}
const arrow = (a, b) =>{
    return a + b;
}

console.log("Bai 4");
const square = (a) =>{
    return a * a;
}
console.log(square(5));

const sum = (a, b) =>{
    return a + b;
}
console.log(sum(10, 20));

const sayHello = (name) =>{
    console.log(`Xin chào ${name}`);
}
sayHello("Chin");

console.log("Bài 5");
const numbers = [1, 2, 3, 4, 5];
const newNumbers = numbers.map((number) => {
  return number * 2;
});
console.log(newNumbers);

console.log("Bài 6");
const students = [
{ id: 1, name: "An" },
{ id: 2, name: "Bình" },
{ id: 3, name: "Cường" },
];
const names = students.map((student) => {
    return student.name;
})
console.log(names);