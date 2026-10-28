// // ===== Mobile menu =====
// const menu = document.getElementById("menu");
// document.getElementById("burger").onclick = () => menu.classList.toggle("open");
// menu.querySelectorAll("a").forEach(a => a.onclick = () => menu.classList.remove("open"));

// // ===== Cart open / close =====
// const cart = document.getElementById("cart");
// const overlay = document.getElementById("overlay");

// function toggleCart(show) {
//     cart.classList.toggle("open", show);
//     overlay.classList.toggle("show", show);
// }
// document.getElementById("openCart").onclick = () => toggleCart(true);
// document.getElementById("closeCart").onclick = () => toggleCart(false);
// overlay.onclick = () => toggleCart(false);

// // ===== Add to cart =====
// let items = [];

// document.querySelectorAll(".add-cart").forEach(btn => {
//     btn.onclick = () => {
//         // name ar price HTML button theke ashe
//         items.push({ name: btn.dataset.name, price: Number(btn.dataset.price) });
//         showCart();
//         toggleCart(true);
//     };
// });

// function showCart() {
//     const list = document.getElementById("cartItems");
//     let total = 0;
//     list.innerHTML = "";

//     items.forEach((item, i) => {
//         total += item.price;
//         list.innerHTML += `<li>${item.name} - ৳${item.price}
//       <button onclick="removeItem(${i})">Remove</button></li>`;
//     });

//     document.getElementById("cartTotal").textContent = total;
//     document.getElementById("cartCount").textContent = items.length;
// }

// function removeItem(i) {
//     items.splice(i, 1);
//     showCart();
// }

// // ===== Place order =====
// document.getElementById("orderForm").onsubmit = e => {
//     e.preventDefault();
//     const msg = document.getElementById("orderMsg");

//     if (items.length === 0) {
//         msg.style.color = "red";
//         msg.textContent = "Cart khali! Age service add korun.";
//         return;
//     }
//     msg.style.color = "#16a34a";
//     msg.textContent = "✅ Order successful! Ami shigroi contact korbo.";
//     items = [];
//     showCart();
//     e.target.reset();
// };

// // ===== Skill bar animation + scroll reveal =====
// const watcher = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//         if (!entry.isIntersecting) return;
//         entry.target.classList.add("show");
//         entry.target.querySelectorAll(".fill").forEach(bar => {
//             bar.style.width = bar.dataset.percent + "%";
//         });
//     });
// });

// document.querySelectorAll(".section").forEach(sec => {
//     sec.classList.add("reveal");
//     watcher.observe(sec);
// });

// ===== Mobile menu =====
const menu = document.getElementById("menu");
document.getElementById("burger").onclick = () => menu.classList.toggle("open");
menu.querySelectorAll("a").forEach(a => a.onclick = () => menu.classList.remove("open"));

// ===== Skill bar animation + scroll reveal =====
const watcher = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("show");
        entry.target.querySelectorAll(".fill").forEach(bar => {
            bar.style.width = bar.dataset.percent + "%";
        });
    });
});

document.querySelectorAll(".section").forEach(sec => {
    sec.classList.add("reveal");
    watcher.observe(sec);
});