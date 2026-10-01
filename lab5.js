document.getElementById("form-add").addEventListener("submit", (event) => {
    event.preventDefault(); // chan reload
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const category = document.getElementById("category").value;
    const newProduct = {
        name: name,
        price: price,
        category: category,
    };
    if(!name){
        alert("Vui lòng nhập tên");
        return;
    }
    if(!price){
        alert("Nhập giá tiền");
        return;
    }
    if(!category){
        alert("Vui lòng điền danh mục");
        return;
    }
    console.log(newProduct);
    axios
    .post("http://localhost:3000/products", newProduct).then(() =>{
        alert("Thêm sản phẩm thành công");
    })
    .catch(() => {
        alert("Thêm sản phẩm thất bại");
    })
})