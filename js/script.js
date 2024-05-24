let id = 0;

const products = [
    {
        "id": 1,
        "name": "Tshirt/toys",
        "price": 499
    },
    {
        "id": 2,
        "name": "Tshirt/toys",
        "price": 499
    },
    {
        "id": 3,
        "name": "Tshirt/toys",
        "price": 499
    },
    {
        "id": 4,
        "name": "Tshirt/toys",
        "price ":499
    },
    {
        "id": 5,
        "name": "Tshirt/toys",
        "price": 499
    }
];

function data() {
    id = 1;
    console.log(id);
    if (id === 1) {
        displayProductDetails(id);
    }
}

function displayProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        const productDetailsDiv = document.getElementById('product-details');
        productDetailsDiv.innerHTML = `<p>Name: ${product.name}</p>
                                       <p>Price: BDT ${product.price.toFixed(2)}</p>
                                       <button class="remove-btn" onclick="removeProduct(${product.id})"><i class="fas fa-trash-alt"></i></button>`;
        
        localStorage.setItem('product', JSON.stringify(product));
    } else {
        console.log('Product not found');
    }
}

function removeProduct(productId) {
    const productIndex = products.findIndex(p => p.id === productId);
    if (productIndex !== -1) {
        products.splice(productIndex, 1);
        localStorage.removeItem('product');
        const productDetailsDiv = document.getElementById('product-details');
        productDetailsDiv.innerHTML = '';

        if (products.length === 0) {
            productDetailsDiv.innerHTML = '<p class="e-text">The cart is empty!</p>';
        }
    }
}

const storedProduct = JSON.parse(localStorage.getItem('product'));
if (storedProduct) {
    const productDetailsDiv = document.getElementById('product-details');
    productDetailsDiv.innerHTML = `<p>Name: ${storedProduct.name}</p>
                                   <p>Price: BDT ${storedProduct.price.toFixed(2)}</p>
                                   <button class="remove-btn" onclick="removeProduct(${storedProduct.id})"><i class="fas fa-trash-alt"></i></button>`;
} else {
    const productDetailsDiv = document.getElementById('product-details');
    productDetailsDiv.innerHTML = '<p class="e-text">The cart is empty!</p>';
}
