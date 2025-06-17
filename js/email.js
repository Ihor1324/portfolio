document.addEventListener("DOMContentLoaded", function () {
    
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const serviceID  = 'service_tqssggm';
        const templateID = 'template_wgdaqce';

        emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            document.getElementById('form-status').innerText = 'The letter was sent successfully!';
            this.reset();
        }, (err) => {
            console.error(err);
            document.getElementById('form-status').innerText = 'There was an error sending. Please try again later.';
        });
    });
});

