document.addEventListener('DOMContentLoaded', () => {

    /* --- 1. HERO TEXT ANIMATION --- */
    const words = document.querySelectorAll('.word');
    words.forEach((word, index) => {
        setTimeout(() => {
            word.classList.add('visible');
        }, 120 * index);
    });

    /* --- 2. PORTAL TRIGGER LOGIC --- */
    const pythonBtn = document.getElementById('open-python-btn');
    const pythonPortal = document.getElementById('python-portal');
    const closePortalBtn = document.getElementById('close-portal');
    const statusText = document.getElementById('top-status');
    
    const finalMessage = "SYSTEM SECURED // ENCRYPTED CONNECTION";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    let decodeInterval;

    pythonBtn.addEventListener('click', () => {
        pythonPortal.classList.add('is-open');
        document.body.style.overflow = 'hidden';
        
        statusText.innerText = "";
        let iterations = 0;
        clearInterval(decodeInterval);

        setTimeout(() => {
            decodeInterval = setInterval(() => {
                statusText.innerText = finalMessage.split("")
                    .map((char, index) => {
                        if (char === " ") return " ";
                        if (index < iterations) return finalMessage[index];
                        return characters[Math.floor(Math.random() * characters.length)];
                    })
                    .join("");

                if (iterations >= finalMessage.length) clearInterval(decodeInterval);
                iterations += 1 / 3;
            }, 30); 
        }, 300);
    });

    closePortalBtn.addEventListener('click', () => {
        pythonPortal.classList.remove('is-open');
        document.body.style.overflow = 'auto';
        clearInterval(decodeInterval);
        statusText.innerText = ""; 
    });
});
/* --- 4. SECURE CONTACT FORM PROCESSING --- */
    const contactForm = document.getElementById('secure-contact-form');
    const formStatus = document.getElementById('form-status');
    const submitBtn = document.getElementById('submit-btn');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevents the browser from reloading the page
            
            submitBtn.innerText = "TRANSMITTING...";
            submitBtn.disabled = true;
            formStatus.style.color = "var(--text-muted)";
            formStatus.innerText = "Initiating handshake with secure node...";

            const formData = new FormData(contactForm);
            const object = Object.fromEntries(formData);
            const json = JSON.stringify(object);

            fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: json
            })
            .then(async (response) => {
                let res = await response.json();
                if (response.status == 200) {
                    formStatus.style.color = "#00ff00"; // Hacker Green Success text
                    formStatus.innerText = "TRANSMISSION SUCCESSFUL // DATA SENT.";
                    contactForm.reset(); // Clears out the form inputs
                } else {
                    console.log(response);
                    formStatus.style.color = "#ff3333";
                    formStatus.innerText = res.message || "TRANSMISSION FAILED // NODE ERROR.";
                }
            })
            .catch(error => {
                console.log(error);
                formStatus.style.color = "#ff3333";
                formStatus.innerText = "NETWORK ERROR // OVERRIDE FAILED.";
            })
            .then(() => {
                submitBtn.innerText = "Transmit Transmission";
                submitBtn.disabled = false;
                setTimeout(() => {
                    formStatus.innerText = "";
                }, 5000); // Hides status message after 5 seconds
            });
        });
    }
