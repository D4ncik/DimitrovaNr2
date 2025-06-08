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
        title: 'DermaPen Facial',
        description: 'Procedură avansată de micro-needling pentru față care stimulează producția naturală de colagen. Acest tratament ajută la reducerea ridurilor, îmbunătățirea texturii pielii și uniformizarea culorii tenului.',
        price: '1200 lei',
        image: 'images/RF-lifiting.ARW'
    },
    'dermapen-acne': {
        title: 'Dermapen pentru Acnee',
        description: 'Tratament specializat pentru cicatrici post-acneice și acnee activă. Procedura reduce vizibil cicatricile, uniformizează textura pielii și ajută la controlul producției de sebum. Include mască LED albastră anti-bacteriană.',
        price: '1000 MDL',
        image: 'images/treatments/dermapen-acne.jpg'
    },
    'dermapen-stretch': {
        title: 'DermaPen Vergeturi',
        description: 'Tratament eficient pentru reducerea vergeturilor pe corp. Procedura stimulează regenerarea pielii și îmbunătățește aspectul vergeturilor.',
        price: '1000 lei',
        image: 'images/RF-Lifting2.jpg'
    },
    'dermapen-hair': {
        title: 'DermaPen Scalp',
        description: 'Tratament inovator pentru stimularea creșterii părului și îmbunătățirea sănătății scalpului. Procedura ajută la revitalizarea foliculilor de păr și promovează creșterea părului sănătos.',
        price: '1300 lei',
        image: 'images/dermapen_scalp.webp'
    },
    'dermapen-lips': {
        title: 'DermaPen Buze',
        description: 'Tratament specializat pentru volumizarea și conturarea buzelor. Procedura ajută la îmbunătățirea conturului buzelor și promovează producția de colagen.',
        price: '750 lei',
        image: 'images/dermapen_buze.jpeg'
    },
    'dermapen-face-program': {
        title: 'DermaPen Facial - Program',
        description: 'Procedură avansată de micro-needling pentru față care stimulează producția naturală de colagen. Acest tratament ajută la reducerea ridurilor, îmbunătățirea texturii pielii și uniformizarea culorii tenului. Beneficiați de 15% reducere la programul de tratament.',
        price: '1020 lei',
        image: 'images/dermapenfacial.webp'
    },
    'dermapen-hair-program': {
        title: 'DermaPen Scalp - Program',
        description: 'Tratament inovator pentru stimularea creșterii părului și îmbunătățirea sănătății scalpului. Procedura ajută la revitalizarea foliculilor de păr și promovează creșterea părului sănătos. Beneficiați de 15% reducere la programul de tratament.',
        price: '680 lei',
        image: 'images/dermapenscalp.avif'
    },
    'dermapen-stretch-program': {
        title: 'DermaPen Vergeturi - Program',
        description: 'Tratament eficient pentru reducerea vergeturilor pe corp. Procedura stimulează regenerarea pielii și îmbunătățește aspectul vergeturilor. Beneficiați de 15% reducere la programul de tratament.',
        price: '765 lei',
        image: 'images/dermapenvergeturi.webp'
    },
    'dermapen-lips-program': {
        title: 'DermaPen Buze - Program',
        description: 'Tratament specializat pentru volumizarea și conturarea buzelor. Procedura ajută la îmbunătățirea conturului buzelor și promovează producția de colagen. Beneficiați de 15% reducere la programul de tratament.',
        price: '595 lei',
        image: 'images/dermapen_buze.jpeg'
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

    // Adaugă etichete de ședințe pentru tratamentele program
    const sessionLabelsData = {
        'dermapen-face-program': ['5 ședințe – 5100 lei', '8 ședințe – 8160 lei'],
        'dermapen-hair-program': ['5 ședințe – 5525 lei', '8 ședințe – 8840 lei'],
        'dermapen-stretch-program': ['5 ședințe – 4250 lei', '8 ședințe – 6800 lei'],
        'dermapen-lips-program': ['5 ședințe – 3190 lei']
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

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modalId === 'treatmentModal') {
        // Aici poți adăuga logica pentru popularea datelor tratamentului
        // sau poți apela direct openTreatmentModal cu ID-ul tratamentului
    }
    modal.style.display = 'flex';
    modal.style.opacity = '0';
    setTimeout(() => {
        modal.style.opacity = '1';
    }, 10);
} 