let cart = JSON.parse(localStorage.getItem("cart")) || [];
function addToCart(name, price) {
  let item = cart.find((p) => p.name === name);

  if (item) {
    item.quantity++;
  } else {
    cart.push({
      name: name,
      price: price,
      quantity: 1,
    });
  }

  saveCart();
  renderCart();
}
function renderCart() {
  let cartTable = document.getElementById("cart-items");
  let total = 0;

  if (!cartTable) return;

  cartTable.innerHTML = "";

  cart.forEach((item, index) => {
    let row = `
      <tr>
        <td>${item.name}</td>
        <td>${item.price}</td>
        <td>
          <button onclick="changeQty(${index}, -1)">-</button>
          ${item.quantity}
          <button onclick="changeQty(${index}, 1)">+</button>
        </td>
        <td>${item.price * item.quantity}</td>
        <td><button onclick="removeItem(${index})">X</button></td>
      </tr>
    `;

    cartTable.innerHTML += row;
    total += item.price * item.quantity;
  });

  document.getElementById("total-price").innerText = total;
}
function changeQty(index, delta) {
  cart[index].quantity += delta;

  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }

  saveCart();
  renderCart();
}
function removeItem(index) {
  cart.splice(index, 1);
  saveCart();
  renderCart();
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function checkout() {
  if (cart.length === 0) {
    alert("Giỏ hàng trống!");
    return;
  }
  window.location.href = "form.html";
}
function placeOrder() {
  let name = document.getElementById("name")?.value;
  let address = document.getElementById("address")?.value;
  let phone = document.getElementById("phone")?.value;

  if (!name || !address || !phone) {
    alert("Nhập đầy đủ thông tin!");
    return;
  }

  let order = {
    customer: { name, address, phone },
    items: cart,
  };

  console.log(order);

  alert("Đặt báo thành công!");

  cart = [];
  saveCart();

  renderCart();

  let form = document.getElementById("checkout-form");
  if (form) form.style.display = "none";
}

window.onload = function () {
  renderCart();
};