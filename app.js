const PRICE = 399;
const WHATSAPP_NUMBER = "917539126937";
let quantity = 1;

const qtyOutput = document.getElementById("qty");
const cartItem = document.getElementById("cartItem");
const subtotal = document.getElementById("subtotal");
const summaryTotal = document.getElementById("summaryTotal");

function updateCart() {
  const total = quantity * PRICE;
  qtyOutput.textContent = quantity;
  cartItem.textContent = `Royal Mutton Biryani × ${quantity}`;
  subtotal.textContent = `₹${total.toLocaleString("en-IN")}`;
  summaryTotal.textContent = `₹${total.toLocaleString("en-IN")}`;
}

document.getElementById("plus").addEventListener("click", () => {
  quantity = Math.min(20, quantity + 1);
  updateCart();
});

document.getElementById("minus").addEventListener("click", () => {
  quantity = Math.max(1, quantity - 1);
  updateCart();
});

document.getElementById("addCart").addEventListener("click", () => {
  updateCart();
  document.getElementById("checkout").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("orderForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const name = String(form.get("name") || "").trim();
  const phone = String(form.get("phone") || "").trim();
  const address = String(form.get("address") || "").trim();
  const orderType = form.get("orderType");
  const payment = form.get("payment");

  if (!name || !phone || !address) {
    alert("Please complete your name, mobile number and address.");
    return;
  }

  const total = quantity * PRICE;
  const message = [
    "ROYAL BIRYANI — ORDER REQUEST",
    "",
    `Customer: ${name}`,
    `Mobile: ${phone}`,
    `Address: ${address}`,
    "",
    "Item: Royal Mutton Biryani",
    `Quantity: ${quantity}`,
    `Food subtotal: ₹${total}`,
    `Order type: ${orderType}`,
    `Payment preference: ${payment}`,
    "Delivery charge: Please confirm",
    "",
    "Please confirm availability and final payable amount."
  ].join("\\n");

  const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(whatsappURL, "_blank", "noopener");
});

updateCart();
