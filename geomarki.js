document.addEventListener("DOMContentLoaded", function() {
    // Load books from XML
    fetch('books.xml')
        .then(response => response.text())
        .then(data => {
            let parser = new DOMParser();
            let xml = parser.parseFromString(data, "text/xml");
            let books = xml.getElementsByTagName("book");
            let bookList = document.getElementById("book-list");

            Array.from(books).forEach(book => {
                let title = book.getElementsByTagName("title")[0].textContent;
                let author = book.getElementsByTagName("author")[0].textContent;
                let price = parseFloat(book.getElementsByTagName("price")[0].textContent);
                
                let bookDiv = document.createElement("div");
                bookDiv.classList.add("book");
                bookDiv.innerHTML = `
                  <h3>${title}</h3>
                  <p>by ${author}</p>
                  <p>Price: $${price.toFixed(2)}</p>
                  <button onclick="addToCart('${title}', ${price})">Add to Cart</button>
                `;
                bookList.appendChild(bookDiv);
            });
        });
});

let cart = [];

function addToCart(title, price) {
    cart.push({ title, price });
    updateCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function updateCart() {
    let cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";
    let total = 0;
    cart.forEach((item, index) => {
        let li = document.createElement("li");
        li.innerHTML = `
          ${item.title} - $${item.price.toFixed(2)}
          <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItems.appendChild(li);
        total += item.price;
    });
    document.getElementById("cart-count").textContent = cart.length;
    document.getElementById("cart-total").textContent = total.toFixed(2);
}
