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

/* --- 4. PYTHON PORTAL & HACKER TEXT LOGIC --- */
    const pythonBtn = document.getElementById('open-python-btn');
    const pythonPortal = document.getElementById('python-portal');
    const closePortalBtn = document.getElementById('close-portal');
    const statusText = document.getElementById('top-status');
    
    const finalMessage = "SYSTEM SECURED // ENCRYPTED CONNECTION";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    let decodeInterval; // Stores the animation so we can stop it if needed

    // Open Portal & Trigger Hacker Text
    pythonBtn.addEventListener('click', () => {
        pythonPortal.classList.add('is-open');
        document.body.style.overflow = 'hidden'; // Stops background from scrolling
        
        // Reset the text so it animates every time the portal is opened
        statusText.innerText = "";
        let iterations = 0;
        clearInterval(decodeInterval); // Clears any old animations

        // Wait 0.5s for the portal to fade in, then start the terminal glitch
        setTimeout(() => {
            decodeInterval = setInterval(() => {
                statusText.innerText = finalMessage.split("")
                    .map((char, index) => {
                        if (char === " ") return " ";
                        if (index < iterations) {
                            return finalMessage[index];
                        }
                        return characters[Math.floor(Math.random() * characters.length)];
                    })
                    .join("");

                if (iterations >= finalMessage.length) {
                    clearInterval(decodeInterval);
                }
                iterations += 1 / 3; // Adjust speed here (higher = faster)
            }, 30); 
        }, 500);
    });

    // Close Portal
    closePortalBtn.addEventListener('click', () => {
        pythonPortal.classList.remove('is-open');
        document.body.style.overflow = 'auto'; // Restores scrolling
        clearInterval(decodeInterval); // Stops the animation if closed early
    });
