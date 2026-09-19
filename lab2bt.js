console.log("Bai lab2");
console.log("Bai1");
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

console.log("Bài 3");
const student = {id: 1, name: "Nguyễn Văn An", age: 20, email: "an@gmail.com", major: "CNTT", };
console.log(student);
console.log(student.name);
console.log(student.age);
console.log(student.email);
student.age = 19;
console.log(student.age);
student.phone = "0982680588";
console.log(student);

console.log("Bài 4");
const students = [ 
    { id: 1, name: "Nguyễn Văn An", age: 20, }, 
    { id: 2, name: "Trần Văn Bình", age: 21, }, 
    { id: 3, name: "Lê Văn Nam", age: 20, }, ];
console.log(students);
console.log("Tên sinh viên đầu tiên: ", students[0].name);
console.log("Tuổi sinh viên thứ hai: ", students[1].age);

for(i = 0; i < students.length; i++){
    console.log(students[i].name);
}

