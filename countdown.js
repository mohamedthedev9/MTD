document.addEventListener('DOMContentLoaded', () => {
    
    // Set exactly 48 hours in seconds (48 hrs * 60 mins * 60 secs)
    let timeRemaining = 48 * 60 * 60; 

    // Target the HTML elements
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    // Function to calculate and update the time
    function updateCountdown() {
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            hoursEl.innerText = "00";
            minutesEl.innerText = "00";
            secondsEl.innerText = "00";
            // Optional: You can trigger a redirect or change text here when it hits zero
            document.querySelector('.status-text').innerText = "SYSTEM INITIATED";
            document.querySelector('.status-text').style.color = "#00ff00";
            return;
        }

        // Math calculations for hours, mins, secs
        const hours = Math.floor(timeRemaining / 3600);
        const minutes = Math.floor((timeRemaining % 3600) / 60);
        const seconds = Math.floor(timeRemaining % 60);

        // Update the DOM and force double-digits (e.g., "09" instead of "9")
        hoursEl.innerText = hours.toString().padStart(2, '0');
        minutesEl.innerText = minutes.toString().padStart(2, '0');
        secondsEl.innerText = seconds.toString().padStart(2, '0');

        // Subtract one second for the next loop
        timeRemaining--;
    }

    // Run immediately once to avoid a 1-second delay
    updateCountdown();

    // Set the interval to run every 1000 milliseconds (1 second)
    const timerInterval = setInterval(updateCountdown, 1000);
});
