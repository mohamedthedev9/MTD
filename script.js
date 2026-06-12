document.addEventListener('DOMContentLoaded', () => {

    /* --- 1. HERO WORD-BY-WORD FADE ANIMATION --- */
    const words = document.querySelectorAll('.word');
    words.forEach((word, index) => {
        setTimeout(() => {
            word.classList.add('visible');
        }, 150 * index); // Staggered delay for cinematic reading flow
    });

    /* --- 2. SCROLL REVEAL LOGIC (INTERSECTION OBSERVER) --- */
    const scrollSections = document.querySelectorAll('#contact, #partners');
    
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Animates only once
            }
        });
    }, revealOptions);

    scrollSections.forEach(section => {
        sectionObserver.observe(section);
    });

    /* --- 3. PYTHON PORTAL & HACKER TEXT DECRYPTION LOGIC --- */
    const pythonBtn = document.getElementById('open-python-btn');
    const pythonPortal = document.getElementById('python-portal');
    const closePortalBtn = document.getElementById('close-portal');
    const statusText = document.getElementById('top-status');
    
    const finalMessage = "SYSTEM SECURED // ENCRYPTED CONNECTION";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+=-{}[]|";
    let decodeInterval;

    // Trigger Terminal Boot Sequence on Portal Click
    pythonBtn.addEventListener('click', () => {
        pythonPortal.classList.add('is-open');
        document.body.style.overflow = 'hidden'; // Stop background scrolling
        
        // Reset element states
        statusText.innerText = "";
        let iterations = 0;
        clearInterval(decodeInterval);

        // Run the glitch decryption after portal background transitions in
        setTimeout(() => {
            decodeInterval = setInterval(() => {
                statusText.innerText = finalMessage.split("")
                    .map((char, index) => {
                        if (char === " ") return " "; // Retain spacing structure
                        
                        if (index < iterations) {
                            return finalMessage[index]; // Display authenticated characters
                        }
                        // Render glitch patterns on non-decrypted positions
                        return characters[Math.floor(Math.random() * characters.length)];
                    })
                    .join("");

                if (iterations >= finalMessage.length) {
                    clearInterval(decodeInterval);
                }
                
                iterations += 1 / 3; // Controls letter-by-letter translation speed
            }, 30); 
        }, 400);
    });

    // Terminate Overlay Operations
    closePortalBtn.addEventListener('click', () => {
        pythonPortal.classList.remove('is-open');
        document.body.style.overflow = 'auto'; // Re-enable background scrolling
        clearInterval(decodeInterval);
        statusText.innerText = ""; 
    });
});
