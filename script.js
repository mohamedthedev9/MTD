document.addEventListener("DOMContentLoaded", () => {
            
    /* --- 1. SECRETIVE TEXT REVEAL ANIMATION --- */
    const textContainer = document.getElementById('secret-text');
    const rawText = "MTD is a secretive organization founded in 2022 by MohamedTheDev (Mohamed Reda). It operates across most sectors with complete confidentiality, employing 32 people and managers. The brand owner is Mohamed Reda, who spearheaded a major transformation in 2025. We have many secret partners who remain undisclosed, and our work with them is conducted with utmost secrecy, setting us apart from the competition. (Note:This Website still UNDER CONSTRUCTIONS)";
    
    // Split text into words for a smooth cinematic reveal
    const words = rawText.split(' ');
    
    words.forEach((word) => {
        const span = document.createElement('span');
        span.classList.add('word');
        span.innerHTML = word + '&nbsp;'; 
        textContainer.appendChild(span);
    });

    const wordElements = document.querySelectorAll('.word');
    
    // Trigger animation sequentially
    setTimeout(() => {
        wordElements.forEach((el, index) => {
            setTimeout(() => {
                el.classList.add('visible');
            }, index * 40); 
        });
    }, 1000); 


    /* --- 2. SCROLL FADE-IN FOR SECTIONS --- */
    const hiddenSections = document.querySelectorAll('#contact, #partners');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    hiddenSections.forEach(section => {
        sectionObserver.observe(section);
    });


    /* --- 3. FORM SUBMISSION HANDLING (UI ONLY) --- */
    const form = document.getElementById('contact-form');
    const submitBtn = form.querySelector('button');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); 
        
        const originalText = submitBtn.innerText;
        submitBtn.innerText = "Transmitting...";
        submitBtn.style.color = "#00ff00"; 
        submitBtn.style.borderColor = "#00ff00";
        
        setTimeout(() => {
            submitBtn.innerText = "Message Secured";
            submitBtn.style.color = "var(--bg-color)";
            submitBtn.style.backgroundColor = "var(--accent)";
            submitBtn.style.borderColor = "var(--accent)";
            form.reset();
            
            setTimeout(() => {
                submitBtn.innerText = originalText;
                submitBtn.style.color = "";
                submitBtn.style.backgroundColor = "";
            }, 3000);
        }, 1500);
    });

/* --- 4. PYTHON PORTAL LOGIC --- */
    const pythonBtn = document.getElementById('open-python-btn');
    const pythonPortal = document.getElementById('python-portal');
    const closePortalBtn = document.getElementById('close-portal');

    // Open Portal
    pythonBtn.addEventListener('click', () => {
        pythonPortal.classList.add('is-open');
        document.body.style.overflow = 'hidden'; // Stops background from scrolling
    });

    // Close Portal
    closePortalBtn.addEventListener('click', () => {
        pythonPortal.classList.remove('is-open');
        document.body.style.overflow = 'auto'; // Restores scrolling
    });
});
/* --- 5. HACKER TEXT DECODING ANIMATION --- */
    const statusText = document.getElementById('top-status');
    const finalMessage = "SYSTEM SECURED // ENCRYPTED CONNECTION";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";

    // Wait 1 second for the CSS drop-down animation to start, then run the glitch
    setTimeout(() => {
        let iterations = 0;

        const decodeInterval = setInterval(() => {
            statusText.innerText = finalMessage.split("")
                .map((char, index) => {
                    // Ignore spaces to keep the formatting clean
                    if (char === " ") return " ";
                    
                    // Lock in the real character once the loop catches up to its position
                    if (index < iterations) {
                        return finalMessage[index];
                    }
                    
                    // Otherwise, show a random hacker character
                    return characters[Math.floor(Math.random() * characters.length)];
                })
                .join("");

            // Stop the animation once the whole sentence is revealed
            if (iterations >= finalMessage.length) {
                clearInterval(decodeInterval);
            }

            // Adjust this number to change the decoding speed (higher = faster)
            iterations += 1 / 3; 
        }, 30); // Runs every 30 milliseconds
    }, 1000);
