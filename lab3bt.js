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

console.log("Bài 8");
const products = [ 
{ id: 1, name: "iPhone 15", price: 20000000, }, 
{ id: 2, name: "MacBook Air", price: 25000000, }, 
{ id: 3, name: "AirPods", price: 5000000, }, 
];
const prd = products.map((product) =>{
    console.log(product.id + "|" + product.name + "|" + product.price);
});

console.log("Bài tập tổng hợp");
const product2 = [
  {
    id: 1,
    name: "Áo thun",
    price: 150000,
    category: "Thời trang",
  },
  {
    id: 2,
    name: "Quần jean",
    price: 350000,
    category: "Thời trang",
  },
  {
    id: 3,
    name: "Giày sneaker",
    price: 800000,
    category: "Giày",
  },
];
document.getElementById("products").innerHTML = product2
  .map(
    (product) => `
     <tr class="hover:bg-gray-50">
              <td class="px-4 py-2 border border-gray-300">${product.id}</td>
              <td class="px-4 py-2 border border-gray-300">${product.name}</td>
              <td class="px-4 py-2 border border-gray-300">${product.price}</td>
              <td class="px-4 py-2 border border-gray-300">
                <div class="flex items-center justify-center gap-2">
                  <a
                    href="#"
                    class="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                  >
                    Edit
                  </a>

                  <button
                    class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
            `,
  )
  .join("");
