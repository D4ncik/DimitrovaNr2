document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('treatmentModal');
    const bookingButton = document.getElementById('bookingButton');
    let currentBookingUrl = '';

    // Adăugăm event listener pentru butonul de detalii
    document.querySelectorAll('.details-button').forEach(button => {
        button.addEventListener('click', function() {
            currentBookingUrl = this.getAttribute('data-booking-url');
        });
    });

    // Adăugăm event listener pentru butonul de programare
    bookingButton.addEventListener('click', function() {
        if (currentBookingUrl) {
            window.open(currentBookingUrl, '_blank');
        }
    });
}); 