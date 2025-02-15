document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const submitButton = form.querySelector('button[type="submit"]');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (validateForm()) {
            // Simulate form submission
            submitButton.textContent = 'Envoi en cours...';
            submitButton.disabled = true;
            setTimeout(() => {
                alert('Formulaire envoyé avec succès!');
                form.reset();
                submitButton.textContent = 'Soumettre';
                submitButton.disabled = false;
            }, 2000);
        }
    });

    function validateForm() {
        const requiredFields = form.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"], select, textarea');
        let isValid = true;

        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
                field.style.borderColor = 'red';
            } else {
                field.style.borderColor = '';
            }
        });

        const email = form.querySelector('#email');
        if (email.value && !isValidEmail(email.value)) {
            isValid = false;
            email.style.borderColor = 'red';
        }

        const phone = form.querySelector('#phone');
        if (phone.value && !isValidPhone(phone.value)) {
            isValid = false;
            phone.style.borderColor = 'red';
        }

        const contactPref = form.querySelector('input[name="contact-pref"]:checked');
        if (!contactPref) {
            isValid = false;
            alert('Veuillez sélectionner une préférence de contact.');
        }

        const terms = form.querySelector('#terms');
        if (!terms.checked) {
            isValid = false;
            alert('Veuillez accepter les conditions.');
        }

        if (!isValid) {
            alert('Veuillez remplir tous les champs requis correctement.');
        }

        return isValid;
    }

    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function isValidPhone(phone) {
        const re = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
        return re.test(phone);
    }

    // Add input event listeners for real-time validation
    const inputFields = form.querySelectorAll('input, select, textarea');
    inputFields.forEach(field => {
        field.addEventListener('input', function() {
            this.style.borderColor = '';
        });
    });

    // Initialize the subject dropdown
    const subjectSelect = document.querySelector('#subject');
    const subjects = ['Demande générale', 'Support technique', 'Facturation', 'Autre'];
    subjects.forEach(subject => {
        const option = document.createElement('option');
        option.value = subject.toLowerCase().replace(' ', '-');
        option.textContent = subject;
        subjectSelect.appendChild(option);
    });
});
