document.addEventListener('DOMContentLoaded', function() {
    // Translations object - mutat la început
    const translations = {
        ro: {
            despre: "Despre noi",
            recenzii: "Recenzii",
            galerie: "Galerie",
            servicii: "Servicii",
            "price-list": "Oferte și Tarife",
            preturi: "Prețuri",
            oferte: "Oferte",
            noutati: "Noutăți",
            contacte: "Contacte",
            // Services submenu
            fata: "Îngrijirea pielii feței",
            dermapen: "Proceduri Dermapen",
            corp: "Îngrijirea pielii corpului",
            // Hero section translations
            "hero-subtitle": "Îngrijire personalizată, atenție la fiecare detaliu",
            "hero-title": "Frumusețea ta, în mâini sigure<br>și dedicate!",
            "hero-description": "Servicii cosmetologice profesionale oferite cu grijă<br>într-un spațiu intim și relaxant din Chișinău",
            "cta-button": "Programează-te acum",
            // Services section
            "services-title": "Serviciile centrului nostru",
            "services-subtitle": "Frumusețea ta merită toată grija — te aștept cu sufletul deschis.",
            "service-face-title": "Îngrijirea pielii feței",
            "service-face-description": "Tratamente personalizate pentru îngrijirea tenului, curățare facială profesională și proceduri specializate pentru toate tipurile de ten.",
            "service-dermapen-title": "Proceduri Dermapen",
            "service-dermapen-description": "Tehnologie avansată pentru regenerarea pielii, reducerea cicatricilor și îmbunătățirea texturii tenului.",
            "service-body-title": "Îngrijirea pielii corpului",
            "service-body-description": "Tratamente corporale complete pentru tonifiere, hidratare și îmbunătățirea aspectului general al pielii.",
            "service-button": "Detalii"
        },
        ru: {
            despre: "О нас",
            recenzii: "Отзывы",
            galerie: "Галерея",
            servicii: "Услуги",
            "price-list": "Предложения и цены",
            preturi: "Цены",
            oferte: "Акции",
            noutati: "Новости",
            contacte: "Контакты",
            // Services submenu
            fata: "Уход за кожей лица",
            dermapen: "Процедуры Dermapen",
            corp: "Уход за кожей тела",
            // Hero section translations
            "hero-subtitle": "Индивидуальный уход, внимание к каждой детали",
            "hero-title": "Ваша красота в надежных<br>и заботливых руках!",
            "hero-description": "Профессиональные косметологические услуги<br>в уютном и расслабляющем пространстве в Кишиневе",
            "cta-button": "Записаться сейчас",
            // Services section
            "services-title": "Услуги нашего центра",
            "services-subtitle": "Ваша красота достойна особой заботы — жду вас с открытым сердцем.",
            "service-face-title": "Уход за кожей лица",
            "service-face-description": "Персонализированные процедуры по уходу за лицом, профессиональная чистка и специализированные процедуры для всех типов кожи.",
            "service-dermapen-title": "Процедуры Dermapen",
            "service-dermapen-description": "Передовая технология для регенерации кожи, уменьшения шрамов и улучшения текстуры кожи.",
            "service-body-title": "Уход за кожей тела",
            "service-body-description": "Комплексные процедуры для тела, направленные на тонизацию, увлажнение и улучшение общего состояния кожи.",
            "service-button": "Подробнее"
        }
    };

    // Function to update content based on selected language
    function updateContent(lang) {
        console.log('Updating content to language:', lang);
        
        // Update menu items
        const menuItems = document.querySelectorAll('.nav-links a');
        menuItems.forEach(item => {
            const key = item.getAttribute('href')?.replace('#', '');
            if (translations[lang][key]) {
                if (item.querySelector('.fas.fa-chevron-down')) {
                    item.innerHTML = translations[lang][key] + ' <i class="fas fa-chevron-down"></i>';
                } else {
                    item.textContent = translations[lang][key];
                }
            }
        });

        // Update hero section
        const heroSubtitle = document.querySelector('.hero-subtitle');
        const heroTitle = document.querySelector('.hero-title');
        const heroDescription = document.querySelector('.hero-description');
        const ctaButton = document.querySelector('.cta-button');

        if (heroSubtitle) heroSubtitle.textContent = translations[lang]['hero-subtitle'];
        if (heroTitle) heroTitle.innerHTML = translations[lang]['hero-title'];
        if (heroDescription) heroDescription.innerHTML = translations[lang]['hero-description'];
        if (ctaButton) ctaButton.textContent = translations[lang]['cta-button'];

        // Update services section
        const servicesTitle = document.querySelector('.services-title');
        const servicesSubtitle = document.querySelector('.services-subtitle');
        const servicesMessage = document.querySelector('.services-message');
        const serviceCards = document.querySelectorAll('.service-card');

        if (servicesTitle) servicesTitle.textContent = translations[lang]['services-title'];
        if (servicesSubtitle) servicesSubtitle.textContent = translations[lang]['services-subtitle'];
        if (servicesMessage) servicesMessage.textContent = translations[lang]['services-message'];

        serviceCards.forEach((card, index) => {
            const title = card.querySelector('.service-title');
            const description = card.querySelector('.service-description');
            const button = card.querySelector('.service-button');

            if (index === 0) {
                if (title) title.textContent = translations[lang]['service-face-title'];
                if (description) description.textContent = translations[lang]['service-face-description'];
            } else if (index === 1) {
                if (title) title.textContent = translations[lang]['service-dermapen-title'];
                if (description) description.textContent = translations[lang]['service-dermapen-description'];
            } else if (index === 2) {
                if (title) title.textContent = translations[lang]['service-body-title'];
                if (description) description.textContent = translations[lang]['service-body-description'];
            }

            if (button) button.textContent = translations[lang]['service-button'];
        });
        
        console.log('Content update complete for language:', lang);
    }

    // Set initial language from localStorage or default to Romanian
    const savedLang = localStorage.getItem('selectedLanguage') || 'ro';
    console.log('Initial language from localStorage:', savedLang);
    
    // Apply the saved language immediately
    document.body.setAttribute('data-lang', savedLang);

    const languageLinks = document.querySelectorAll('.language-selector .dropdown a, .language-selector > a');
    const body = document.body;
    const heroSection = document.querySelector('.hero');
    const languageSelector = document.querySelector('.language-selector > a');
    
    // Set initial language from saved preference
    languageSelector.textContent = savedLang.toUpperCase();
    languageSelector.setAttribute('data-lang', savedLang);
    languageSelector.innerHTML = savedLang.toUpperCase() + ' <i class="fas fa-chevron-down"></i>';
    
    // Update dropdown content for initial state
    const dropdown = languageSelector.nextElementSibling;
    const dropdownLink = dropdown.querySelector('a');
    const otherLang = savedLang === 'ro' ? 'ru' : 'ro';
    dropdownLink.textContent = otherLang.toUpperCase();
    dropdownLink.setAttribute('data-lang', otherLang);

    // Update content for initial language
    updateContent(savedLang);

    // Add scroll event listener for hero shadow effect
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 50) {
            heroSection.classList.add('scrolled');
        } else {
            heroSection.classList.remove('scrolled');
        }
    });

    // --- MENIU MOBIL ȘI DROPDOWN UNIFICAT ---
    // Selectori meniuri
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const dropdowns = document.querySelectorAll('.has-dropdown');

    // Ascunde toate dropdown-urile pe mobil la încărcare
    function hideAllDropdowns() {
        if (window.innerWidth <= 768) {
            dropdowns.forEach(dropdown => {
                const dropdownMenu = dropdown.querySelector('.dropdown');
                if (dropdownMenu) dropdownMenu.style.display = 'none';
                dropdown.classList.remove('active');
            });
        } else {
            dropdowns.forEach(dropdown => {
                const dropdownMenu = dropdown.querySelector('.dropdown');
                if (dropdownMenu) dropdownMenu.style.display = '';
                dropdown.classList.remove('active');
            });
        }
    }
    hideAllDropdowns();

    // Toggle meniul mobil
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
            hideAllDropdowns(); // Ascunde dropdown-urile când deschizi/închizi meniul
        });
    }

    // Dropdown click pe mobil
    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('a');
        const dropdownMenu = dropdown.querySelector('.dropdown');
        if (link && dropdownMenu) {
            link.addEventListener('click', function(e) {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    e.stopPropagation();
                    // Închide toate celelalte dropdown-uri
                    dropdowns.forEach(otherDropdown => {
                        if (otherDropdown !== dropdown) {
                            const otherMenu = otherDropdown.querySelector('.dropdown');
                            if (otherMenu) otherMenu.style.display = 'none';
                            otherDropdown.classList.remove('active');
                        }
                    });
                    // Toggle dropdown-ul curent
                    if (dropdownMenu.style.display === 'block') {
                        dropdownMenu.style.display = 'none';
                        dropdown.classList.remove('active');
                    } else {
                        dropdownMenu.style.display = 'block';
                        dropdown.classList.add('active');
                    }
                    // Nu face scroll sau focus automat!
                }
            });
        }
    });

    // Închide meniul mobil și dropdown-urile când dai click în afara meniului
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.nav') && navLinks.classList.contains('active')) {
            if (mobileMenuBtn) mobileMenuBtn.classList.remove('active');
            navLinks.classList.remove('active');
            hideAllDropdowns();
        }
    });

    // Închide meniul mobil când dai click pe un link (fără dropdown)
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function(e) {
            // Dacă nu e părinte de dropdown
            if (!this.closest('.has-dropdown') || window.innerWidth > 768) {
                if (mobileMenuBtn) mobileMenuBtn.classList.remove('active');
                navLinks.classList.remove('active');
                hideAllDropdowns();
            }
        });
    });

    // Resetare la resize
    window.addEventListener('resize', function() {
        hideAllDropdowns();
        if (window.innerWidth > 768) {
            if (mobileMenuBtn) mobileMenuBtn.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });

    // Language switcher
    languageLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const lang = this.getAttribute('data-lang');
            const currentLang = languageSelector.getAttribute('data-lang');
            
            console.log('Language clicked:', lang);
            console.log('Current language:', currentLang);
            
            // Do nothing if clicking the same language
            if (lang === currentLang) {
                console.log('Same language, doing nothing');
                return;
            }
            
            // Save selected language
            localStorage.setItem('selectedLanguage', lang);
            console.log('Saved language to localStorage:', lang);
            
            // Update the main language button
            languageSelector.textContent = lang.toUpperCase();
            languageSelector.setAttribute('data-lang', lang);
            languageSelector.innerHTML = lang.toUpperCase() + ' <i class="fas fa-chevron-down"></i>';
            
            // Update dropdown content
            const dropdown = languageSelector.nextElementSibling;
            const dropdownLink = dropdown.querySelector('a');
            dropdownLink.textContent = currentLang.toUpperCase();
            dropdownLink.setAttribute('data-lang', currentLang);
            
            // Update body language
            body.setAttribute('data-lang', lang);
            
            // Update all text content based on selected language
            updateContent(lang);
            
            // Close the dropdown on mobile
            if (window.innerWidth <= 768) {
                this.closest('.has-dropdown').classList.remove('active');
            }
        });
    });

    // Modal functionality
    function openModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'flex';
            modal.style.opacity = '0';
            setTimeout(() => {
                modal.style.opacity = '1';
            }, 10);
        }
    }

    function closeModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.opacity = '0';
            setTimeout(() => {
                modal.style.display = 'none';
            }, 300);
        }
    }

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('modal')) {
            const modalId = event.target.id;
            closeModal(modalId);
        }
    });

    // Close modal when pressing Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            const openModals = document.querySelectorAll('.modal[style*="display: flex"]');
            openModals.forEach(modal => {
                closeModal(modal.id);
            });
        }
    });
}); 