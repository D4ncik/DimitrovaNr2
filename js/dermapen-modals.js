// Treatment data object containing all modal content
const dermapenData = {
    'dermapen1': {
        title: 'Dermapen 4',
        description: 'Procedură avansată de microacupunctură pentru regenerarea pielii. Stimulează producția de colagen și elastină pentru o piele mai tânără și mai sănătoasă.',
        price: '500 MDL',
        image: 'images/dermapen1.jpg'
    },
    'dermapen2': {
        title: 'Dermapen Anti-Aging',
        description: 'Tratament specializat pentru reducerea ridurilor și îmbunătățirea elasticității pielii. Rezultate vizibile după prima procedură.',
        price: '600 MDL',
        image: 'images/dermapen2.jpg'
    },
    'dermapen3': {
        title: 'Dermapen Acne',
        description: 'Tratament eficient pentru acne și cicatrici post-acneice. Reduce inflamația și stimulează regenerarea pielii.',
        price: '550 MDL',
        image: 'images/dermapen3.jpg'
    },
    'dermapen4': {
        title: 'Dermapen Pigmentare',
        description: 'Tratament pentru reducerea pigmentării și uniformizarea tenului. Rezultate durabile și vizibile.',
        price: '580 MDL',
        image: 'images/dermapen4.jpg'
    },
    'dermapen5': {
        title: 'Dermapen Stretch Marks',
        description: 'Tratament specializat pentru reducerea striurilor. Stimulează regenerarea pielii și reduce vizibilitatea striurilor.',
        price: '650 MDL',
        image: 'images/dermapen5.jpg'
    },
    'dermapen6': {
        title: 'Dermapen Hair Growth',
        description: 'Stimularea creșterii părului și tratarea alopeciei. Procedură non-invazivă cu rezultate vizibile.',
        price: '700 MDL',
        image: 'images/dermapen6.jpg'
    },
    'dermapen-face': {
        title: 'Dermapen Față',
        description: 'Procedură avansată de micro-needling pentru față care stimulează producția naturală de colagen. Tratamentul îmbunătățește textura pielii, reduce cicatricile și ridurile fine. Include și aplicarea de seruri specializate pentru maximizarea rezultatelor.',
        price: '1200 MDL',
        image: 'images/treatments/dermapen-face.jpg'
    },
    'dermapen-acne': {
        title: 'Dermapen pentru Acnee',
        description: 'Tratament specializat pentru cicatrici post-acneice și acnee activă. Procedura reduce vizibil cicatricile, uniformizează textura pielii și ajută la controlul producției de sebum. Include mască LED albastră anti-bacteriană.',
        price: '1000 MDL',
        image: 'images/treatments/dermapen-acne.jpg'
    },
    'dermapen-stretch': {
        title: 'Dermapen pentru Vergeturi',
        description: 'Tratament eficient pentru reducerea vergeturilor pe corp. Stimulează regenerarea naturală a pielii și producția de colagen pentru a diminua aspectul vergeturilor. Include seruri specializate și peptide.',
        price: '900 MDL',
        image: 'images/treatments/dermapen-stretch.jpg'
    },
    'dermapen-hair': {
        title: 'Dermapen pentru Scalp',
        description: 'Tratament inovator pentru stimularea creșterii părului și îmbunătățirea sănătății scalpului. Procedura include micro-needling specializat și aplicarea de seruri cu factori de creștere. Recomandată pentru alopecie și subțierea părului.',
        price: '800 MDL',
        image: 'images/treatments/dermapen-hair.jpg'
    }
};

// Function to open treatment modal
function openTreatmentModal(treatmentId, treatmentType) {
    const treatment = dermapenData[treatmentId];
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
            const treatmentType = this.closest('.dermapen-treatments') ? 'dermapen' : 'facial';
            openTreatmentModal(treatmentId, treatmentType);
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