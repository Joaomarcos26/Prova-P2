const contactForm = document.getElementById('contactForm');
const messageElement = document.getElementById('message');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    messageElement.textContent = 'Mensagem enviada com sucesso!';
    messageElement.style.color = 'green';

    contactForm.reset();
});