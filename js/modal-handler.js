document.addEventListener('DOMContentLoaded', function() {
    // Funcție pentru deschiderea modalului
    window.openModal = function(modalId) {
        // Map both consultationModal and bookingModal to the same modal
        let targetModalId = modalId;
        if (modalId === 'consultationModal' || modalId === 'bookingModal') {
            // Check which modal exists on the page
            targetModalId = document.getElementById('bookingModal') ? 'bookingModal' : 'consultationModal';
        }
        
        const modal = document.getElementById(targetModalId);
        if (modal) {
            modal.style.display = "flex";
            document.body.style.overflow = "hidden";
            // Adăugăm un mic delay pentru a ne asigura că modalul este vizibil
            setTimeout(() => {
                modal.style.opacity = "1";
            }, 10);
        }
    }

    // Funcție pentru deschiderea modalului de programare
    window.openBookingModal = function() {
        const modal = document.getElementById('bookingModal');
        if (modal) {
            modal.style.display = "flex";
            document.body.style.overflow = "hidden";
            setTimeout(() => {
                modal.style.opacity = "1";
            }, 10);
        }
    }

    // Funcție pentru închiderea modalului
    window.closeModal = function(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.opacity = "0";
            setTimeout(() => {
                modal.style.display = "none";
                document.body.style.overflow = "auto";
                
                // Reset iframe source when closing booking modal
                if (modalId === 'bookingModal') {
                    const iframe = document.getElementById('bookingIframe');
                    if (iframe) {
                        iframe.src = iframe.src;
                    }
                }
            }, 300);
        }
    }

    // Închidere modal când se face click în afara lui
    window.onclick = function(event) {
        if (event.target.classList.contains('modal')) {
            closeModal(event.target.id);
        }
    }

    // Adăugăm event listener pentru tasta ESC
    document.addEventListener('keydown', function(event) {
        if (event.key === "Escape") {
            const modals = document.querySelectorAll('.modal');
            modals.forEach(modal => {
                if (modal.style.display === 'flex' || window.getComputedStyle(modal).display === 'flex') {
                    closeModal(modal.id);
                }
            });
        }
    });
}); 