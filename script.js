document.addEventListener("DOMContentLoaded", () => {
            
    /* --- 1. SECRETIVE TEXT REVEAL ANIMATION --- */
    const textContainer = document.getElementById('secret-text');
    const rawText = "MTD is a secretive organization founded in 2022 by MohamedTheDev (Mohamed Reda). It operates across most sectors with complete confidentiality, employing 34 people and managers. The brand owner is Mohamed Reda, who spearheaded a major transformation in 2025. We have many secret partners who remain undisclosed, and our work with them is conducted with utmost secrecy, setting us apart from the competition. (THIS WEBSITE STILL UNDER CONSTRUCTIONS)";
    
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


    /* --- 2. SCROLL FADE-IN FOR CONTACT SECTION --- */
    const contactSection = document.getElementById('contact');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2 
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    sectionObserver.observe(contactSection);


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

});
