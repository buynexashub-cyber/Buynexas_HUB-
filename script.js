const WHATSAPP_NUMBER = "923291504030";
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwo9BAgLRUd2mC7V05gLhOFX7nJrKFZvDuGzJsuy4hvLw5j6llpRTliEAY6vp6hQwxnGg/exec";

const products = [
  {id:"linen-set",name:"The Weekend Linen Set",category:"Fashion",price:3490,oldPrice:4290,rating:"4.9",reviews:28,badge:"BESTSELLER",image:"https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=900&q=85",images:["https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=1000&q=85","https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1000&q=85"],description:"Your easy, all-day uniform. A relaxed two-piece set in a soft, breathable feel, finished with thoughtful details for slow mornings and plans that go long.",variants:["S","M","L","XL"]},
  {id:"glow-duo",name:"Everyday Glow Duo",category:"Beauty",price:1899,oldPrice:2299,rating:"4.8",reviews:19,badge:"A LITTLE RITUAL",image:"https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=900&q=85",images:["https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=1000&q=85","https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1000&q=85"],description:"A feel-good skincare pair for your morning and evening routine. Lightweight, lovely to use, and easy to make part of every day.",variants:["Set of 2"]},
  {id:"studio-headphones",name:"Studio Wireless Headphones",category:"Electronics",price:4299,oldPrice:5299,rating:"4.7",reviews:34,badge:"TRENDING",image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=85",images:["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1000&q=85","https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=1000&q=85"],description:"Rich sound for the commute, the playlist, and everything in between. Cushioned ear cups and a clean everyday silhouette make these an easy favourite.",variants:["Black","Ivory"]},
  {id:"ceramic-pair",name:"Sunday Ceramic Pour-Over Set",category:"Home & Kitchen",price:2590,oldPrice:3190,rating:"4.9",reviews:16,badge:"MADE FOR SLOW MORNINGS",image:"https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=85",images:["https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=85","https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1000&q=85"],description:"Bring a little ceremony to your coffee. A beautifully simple ceramic pour-over set made for easy brewing and slower mornings at home.",variants:["Ivory","Sage"]},
  {id:"everyday-tote",name:"The Everyday Carryall",category:"Accessories",price:2790,oldPrice:3490,rating:"4.8",reviews:23,badge:"CUSTOMER FAVOURITE",image:"https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=85",images:["https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1000&q=85","https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=1000&q=85"],description:"Room for the things you actually carry, with a shape that goes everywhere. Your new everyday bag is ready for the long way round.",variants:["Tan","Black"]},
  {id:"gold-hoops",name:"Little Golden Hour Hoops",category:"Jewellery",price:1499,oldPrice:1899,rating:"4.9",reviews:31,badge:"JUST RIGHT",image:"https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=900&q=85",images:["https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1000&q=85","https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=85"],description:"A little golden detail to finish the look. Lightweight, easy to wear, and just as lovely with your everyday uniform as with something special.",variants:["Gold"]},
  {id:"soft-knit",name:"Cloud-soft Knit Cardigan",category:"Fashion",price:3890,oldPrice:4690,rating:"4.8",reviews:14,badge:"NEW IN",image:"https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=900&q=85",images:["https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=1000&q=85","https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=1000&q=85"],description:"Soft layers, no second thoughts. This relaxed knit slips over everything and feels right from the first cool morning to the last late night.",variants:["S","M","L"]},
  {id:"table-vase",name:"Form No. 02 Table Vase",category:"Home & Kitchen",price:2190,oldPrice:2790,rating:"4.7",reviews:12,badge:"TRENDING",image:"https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&w=900&q=85",images:["https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&w=1000&q=85","https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=1000&q=85"],description:"Sculptural on its own, even better with a few stems. A considered accent for the shelf, table, or little corner that needed something.",variants:["Chalk","Terracotta"]}
];

products.forEach((product) => { product.stock = Number.isFinite(product.stock) ? product.stock : 10; });

const money = (amount) => `Rs. ${Number(amount).toLocaleString("en-PK")}`;
const productUrl = (product) => `${location.href.split("#")[0]}#product/${product.id}`;
const cart = new Map();
let activeProduct = null;
let activeVariant = "";
let activeQuantity = 1;
let currentFilter = "All";
let toastTimer;
let checkoutItems = [];
let searchTerm = "";
let wishlist = new Set(JSON.parse(localStorage.getItem("buyNexasWishlist") || "[]"));

const productGrid = document.querySelector("#product-grid");
const overlay = document.querySelector("#overlay");
const cartDrawer = document.querySelector("#cart-drawer");
const productModal = document.querySelector("#product-modal");
const checkoutModal = document.querySelector("#checkout-modal");
let customerReviews = [];

function requestStoreData(action, params = {}) {
  if (!GOOGLE_SCRIPT_URL) return Promise.reject(new Error("Google Sheets backend has not been connected yet."));
  return new Promise((resolve, reject) => {
    const callbackName = `bnStoreCallback${Date.now()}${Math.floor(Math.random() * 1000)}`;
    const query = new URLSearchParams({...params, action, callback:callbackName});
    const script = document.createElement("script");
    const timeout = setTimeout(() => finish(new Error("The store service did not respond.")), 15000);
    function finish(error, data) {
      clearTimeout(timeout);
      delete window[callbackName];
      script.remove();
      if (error) reject(error);
      else resolve(data);
    }
    window[callbackName] = (data) => finish(null, data);
    script.onerror = () => {};
    script.src = `${GOOGLE_SCRIPT_URL}${GOOGLE_SCRIPT_URL.includes("?") ? "&" : "?"}${query}`;
    document.head.append(script);
  });
}

function postStoreData(action, payload) {
  if (!GOOGLE_SCRIPT_URL) return Promise.reject(new Error("Google Sheets backend has not been connected yet."));
  return new Promise((resolve, reject) => {
    const frame = document.querySelector(".backend-frame");
    const form = document.createElement("form");
    const requestId = `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    let settled = false;
    let onFrameLoad;
    const timeout = setTimeout(() => finish(new Error("The store service did not respond.")), 25000);
    function finish(error, result) {
      if (settled) return;
      settled = true;
      clearTimeout(timeout);
      window.removeEventListener("message", onMessage);
      if (onFrameLoad) frame.removeEventListener("load", onFrameLoad);
      form.remove();
      if (error) reject(error);
      else if (!result?.ok) reject(new Error(result?.error || "The request could not be saved."));
      else resolve(result);
    }
    function onMessage(event) {
      if (event.data?.requestId !== requestId) return;
      finish(null, event.data);
    }
    window.addEventListener("message", onMessage);
    if (action === "placeOrder") {
      onFrameLoad = async () => {
        try {
          const savedOrder = await requestStoreData("track", {id:payload.orderId,phone:payload.customer.phone1});
          if (savedOrder.error) throw new Error(savedOrder.error);
          finish(null, {...savedOrder,ok:true});
        } catch (error) { finish(error); }
      };
      frame.addEventListener("load", onFrameLoad, {once:true});
    }
    form.method = "post";
    form.action = GOOGLE_SCRIPT_URL;
    form.target = frame.name;
    for (const [name, value] of Object.entries({action, payload:JSON.stringify(payload), requestId})) {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = name;
      input.value = value;
      form.append(input);
    }
    document.body.append(form);
    form.submit();
  });
}

async function loadStoreData() {
  if (!GOOGLE_SCRIPT_URL) return;
  try {
    const [catalog, reviews] = await Promise.all([requestStoreData("catalog"), requestStoreData("reviews")]);
    if (Array.isArray(catalog)) {
      products.splice(0, products.length, ...catalog.map((item) => ({...item, price:Number(item.price), oldPrice:Number(item.oldPrice), stock:Number(item.stock), active:String(item.active).toLowerCase() !== "false", variants:Array.isArray(item.variants) ? item.variants : String(item.variants || "").split(",").map((value) => value.trim()).filter(Boolean), images:[item.image, item.image].filter(Boolean), rating:"0.0", reviews:0})));
    }
    customerReviews = Array.isArray(reviews) ? reviews : [];
    products.forEach((product) => {
      const matching = customerReviews.filter((review) => review.productId === product.id);
      if (matching.length) {
        product.reviews = matching.length;
        product.rating = (matching.reduce((sum, review) => sum + Number(review.rating), 0) / matching.length).toFixed(1);
      }
    });
    renderProducts();
  } catch (error) {
    showToast("Store sync is temporarily unavailable. Please try again.");
  }
}

function renderProducts() {
  const sort = document.querySelector(".sort-select").value;
  let visible = products.filter((product) => {
    const matchesFilter = currentFilter === "All" || (currentFilter === "Trending" ? product.badge === "TRENDING" : product.category === currentFilter);
    const searchableText = `${product.name} ${product.category} ${product.description} ${product.badge}`.toLowerCase();
    return matchesFilter && searchableText.includes(searchTerm);
  });
  if (sort === "price-low") visible = visible.sort((a, b) => a.price - b.price);
  if (sort === "price-high") visible = visible.sort((a, b) => b.price - a.price);
  productGrid.innerHTML = visible.length ? visible.map((product) => `<article class="product-card">
    <div class="product-image-wrap"><img class="product-image" src="${product.image}" alt="${product.name}" loading="lazy"><span class="product-badge">${product.badge}</span><button class="wishlist-button ${wishlist.has(product.id) ? "saved" : ""}" type="button" data-wishlist="${product.id}" aria-label="${wishlist.has(product.id) ? "Remove from" : "Add to"} wishlist">${wishlist.has(product.id) ? "♥" : "♡"}</button></div>
    <div class="product-meta"><span class="product-category">${product.category}</span><span class="product-rating">★ ${product.rating} <span style="color:#96978e">(${product.reviews})</span></span></div>
    <h3 class="product-name" data-product="${product.id}">${product.name}</h3><div class="product-prices"><strong>${money(product.price)}</strong>${product.oldPrice > product.price ? `<span class="old-price">${money(product.oldPrice)}</span><span class="discount">${Math.round((1-product.price/product.oldPrice)*100)}% OFF</span>` : ""}</div>
    <p class="stock-note ${product.stock === 0 ? "sold-out" : product.stock <= 5 ? "low-stock" : ""}">${product.stock === 0 ? "Sold out" : product.stock <= 5 ? `Only ${product.stock} left` : "In stock"}</p>
    <div class="product-actions"><button class="product-add" type="button" data-add="${product.id}" ${product.stock === 0 ? "disabled" : ""}>Add to bag <span>+</span></button><button class="product-checkout" type="button" data-checkout="${product.id}" ${product.stock === 0 ? "disabled" : ""}>${product.stock === 0 ? "Sold out" : "Checkout <span>↗</span>"}</button></div>
  </article>`).join("") : `<p class="no-products">${searchTerm ? `No products match “${searchTerm}”. Try another search.` : "No products are available right now. Please check back soon."}</p>`;
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 3200);
}

function showOrderSuccessToast() {
  showToast("Bismillah! Your order has been sent successfully. Our team will confirm it on WhatsApp.");
}

function addToCart(product, quantity = 1, variant = product.variants[0]) {
  const key = `${product.id}|${variant}`;
  const existing = cart.get(key);
  if (product.stock === 0 || (existing?.quantity || 0) + quantity > product.stock) {
    showToast(product.stock === 0 ? "This product is sold out" : `Only ${product.stock} available`);
    return;
  }
  cart.set(key, {product, variant, quantity: (existing?.quantity || 0) + quantity});
  renderCart();
  showToast(`${product.name} added to your bag`);
}

function renderCart() {
  const items = [...cart.entries()];
  const count = items.reduce((sum, [, item]) => sum + item.quantity, 0);
  document.querySelectorAll(".cart-count").forEach((el) => { el.textContent = count; });
  document.querySelector("#cart-subtotal").textContent = money(items.reduce((sum, [, item]) => sum + item.quantity * item.product.price, 0));
  document.querySelector("#cart-items").innerHTML = items.length ? items.map(([key, item]) => `<div class="cart-row"><img src="${item.product.image}" alt=""><div><h3>${item.product.name}</h3><p>${item.variant} · ${money(item.product.price)}</p><div class="quantity-control"><button type="button" data-cart-qty="${key}" data-change="-1" aria-label="Decrease quantity">−</button><span>${item.quantity}</span><button type="button" data-cart-qty="${key}" data-change="1" aria-label="Increase quantity">+</button><button type="button" class="remove-item" data-remove="${key}">Remove</button></div></div><span class="cart-row-price">${money(item.product.price * item.quantity)}</span></div>`).join("") : `<p class="empty-cart">Your bag is taking a little breather.<br>Find something lovely to bring it back.</p>`;
  document.querySelector(".checkout-button").disabled = !items.length;
}

function setOverlay(open) {
  overlay.hidden = !open;
  requestAnimationFrame(() => overlay.classList.toggle("show", open));
  document.body.classList.toggle("locked", open);
}

function openCart() {
  setOverlay(true);
  cartDrawer.classList.add("open");
  cartDrawer.setAttribute("aria-hidden", "false");
}

function closeCart() {
  cartDrawer.classList.remove("open");
  cartDrawer.setAttribute("aria-hidden", "true");
  if (!productModal.classList.contains("open") && !checkoutModal.classList.contains("open")) setOverlay(false);
}

function openProduct(product) {
  activeProduct = product;
  activeVariant = product.variants[0];
  activeQuantity = 1;
  productModal.innerHTML = `<div class="modal-panel"><button class="modal-close" type="button" aria-label="Close product details">×</button><div class="product-modal-content"><img class="modal-product-photo" src="${product.images[0]}" alt="${product.name}"><div class="modal-product-info"><span class="product-category">${product.category}</span><h2>${product.name}</h2><div class="modal-rating">★ ${product.rating} &nbsp; <span style="color:#898b82">${product.reviews} lovely reviews</span></div><div class="modal-price"><strong>${money(product.price)}</strong><span class="old-price">${money(product.oldPrice)}</span><span class="discount">${Math.round((1-product.price/product.oldPrice)*100)}% OFF</span></div><p class="modal-description">${product.description}</p><p class="variant-label">${product.category === "Fashion" ? "SELECT SIZE" : "SELECT OPTION"}</p><div class="variant-options">${product.variants.map((variant, index) => `<button type="button" class="variant-option ${index === 0 ? "selected" : ""}" data-variant="${variant}">${variant}</button>`).join("")}</div><p class="variant-label">QUANTITY</p><div class="modal-actions"><div class="modal-quantity"><button type="button" data-modal-qty="-1" aria-label="Decrease quantity">−</button><span class="modal-quantity-value">1</span><button type="button" data-modal-qty="1" aria-label="Increase quantity">+</button></div><button class="button button-dark add-modal-cart" type="button">Add to cart <span>+</span></button><button class="button order-now" type="button">Order now <span>↗</span></button></div><p class="delivery-note">Cash on delivery available · Nationwide delivery</p></div></div></div>`;
  productModal.classList.add("open");
  productModal.setAttribute("aria-hidden", "false");
  productModal.querySelector(".modal-product-info h2").insertAdjacentHTML("afterend", `<button class="wishlist-button modal-wishlist ${wishlist.has(product.id) ? "saved" : ""}" type="button" data-modal-wishlist aria-label="${wishlist.has(product.id) ? "Remove from" : "Add to"} wishlist">${wishlist.has(product.id) ? "♥" : "♡"} Save</button>`);
  productModal.querySelector(".modal-panel").insertAdjacentHTML("beforeend", renderReviews(product));
  productModal.querySelector(".delivery-note").textContent = product.stock === 0 ? "Sold out · Check back soon" : product.stock <= 5 ? `Only ${product.stock} left · COD · Nationwide delivery` : "In stock · Cash on delivery · Nationwide delivery";
  if (product.stock === 0) productModal.querySelectorAll(".add-modal-cart,.order-now").forEach((button) => { button.disabled = true; });
  setOverlay(true);
  location.hash = `product/${product.id}`;
}

function closeProduct() {
  productModal.classList.remove("open");
  productModal.setAttribute("aria-hidden", "true");
  if (!cartDrawer.classList.contains("open") && !checkoutModal.classList.contains("open")) setOverlay(false);
  if (location.hash.startsWith("#product/")) history.replaceState(null, "", `${location.pathname}${location.search}`);
}

function getOrderItems() {
  return [...cart.values()].map((item) => ({...item}));
}

function escapeMarkup(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]));
}

function renderReviews(product) {
  const reviews = customerReviews.filter((review) => review.productId === product.id);
  const entries = reviews.length ? reviews.map((review) => `<article class="review-item"><strong>${escapeMarkup(review.name || "Customer")} <span style="color:#a4653f">★ ${Number(review.rating)}</span></strong>${String(review.verified).toLowerCase() === "true" ? `<span class="review-verified">✓ VERIFIED BUYER</span>` : ""}<p>${escapeMarkup(review.text)}</p>${review.image ? `<img src="${escapeMarkup(review.image)}" alt="Customer review photo" loading="lazy">` : ""}</article>`).join("") : `<p class="muted">No approved reviews yet. Purchased this item? Share your experience.</p>`;
  return `<section class="review-section"><h3>Customer notes${reviews.length ? ` (${reviews.length})` : ""}</h3><div class="review-list">${entries}</div><form class="review-form" data-review-product="${escapeMarkup(product.id)}"><h4>Leave a review</h4><label>Name<input name="name" required maxlength="80"></label><label>Order phone<input name="phone" type="tel" required placeholder="Phone used at checkout"></label><label>Rating<select name="rating" required><option value="5">5 - Loved it</option><option value="4">4 - Really good</option><option value="3">3 - It's okay</option><option value="2">2 - Not great</option><option value="1">1 - Disappointed</option></select></label><label>Photo (optional)<input name="photo" type="file" accept="image/png,image/jpeg,image/webp"></label><label class="review-wide">Your review<textarea name="text" required maxlength="1200"></textarea></label><button class="button button-dark" type="submit">Submit review</button><p class="review-message" aria-live="polite"></p></form></section>`;
}

function openCheckout(items = getOrderItems()) {
  if (!items.length) return;
  checkoutItems = items.map((item) => ({...item}));
  closeCart();
  closeProduct();
  const total = items.reduce((sum, item) => sum + item.quantity * item.product.price, 0);
  checkoutModal.innerHTML = `<div class="modal-panel checkout-panel"><button class="modal-close" type="button" aria-label="Close checkout">×</button><div class="checkout-title"><p class="eyebrow">JUST A FEW DETAILS</p><h2>Let's get it <em>to you.</em></h2><p>Cash on delivery · Nationwide delivery</p></div><p class="checkout-note">Thank you for choosing BuyNexas Hub. Your order will be reviewed and confirmed by our team.</p><div class="checkout-summary">${items.map((item) => `<div class="summary-line"><span>${item.product.name} · ${item.variant} × ${item.quantity}</span><span>${money(item.product.price * item.quantity)}</span></div>`).join("")}<div class="summary-line" style="border-top:1px solid #d8d5cb;margin-top:7px;padding-top:10px;font-weight:700"><span>Total</span><span>${money(total)}</span></div></div><form class="checkout-form"><div class="field"><label for="customer-name">Full name *</label><input id="customer-name" name="name" autocomplete="name" required placeholder="Your full name"></div><div class="field"><label for="phone-one">Mobile number 1 *</label><input id="phone-one" name="phone1" type="tel" autocomplete="tel" required placeholder="03XX XXXXXXX"></div><div class="field"><label for="phone-two">Mobile number 2</label><input id="phone-two" name="phone2" type="tel" placeholder="Optional"></div><div class="field"><label for="customer-email">Email</label><input id="customer-email" name="email" type="email" autocomplete="email" placeholder="Optional"></div><div class="field"><label for="customer-city">City *</label><input id="customer-city" name="city" autocomplete="address-level2" required placeholder="Your city"></div><div class="field"><label for="customer-area">Famous / nearest area *</label><input id="customer-area" name="area" required placeholder="Area or nearby landmark"></div><div class="field full"><label for="customer-address">Complete address *</label><textarea id="customer-address" name="address" autocomplete="street-address" required placeholder="House, street, and any delivery directions"></textarea></div><div class="field full"><label for="customer-feedback">Order note / feedback</label><textarea id="customer-feedback" name="feedback" rows="3" placeholder="Optional: delivery instructions, preferred time, or any note for our team"></textarea></div><div class="checkout-actions"><button class="button button-dark checkout-submit" type="submit">Place order <span>✓</span></button><button class="button button-secondary checkout-support" type="button">Need help? Support <span>↗</span></button></div><p class="secure-note">Your order will be sent directly to the BuyNexas Hub admin team. WhatsApp support remains available for help.</p></form></div>`;
  checkoutModal.classList.add("open");
  checkoutModal.setAttribute("aria-hidden", "false");
  setOverlay(true);
}

function closeCheckout() {
  checkoutModal.classList.remove("open");
  checkoutModal.setAttribute("aria-hidden", "true");
  if (!cartDrawer.classList.contains("open") && !productModal.classList.contains("open")) setOverlay(false);
}

function renderOrderConfirmation(orderId, customer, items) {
  const total = items.reduce((sum, item) => sum + item.quantity * item.product.price, 0);
  const itemRows = items.map((item) => `<div class="confirmation-item"><span>${escapeMarkup(item.product.name)} · ${escapeMarkup(item.variant)} × ${item.quantity}</span><strong>${money(item.product.price * item.quantity)}</strong></div>`).join("");
  const address = [customer.address, customer.area, customer.city].filter(Boolean).map(escapeMarkup).join(", ");
  return `<div class="modal-panel checkout-panel order-confirmation"><button class="modal-close" type="button" aria-label="Close confirmation">×</button><div class="confirmation-mark" aria-hidden="true">✓</div><p class="eyebrow">ORDER CONFIRMED</p><h2>Your order is confirmed.</h2><p class="confirmation-intro">Thank you, ${escapeMarkup(customer.name)}. Your order has been sent to the BuyNexas Hub team.</p><div class="confirmation-reference"><span>Order number</span><strong>${escapeMarkup(orderId)}</strong></div><h3>Order details</h3><div class="confirmation-items">${itemRows}<div class="confirmation-total"><span>Total · Cash on delivery</span><strong>${money(total)}</strong></div></div><div class="confirmation-delivery"><div><span>Phone</span><strong>${escapeMarkup(customer.phone1)}</strong></div><div><span>Delivery address</span><strong>${address}</strong></div>${customer.feedback ? `<div><span>Order note</span><strong>${escapeMarkup(customer.feedback)}</strong></div>` : ""}</div><button class="button button-dark confirmation-close" type="button">Continue shopping</button></div>`;
}

function getSavedCustomerOrders() {
  try { return JSON.parse(localStorage.getItem("buyNexasOrders") || "[]"); }
  catch (error) { return []; }
}

function saveCustomerOrder(order) {
  try {
    const orders = getSavedCustomerOrders().filter((saved) => saved.id !== order.id);
    orders.unshift(order);
    localStorage.setItem("buyNexasOrders", JSON.stringify(orders.slice(0, 20)));
  } catch (error) { showToast("Order is confirmed, but this browser could not save its local order history."); }
}

function updateSavedOrderStatus(orderId, status) {
  const orders = getSavedCustomerOrders();
  const order = orders.find((saved) => String(saved.id || "").toLowerCase() === String(orderId).toLowerCase());
  if (!order) return;
  order.status = status;
  try { localStorage.setItem("buyNexasOrders", JSON.stringify(orders)); } catch (error) {}
  renderSavedCustomerOrders();
}

function saveTrackedCustomerOrder(order) {
  if (!Array.isArray(order.items) || !order.items.length) {
    updateSavedOrderStatus(order.orderId, order.status);
    return;
  }
  saveCustomerOrder({id:order.orderId,createdAt:order.createdAt || new Date().toISOString(),status:order.status,total:Number(order.total) || 0,items:order.items.map((item) => ({name:item.name,variant:item.variant,quantity:item.quantity,price:Number(item.price) || 0,image:item.image || ""}))});
  renderSavedCustomerOrders();
}

function renderSavedCustomerOrders() {
  const orders = getSavedCustomerOrders();
  const list = document.querySelector("#my-orders-list");
  if (!list) return;
  list.innerHTML = orders.length ? orders.map((order) => {
    const items = Array.isArray(order.items) ? order.items.map((item) => {
      const product = item.product || item;
      return {name:product.name || item.name || item.productName || "Product details unavailable",variant:item.variant || product.variant || "Standard",quantity:Number(item.quantity) || 1,price:Number(product.price ?? item.price) || 0,image:product.image || item.image || ""};
    }) : [];
    const total = Number(order.total) || items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const date = order.createdAt && !Number.isNaN(Date.parse(order.createdAt)) ? new Date(order.createdAt).toLocaleString() : "Date unavailable";
    return `<article class="saved-order"><div class="saved-order-head"><div class="saved-order-meta"><strong>${escapeMarkup(order.id || "Order")}</strong><span>${escapeMarkup(date)}</span></div><span class="saved-order-status">${escapeMarkup(order.status || "Confirmed")}</span><strong class="saved-order-total">${money(total)}</strong></div><div class="saved-order-items">${items.length ? items.map((item) => `<div class="saved-order-item">${/^https?:\/\//i.test(item.image) ? `<img src="${escapeMarkup(item.image)}" alt="">` : ""}<span><strong>${escapeMarkup(item.name)}</strong><small>${escapeMarkup(item.variant)} · Qty ${item.quantity}</small></span><strong>${money(item.price * item.quantity)}</strong></div>`).join("") : `<p class="saved-orders-empty">Product details are unavailable for this saved order.</p>`}</div></article>`;
  }).join("") : `<p class="saved-orders-empty">No orders saved on this device yet. Orders placed on another device will not appear here.</p>`;
}

function makeWhatsAppMessage(items, customer, orderId = "") {
  const itemText = items.map((item) => `🛍️ Product: ${item.product.name} (${item.variant})\n🔗 Product Link: ${productUrl(item.product)}\n📦 Quantity: ${item.quantity}\n💰 Total: ${money(item.product.price * item.quantity)}`).join("\n\n");
  const grandTotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const lines = ["Bismillah,", "", "Assalam o Alaikum BuyNexas Hub,", "", "I want to confirm my order.", ...(orderId ? [`🧾 Order reference: ${orderId}`] : []), "", itemText, "", `🧾 Order total: ${money(grandTotal)}`, "", `👤 Name: ${customer.name}`, `📱 Phone 1: ${customer.phone1}`, `📱 Phone 2: ${customer.phone2 || "Not provided"}`, `🏙️ City: ${customer.city}`, `📍 Area: ${customer.area}`, `🏠 Address: ${customer.address}`, `✍️ Feedback / note: ${customer.feedback || "No extra note"}`, "", "Please confirm my order and guide me for delivery."];
  return lines.join("\n");
}

document.querySelectorAll(".cart-trigger").forEach((button) => button.addEventListener("click", openCart));
document.querySelector(".close-cart").addEventListener("click", closeCart);
document.querySelector(".checkout-button").addEventListener("click", () => openCheckout());
document.querySelector("#tracking-form").addEventListener("submit", async (event) => {
  event.preventDefault();
  const resultNode = document.querySelector("#tracking-result");
  resultNode.classList.remove("error");
  if (!GOOGLE_SCRIPT_URL) {
    resultNode.textContent = "Order lookup will be available after the store backend is connected. WhatsApp support is available above.";
    return;
  }
  const data = new FormData(event.currentTarget);
  resultNode.textContent = "Checking order…";
  try {
    const result = await requestStoreData("track", {id:data.get("orderId"),phone:data.get("phone")});
    if (result.error) throw new Error(result.error);
    saveTrackedCustomerOrder(result);
    resultNode.textContent = `Order ${result.orderId}: ${result.status}${result.city ? ` · ${result.city}` : ""}`;
  } catch (error) {
    resultNode.textContent = error.message;
    resultNode.classList.add("error");
  }
});
document.querySelector("#view-my-orders").addEventListener("click", (event) => {
  const list = document.querySelector("#my-orders-list");
  const expanded = event.currentTarget.getAttribute("aria-expanded") === "true";
  event.currentTarget.setAttribute("aria-expanded", String(!expanded));
  list.classList.toggle("hide", expanded);
  if (!expanded) renderSavedCustomerOrders();
});
renderSavedCustomerOrders();
overlay.addEventListener("click", () => { closeCart(); closeProduct(); closeCheckout(); });
document.querySelector(".sort-select").addEventListener("change", renderProducts);
document.querySelector("#product-search").addEventListener("input", (event) => {
  searchTerm = event.target.value.trim().toLowerCase();
  renderProducts();
});
document.querySelectorAll(".filter-button").forEach((button) => button.addEventListener("click", () => {
  currentFilter = button.dataset.filter;
  document.querySelectorAll(".filter-button").forEach((filter) => filter.classList.toggle("selected", filter === button));
  renderProducts();
}));
document.querySelectorAll(".category-tile").forEach((tile) => tile.addEventListener("click", () => {
  currentFilter = tile.dataset.category === "Trending" ? "Trending" : tile.dataset.category;
  document.querySelectorAll(".filter-button").forEach((filter) => filter.classList.toggle("selected", filter.dataset.filter === currentFilter));
  renderProducts();
  document.querySelector("#shop").scrollIntoView({behavior:"smooth"});
}));
productGrid.addEventListener("click", (event) => {
  const addButton = event.target.closest("[data-add]");
  const checkoutButton = event.target.closest("[data-checkout]");
  const productButton = event.target.closest("[data-product]");
  const wishlistButton = event.target.closest("[data-wishlist]");
  if (wishlistButton) {
    const productId = wishlistButton.dataset.wishlist;
    if (wishlist.has(productId)) wishlist.delete(productId);
    else wishlist.add(productId);
    localStorage.setItem("buyNexasWishlist", JSON.stringify([...wishlist]));
    renderProducts();
    return;
  }
  if (addButton) addToCart(products.find((item) => item.id === addButton.dataset.add));
  if (checkoutButton) {
    const product = products.find((item) => item.id === checkoutButton.dataset.checkout);
    openCheckout([{product, variant:product.variants[0], quantity:1}]);
  }
  if (productButton) openProduct(products.find((item) => item.id === productButton.dataset.product));
});
document.querySelector("#cart-items").addEventListener("click", (event) => {
  const quantityButton = event.target.closest("[data-cart-qty]");
  const removeButton = event.target.closest("[data-remove]");
  if (removeButton) cart.delete(removeButton.dataset.remove);
  if (quantityButton) {
    const key = quantityButton.dataset.cartQty;
    const item = cart.get(key);
    item.quantity = Math.min(item.product.stock, item.quantity + Number(quantityButton.dataset.change));
    if (item.quantity < 1) cart.delete(key);
  }
  renderCart();
});
productModal.addEventListener("click", (event) => {
  if (event.target.closest(".modal-close")) closeProduct();
  if (event.target.closest("[data-modal-wishlist]")) {
    if (wishlist.has(activeProduct.id)) wishlist.delete(activeProduct.id);
    else wishlist.add(activeProduct.id);
    localStorage.setItem("buyNexasWishlist", JSON.stringify([...wishlist]));
    const button = productModal.querySelector("[data-modal-wishlist]");
    const saved = wishlist.has(activeProduct.id);
    button.classList.toggle("saved", saved);
    button.setAttribute("aria-label", `${saved ? "Remove from" : "Add to"} wishlist`);
    button.innerHTML = `${saved ? "♥" : "♡"} Save`;
    renderProducts();
  }
  const variantButton = event.target.closest("[data-variant]");
  if (variantButton) {
    activeVariant = variantButton.dataset.variant;
    productModal.querySelectorAll(".variant-option").forEach((button) => button.classList.toggle("selected", button === variantButton));
  }
  const quantityButton = event.target.closest("[data-modal-qty]");
  if (quantityButton) {
    activeQuantity = Math.min(activeProduct.stock, Math.max(1, activeQuantity + Number(quantityButton.dataset.modalQty)));
    productModal.querySelector(".modal-quantity-value").textContent = activeQuantity;
  }
  if (event.target.closest(".add-modal-cart")) addToCart(activeProduct, activeQuantity, activeVariant);
  if (event.target.closest(".order-now")) openCheckout([{product:activeProduct,variant:activeVariant,quantity:activeQuantity}]);
});
productModal.addEventListener("submit", async (event) => {
  const form = event.target.closest(".review-form");
  if (!form) return;
  event.preventDefault();
  const message = form.querySelector(".review-message");
  if (!GOOGLE_SCRIPT_URL) { message.textContent = "Reviews will be available after the store backend is connected."; return; }
  const submit = form.querySelector("button[type=submit]");
  submit.disabled = true;
  message.textContent = "Submitting review…";
  try {
    const data = Object.fromEntries(new FormData(form).entries());
    const photo = form.elements.photo.files[0];
    delete data.photo;
    if (photo) {
      if (photo.size > 2 * 1024 * 1024) throw new Error("Review photo must be under 2 MB.");
      data.imageData = await new Promise((resolve, reject) => { const reader = new FileReader(); reader.onload = () => resolve(reader.result); reader.onerror = reject; reader.readAsDataURL(photo); });
    }
    data.productId = form.dataset.reviewProduct;
   
