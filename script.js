let cartCount = 0;

function addToCart() {

    cartCount++;

    document.getElementById("cartCount").textContent = cartCount;

    alert("Product added to cart!");
}


function searchProducts() {

    const searchText =
        document.getElementById("searchInput").value.toLowerCase();

    const products =
        document.querySelectorAll(".product-card");

    products.forEach(function(product) {

        const productName =
            product.querySelector("h3").textContent.toLowerCase();

        if (productName.includes(searchText)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }

    });

}