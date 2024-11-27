// Smooth Scroll for Navigation Links
const links = document.querySelectorAll('nav a');

links.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 70, // Adjust for fixed navbar height
            behavior: 'smooth'
        });
    });
});

// Scroll to Top Button (Optional: If you'd like to add a button to scroll to the top)
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerText = '↑';
scrollTopBtn.style.position = 'fixed';
scrollTopBtn.style.bottom = '20px';
scrollTopBtn.style.right = '20px';
scrollTopBtn.style.padding = '10px';
scrollTopBtn.style.backgroundColor = '#ff9800';
scrollTopBtn.style.color = 'white';
scrollTopBtn.style.border = 'none';
scrollTopBtn.style.borderRadius = '50%';
scrollTopBtn.style.cursor = 'pointer';
scrollTopBtn.style.display = 'none';
document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollTopBtn.style.display = 'block';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Form Submission Handling (for Contact Form)
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(form);
        const formObject = {};

        formData.forEach((value, key) => {
            formObject[key] = value;
        });

        // Simulate form submission with a delay (Replace with your actual API or backend logic)
        setTimeout(() => {
            console.log('Form submitted:', formObject);
            alert('Thank you for reaching out! We will get back to you shortly.');
            form.reset(); // Reset form after submission
        }, 1000);
    });
}

// Section Fade-in on Scroll
const fadeInElements = document.querySelectorAll('.fade-in');

function checkVisibility() {
    fadeInElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            element.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', checkVisibility);
checkVisibility(); // Initial check in case elements are already visible on page load

// Add 'fade-in' class to elements you want to fade in
// Example HTML: <div class="fade-in">This content will fade in when it comes into view</div>
