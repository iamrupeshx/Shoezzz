document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const order = document.getElementById('order').value.trim();
        const message = document.getElementById('message').value.trim();
        
        if (!name || !email || !message) {
            alert('Please fill in all required fields.');
            return;
        }

        alert(`Thank you, ${name}! Your message has been sent.`);
        form.reset();
    });
});
