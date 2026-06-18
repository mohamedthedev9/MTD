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
