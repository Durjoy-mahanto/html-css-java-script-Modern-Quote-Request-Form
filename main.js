// 1. Mouse Tracking for Parallax Background
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX;
        const y = e.clientY;
        
        // Update CSS variables for the blob transforms
        document.documentElement.style.setProperty('--mouse-x', `${x}px`);
        document.documentElement.style.setProperty('--mouse-y', `${y}px`);
    });

    // 2. Form Submission & Loading State
    document.getElementById("quoteForm").addEventListener("submit", function(e) {
        e.preventDefault();

        const btn = document.getElementById("submitBtn");
        const msg = document.getElementById("successMsg");

        // Add loading state
        btn.classList.add("loading");
        msg.style.display = "none";

        // Simulate network request (2 seconds)
        setTimeout(() => {
            // Remove loading state
            btn.classList.remove("loading");
            
            // Show success message
            msg.style.display = "block";
            
            // Reset form
            this.reset();

            // Hide success message after 4 seconds
            setTimeout(() => {
                msg.style.display = "none";
            }, 4000);
            
        }, 2000);
    });
      