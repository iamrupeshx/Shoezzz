// Get all product cards
const productCards = document.querySelectorAll('.product-card');

// Function to add scale effect on hover
function scaleProduct(event) {
    const card = event.target.closest('.product-card');
    card.style.transform = 'scale(1.1)'; // Scale the product card
    card.style.transition = 'transform 0.3s ease'; // Smooth transition
}

// Function to remove scale effect on mouse leave
function resetScale(event) {
    const card = event.target.closest('.product-card');
    card.style.transform = 'scale(1)'; // Reset scale to original
}

// Add event listeners for hover animation
productCards.forEach(card => {
    card.addEventListener('mouseenter', scaleProduct);
    card.addEventListener('mouseleave', resetScale);
});
