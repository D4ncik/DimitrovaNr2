// Treatment data object containing all modal content
const bodyRemodelingData = {
    'rf-lifting': {
        title: 'RF-lifting',
        description: 'Tratament avansat pentru lifting și firmare a pielii folosind radiofrecvență. Procedura stimulează producția de colagen și elastină, rezultând într-o piele mai fermă și mai tânără. Ideal pentru modelarea corporală și reducerea celulitei.',
        price: '800 lei',
        image: 'images/treatments/rf-lifting.jpg'
    },
    'cavitatie': {
        title: 'Cavitație',
        description: 'Tratament non-invaziv pentru reducerea grăsimii localizate. Utilizează ultrasunete pentru a distruge celulele de grăsime, care sunt apoi eliminate natural din corp. Rezultate vizibile după prima procedură.',
        price: '600 lei',
        image: 'images/treatments/cavitatie.jpg'
    },
    'vacuum': {
        title: 'Vacuum',
        description: 'Tratament de drenaj limfatic și modelare corporală. Procedura ajută la eliminarea toxinelor, îmbunătățește circulația și reduce retenția de apă. Rezultate în modelarea siluetei și reducerea celulitei.',
        price: '500 lei',
        image: 'images/treatments/vacuum.jpg'
    },
    'lipolazer': {
        title: 'Lipolazer',
        description: 'Tratament cu laser pentru reducerea grăsimii și modelare corporală. Procedura stimulează metabolismul celular și ajută la eliminarea grăsimii localizate. Rezultate durabile și vizibile.',
        price: '700 lei',
        image: 'images/treatments/lipolazer.jpg'
    },
    'biofoton': {
        title: 'Biofoton',
        description: 'Tratament cu lumină pentru îmbunătățirea aspectului pielii și modelare. Procedura stimulează regenerarea celulară și îmbunătățește textura pielii. Rezultate în reducerea celulitei și modelarea siluetei.',
        price: '550 lei',
        image: 'images/treatments/biofoton.jpg'
    },
    'vacuum-cavitatie': {
        title: 'Vacuum + Cavitație',
        description: 'Pachet combinat pentru rezultate optime în modelarea corporală. Combină beneficiile drenajului limfatic cu reducerea grăsimii localizate. Rezultate vizibile și durabile în modelarea siluetei.',
        price: '770 lei',
        image: 'images/treatments/vacuum-cavitatie.jpg'
    },
    'vacuum-rf': {
        title: 'Vacuum + RF-lifting',
        description: 'Pachet pentru firmare și modelare corporală. Combină drenajul limfatic cu liftingul prin radiofrecvență pentru rezultate optime în modelarea siluetei și reducerea celulitei.',
        price: '910 lei',
        image: 'images/treatments/vacuum-rf.jpg'
    },
    'cavitatie-rf': {
        title: 'Cavitație + RF-lifting',
        description: 'Pachet pentru reducerea grăsimii și firmare. Combină beneficiile cavitației cu liftingul prin radiofrecvență pentru rezultate optime în modelarea corporală.',
        price: '980 lei',
        image: 'images/treatments/cavitatie-rf.jpg'
    },
    'lipolazer-package': {
        title: 'Lipolazer',
        description: 'Pachet de tratamente cu Lipolazer pentru rezultate optime. Procedura stimulează metabolismul celular și ajută la eliminarea grăsimii localizate. Rezultate durabile și vizibile în modelarea siluetei.',
        price: '490 lei',
        image: 'images/treatments/lipolazer-package.jpg'
    }
};

// Function to open treatment modal
function openTreatmentModal(treatmentId) {
    const treatment = bodyRemodelingData[treatmentId];
    if (!treatment) return;

    const modal = document.getElementById('treatmentModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalPrice = document.getElementById('modalPrice');

    modalImage.src = treatment.image;
    modalImage.alt = treatment.title;
    modalTitle.textContent = treatment.title;
    modalDescription.textContent = treatment.description;
    modalPrice.textContent = treatment.price;

    modal.style.display = 'flex';
    modal.style.opacity = '0';
    setTimeout(() => {
        modal.style.opacity = '1';
    }, 10);
}

// Function to close modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.opacity = '0';
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    }
}

// Add event listeners when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add click event listeners to all treatment buttons
    document.querySelectorAll('[data-treatment]').forEach(button => {
        button.addEventListener('click', function() {
            const treatmentId = this.getAttribute('data-treatment');
            openTreatmentModal(treatmentId);
        });
    });

    // Add click event listener to close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('modal')) {
            closeModal(event.target.id);
        }
    });

    // Add click event listener to close modal when pressing Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            const openModals = document.querySelectorAll('.modal[style*="display: flex"]');
            openModals.forEach(modal => {
                closeModal(modal.id);
            });
        }
    });
}); 