// Optimized translation system with lazy loading
class TranslationManager {
    constructor() {
        this.currentLang = localStorage.getItem("selectedLanguage") || "ro";
        this.translations = {
            ro: {},
            ru: {}
        };
        this.loadedPages = new Set();
        this.initializeCore();
    }

    // Core translations that are always loaded
    initializeCore() {
        this.translations.ro = {
            despre: "Despre noi",
            simptome: "Simptome", 
            servicii: "Servicii",
            preturi: "Prețuri",
            contacte: "Contacte",
            "hero-subtitle": "Îngrijire personalizată, atenție la fiecare detaliu",
            "hero-title": "Frumusețea ta, în mâini sigure<br>și dedicate!",
            "hero-description": "Servicii cosmetologice profesionale oferite cu grijă<br>într-un spațiu intim și relaxant din Chișinău",
            "cta-button": "Programează-te acum",
            "services-title": "Serviciile centrului nostru",
            "services-subtitle": "Frumusețea ta merită toată grija — te aștept cu sufletul deschis.",
            "service-face-title": "Cosmetologie estetică",
            "service-face-description": "Tratamente profesionale pentru îngrijirea și îmbunătățirea aspectului pielii, adaptate nevoilor individuale.",
            "service-peeling-title": "Peelinguri chimice",
            "service-peeling-description": "Proceduri specializate pentru exfoliere și reînnoirea pielii, cu rezultate vizibile imediate.",
            "service-premium-title": "Tratamente faciale premium",
            "service-premium-description": "Proceduri de lux cu produse de înaltă calitate pentru un efect maxim și durabil.",
            "service-dermapen-title": "Mezoterapie fracționară (Dermapen)",
            "service-dermapen-description": "Tehnologie avansată pentru regenerarea profundă a pielii și stimularea producției de colagen.",
            "service-body-title": "Remodelare corporală",
            "service-body-description": "Tratamente specializate pentru conturarea și tonifierea corpului, cu rezultate vizibile.",
            "service-massage-title": "Masaj",
            "service-massage-description": "Tehnici de masaj pentru relaxare, detensionare și îmbunătățirea circulației, adaptate nevoilor tale.",
            "service-button": "Detalii",
            "preparate": "Preparate",
            "rezultate": "Rezultate", 
            "despre-companie": "Despre companie"
        };

        this.translations.ru = {
            despre: "О нас",
            simptome: "Симптомы",
            servicii: "Услуги",
            preturi: "Цены",
            contacte: "Контакты",
            "hero-subtitle": "Индивидуальный уход, внимание к каждой детали",
            "hero-title": "Ваша красота в надежных<br>и заботливых руках!",
            "hero-description": "Профессиональные косметологические услуги<br>в уютном и расслабляющем пространстве в Кишиневе",
            "cta-button": "Записаться сейчас",
            "services-title": "Услуги нашего центра",
            "services-subtitle": "Ваша красота достойна особой заботы — жду вас с открытым сердцем.",
            "service-face-title": "Эстетическая косметология",
            "service-face-description": "Профессиональные процедуры по уходу и улучшению внешнего вида кожи, адаптированные к индивидуальным потребностям.",
            "service-peeling-title": "Химические пилинги",
            "service-peeling-description": "Специализированные процедуры для отшелушивания и обновления кожи с видимыми результатами.",
            "service-premium-title": "Премиум процедуры для лица",
            "service-premium-description": "Процедуры премиум-класса с высококачественными продуктами для максимального и длительного эффекта.",
            "service-dermapen-title": "Фракционная мезотерапия (Дермапен)",
            "service-dermapen-description": "Передовые технологии для глубокой регенерации кожи и стимуляции выработки коллагена.",
            "service-body-title": "Коррекция фигуры",
            "service-body-description": "Специализированные процедуры для контурирования и тонизирования тела с видимыми результатами.",
            "service-massage-title": "Массаж",
            "service-massage-description": "Техники массажа для расслабления, снятия напряжения и улучшения кровообращения, адаптированные к вашим потребностям.",
            "service-button": "Подробнее",
            "preparate": "Препараты",
            "rezultate": "Результаты",
            "despre-companie": "О компании"
        };
    }

    // Lazy load page-specific translations
    async loadPageTranslations(page) {
        if (this.loadedPages.has(page)) return;
        
        const pageTranslations = {
            acnee: {
                ro: {
                    "page-title": "Acnee / Coșuri - Dimitrova.Clinic",
                    "hero-title": "Acnee / Coșuri",
                    "hero-description": "Tratamente specializate pentru combaterea acneei și prevenirea apariției coșurilor."
                },
                ru: {
                    "page-title": "Акне / Прыщи - Dimitrova.Clinic", 
                    "hero-title": "Акне / Прыщи",
                    "hero-description": "Специализированные процедуры для борьбы с акне и предотвращения появления прыщей."
                }
            }
        };

        if (pageTranslations[page]) {
            Object.assign(this.translations.ro, pageTranslations[page].ro);
            Object.assign(this.translations.ru, pageTranslations[page].ru);
            this.loadedPages.add(page);
        }
    }

    // Get translation with fallback
    get(key, lang = this.currentLang) {
        return this.translations[lang]?.[key] || this.translations.ro[key] || key;
    }

    // Update content efficiently
    updateContent(lang) {
        this.currentLang = lang;
        document.body.setAttribute("data-lang", lang);

        // Update navigation
        this.updateNavigation(lang);
        
        // Update hero section
        this.updateHeroSection(lang);
        
        // Update services section
        this.updateServicesSection(lang);
        
        // Update language selector
        this.updateLanguageSelector(lang);
        
        // Emit event for page-specific updates
        window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
    }

    updateNavigation(lang) {
        const menuItems = document.querySelectorAll(".nav-links a");
        menuItems.forEach(item => {
            const href = item.getAttribute("href");
            if (href) {
                let key = href.replace("#", "").replace(".html", "");
                if (href === "#despre") key = "despre";
                else if (href === "#simptome") key = "simptome";
                else if (href === "#servicii") key = "servicii";
                else if (href === "prices.html") key = "preturi";
                else if (href === "contacte.html") key = "contacte";
                else if (href === "preparate.html") key = "preparate";
                else if (href === "gallery.html") key = "rezultate";
                else if (href === "despre_companie.html") key = "despre-companie";
                
                const translation = this.get(key, lang);
                if (translation !== key) {
                    if (item.querySelector(".fas.fa-chevron-down")) {
                        item.innerHTML = translation + ' <i class="fas fa-chevron-down"></i>';
                    } else {
                        item.textContent = translation;
                    }
                }
            }
        });
    }

    updateHeroSection(lang) {
        const heroSubtitle = document.querySelector(".hero-subtitle");
        const heroTitle = document.querySelector(".hero-title");
        const heroDescription = document.querySelector(".hero-description");
        const ctaButtons = document.querySelectorAll(".cta-button");

        if (heroSubtitle) heroSubtitle.textContent = this.get("hero-subtitle", lang);
        if (heroTitle) heroTitle.innerHTML = this.get("hero-title", lang);
        if (heroDescription) heroDescription.innerHTML = this.get("hero-description", lang);
        ctaButtons.forEach(button => {
            if (button) button.textContent = this.get("cta-button", lang);
        });
    }

    updateServicesSection(lang) {
        const servicesTitle = document.querySelector(".services-title");
        const servicesSubtitle = document.querySelector(".services-subtitle");

        if (servicesTitle) servicesTitle.textContent = this.get("services-title", lang);
        if (servicesSubtitle) servicesSubtitle.textContent = this.get("services-subtitle", lang);

        // Update service cards
        const serviceCards = document.querySelectorAll(".service-card");
        const serviceKeys = [
            "service-face", "service-peeling", "service-premium", 
            "service-dermapen", "service-body", "service-massage"
        ];

        serviceCards.forEach((card, index) => {
            const title = card.querySelector(".service-title");
            const description = card.querySelector(".service-description");
            const button = card.querySelector(".details-button");

            if (serviceKeys[index]) {
                const titleKey = serviceKeys[index] + "-title";
                const descKey = serviceKeys[index] + "-description";
                
                if (title) title.textContent = this.get(titleKey, lang);
                if (description) description.textContent = this.get(descKey, lang);
            }

            if (button) button.textContent = this.get("service-button", lang);
        });
    }

    updateLanguageSelector(lang) {
        const languageSelector = document.querySelector(".language-selector > a");
        
        if (languageSelector) {
            languageSelector.textContent = lang.toUpperCase();
            languageSelector.setAttribute("data-lang", lang);
            languageSelector.innerHTML = lang.toUpperCase() + ' <i class="fas fa-chevron-down"></i>';

            const dropdown = languageSelector.nextElementSibling;
            if (dropdown) {
                const dropdownLink = dropdown.querySelector("a");
                if (dropdownLink) {
                    const otherLang = lang === "ro" ? "ru" : "ro";
                    dropdownLink.textContent = otherLang.toUpperCase();
                    dropdownLink.setAttribute("data-lang", otherLang);
                }
            }
        }
    }

    // Initialize language system
    init() {
        document.body.setAttribute("data-lang", this.currentLang);
        this.updateContent(this.currentLang);
        this.setupEventListeners();
    }

    setupEventListeners() {
        const languageLinks = document.querySelectorAll(".language-selector .dropdown a, .language-selector > a");
        
        languageLinks.forEach(link => {
            link.addEventListener("click", (e) => {
                e.preventDefault();
                const lang = link.getAttribute("data-lang");
                const currentLang = this.currentLang;

                if (lang === currentLang) return;

                localStorage.setItem("selectedLanguage", lang);
                this.updateContent(lang);

                if (window.innerWidth <= 768) {
                    link.closest(".has-dropdown")?.classList.remove("active");
                }
            });
        });
    }
}

// Initialize translation manager
const translationManager = new TranslationManager();