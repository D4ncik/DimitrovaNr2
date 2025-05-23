document.addEventListener('DOMContentLoaded', function() {
    console.log('Script loaded'); // Debug

    // Date pentru tratamentele corporale
    const bodyTreatmentData = {
        'rf-body': {
            title: 'RF-lifting corporal',
            description: 'Procedură avansată de lifting și tonifiere a pielii corpului folosind tehnologia RF (Radio Frequency). Stimulează producția de colagen, îmbunătățește elasticitatea pielii și reduce celulita.',
            price: '1200 MDL',
            image: 'images/IMG_7278.PNG'
        },
        'cavitation': {
            title: 'Cavitație',
            description: 'Tratament non-invaziv pentru reducerea grăsimii localizate și a celulitei. Utilizează ultrasunete pentru a distruge celulele de grăsime în mod natural.',
            price: '800 MDL',
            image: 'images/body/cavitation.jpg'
        },
        'lipo-laser': {
            title: 'Lipo laser',
            description: 'Procedură modernă de reducere a grăsimii localizate folosind tehnologia laser. Stimulează metabolismul și ajută la eliminarea grăsimii în mod natural.',
            price: '1000 MDL',
            image: 'images/body/lipo-laser.jpg'
        },
        'vacuum-therapy': {
            title: 'Terapie cu vacuum',
            description: 'Tratament pentru îmbunătățirea circulației sanguine și a drenajului limfatic. Ajută la reducerea celulitei și la tonifierea pielii.',
            price: '600 MDL',
            image: 'images/body/vacuum-therapy.jpg'
        },
        'biofoton': {
            title: 'Biofoton',
            description: 'Terapie cu lumină pentru îmbunătățirea calității pielii și stimularea proceselor naturale de regenerare. Ajută la reducerea inflamației și la accelerarea vindecării.',
            price: '900 MDL',
            image: 'images/body/biofoton.jpg'
        }
    };

    // Funcție pentru deschiderea modalului
    function openModal(treatmentId) {
        const treatment = bodyTreatmentData[treatmentId];
        if (!treatment) {
            console.error('Tratamentul nu a fost găsit:', treatmentId);
            return;
        }

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

    // Funcție pentru închiderea modalului
    function closeModal() {
        const modal = document.getElementById('treatmentModal');
        modal.style.opacity = '0';
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    }

    // Adăugăm event listeners când DOM-ul este încărcat
    const detailButtons = document.querySelectorAll('.details-button');
    detailButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const treatmentId = this.getAttribute('data-treatment');
            if (treatmentId) {
                openModal(treatmentId);
            }
        });
    });

    // Adăugăm event listener pentru închiderea modalului când se face click în afara conținutului
    const modal = document.getElementById('treatmentModal');
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Adăugăm event listener pentru tasta Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}); 