// === FEATURED PRODUCTS SECTION ===
document.addEventListener('DOMContentLoaded', () => {
  const featuredProducts = [
    { img: 'images/FeaturedProducts_multitoolSet.webp', title: 'Multitool Set', price: 25.99 },
    { img: 'images/FeaturedProducts_NonStickPan.webp', title: 'Non-stick Pan', price: 18.50 },
    { img: 'images/FeaturedProducts_3.webp', title: 'Laser Sight Weaponlight', price: 68.70 },
    { img: 'images/FeaturedProducts_4.webp', title: 'LXZ Gaming PC Desktop computer', price: 606.44 },
    { img: 'images/FeaturedProducts_5.webp', title: 'Aurora LED Starry Sky Projector', price: 4.26 },
    { img: 'images/FeaturedProducts_6.webp', title: 'Magnetic Wireless Charging Power Bank', price: 8.91 },
    { img: 'images/FeaturedProducts_7.webp', title: 'Sided Adhesive Tape', price: 7.59 },
    { img: 'images/FeaturedProducts_8.webp', title: 'Slide Sandals', price: 13.78 },
    { img: 'images/FeaturedProducts_9.webp', title: '100 million durable men perfume', price: 13.24 },
    { img: 'images/FeaturedProducts_10.webp', title: 'Assemble Dust-proof Metal Storage Cabinet', price: 8.17 },
    { img: 'images/FeaturedProducts_11.webp', title: 'Smart Watch', price: 45.00 },
    { img: 'images/FeaturedProducts_12.webp', title: 'Screwdriver Kit', price: 12.99 },
    { img: 'images/FeaturedProducts_13.webp', title: 'Wireless Earbuds', price: 29.99 },
    { img: 'images/FeaturedProducts_14.webp', title: 'Portable Blender', price: 22.50 },
    { img: 'images/FeaturedProducts_15.webp', title: 'LED Light Strip', price: 15.99 },
    { img: 'images/FeaturedProducts_16.webp', title: 'Folding Knife', price: 19.99 },
    { img: 'images/FeaturedProducts_17.webp', title: 'Toolbox Set', price: 35.00 }
  ];

  const container = document.getElementById('featured-products');
  const btn = document.getElementById('view-more-btn');
  const itemsPerLoad = 4;
  let currentIndex = 0;

  function renderProducts(startIndex, count) {
    const nextProducts = featuredProducts.slice(startIndex, startIndex + count);

    nextProducts.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.className = 'product';
      productDiv.innerHTML = `
        <img src="${product.img}" alt="${product.title}">
        <h3>${product.title}</h3>
        <p class="price">$${product.price.toFixed(2)}</p>
        <button class="add-btn">Add to Cart</button>
      `;

      const button = productDiv.querySelector('.add-btn');
      button.addEventListener('click', () => addFeaturedToCart(product));

      container.appendChild(productDiv);
    });

    currentIndex += count;

    if (currentIndex >= featuredProducts.length) {
      btn.style.display = 'none';
    }
  }

  function addFeaturedToCart(product) {
    cart.push({
      id: Date.now(), // Temporary unique ID
      img: product.img,
      name: product.title,
      desc: 'Featured product',
      price: product.price
    });
    saveCart();
    updateCartCount();
  }

  renderProducts(currentIndex, itemsPerLoad);
  btn.addEventListener('click', () => renderProducts(currentIndex, itemsPerLoad));
});


// === PRODUCTS DATA ===
const allProducts = [
  { id: 1, category: 'Toys', name: 'Toy Robot', desc: 'Interactive and fun for ages 5+', price: 19.99, img: 'images/Toy_Roboto_1.webp' },
  { id: 2, category: 'Toys', name: 'Puzzle Set', desc: 'Boosts problem-solving skills', price: 12.99, img: 'images/Toy_PuzzleSet_1.webp' },
  { id: 3, category: 'Toys', name: 'Construction Kit', desc: 'Collector display toy for adults', price: 19.99, img: 'images/Toy_3.webp' },
  { id: 4, category: 'Toys', name: 'Super Space Shuttle', desc: 'Model for space enthusiasts', price: 76.89, img: 'images/Toy_4.webp' },
  { id: 5, category: 'Toys', name: '3D Wooden Puzzle', desc: 'Challenging wooden model kit', price: 5.62, img: 'images/Toy_5.webp' },
  { id: 6, category: 'Toys', name: 'Action Figure', desc: 'Fun character for kids', price: 9.99, img: 'images/Toy_6.webp' },
  { id: 7, category: 'Toys', name: 'Alien Warrior Figure', desc: 'Flexible sci-fi collectible toy', price: 10.99, img: 'images/Toy_7.webp' },
  { id: 8, category: 'Toys', name: 'Superhero Legend', desc: 'Iconic hero with accessories', price: 11.49, img: 'images/Toy_8.webp' },

  { id: 9, category: 'Kitchen Tools', name: 'Silicone Spatula Set', desc: 'Heat-resistant and durable', price: 14.99, img: 'images/Kitchen_SiliconeSpatulaSet_1.webp' },
  { id: 10, category: 'Kitchen Tools', name: 'Chef Knife', desc: 'Sharp and balanced blade', price: 25.49, img: 'images/Kitchen_ChefKnife_1.webp' },
  { id: 11, category: 'Kitchen Tools', name: 'Cutting Board Set', desc: 'Versatile kitchen boards', price: 18.75, img: 'images/Kitchen_CuttingBoards_1.webp' },
  { id: 12, category: 'Kitchen Tools', name: 'Bamboo Cutting Set', desc: 'Eco-friendly with juice grooves', price: 21.50, img: 'images/Kitchen_4.webp' },
  { id: 13, category: 'Kitchen Tools', name: 'Plastic Cutting Boards', desc: 'Color-coded for food safety', price: 16.99, img: 'images/Kitchen_5.webp' },
  { id: 14, category: 'Kitchen Tools', name: 'Flexible Chopping Mats', desc: 'Thin and dishwasher-safe', price: 12.75, img: 'images/Kitchen_6.webp' },
  { id: 15, category: 'Kitchen Tools', name: 'Wooden Cutting Board', desc: 'Rustic and durable wood board', price: 24.99, img: 'images/Kitchen_7.webp' },
  { id: 16, category: 'Kitchen Tools', name: 'Glass Cutting Set', desc: 'Stylish and hygienic surface', price: 18.25, img: 'images/Kitchen_8.webp' },

  { id: 17, category: 'Electronics', name: 'Wireless Headphones', desc: 'Bluetooth and noise-cancelling', price: 59.99, img: 'images/Electronics_WirelessHeadphones_1.webp' },
  { id: 18, category: 'Electronics', name: 'Smart Plug', desc: 'Control devices via app', price: 22.89, img: 'images/Electronics_SmartPlug_1.webp' },
  { id: 19, category: 'Electronics', name: 'Portable Charger', desc: 'Fast, high-capacity charging', price: 27.95, img: 'images/Electronics_PowerBank_1.webp' },
  { id: 20, category: 'Electronics', name: 'Slim Power Bank', desc: 'Compact and fast charging', price: 25.95, img: 'images/Electronics_4.webp' },
  { id: 21, category: 'Electronics', name: 'Solar Portable Charger', desc: 'Sun-powered for outdoors', price: 32.99, img: 'images/Electronics_5.webp' },
  { id: 22, category: 'Electronics', name: 'Capacity Power Brick', desc: 'Laptop and phone compatible', price: 39.95, img: 'images/Electronics_6.webp' },
  { id: 23, category: 'Electronics', name: 'Mini Keychain Charger', desc: 'Portable with built-in cable', price: 14.99, img: 'images/Electronics_7.webp' },
  { id: 24, category: 'Electronics', name: 'Mag-Wireless Charger', desc: 'Snaps to your device easily', price: 28.99, img: 'images/Electronics_8.webp' },

  { id: 25, category: 'Sports Equipment', name: 'Yoga Mat', desc: 'Eco-friendly and non-slip', price: 29.99, img: 'images/Sports_1.webp' },
  { id: 26, category: 'Sports Equipment', name: 'Resistance Bands Set', desc: 'Great for home workouts', price: 19.99, img: 'images/Sports_2.webp' },
  { id: 27, category: 'Sports Equipment', name: 'Dumbbell Set', desc: 'Adjustable weight system', price: 49.99, img: 'images/Sports_3.webp' },
  { id: 28, category: 'Sports Equipment', name: 'Vinyl Dumbbells Pair', desc: 'Colorful and easy to grip', price: 22.99, img: 'images/Sports_4.webp' },
  { id: 29, category: 'Sports Equipment', name: 'Hex Dumbbells Set', desc: 'Iron-core for strength training', price: 59.99, img: 'images/Sports_5.webp' },
  { id: 30, category: 'Sports Equipment', name: 'Neoprene Dumbbells', desc: 'Comfortable for cardio use', price: 29.99, img: 'images/Sports_6.webp' },
  { id: 31, category: 'Sports Equipment', name: 'Adjustable Dumbbell Kit', desc: 'Bar with changeable plates', price: 69.99, img: 'images/Sports_7.webp' },
  { id: 32, category: 'Sports Equipment', name: 'Pro Gym Dumbbell Set', desc: 'Includes rack for storage', price: 149.99, img: 'images/Sports_8.webp' }
];

// === CART STATE MANAGEMENT ===
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartCount() {
  const countEl = document.getElementById('cart-count');
  if (countEl) countEl.textContent = `(${cart.length})`;
}

function addToCart(id) {
  const product = allProducts.find(p => p.id === id);
  if (product) {
    cart.push(product);
    saveCart();
    updateCartCount();
  }
}

function removeFromCart(index) {
  cart.splice(index, 1);
  saveCart();
  renderCartPage();
  updateCartCount();
}

// === PRODUCT DISPLAY FUNCTIONS ===
function createProductCard(product) {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.innerHTML = `
    <img src="${product.img}" alt="${product.name}" loading="lazy">
    <h3>${product.name}</h3>
    <p>${product.desc}</p>
    <p class="price">$${product.price.toFixed(2)}</p>
    <button onclick="addToCart(${product.id})">Add to Cart</button>
  `;
  return card;
}

function renderProducts({ category, container, start = 0, count = 4 }) {
  const products = allProducts
    .filter(p => p.category === category)
    .slice(start, start + count);

  products.forEach(product => container.appendChild(createProductCard(product)));

  return products.length;
}

function renderMoreProducts(category, container, button) {
  const shown = container.querySelectorAll('.product-card').length;
  const added = renderProducts({ category, container, start: shown, count: 4 });
  const total = allProducts.filter(p => p.category === category).length;
  if (shown + added >= total) button?.remove();
}

// === CART PAGE RENDER ===
function renderCartPage() {
  const container = document.getElementById('cart-container');
  const subtotalEl = document.getElementById('subtotal');
  if (!container || !subtotalEl) return;

  container.innerHTML = '';
  let subtotal = 0;

  cart.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${item.img}" alt="${item.name}" />
      <h3>${item.name}</h3>
      <p>${item.desc}</p>
      <p class="price">$${item.price.toFixed(2)}</p>
      <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
    `;
    subtotal += item.price;
    container.appendChild(card);
  });

  subtotalEl.textContent = subtotal.toFixed();
}

// === MAIN DOM LOGIC ===
document.addEventListener('DOMContentLoaded', () => {
  updateCartCount();

  if (window.location.pathname.includes('cart.html')) {
    renderCartPage();
  } else {
    document.querySelectorAll('.product-category').forEach(section => {
      const category = section.querySelector('h2')?.textContent.trim();
      const grid = section.querySelector('.product-grid');
      if (!category || !grid) return;

      renderProducts({ category, container: grid });

      const viewMoreBtn = document.createElement('button');
      viewMoreBtn.className = 'view-more';
      viewMoreBtn.textContent = 'Show more';
      viewMoreBtn.onclick = () => renderMoreProducts(category, grid, viewMoreBtn);

      section.appendChild(viewMoreBtn);
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav');

  hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
});
