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