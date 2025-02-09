document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('apply-form');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Here you would typically send the form data to your server
        // For this example, we'll just log it to the console
        const formData = new FormData(form);
        for (let [key, value] of formData.entries()) {
            console.log(key, value);
        }
        
        // Show a success message
        alert('Your application has been submitted successfully!');
        form.reset();
    });
});