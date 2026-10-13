const id = new URLSearchParams(location.search).get("id");

async function getProducts() {
  try {
    const res = await axios.get(`http://localhost:3000/products/${id}`);
    console.log(res.data);
    document.getElementById("name").value = res.data.name;
    document.getElementById("price").value = res.data.price;
    document.getElementById("category").value = res.data.category;
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
}
getProducts();

document.getElementById("form-edit").addEventListener("submit", (event) =>{
    event.preventDefault();
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const category = document.getElementById("category").value;
    const data = {
        name, price, category
    };
    axios.put(`http://localhost:3000/products/${id}`, data).then(() => {
        location.replace("index.html");
        alert("update thanh cong");
    });
});