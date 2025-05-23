document.addEventListener('DOMContentLoaded', function() {
    // Funcție pentru deschiderea modalului
    window.openModal = function(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = "block";
            document.body.style.overflow = "hidden";
            // Adăugăm un mic delay pentru a ne asigura că modalul este vizibil
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
            const openModal = document.querySelector('.modal[style*="display: block"]');
            if (openModal) {
                closeModal(openModal.id);
            }
        }
    });
}); 