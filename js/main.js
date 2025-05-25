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
            fata: "Cosmetologie estetică",
            dermapen: "Peelinguri chimice",
            corp: "Tratamente faciale premium",
            // Hero section translations
            "hero-subtitle": "Îngrijire personalizată, atenție la fiecare detaliu",
            "hero-title": "Frumusețea ta, în mâini sigure<br>și dedicate!",
            "hero-description": "Servicii cosmetologice profesionale oferite cu grijă<br>într-un spațiu intim și relaxant din Chișinău",
            "cta-button": "Programează-te acum",
            // Services section
            "services-title": "Serviciile centrului nostru",
            "services-subtitle": "Frumusețea ta merită toată grija — te aștept cu sufletul deschis.",
            "service-face-title": "Cosmetologie estetică",
            "service-face-description": "Tratamente profesionale pentru îngrijirea și îmbunătățirea aspectului pielii, adaptate nevoilor individuale.",
            "service-dermapen-title": "Peelinguri chimice",
            "service-dermapen-description": "Proceduri specializate pentru exfoliere și reînnoirea pielii, cu rezultate vizibile imediate.",
            "service-body-title": "Tratamente faciale premium",
            "service-body-description": "Proceduri de lux cu produse de înaltă calitate pentru un efect maxim și durabil.",
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
            hideAllDropdowns();
        });
    }

    // Dropdown click pe mobil
    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('a');
        if (link) {
            link.addEventListener('click', function(e) {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    // Închide toate celelalte dropdown-uri
                    dropdowns.forEach(otherDropdown => {
                        if (otherDropdown !== dropdown) {
                            otherDropdown.classList.remove('active');
                        }
                    });
                    
                    // Toggle dropdown-ul curent
                    dropdown.classList.toggle('active');
                }
            });
        }
    });

    // Închide meniul când se face click în afara lui
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            if (!navLinks.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                navLinks.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
                hideAllDropdowns();
            }
        }
    });

    // Închide meniul când se redimensionează fereastra
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navLinks.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
            hideAllDropdowns();
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

    // Funcție pentru a verifica dacă un element este în viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
            rect.bottom >= 0
        );
    }

    // Funcție pentru a activa animațiile
    function activateAnimations() {
        const sections = document.querySelectorAll('.services-section, .about-section, .monthly-offer, .packages-section');
        const cards = document.querySelectorAll('.service-card, .package-card, .treatment-card');
        const headers = document.querySelectorAll('.section-header');

        sections.forEach(section => {
            if (isInViewport(section)) {
                section.classList.add('visible');
            } else {
                section.classList.remove('visible');
            }
        });

        cards.forEach(card => {
            if (isInViewport(card)) {
                card.classList.add('visible');
            } else {
                card.classList.remove('visible');
            }
        });

        headers.forEach(header => {
            if (isInViewport(header)) {
                header.classList.add('visible');
            } else {
                header.classList.remove('visible');
            }
        });
    }

    // Adăugăm event listener pentru scroll cu throttling
    let isScrolling;
    window.addEventListener('scroll', function() {
        window.clearTimeout(isScrolling);
        isScrolling = setTimeout(function() {
            activateAnimations();
        }, 20);
    });

    // Activăm animațiile la încărcarea paginii
    activateAnimations();
}); 