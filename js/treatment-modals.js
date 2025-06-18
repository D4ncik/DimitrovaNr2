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

    if (treatmentId === 'carboxytherapy' && treatment.modalContent) {
        // Ascunde imaginea standard și inserează conținutul custom (imaginile + textul)
        modalImage.style.display = 'none';
        modalTitle.textContent = treatment.title;
        modalDescription.innerHTML = treatment.modalContent;
        if (modalPrice) modalPrice.textContent = treatment.price || '';
    } else {
        // Standard pentru restul tratamentelor
        modalImage.style.display = 'block';
        modalImage.src = treatment.image;
        modalImage.alt = treatment.title;
        modalTitle.textContent = treatment.title;
        modalDescription.textContent = treatment.description;
        if (modalPrice) modalPrice.textContent = treatment.price || '';
    }

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


// Actualizare pentru modalContent-ul tratamentului Carboxytherapy
const updatedCarboxytherapyModal = `
<div class="carboxy-modal">
    <div class="carboxy-modal-images">
        <img src="images/IMG_7444.JPG" alt="Carboxytherapy Before">
        <img src="images/IMG_7282.JPG" alt="Carboxytherapy After">
    </div>
    <div class="carboxy-modal-content">
        <h2 class="carboxy-modal-title">Carboxytherapy</h2>
        <p class="carboxy-modal-description">
            <b>Terapie inovatoare cu dioxid de carbon pentru oxigenarea și revitalizarea pielii.</b>
        </p>
        <ul class="carboxy-modal-list">
            <li>Îmbunătățește circulația sângelui</li>
            <li>Stimulează producția de colagen</li>
            <li>Redă luminozitatea tenului</li>
            <li>Efect anti-aging vizibil</li>
            <li>Reduce ridurile fine</li>
            <li>Îmbunătățește textura pielii</li>
        </ul>
    </div>
</div>
`

// Actualizare pentru modalContent-ul tratamentului Peri-orbital
const updatedPeriOrbitalModal = `
<div class="peri-orbital-modal-images">
    <img src="images/IMG_7472.JPG" alt="Peri-orbital Before">
    <img src="images/IMG_7444.JPG" alt="Peri-orbital After">
</div>
<div style="padding: 0 30px;">
    <h2 style="text-align: center; color: #5999ee; margin-bottom: 15px; font-size: 1.8em; margin-top: 0;">Peri-orbital</h2>
    <div style="font-size: 1em; line-height: 1.6; margin-bottom: 15px; color: #555; text-align: left;">
        <p><b>Activarea sistemului imunitar:</b> Întărește protecția naturală a pielii, sporindu-i rezistența la factorii externi.</p>
        <p><b>Hidratare și netezire:</b> Hidratează intens pielea, îmbunătățindu-i textura și eliminând senzația de uscăciune.</p>
        <p><b>Corectarea ridurilor:</b> Elimină ridurile fine și reduce adâncimea celor pronunțate din jurul ochilor.</p>
        <p><b>Reducerea umflăturilor:</b> Luptă eficient împotriva edemelor, redând prospețimea și confortul pielii.</p>
        <p><b>Efect de lifting:</b> Oferă un efect de tonifiere, îmbunătățind conturul zonei din jurul ochilor.</p>
    </div>
    <div class='modal-3col' style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; margin-top: 20px; text-align: center; font-size: 0.9em;">
        <div>
            <h3 style="color: #2c3e50; font-size: 1em; margin-bottom: 8px;">Acțiuni principale</h3>
            <p style="font-size: 0.9em; color: #666; margin: 0;">Hidratare, lifting, activarea protecției imunitare</p>
        </div>
        <div>
            <h3 style="color: #2c3e50; font-size: 1em; margin-bottom: 8px;">Indicații</h3>
            <p style="font-size: 0.9em; color: #666; margin: 0;">Riduri în jurul ochilor, umflături, deshidratare, piele ternă</p>
        </div>
        <div>
            <h3 style="color: #2c3e50; font-size: 1em; margin-bottom: 8px;">Rezultate</h3>
            <p style="font-size: 0.9em; color: #666; margin: 0;">Netezire, reducerea umflăturilor, lifting, aspect odihnit</p>
        </div>
    </div>
</div>
`

// Funcție pentru aplicarea actualizărilor
function updateModalContents(treatmentsData) {
  // Pentru facial-care.html - actualizează Carboxytherapy
  if (typeof treatmentsData !== "undefined" && treatmentsData.carboxytherapy) {
    treatmentsData.carboxytherapy.modalContent = updatedCarboxytherapyModal
  }

  // Pentru body-care.html - actualizează Peri-orbital
  if (typeof treatmentsData !== "undefined" && treatmentsData["peri-orbital"]) {
    treatmentsData["peri-orbital"].modalContent = updatedPeriOrbitalModal
  }
}

// Aplică actualizările când documentul este încărcat
document.addEventListener("DOMContentLoaded", () => {
  // Assuming treatmentsData is available globally or fetched elsewhere
  // You might need to fetch or define treatmentsData here
  // Example:
  // fetchTreatmentsData().then(data => {
  //     updateModalContents(data);
  // });
  // For now, let's assume it's defined elsewhere and just call the function if it exists
  if (typeof treatmentsData !== "undefined") {
    updateModalContents(treatmentsData)
  }

  // Adaugă stilurile CSS
  const styleSheet = document.createElement("style")
  styleSheet.textContent = `
        /* Include aici stilurile din modal-before-after-styles.css */
        .carboxy-modal {
            width: 100%;
            margin: 0;
            padding: 0;
        }

        .carboxy-modal-images {
            display: flex;
            width: calc(100% + 60px);
            margin: -30px -30px 20px -30px;
            padding: 0;
            height: 300px;
        }

        .carboxy-modal-images img {
            width: 50%;
            height: 100%;
            object-fit: cover;
            display: block;
            margin: 0;
        }

        .carboxy-modal-images img:first-child {
            border-radius: 15px 0 0 0;
        }

        .carboxy-modal-images img:last-child {
            border-radius: 0 15px 0 0;
        }

        .carboxy-modal-content {
            padding: 0 30px 15px 30px;
        }

        .peri-orbital-modal-images {
            display: flex;
            width: calc(100% + 60px);
            margin: -30px -30px 20px -30px;
            padding: 0;
            height: 300px;
        }

        .peri-orbital-modal-images img {
            width: 50%;
            height: 100%;
            object-fit: cover;
            display: block;
            margin: 0;
        }

        .peri-orbital-modal-images img:first-child {
            border-radius: 15px 0 0 0;
        }

        .peri-orbital-modal-images img:last-child {
            border-radius: 0 15px 0 0;
        }

        @media (max-width: 768px) {
            .carboxy-modal-images,
            .peri-orbital-modal-images {
                width: calc(100% + 20px);
                margin: -10px -10px 15px -10px;
                height: 250px;
            }
            
            .carboxy-modal-content {
                padding: 0 10px 10px 10px;
            }
        }
    `
  document.head.appendChild(styleSheet)
})

// Export pentru utilizare
window.updateModalContents = updateModalContents
