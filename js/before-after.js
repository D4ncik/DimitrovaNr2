document.addEventListener('DOMContentLoaded', function() {
    const containers = document.querySelectorAll('.before-after-container');
    
    containers.forEach(container => {
        // Eliminam selectarea slider-ului si a etichetelor, deoarece nu mai sunt interactive
        // const slider = container.querySelector('.slider-handle');
        // const beforeImage = container.querySelector('.before-image');
        // const beforeLabel = container.querySelector('.before-label');
        // const afterLabel = container.querySelector('.after-label');
        // let isDragging = false;

        // Eliminam functia de actualizare a pozitiei slider-ului
        // function updateSliderPosition(x) { ... }

        // Eliminam event listenerii pentru mouse
        // slider.addEventListener('mousedown', () => { ... });
        // document.addEventListener('mousemove', (e) => { ... });
        // document.addEventListener('mouseup', () => { ... });

        // Eliminam event listenerii pentru touch
        // slider.addEventListener('touchstart', () => { ... });
        // document.addEventListener('touchmove', (e) => { ... });
        // document.addEventListener('touchend', () => { ... });

        // Eliminam event listenerii pentru click pe etichete
        // beforeLabel.addEventListener('click', () => { ... });
        // afterLabel.addEventListener('click', () => { ... });
        
        // Pastram functionalitatea existenta sau adaugam alta daca este necesar, dar in acest caz nu mai este necesara nicio logica JS pentru bara simpla.
        // Putem lasa bucla forEach goala sau o eliminam complet daca nu mai sunt alte elemente .before-after-container cu JS asociat.
        // Pentru claritate, lasam bucla forEach goala momentan.

    });
}); 