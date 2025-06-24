let products = [];
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let compareList = JSON.parse(localStorage.getItem('compareList')) || [];
let flashSaleIndex = 0;

function fetchProducts() {
    return fetch('products.json')
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.json();
        })
        .catch(error => {
            console.error('Error fetching products:', error);
            return [
                { id: 1, name: "ASUS ROG Strix", brand: "ASUS", purpose: "Gaming", price: 35000000, salePrice: 32000000, image: "./img/asus_rog_strix_scar_16_mac24h_1.jpeg", specs: { cpu: "Intel i9", ram: "32GB", gpu: "RTX 3080", storage: "1TB SSD", display: "15.6 4K" } },
                { id: 2, name: "Dell XPS 13", brand: "Dell", purpose: "Thin-light", price: 25000000, salePrice: 23000000, image: "./img/DELL-XPS-13-9310-2021-H1.jpeg", specs: { cpu: "Intel i7", ram: "16GB", gpu: "Integrated", storage: "512GB SSD", display: "13.4 FHD" } },
                { id: 3, name: "Apple MacBook Pro", brand: "Apple", purpose: "Graphic", price: 45000000, salePrice: 42000000, image: "./img/Apple MacBook Pro.png", specs: { cpu: "M2 Pro", ram: "32GB", gpu: "10-core GPU", storage: "1TB SSD", display: "14.2 Liquid Retina" } },
                { id: 4, name: "Lenovo ThinkPad", brand: "Lenovo", purpose: "Office", price: 20000000, image: "./img/Lenovo ThinkPad.jpg", specs: { cpu: "Intel i5", ram: "8GB", gpu: "Integrated", storage: "256GB SSD", display: "14 FHD" } },
                { id: 5, name: "MSI GE76 Raider", brand: "MSI", purpose: "Gaming", price: 40000000, salePrice: 37000000, image: "./img/MSI GE76 Raider.jpg", specs: { cpu: "Intel i7", ram: "16GB", gpu: "RTX 3070", storage: "1TB SSD", display: "17 FHD" } },
                { id: 6, name: "ASUS ZenBook", brand: "ASUS", purpose: "Thin-light", price: 28000000, image: "./img/ASUS ZenBook.jpg", specs: { cpu: "Intel i5", ram: "16GB", gpu: "Integrated", storage: "512GB SSD", display: "13.3 FHD" } },
                { id: 7, name: "Dell Precision", brand: "Dell", purpose: "Graphic", price: 35000000, salePrice: 33000000, image: "./img/Dell Precision.jpg", specs: { cpu: "Intel i9", ram: "32GB", gpu: "NVIDIA RTX A4000", storage: "1TB SSD", display: "15.6 4K" } },
                { id: 8, name: "Apple MacBook Air", brand: "Apple", purpose: "Office", price: 30000000, image: "./img/Apple MacBook Air.jpg", specs: { cpu: "M1", ram: "16GB", gpu: "7-core GPU", storage: "256GB SSD", display: "13.3 Retina" } },
                { id: 9, name: "Lenovo Legion", brand: "Lenovo", purpose: "Gaming", price: 32000000, salePrice: 29000000, image: "./img/Lenovo Legion.jpg", specs: { cpu: "AMD Ryzen 7", ram: "16GB", gpu: "RTX 3060", storage: "512GB SSD", display: "15.6 FHD" } },
                { id: 10, name: "MSI Prestige", brand: "MSI", purpose: "Graphic", price: 38000000, salePrice: 36000000, image: "./img/MSI Prestige.jpg", specs: { cpu: "Intel i7", ram: "32GB", gpu: "RTX 3060", storage: "1TB SSD", display: "15.6 4K" } },
                { id: 11, name: "ASUS VivoBook", brand: "ASUS", purpose: "Office", price: 22000000, image:"./img/ASUS VivoBook.jpg", specs: { cpu: "Intel i3", ram: "8GB", gpu: "Integrated", storage: "256GB SSD", display: "14 FHD" } },
                { id: 12, name: "Dell Inspiron", brand: "Dell", purpose: "Thin-light", price: 23000000, salePrice: 21000000, image: "./img/Dell Inspiron.jpg", specs: { cpu: "Intel i5", ram: "8GB", gpu: "Integrated", storage: "512GB SSD", display: "13.3 FHD" } },
                { id: 13, name: "Apple Mac Studio", brand: "Apple", purpose: "Graphic", price: 50000000, salePrice: 47000000, image: "./img/Apple Mac Studio.jpg", specs: { cpu: "M1 Ultra", ram: "64GB", gpu: "48-core GPU", storage: "2TB SSD", display: "External 5K" } },
                { id: 14, name: "Lenovo IdeaPad", brand: "Lenovo", purpose: "Office", price: 18000000, image: "./img/Lenovo IdeaPad.jpg", specs: { cpu: "Intel i3", ram: "4GB", gpu: "Integrated", storage: "256GB SSD", display: "14 FHD" } },
                { id: 15, name: "MSI Katana", brand: "MSI", purpose: "Gaming", price: 33000000, salePrice: 30000000, image: "./img/MSI Katana.jpg", specs: { cpu: "Intel i5", ram: "16GB", gpu: "RTX 3050", storage: "512GB SSD", display: "15.6 FHD" } },
                { id: 16, name: "ASUS TUF Dash F15", brand: "ASUS", purpose: "Gaming", price: 33000000, salePrice: 31000000, image: "./img/ASUS TUF Dash F15.jpg", specs: { cpu: "Intel i7", ram: "16GB", gpu: "RTX 3060", storage: "512GB SSD", display: "15.6 FHD" } },
                { id: 17, name: "Dell G15 Gaming", brand: "Dell", purpose: "Gaming", price: 30000000, salePrice: 28000000, image: "./img/Dell G15 Gaming.jpg", specs: { cpu: "AMD Ryzen 7", ram: "16GB", gpu: "RTX 3050", storage: "512GB SSD", display: "15.6 FHD" } },
                { id: 18, name: "HP Pavilion Gaming 15", brand: "HP", purpose: "Gaming", price: 29000000, salePrice: 27000000, image: "./img/HP Pavilion Gaming 15.jpg", specs: { cpu: "Intel i5", ram: "8GB", gpu: "RTX 3050", storage: "512GB SSD", display: "15.6 FHD" } },
                { id: 19, name: "Acer Predator Helios 300", brand: "Acer", purpose: "Gaming", price: 35000000, salePrice: 33000000, image: "./img/Acer Predator Helios 300.jpg", specs: { cpu: "Intel i7", ram: "16GB", gpu: "RTX 3060", storage: "1TB SSD", display: "15.6 FHD" } },
                { id: 20, name: "Lenovo Legion 5 Pro", brand: "Lenovo", purpose: "Gaming", price: 36000000, salePrice: 34000000, image: "./img/Lenovo Legion 5 Pro.jpg", specs: { cpu: "AMD Ryzen 7", ram: "16GB", gpu: "RTX 3070", storage: "1TB SSD", display: "16 FHD" } },
                { id: 21, name: "MSI Raider GE66", brand: "MSI", purpose: "Gaming", price: 48000000, salePrice: 45000000, image: "./img/MSI Raider GE66.png", specs: { cpu: "Intel i9", ram: "32GB", gpu: "RTX 3080", storage: "1TB SSD", display: "15.6 FHD" } },
                { id: 22, name: "Apple MacBook Air M2", brand: "Apple", purpose: "Thin-light", price: 42000000, image: "./img/Apple MacBook Air M2.jpg", specs: { cpu: "M2", ram: "8GB", gpu: "Integrated", storage: "256GB SSD", display: "13.3 Retina" } },
                { id: 23, name: "Samsung Galaxy Book Pro", brand: "Samsung", purpose: "Thin-light", price: 38000000, image: "./img/Samsung Galaxy Book Pro.png", specs: { cpu: "Intel i7", ram: "16GB", gpu: "Integrated", storage: "512GB SSD", display: "15.6 AMOLED" } },
                { id: 24, name: "Razer Blade Stealth 13", brand: "Razer", purpose: "Thin-light", price: 45000000, salePrice: 43000000, image: "./img/Razer Blade Stealth 13.jpg", specs: { cpu: "Intel i7", ram: "16GB", gpu: "Integrated", storage: "256GB SSD", display: "13.3 FHD" } },
                { id: 25, name: "LG Gram 17", brand: "LG", purpose: "Thin-light", price: 50000000, salePrice: 48000000, image: "./img/LG Gram 17.jpg", specs: { cpu: "Intel i7", ram: "16GB", gpu: "Integrated", storage: "1TB SSD", display: "17 WQXGA" } },
                { id: 26, name: "Huawei MateBook X Pro", brand: "Huawei", purpose: "Thin-light", price: 40000000, image: "./img/Huawei MateBook X Pro.jpg", specs: { cpu: "Intel i7", ram: "16GB", gpu: "Integrated", storage: "512GB SSD", display: "13.9 FHD" } },
                { id: 27, name: "Microsoft Surface Laptop 4", brand: "Microsoft", purpose: "Office", price: 37000000, salePrice: 35000000, image: "./img/Microsoft Surface Laptop 4.jpg", specs: { cpu: "Intel i5", ram: "8GB", gpu: "Integrated", storage: "256GB SSD", display: "13.5 PixelSense" } },
                { id: 28, name: "Acer Swift 3", brand: "Acer", purpose: "Thin-light", price: 25000000, image: "./img/Acer Swift 3.jpg", specs: { cpu: "AMD Ryzen 5", ram: "8GB", gpu: "Integrated", storage: "512GB SSD", display: "14 FHD" } },
                { id: 29, name: "Dell XPS 15 Plus", brand: "Dell", purpose: "Thin-light", price: 48000000, salePrice: 46000000, image: "./img/Dell XPS 15 Plus.jpg", specs: { cpu: "Intel i7", ram: "16GB", gpu: "NVIDIA GTX 1650", storage: "512GB SSD", display: "15.6 4K" } },
                { id: 30, name: "ASUS ZenBook Pro Duo 15", brand: "ASUS", purpose: "Graphic", price: 65000000, salePrice: 63000000, image: "./img/ASUS ZenBook Pro Duo 15.jpg", specs: { cpu: "Intel i9", ram: "32GB", gpu: "RTX 3070", storage: "1TB SSD", display: "15.6 4K Touch" } },
                { id: 31, name: "HP EliteBook x360", brand: "HP", purpose: "Office", price: 32000000, image: "./img/HP EliteBook x360.jpg", specs: { cpu: "Intel i5", ram: "8GB", gpu: "Integrated", storage: "256GB SSD", display: "14 FHD Touch" } },
                { id: 32, name: "MSI Creator Z16", brand: "MSI", purpose: "Graphic", price: 51000000, salePrice: 49000000, image: "./img/MSI Creator Z16.png", specs: { cpu: "Intel i7", ram: "16GB", gpu: "RTX 3060", storage: "1TB SSD", display: "16 QHD+ Touch" } },
                { id: 33, name: "Lenovo IdeaPad Gaming 3", brand: "Lenovo", purpose: "Gaming", price: 28000000, image: "./img/Lenovo IdeaPad Gaming 3.png", specs: { cpu: "AMD Ryzen 5", ram: "8GB", gpu: "RTX 3050", storage: "512GB SSD", display: "15.6 FHD" } },
                { id: 34, name: "Apple MacBook Pro 14", brand: "Apple", purpose: "Graphic", price: 75000000, salePrice: 72000000, image: "./img/Apple MacBook Pro 14.jpg", specs: { cpu: "M1 Pro", ram: "16GB", gpu: "Integrated", storage: "512GB SSD", display: "14 Liquid Retina" } },
                { id: 35, name: "Samsung Notebook 7 Spin", brand: "Samsung", purpose: "Office", price: 31000000, image: "./img/Samsung Notebook 7 Spin.jpg", specs: { cpu: "Intel i5", ram: "8GB", gpu: "Integrated", storage: "256GB SSD", display: "13.3 FHD Touch" } },
                { id: 36, name: "Razer Blade 14", brand: "Razer", purpose: "Gaming", price: 55000000, salePrice: 53000000, image: "./img/Razer Blade 14.jpg", specs: { cpu: "AMD Ryzen 9", ram: "16GB", gpu: "RTX 3060", storage: "512GB SSD", display: "14 FHD" } },
                { id: 37, name: "LG Gram 16", brand: "LG", purpose: "Thin-light", price: 48000000, salePrice: 46000000, image: "./img/LG Gram 16.jpg", specs: { cpu: "Intel i7", ram: "16GB", gpu: "Integrated", storage: "1TB SSD", display: "16 FHD" } },
                { id: 38, name: "Huawei MateBook D 15", brand: "Huawei", purpose: "Office", price: 24000000, image: "./img/Huawei MateBook D 15.jpg", specs: { cpu: "AMD Ryzen 5", ram: "8GB", gpu: "Integrated", storage: "512GB SSD", display: "15.6 FHD" } },
                { id: 39, name: "Microsoft Surface Pro 8", brand: "Microsoft", purpose: "Office", price: 40000000, salePrice: 38000000, image: "./img/Microsoft Surface Pro 8.jpg", specs: { cpu: "Intel i5", ram: "8GB", gpu: "Integrated", storage: "256GB SSD", display: "13.0 PixelSense" } },
                { id: 40, name: "Acer ConceptD 7 Ezel", brand: "Acer", purpose: "Graphic", price: 60000000, salePrice: 58000000, image: "./img/Acer ConceptD 7 Ezel.png", specs: { cpu: "Intel i7", ram: "16GB", gpu: "RTX 3060", storage: "1TB SSD", display: "15.6 4K" } },
                { id: 41, name: "Dell Precision 3561", brand: "Dell", purpose: "Graphic", price: 42000000, image: "./img/Dell Precision 3561.jpg", specs: { cpu: "Intel i7", ram: "16GB", gpu: "NVIDIA Quadro T1000", storage: "512GB SSD", display: "15.6 FHD" } },
                { id: 42, name: "ASUS ROG Zephyrus G14", brand: "ASUS", purpose: "Gaming", price: 44000000, salePrice: 42000000, image: "./img/ASUS ROG Zephyrus G14.jpg", specs: { cpu: "AMD Ryzen 9", ram: "16GB", gpu: "RTX 3060", storage: "1TB SSD", display: "14 FHD" } },
                { id: 43, name: "HP Omen 15", brand: "HP", purpose: "Gaming", price: 39000000, salePrice: 37000000, image: "./img/HP Omen 15.jpg", specs: { cpu: "Intel i7", ram: "16GB", gpu: "RTX 3060", storage: "512GB SSD", display: "15.6 FHD" } },
                { id: 44, name: "MSI Stealth 15M", brand: "MSI", purpose: "Thin-light", price: 37000000, image: "./img/MSI Stealth 15M.jpg", specs: { cpu: "Intel i7", ram: "16GB", gpu: "RTX 3060", storage: "512GB SSD", display: "15.6 FHD" } },
                { id: 45, name: "Lenovo ThinkPad X1 Carbon Gen 9", brand: "Lenovo", purpose: "Office", price: 46000000, salePrice: 44000000, image: "./img/Lenovo ThinkPad X1 Carbon Gen 9.png", specs: { cpu: "Intel i7", ram: "16GB", gpu: "Integrated", storage: "512GB SSD", display: "14 FHD" } }
            ];
        });
}

// Fetch products with fallback
fetchProducts().then(data => {
    products = data;
    displayProducts();
    displayFlashSale();
    if (window.location.pathname.includes('product.html')) {
        displayProductDetails();
    }
    if (window.location.pathname.includes('cart.html')) {
        displayCart();
    }
});

// Hero Slider
let slideIndex = 0;
function autoSlide() {
    const slides = document.querySelectorAll('.slide');
    if (slides.length === 0) return;
    slideIndex = (slideIndex + 1) % slides.length;
    document.querySelector('.slider').style.transform = `translateX(-${slideIndex * 100}%)`;
}
setInterval(autoSlide, 5000);

// Flash Sale Slider & Countdown
function displayFlashSale() {
    const flashSaleSlider = document.getElementById('flashSaleSlider');
    if (!flashSaleSlider) return;
    const saleProducts = products.filter(p => p.salePrice);

    // Chia thành các nhóm 4 sản phẩm
    const productGroups = [];
    for (let i = 0; i < saleProducts.length; i += 4) {
        productGroups.push(saleProducts.slice(i, i + 4));
    }

    // Hiển thị nhóm đầu tiên
    flashSaleSlider.innerHTML = productGroups[0].map(product => `
        <div class="product-card">
            <div class="badge">Flash Sale</div>
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">${product.salePrice.toLocaleString('vi-VN')} VNĐ <del>${product.price.toLocaleString('vi-VN')} VNĐ</del></p>
            <div class="actions">
                <button onclick="addToCart('${product.name}', '${product.salePrice}')">Thêm vào giỏ</button>
                <button onclick="buyNow()">Mua ngay</button>
            </div>
        </div>
    `).join('');

    // Tự động trượt mỗi 3s
    function autoSlideFlashSale() {
        flashSaleIndex = (flashSaleIndex + 1) % productGroups.length;
        flashSaleSlider.innerHTML = productGroups[flashSaleIndex].map(product => `
            <div class="product-card">
                <div class="badge">Flash Sale</div>
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p class="price">${product.salePrice.toLocaleString('vi-VN')} VNĐ <del>${product.price.toLocaleString('vi-VN')} VNĐ</del></p>
            <div class="actions">
                <button onclick="addToCart('${product.name}', '${product.salePrice}')">Thêm vào giỏ</button>
                <button onclick="buyNow()">Mua ngay</button>
            </div>
        </div>
    `).join('');
    }
    setInterval(autoSlideFlashSale, 3000);

    // Countdown
    const countdown = document.getElementById('countdown');
    if (!countdown) return;
    const endTime = new Date().getTime() + 24 * 60 * 60 * 1000; // 24h
    setInterval(() => {
        const now = new Date().getTime();
        const distance = endTime - now;
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        countdown.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        if (distance < 0) {
            countdown.textContent = 'Hết giờ!';
        }
    }, 1000);
}

// Display Products
function displayProducts() {
    const productGrid = document.getElementById('productGrid');
    if (!productGrid) return;
    const urlParams = new URLSearchParams(window.location.search);
    const brand = urlParams.get('brand');
    const purpose = urlParams.get('purpose');
    let filteredProducts = products;

    if (brand) {
        filteredProducts = products.filter(p => p.brand.toLowerCase() === brand.toLowerCase());
    } else if (purpose) {
        filteredProducts = products.filter(p => p.purpose.toLowerCase() === purpose.toLowerCase());
    } else {
        filteredProducts = products; // Hiển thị tất cả trên trang chủ
    }

    // Phân chia theo mục đích sử dụng
    const sections = {};
    filteredProducts.forEach(product => {
        if (!sections[product.purpose]) sections[product.purpose] = [];
        sections[product.purpose].push(product);
    });

    productGrid.innerHTML = Object.entries(sections).map(([purpose, products]) => {
        // Giới hạn 4 sản phẩm trên trang chủ
        const limitedProducts = window.location.pathname.includes('index.html') ? products.slice(0, 4) : products;
        return `
            <section class="product-group product-group-${purpose.toLowerCase().replace(' ', '-')}">
                <h3>${purpose}</h3>
                <div class="product-row">
                    ${limitedProducts.map(product => `
                        <div class="product-card">
                            ${product.salePrice ? '<div class="badge">Sale</div>' : ''}
                            <img src="${product.image}" alt="${product.name}">
                            <h3>${product.name}</h3>
                            <p class="price">${(product.salePrice || product.price).toLocaleString('vi-VN')} VNĐ ${product.salePrice ? `<del>${product.price.toLocaleString('vi-VN')} VNĐ</del>` : ''}</p>
                            <div class="actions">
                                <button onclick="addToCart('${product.name}', '${product.salePrice || product.price}')">Thêm vào giỏ</button>
                                <button onclick="viewProductDetails(${product.id})">Chi tiết</button>
                                <button onclick="addToCompare('${product.name}', '${product.salePrice || product.price}', '${product.description}', '${product.specs.cpu}', '${product.specs.ram}', '${product.specs.gpu}', '${product.specs.storage}', '${product.specs.display}')">So sánh</button>
                            </div>
                        </div>
                    `).join('')}
                </div>
                ${window.location.pathname.includes('index.html') ? `<a href="products.html?purpose=${purpose.toLowerCase().replace(' ', '-')}" class="view-more-group">Xem thêm</a>` : ''}
            </section>
        `;
    }).join('');
}

// Search Products
function searchProducts() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchInput) ||
        product.brand.toLowerCase().includes(searchInput) ||
        product.purpose.toLowerCase().includes(searchInput)
    );
    const productGrid = document.getElementById('productGrid');
    if (productGrid) {
        productGrid.innerHTML = filteredProducts.map(product => `
            <div class="product-card">
                ${product.salePrice ? '<div class="badge">Sale</div>' : ''}
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p class="price">${(product.salePrice || product.price).toLocaleString('vi-VN')} VNĐ ${product.salePrice ? `<del>${product.price.toLocaleString('vi-VN')} VNĐ</del>` : ''}</p>
            <div class="actions">
                <button onclick="addToCart('${product.name}', '${product.salePrice || product.price}')">Thêm vào giỏ</button>
                <button onclick="viewProductDetails(${product.id})">Chi tiết</button>
                <button onclick="addToCompare('${product.name}', '${product.salePrice || product.price}', '${product.description}', '${product.specs.cpu}', '${product.specs.ram}', '${product.specs.gpu}', '${product.specs.storage}', '${product.specs.display}')">So sánh</button>
            </div>
        </div>
    `).join('');
    }
}

// Product Details
function displayProductDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    const product = products.find(p => p.id === productId);
    if (!product) return;

    document.getElementById('productTitle').textContent = product.name;
    document.getElementById('productName').textContent = product.name;
    document.getElementById('productPrice').textContent = (product.salePrice || product.price).toLocaleString('vi-VN') + ' VNĐ';
    document.getElementById('productDescription').textContent = product.description;
    document.getElementById('productCPU').textContent = product.specs.cpu;
    document.getElementById('productRAM').textContent = product.specs.ram;
    document.getElementById('productGPU').textContent = product.specs.gpu;
    document.getElementById('productStorage').textContent = product.specs.storage;
    document.getElementById('productDisplay').textContent = product.specs.display;
    document.getElementById('mainImage').src = product.image;

    document.getElementById('tabDescription').innerHTML = `<p>${product.description}</p>`;
    document.getElementById('tabCPU').textContent = product.specs.cpu;
    document.getElementById('tabRAM').textContent = product.specs.ram;
    document.getElementById('tabGPU').textContent = product.specs.gpu;
    document.getElementById('tabStorage').textContent = product.specs.storage;
    document.getElementById('tabDisplay').textContent = product.specs.display;

    // Thumbnail Gallery
    const thumbnailGallery = document.getElementById('thumbnailGallery');
    thumbnailGallery.innerHTML = `<img src="${product.image}" alt="${product.name}" onclick="changeMainImage('${product.image}')">`;

    // Related Products
    const relatedProducts = products.filter(p => p.purpose === product.purpose && p.id !== productId).slice(0, 4);
    document.getElementById('relatedProducts').innerHTML = relatedProducts.map(p => `
        <div class="product-card">
            ${p.salePrice ? '<div class="badge">Sale</div>' : ''}
            <img src="${p.image}" alt="${p.name}">
            <h3>${p.name}</h3>
            <p class="price">${(p.salePrice || p.price).toLocaleString('vi-VN')} VNĐ ${p.salePrice ? `<del>${p.price.toLocaleString('vi-VN')} VNĐ</del>` : ''}</p>
            <div class="actions">
                <button onclick="addToCart('${p.name}', '${p.salePrice || p.price}')">Thêm vào giỏ</button>
                <button onclick="viewProductDetails(${p.id})">Chi tiết</button>
            </div>
        </div>
    `).join('');
}

function changeMainImage(src) {
    document.getElementById('mainImage').src = src;
}

function viewProductDetails(id) {
    window.location.href = `product.html?id=${id}`;
}

// Cart
function addToCart(name, price) {
    cart.push({ name, price: parseInt(price) });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Đã thêm vào giỏ hàng!');
}

function displayCart() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    if (!cartItems || !cartTotal) return;

    cartItems.innerHTML = cart.map((item, index) => `
        <li>
            ${item.name} - ${item.price.toLocaleString('vi-VN')} VNĐ
            <button onclick="removeFromCart(${index})">Xóa</button>
        </li>
    `).join('');
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    cartTotal.textContent = `Tổng: ${total.toLocaleString('vi-VN')} VNĐ`;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

function clearCart() {
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

function buyNow() {
    alert('Chuyển đến trang thanh toán (chưa triển khai)!');
}

// Compare
function addToCompare(name, price, description, cpu, ram, gpu, storage, display) {
    if (compareList.length >= 5) {
        alert('Chỉ được so sánh tối đa 5 sản phẩm!');
        return;
    }
    compareList.push({ name, price, description, cpu, ram, gpu, storage, display });
    localStorage.setItem('compareList', JSON.stringify(compareList));
    displayCompare();
}

function displayCompare() {
    const compareItems = document.getElementById('compareItems');
    if (!compareItems) return;
    compareItems.innerHTML = compareList.map((item, index) => `
        <li>
            ${item.name} - ${item.price.toLocaleString('vi-VN')} VNĐ
            <button onclick="removeFromCompare(${index})">Xóa</button>
        </li>
    `).join('');
}

function removeFromCompare(index) {
    compareList.splice(index, 1);
    localStorage.setItem('compareList', JSON.stringify(compareList));
    displayCompare();
}

// Modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
    displayCompare();
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Mobile Menu
function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobileNav');
    mobileNav.classList.toggle('active');
    // Đóng tất cả menu con khi mở/đóng menu chính
    document.querySelectorAll('.mobile-dropdown').forEach(dropdown => {
        dropdown.classList.remove('active');
    });
}

// Toggle mobile dropdown
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.mobile-dropdown-toggle').forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            const dropdown = toggle.nextElementSibling;
            const isActive = dropdown.classList.contains('active');
            // Đóng tất cả menu con khác
            document.querySelectorAll('.mobile-dropdown').forEach(d => d.classList.remove('active'));
            // Toggle menu con hiển thị hiện tại
            if (!isActive) {
                dropdown.classList.add('active');
            }
        });
    });
});

// Auth
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username && password) {
        alert('Đăng nhập thành công (giả lập)!');
    } else {
        alert('Vui lòng nhập đầy đủ thông tin!');
    }
}

function register() {
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    if (name && email && password) {
        alert('Đăng ký thành công !');
    } else {
        alert('Vui lòng nhập đầy đủ thông tin!');
    }
}

function showRegisterForm() {
    document.querySelector('.auth-form').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
}

function showLoginForm() {
    document.getElementById('registerForm').style.display = 'none';
    document.querySelector('.auth-form').style.display = 'block';
}

// Contact
function submitContact(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    if (name && email && phone && message) {
        alert('Gửi liên hệ thành công!');
        document.getElementById('contactForm').reset();
    } else {
        alert('Vui lòng nhập đầy đủ thông tin!');
    }
}

// Tabs
function openTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    event.target.classList.add('active');
}

// Payment
function submitPayment() {
    const paymentMethod = document.getElementById('paymentMethod').value;
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;

    if (name && address && phone) {
        alert(`Thanh toán thành công với phương thức ${paymentMethod}! Đơn hàng sẽ được giao đến ${address}.`);
        clearCart();
        document.getElementById('paymentForm').reset();
    } else {
        alert('Vui lòng nhập đầy đủ thông tin thanh toán!');
    }
}