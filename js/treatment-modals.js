// Treatment data object containing all modal content
const treatmentData = {
    'hydrating-rf': {
        title: 'Hidratare RF',
        description: 'Tratament profund hidratant cu radiofrecvență pentru o piele radiantă și sănătoasă. Stimulează producția de colagen și elastină, oferind o hidratare intensă și durabilă.',
        price: '400 lei',
        image: 'images/IMG_6067.jpg'
    },
    'facial-cleansing': {
        title: 'Curățare Facială',
        description: 'Curățare profesională pentru toate tipurile de ten, cu exfoliere și mască personalizată. Elimină impuritățile și celulele moarte, lăsând pielea proaspătă și radiantă.',
        price: '350 lei',
        image: 'images/IMG_6050.ARW'
    },
    'anti-aging': {
        title: 'Tratamente Anti-Aging',
        description: 'Proceduri specializate pentru reducerea ridurilor și îmbunătățirea elasticității pielii. Stimulează regenerarea celulară și reduce semnele vizibile ale îmbătrânirii.',
        price: '500 lei',
        image: 'images/treatments/anti-aging.jpg'
    },
    'acne-treatment': {
        title: 'Tratament Acne',
        description: 'Tratament specializat pentru acne și piele problematică. Reduce inflamația, controlează producția de sebum și previne apariția noilor erupții.',
        price: '450 lei',
        image: 'images/treatments/acne-treatment.jpg'
    },
    'alginate-mask': {
        title: 'Mască alginată',
        description: 'Hidratare și regenerare profundă a pielii folosind o mască alginată de înaltă calitate. Oferă o hidratare intensă și imediată, perfectă pentru toate tipurile de ten.',
        price: '400 lei',
        image: 'images/IMG_6767.JPG'
    },
    'carboxytherapy': {
        title: 'Terapie carboxi',
        description: 'Îmbunătățirea culorii tenului și luminozitate prin injectarea de dioxid de carbon sub piele. Stimulează microcirculația și oxigenarea pielii.',
        price: '600 lei',
        image: 'images/carboxytherapy.jpg'
    },
    'ultrasonic-cleansing': {
        title: 'Curățare cu ultrasunete',
        description: 'Curățare delicată și reînnoire a pielii folosind tehnologia ultrasunetelor. Elimină impuritățile și stimulează regenerarea celulară.',
        price: '500 lei',
        image: 'images/dermapen.jpg'
    },
    'mechanical-cleansing': {
        title: 'Curățare mecanică',
        description: 'Curățare profundă a porilor folosind tehnici manuale specializate. Elimină punctele negre și impuritățile adânci.',
        price: '550 lei',
        image: 'images/curatare_mecanica.jpg'
    },
    'combined-cleansing': {
        title: 'Curățare combinată',
        description: 'Îngrijire ideală pentru tenul problematic, combinând mai multe tehnici de curățare și tratament pentru rezultate optime.',
        price: '700 lei',
        image: 'images/combination.jpg'
    },
    'enzyme': {
        title: 'Enzyme',
        description: 'Tratament exfoliant natural care elimină celulele moarte și îmbunătățește textura pielii.',
        price: '350 lei',
        image: 'images/IMG_7277.PNG'
    },
    'rf-lifting': {
        title: 'RF-lifting facial',
        description: 'Lifting și întinerirea pielii folosind radiofrecvență. Stimulează producția de colagen și elastină pentru o piele mai fermă și mai tânără.',
        price: '800 lei',
        image: 'images/dermapen.jpg'
    },
    'rf-decollete': {
        title: 'RF-lifting față și decolteu',
        description: 'Întinerire completă a zonei feței și decolteului folosind radiofrecvență. Reduce ridurile și îmbunătățește elasticitatea pielii.',
        price: '1000 lei',
        image: 'images/RF+decolteu.jpg'
    },
    'facial-massage': {
        title: 'Masaj facial',
        description: 'Relaxare și tonifiere a mușchilor faciali prin tehnici specializate de masaj. Îmbunătățește circulația și elasticitatea pielii.',
        price: '300 lei',
        image: 'images/IMG_7288.PNG'
    },
    'intensive-hydration-rf': {
        title: 'Hidratare intensivă + RF',
        description: 'Hidratare profundă cu efect de lifting, combinând tratamente hidratante cu radiofrecvență pentru rezultate optime.',
        price: '900 lei',
        image: 'images/hydration-rf.jpg'
    }
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
            const treatmentType = this.closest('.facial-treatments') ? 'facial' : 'dermapen';
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
