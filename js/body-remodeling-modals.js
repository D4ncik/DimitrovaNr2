// Treatment data object containing all modal content
const bodyRemodelingData = {
    'rf-lifting': {
        title: 'RF-lifting',
        description: 'Tratament avansat pentru lifting și firmare a pielii folosind radiofrecvență. Procedura stimulează producția de colagen și elastină, rezultând într-o piele mai fermă și mai tânără. Ideal pentru modelarea corporală și reducerea celulitei.',
        price: '1 h / 500 lei',
        image: 'images/RF-lifting1.jpg',
        details: [
            'Stimulează producția de colagen și elastină',
            'Efect de lifting vizibil',
            'Reduce celulita și tonifică pielea',
            'Fără durere, fără recuperare',
            'Rezultate de lungă durată'
        ]
    },
    'cavitatie': {
        title: 'Cavitație',
        description: 'Tratament non-invaziv pentru reducerea grăsimii localizate. Utilizează ultrasunete pentru a distruge celulele de grăsime, care sunt apoi eliminate natural din corp. Rezultate vizibile după prima procedură.',
        price: '1 h / 600 lei',
        image: 'images/corp2.PNG',
        details: [
            'Reduce grăsimea localizată',
            'Stimulează drenajul limfatic',
            'Rezultate rapide și vizibile',
            'Fără intervenție chirurgicală',
            'Îmbunătățește conturul corporal'
        ]
    },
    'vacuum': {
        title: 'Vacuum',
        description: 'Tratament de drenaj limfatic și modelare corporală. Procedura ajută la eliminarea toxinelor, îmbunătățește circulația și reduce retenția de apă. Rezultate în modelarea siluetei și reducerea celulitei.',
        price: '1 h / 600 lei',
        image: 'images/corp3.PNG',
        details: [
            'Drenaj limfatic eficient',
            'Reduce retenția de apă',
            'Îmbunătățește circulația',
            'Reduce celulita',
            'Remodelează silueta'
        ]
    },
    'lipolazer': {
        title: 'Lipolazer',
        description: 'Tratament cu laser pentru reducerea grăsimii și modelare corporală. Procedura stimulează metabolismul celular și ajută la eliminarea grăsimii localizate. Rezultate durabile și vizibile.',
        price: '1 h / 500 lei',
        image: 'images/Lipolazer.webp',
        details: [
            'Reduce grăsimea localizată',
            'Stimulează metabolismul celular',
            'Rezultate rapide și vizibile',
            'Fără durere',
            'Modelare corporală eficientă'
        ]
    },
    'biofoton': {
        title: 'Biofoton',
        description: 'Tratament cu lumină pentru îmbunătățirea aspectului pielii și modelare. Procedura stimulează regenerarea celulară și îmbunătățește textura pielii. Rezultate în reducerea celulitei și modelarea siluetei.',
        price: '1 h / 500 lei',
        image: 'images/Biofoton.jpg',
        details: [
            'Stimulează regenerarea celulară',
            'Îmbunătățește textura pielii',
            'Reduce celulita',
            'Modelare corporală',
            'Rezultate vizibile rapid'
        ]
    },
    'vacuum-cavitatie': {
        title: 'Vacuum + Cavitație',
        description: 'Pachet combinat pentru rezultate optime în modelarea corporală. Combină beneficiile drenajului limfatic cu reducerea grăsimii localizate. Rezultate vizibile și durabile în modelarea siluetei.',
        price: '',
        image: 'images/treatments/vacuum-cavitatie.jpg',
        details: [
            'Drenaj limfatic și reducere grăsime',
            'Rezultate rapide și vizibile',
            'Modelare corporală eficientă',
            'Reducere celulită',
            'Fără recuperare'
        ]
    },
    'vacuum-rf': {
        title: 'Vacuum + RF-lifting',
        description: 'Pachet pentru firmare și modelare corporală. Combină drenajul limfatic cu liftingul prin radiofrecvență pentru rezultate optime în modelarea siluetei și reducerea celulitei.',
        price: '',
        image: 'images/treatments/vacuum-rf.jpg',
        details: [
            'Drenaj limfatic și lifting',
            'Reduce celulita',
            'Tonifiere și fermitate',
            'Rezultate rapide',
            'Fără durere'
        ]
    },
    'cavitatie-rf': {
        title: 'Cavitație + RF-lifting',
        description: 'Pachet pentru reducerea grăsimii și firmare. Combină beneficiile cavitației cu liftingul prin radiofrecvență pentru rezultate optime în modelarea corporală.',
        price: '',
        image: 'images/treatments/cavitatie-rf.jpg',
        details: [
            'Reducere grăsime și lifting',
            'Modelare corporală',
            'Rezultate rapide și vizibile',
            'Fără recuperare',
            'Tonifiere intensă'
        ]
    },
    'lipolazer-package': {
        title: 'Lipolazer',
        description: 'Pachet de tratamente cu Lipolazer pentru rezultate optime. Procedura stimulează metabolismul celular și ajută la eliminarea grăsimii localizate. Rezultate durabile și vizibile în modelarea siluetei.',
        price: '',
        image: 'images/treatments/lipolazer-package.jpg',
        details: [
            'Stimulare metabolism',
            'Reducere grăsime localizată',
            'Rezultate rapide',
            'Modelare corporală',
            'Fără durere'
        ]
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

    modalImage.src = treatment.image;
    modalImage.alt = treatment.title;
    modalTitle.textContent = treatment.title;
    
    let descHtml = `<p>${treatment.description}</p>`;
    
    if (treatment.details && treatment.details.length) {
        descHtml += '<ul style="margin-left:1em; padding-left:1em; color:#666; font-size:1em;">';
        treatment.details.forEach(item => descHtml += `<li>${item}</li>`);
        descHtml += '</ul>';
    }
    
    // Adaug ședințele pentru pachete la sfârșit, după lista de beneficii
    const packageSessions = {
        'vacuum-cavitatie': [
            '10 ședințe – 4200 lei',
            '20 ședințe – 8100 lei'
        ],
        'vacuum-rf': [
            '10 ședințe – 4200 lei',
            '20 ședințe – 8100 lei'
        ],
        'cavitatie-rf': [
            '10 ședințe – 4200 lei',
            '20 ședințe – 8100 lei'
        ],
        'lipolazer-package': [
            '5 ședințe – 2250 lei',
            '10 ședințe – 4500 lei'
        ]
    };
    
    if (packageSessions[treatmentId]) {
        descHtml += '<div style="margin: 15px 0; padding: 10px; background: #f8f9fa; border-radius: 5px;">';
        descHtml += '<strong style="color: #333; display: block; margin-bottom: 5px;">Opțiuni de pachete:</strong>';
        packageSessions[treatmentId].forEach(session => {
            descHtml += `<div style="color: #333; font-weight: 600; margin: 3px 0;">${session}</div>`;
        });
        descHtml += '</div>';
    }
    
    modalDescription.innerHTML = descHtml;

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