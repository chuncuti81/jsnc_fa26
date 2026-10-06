const id = 1;
const params = new URLSearchParams(location.search).get("id");

axios.get(`http://localhost:3000/products/${id}`).then((res) => {
    console.log(res);
    const products = res.data;
    document.getElementById("name").value = products.name; 
    document.getElementById("price").value = products.price; 
});

document.getElementById("form-edit").addEventListener("submit", (event) =>{
    event.preventDefault();
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const category = document.getElementById("price").value;
    const data = {
        name, price, category
    };
    axios.put(`http://localhost:3000/products/${id}`, data).then(() => {
        alert("update thanh cong");
    });
});