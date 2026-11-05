
const PRICE = 399;
const WHATSAPP_NUMBER = "917539126937";

let quantity = 1;

const qty = document.getElementById("qty");
const cartItem = document.getElementById("cartItem");
const subtotal = document.getElementById("subtotal");

function updateCart() {
  qty.textContent = quantity;
  cartItem.textContent =
    `Royal Mutton Biryani × ${quantity}`;

  subtotal.textContent =
    `Subtotal: ₹${quantity * PRICE}`;
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
  document.getElementById("checkout")
    .scrollIntoView({ behavior: "smooth" });
});

document.getElementById("year").textContent =
  new Date().getFullYear();

document.getElementById("orderForm")
  .addEventListener("submit", (event) => {

    event.preventDefault();

    const form = new FormData(event.target);

    const name = form.get("name").trim();
    const phone = form.get("phone").trim();
    const address = form.get("address").trim();
    const orderType = form.get("orderType");
    const payment = form.get("payment");

    if (!name || !phone || !address) {
      alert("Please complete all delivery details.");
      return;
    }

    const total = quantity * PRICE;

    const message = `
ROYAL BIRYANI - NEW ORDER

Customer: ${name}
Mobile: ${phone}
Address: ${address}

Product: Royal Mutton Biryani
Quantity: ${quantity}
Price: ₹${total}

Order Type: ${orderType}
Payment: ${payment}

Delivery Charge: To be confirmed by admin.

Please confirm this order.
    `;

    const whatsappURL =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${
        encodeURIComponent(message)
      }`;

    window.open(whatsappURL, "_blank");
  });

updateCart();
