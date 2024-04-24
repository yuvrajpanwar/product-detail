document.addEventListener("DOMContentLoaded", function() {

const colors = document.querySelector('.colors');
const colorContainers = document.querySelectorAll('.color-container');
var color = 'pink';
var selectedSize = "small";

var quantity = 1;
const displayQuantity = document.getElementById('displayQuantity');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');

const addToCart = document.getElementsByClassName('add-to-cart-container')[0];
const successMessage = document.getElementById('success-message');


colorContainers.forEach(container => {
    container.addEventListener('click', () => {
        colors.querySelectorAll('img').forEach(img => {
            img.style.display = 'none';
        });
        colorContainers.forEach(container => {
            container.classList.remove('selected');
        })
        const img = container.querySelector('img');
        img.style.display = 'block';
        color = img.classList[0];
        container.classList.add('selected');
    });
});


plus.addEventListener('click', () => {
    quantity += 1;
    displayQuantity.innerHTML = quantity;
});
minus.addEventListener('click', () => {
    if (quantity > 1)
        quantity -= 1;
    displayQuantity.innerHTML = quantity;
});



addToCart.addEventListener('click', () => {
    var sizeRadios = document.querySelectorAll('input[name="size"]');
    sizeRadios.forEach(function (radio) {
        if (radio.checked) {
            selectedSize = radio.value;
        }
    });
    successMessage.innerHTML = `${quantity} Embrace Sideboard with color ${color} and size ${selectedSize} added to cart`;
    successMessage.style.display = "block";
});




    const thumbnails = document.querySelectorAll(".thumbnail");
    const bigImage = document.querySelector(".big-image");

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener("click", function() {
            thumbnails.forEach(item => {
                item.classList.remove("selected");
            });
            this.classList.add("selected");
            const thumbnailImgSrc = this.querySelector(".thumbnail-img").src;
            bigImage.src = thumbnailImgSrc;
        });
    });




});