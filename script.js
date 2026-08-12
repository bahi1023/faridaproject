document.addEventListener("DOMContentLoaded", function() {
    const youtubeBtn = document.getElementById('youtube-btn');
    if (youtubeBtn) {
        youtubeBtn.addEventListener('click', function(e) {
            e.preventDefault(); // Stop it from opening immediately
            
            const btn = this;
            const originalHTML = btn.innerHTML; // Save the original text and icon
            
            // Change the button to show a spinning loading icon
            btn.innerHTML = 'Loading... <i class="fas fa-spinner fa-spin"></i>';
            
            // Wait 1.5 seconds, then open the link and reset the button
            setTimeout(function() {
                window.open(btn.href, '_blank'); // Open YouTube in new tab
                btn.innerHTML = originalHTML;    // Put the original text back
            }, 1500);
        });
    }
});
