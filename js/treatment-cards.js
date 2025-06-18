// Stiluri comune pentru carduri și modale
const treatmentCardStyles = `
    .treatment-card.new-design {
        height: 400px !important;
        max-width: 290px !important;
        min-width: 0 !important;
        width: 100% !important;
        display: flex !important;
        flex-direction: column !important;
    }
    .treatment-image-wrapper {
        position: relative !important;
        flex: 1 1 auto !important;
        display: flex !important;
        align-items: flex-end !important;
    }
    .treatment-image {
        width: 100%;
        height: 100% !important;
        object-fit: cover !important;
    }
    .treatment-content {
        padding: 8px 8px 0 8px !important;
        text-align: center !important;
        flex: none !important;
    }
    .treatment-content h3 {
        color: #333;
        margin-bottom: 10px;
        font-size: 1.3em;
        font-family: 'Open Sans', Arial, Helvetica, sans-serif !important;
        font-weight: 300 !important;
    }
    .badge-group {
        position: absolute !important;
        left: 0;
        right: 0;
        bottom: 12px;
        display: flex;
        justify-content: center;
        gap: 8px;
        z-index: 2;
    }
    .badge {
        background: rgba(255,255,255,0.5) !important;
        color: #222 !important;
        font-size: 0.88em !important;
        font-family: 'Open Sans', sans-serif !important;
        font-weight: 300 !important;
        border: 1.5px solid #fff !important;
        padding: 3px 16px !important;
        min-width: 80px !important;
        max-width: 140px !important;
        height: 32px !important;
        box-shadow: 0 2px 8px rgba(89,153,238,0.07) !important;
        white-space: nowrap !important;
        border-radius: 9999px !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        backdrop-filter: blur(10px) !important;
        transition: background 0.2s !important;
        margin: 0 4px !important;
    }
    .badge:hover {
        background: rgba(255,255,255,0.8) !important;
    }
    .modal {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 1000;
        overflow: auto;
    }
    .modal-content {
        background: white;
        margin: 5% auto;
        padding: 30px;
        border-radius: 15px;
        max-width: 800px;
        width: 90%;
        position: relative;
        box-sizing: border-box;
        overflow: hidden;
        max-height: 90vh;
        overflow-y: auto;
    }
    .modal-image {
        width: calc(100% + 60px);
        margin-left: -30px;
        margin-right: -30px;
        margin-top: -30px;
        height: 300px;
        object-fit: cover;
        border-radius: 0;
        margin-bottom: 20px;
        display: block;
    }
    .modal-text {
        margin-bottom: 20px;
        padding: 0 30px;
    }
    .modal-text h2 {
        color: #333;
        margin-bottom: 10px;
        font-size: 1.5em;
    }
    .modal-text p {
        color: #666;
        line-height: 1.6;
    }
    .modal-3col {
        display: flex;
        gap: 18px;
        margin-top: 18px;
        margin-bottom: 8px;
    }
    .modal-3col > div {
        flex: 1 1 0;
        min-width: 0;
    }
    .modal-3col h3 {
        color: #2c3e50;
        font-size: 1.1em;
        font-weight: 600;
        margin-bottom: 6px;
    }
    .modal-3col p {
        color: #555;
        font-size: 1em;
        margin: 0;
    }
    @media (max-width: 768px) {
        .modal-content {
            padding: 10px 4px 10px 4px;
            min-height: 320px;
            max-width: 99vw;
        }
        .modal-image {
            height: 200px;
            margin-left: -10px;
            margin-right: -10px;
            margin-top: -10px;
        }
        .modal-text h2 {
            font-size: 1.05em;
        }
        .modal-text p, .modal-text ul, .modal-text li {
            font-size: 0.92em;
        }
        .modal-text .modal-3col {
            font-size: 0.85em;
            gap: 6px;
        }
        .modal-text .modal-3col h3 {
            font-size: 0.95em;
        }
        .modal-text .modal-3col p {
            font-size: 0.85em;
        }
    }
`;

// Funcție pentru adăugarea stilurilor în pagină
function addTreatmentCardStyles() {
    const styleElement = document.createElement('style');
    styleElement.textContent = treatmentCardStyles;
    document.head.appendChild(styleElement);
}

// Funcție pentru generarea HTML-ului unui card
function generateTreatmentCard(treatment) {
    return `
        <div class="treatment-card" data-treatment="${treatment.id}">
            <div class="treatment-image-wrapper" onclick="openTreatmentModal('${treatment.id}')">
                <img src="${treatment.image}" alt="${treatment.title}" class="treatment-image">
                <div class="badge-group">
                    <span class="badge badge-left">${treatment.price}</span>
                    <span class="badge badge-right" onclick="event.stopPropagation(); openModal('consultationModal')">Programează-te</span>
                </div>
            </div>
            <div class="treatment-content">
                <h3>${treatment.title}</h3>
            </div>
        </div>
    `;
}

// Funcție pentru generarea HTML-ului unei grile de carduri
function generateTreatmentGrid(treatments) {
    return `
        <div class="treatments-grid">
            ${treatments.map(treatment => generateTreatmentCard(treatment)).join('')}
        </div>
    `;
}

// Funcție pentru generarea HTML-ului modalei
function generateTreatmentModal() {
    return `
        <div id="treatmentModal" class="modal">
            <div class="modal-content">
                <img id="modalImage" class="modal-image" src="" alt="">
                <div class="modal-text">
                    <h2 id="modalTitle"></h2>
                    <div id="modalDescription"></div>
                </div>
                <span style="position:absolute;top:10px;right:20px;font-size:2em;cursor:pointer;" onclick="closeModal('treatmentModal')">&times;</span>
            </div>
        </div>
    `;
}

// Funcție pentru deschiderea modalei
function openTreatmentModal(treatmentId) {
    const data = treatmentsData[treatmentId];
    if (!data) return;
    
    document.getElementById('modalImage').src = data.image;
    document.getElementById('modalImage').alt = data.title;
    document.getElementById('modalTitle').textContent = data.title;
    
    let descHtml = '';
    if (typeof data.description === 'string') {
        descHtml = `<p>${data.description}</p>`;
        if (data.details && data.details.length) {
            descHtml += '<ul style="margin-left:1em; padding-left:1em; color:#666; font-size:1em;">';
            data.details.forEach(item => descHtml += `<li>${item}</li>`);
            descHtml += '</ul>';
        }
    } else {
        descHtml = data.description;
    }
    
    document.getElementById('modalDescription').innerHTML = descHtml;
    document.getElementById('treatmentModal').style.display = 'flex';
    document.getElementById('treatmentModal').style.opacity = '0';
    setTimeout(() => {
        document.getElementById('treatmentModal').style.opacity = '1';
    }, 10);
}

// Funcție pentru închiderea modalei
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Adăugăm event listener pentru închiderea modalei la click în afara conținutului
document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('treatmentModal');
        if (event.target === modal) {
            closeModal('treatmentModal');
        }
    });
    
    // Închidere cu Escape
    window.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeModal('treatmentModal');
        }
    });
});

// Exportăm funcțiile și datele necesare
window.TreatmentCards = {
    addStyles: addTreatmentCardStyles,
    generateGrid: generateTreatmentGrid,
    generateModal: generateTreatmentModal,
    openModal: openTreatmentModal,
    closeModal: closeModal
}; 