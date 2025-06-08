// Treatment data object containing all modal content
const treatmentData = {
    'biorepeel': {
        title: 'BioRePeel',
        description: 'Tratament exfoliant și regenerator pentru pielea feței.',
        price: '800 lei',
        image: 'images/biorepeel.jpg'
    },
    'biorepeel-body': {
        title: 'BioRePeel corp',
        description: 'Tratament exfoliant și regenerator pentru pielea corpului.',
        price: '1200 lei',
        image: 'images/biorepeel-body.jpg'
    },
    'azelaic': {
        title: 'Azelaic',
        description: 'Tratament pentru piele problematică și acneică.',
        price: '600 lei',
        image: 'images/NP-Azelaico.jpg'
    },
    'mandelic': {
        title: 'Mandelic',
        description: 'Peeling delicat pentru toate tipurile de ten.',
        price: '500 lei',
        image: 'images/mandelnic.webp'
    },
    'lactic': {
        title: 'Lactic',
        description: 'Peeling hidratant și iluminator.',
        price: '450 lei',
        image: 'images/Lactic.webp'
    },
    'fitic': {
        title: 'Fitic',
        description: 'Peeling antioxidant și protector.',
        price: '550 lei',
        image: 'images/treatments/fitic.jpg'
    },
    'peri-orbital': {
        title: 'Peri-orbital',
        description: 'Tratament specializat pentru zona ochilor.',
        price: '400 lei',
        image: 'images/periorbital.avif'
    },
    'stop-acne': {
        title: 'Stop Acne',
        description: 'Tratament specializat pentru acne și piele problematică.',
        price: '700 lei',
        image: 'images/stopAcnee.jpg'
    },
    '3d-lifting': {
        title: '3D|lifting',
        description: 'Tratament de lifting non-chirurgical.',
        price: '900 lei',
        image: 'images/3dLifting.webp'
    },
    'carbon': {
        title: 'Carbon',
        description: 'Peeling cu carbon pentru o piele radiantă.',
        price: '650 lei',
        image: 'images/Carbon.avif'
    },
    'whitening': {
        title: 'Whitening',
        description: 'Tratament pentru uniformizarea culorii tenului.',
        price: '750 lei',
        image: 'images/whitening.webp'
    },
    'enzymatic-phytopeeling': {
        title: 'Enzymatic phytopeeling',
        description: 'Peeling natural cu enzime și extracte botanice.',
        price: '550 lei',
        image: 'images/Pharmica.jpg'
    },
    'yellow-retinol': {
        title: 'Yellow Retinol',
        description: 'Tratament anti-aging cu retinol.',
        price: '850 lei',
        image: 'images/yellowretinol.webp'
    },
    'rf-body': {
        title: 'RF-lifting corporal',
        description: 'Procedură avansată de lifting și tonifiere a pielii corpului folosind tehnologia RF (Radio Frequency). Stimulează producția de colagen, îmbunătățește elasticitatea pielii și reduce celulita.',
        price: '500 lei',
        image: 'images/treatments/rf-lifting.jpg'
    },
   
};

// Function to open treatment modal
function openTreatmentModal(treatmentId, treatmentType) {
    const treatment = treatmentData[treatmentId];
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

    // Adaugă etichete de ședințe pentru tratamentele program
    const sessionLabelsData = {
        // Adaugă aici datele pentru etichetele de ședințe, dacă este necesar
    };
    let container = document.getElementById('modalSessionLabels');
    if (!container) {
        container = document.createElement('div');
        container.id = 'modalSessionLabels';
        container.className = 'modal-session-labels';
        modalPrice.parentNode.insertBefore(container, modalPrice);
    }
    container.innerHTML = '';
    (sessionLabelsData[treatmentId] || []).forEach(label => {
        const span = document.createElement('span');
        span.className = 'modal-session-label';
        span.textContent = label;
        container.appendChild(span);
    });
    if (!(treatmentId in sessionLabelsData)) {
        container.innerHTML = '';
    }
    // Ascund prețul individual
    modalPrice.style.display = (treatmentId in sessionLabelsData) ? 'none' : '';

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