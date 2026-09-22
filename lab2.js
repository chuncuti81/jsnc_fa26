// array []
const student1 = "An";
const student2 = "Bình";
const student3 = "Nam";

const students = ["An", "Bình", "Nam"];
const ids = [1, 5, 23,45, 54];
const actives = [true, false, 42, "hoangnnt"];
// danh index: 0, 1, 2
console.log("ban dau", students);
students[0] = "hoangnnt";
console.log("sau thay đổi", students);

// for
for (let i = 0; i < students.length; i++){
    console.log(students[i]);
}
// object
const student = {
  id: "ph65010",
  name: "hoangnnt",
  age: 19,
};
console.log(student.id);
student.id = "ph888";
// student = {}; => error
student.addess = "ha noi";
delete student.addess;
console.log(student.id);
console.log(student.addess);

// array object
const myStudents = [
  {
    id: "ph650",
    name: "hoangnnt",
  },
  {
    id: "ph010",
    name: "nhinnt",
  },
];

console.log(myStudents[0].name);

// Truy cập dom id = students
let html = document.getElementById("students");
let content = "";
// Canh so 1 = ``
for (let i = 0; i < myStudents.length; i++){
    content += `
    <div>
        <h3>Tên sinh viên: ${myStudents[i].name}</h3>
        <h4>Id sinh vieen: ${myStudents[i].id}</h4>
    </div>
    `;
}
html.innerHTML = content;

console.log(html);