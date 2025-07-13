document.addEventListener("DOMContentLoaded", () => {
    // Translations object
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
            fata: "Cosmetologie estetică",
            dermapen: "Peelinguri chimice",
            corp: "Tratamente faciale premium",
            "hero-subtitle": "Îngrijire personalizată, atenție la fiecare detaliu",
            "hero-title": "Frumusețea ta, în mâini sigure<br>și dedicate!",
            "hero-description":
                "Servicii cosmetologice profesionale oferite cu grijă<br>într-un spațiu intim și relaxant din Chișinău",
            "cta-button": "Programează-te acum",
            "services-title": "Serviciile centrului nostru",
            "services-subtitle": "Frumusețea ta merită toată grija — te aștept cu sufletul deschis.",
            "service-face-title": "Cosmetologie estetică",
            "service-face-description":
                "Tratamente profesionale pentru îngrijirea și îmbunătățirea aspectului pielii, adaptate nevoilor individuale.",
            "service-dermapen-title": "Peelinguri chimice",
            "service-dermapen-description":
                "Proceduri specializate pentru exfoliere și reînnoirea pielii, cu rezultate vizibile imediate.",
            "service-body-title": "Tratamente faciale premium",
            "service-body-description": "Proceduri de lux cu produse de înaltă calitate pentru un efect maxim și durabil.",
            "service-button": "Detalii",
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
            fata: "Уход за кожей лица",
            dermapen: "Процедуры Dermapen",
            corp: "Уход за кожей тела",
            "hero-subtitle": "Индивидуальный уход, внимание к каждой детали",
            "hero-title": "Ваша красота в надежных<br>и заботливых руках!",
            "hero-description":
                "Профессиональные косметологические услуги<br>в уютном и расслабляющем пространстве в Кишиневе",
            "cta-button": "Записаться сейчас",
            "services-title": "Услуги нашего центра",
            "services-subtitle": "Ваша красота достойна особой заботы — жду вас с открытым сердцем.",
            "service-face-title": "Уход за кожей лица",
            "service-face-description":
                "Персонализированные процедуры по уходу за лицом, профессиональная чистка и специализированные процедуры для всех типов кожи.",
            "service-dermapen-title": "Процедуры Dermapen",
            "service-dermapen-description":
                "Передовая технология для регенерации кожи, уменьшения шрамов и улучшения текстуры кожи.",
            "service-body-title": "Уход за кожей тела",
            "service-body-description":
                "Комплексные процедуры для тела, направленные на тонизацию, увлажнение и улучшение общего состояния кожи.",
            "service-button": "Подробнее",
        },
    };

    // Function to update content based on selected language
    function updateContent(lang) {
        console.log("Updating content to language:", lang);

        const menuItems = document.querySelectorAll(".nav-links a");
        menuItems.forEach((item) => {
            const key = item.getAttribute("href")?.replace("#", "");
            if (translations[lang][key]) {
                if (item.querySelector(".fas.fa-chevron-down")) {
                    item.innerHTML = translations[lang][key] + ' <i class="fas fa-chevron-down"></i>';
                } else {
                    item.textContent = translations[lang][key];
                }
            }
        });

        const heroSubtitle = document.querySelector(".hero-subtitle");
        const heroTitle = document.querySelector(".hero-title");
        const heroDescription = document.querySelector(".hero-description");
        const ctaButton = document.querySelector(".cta-button");

        if (heroSubtitle) heroSubtitle.textContent = translations[lang]["hero-subtitle"];
        if (heroTitle) heroTitle.innerHTML = translations[lang]["hero-title"];
        if (heroDescription) heroDescription.innerHTML = translations[lang]["hero-description"];
        if (ctaButton) ctaButton.textContent = translations[lang]["cta-button"];

        const servicesTitle = document.querySelector(".services-title");
        const servicesSubtitle = document.querySelector(".services-subtitle");
        const servicesMessage = document.querySelector(".services-message");
        const serviceCards = document.querySelectorAll(".service-card");

        if (servicesTitle) servicesTitle.textContent = translations[lang]["services-title"];
        if (servicesSubtitle) servicesSubtitle.textContent = translations[lang]["services-subtitle"];
        if (servicesMessage) servicesMessage.textContent = translations[lang]["services-message"];

        serviceCards.forEach((card, index) => {
            const title = card.querySelector(".service-title");
            const description = card.querySelector(".service-description");
            const button = card.querySelector(".service-button");

            if (index === 0) {
                if (title) title.textContent = translations[lang]["service-face-title"];
                if (description) description.textContent = translations[lang]["service-face-description"];
            } else if (index === 1) {
                if (title) title.textContent = translations[lang]["service-dermapen-title"];
                if (description) description.textContent = translations[lang]["service-dermapen-description"];
            } else if (index === 2) {
                if (title) title.textContent = translations[lang]["service-body-title"];
                if (description) description.textContent = translations[lang]["service-body-description"];
            }

            if (button) button.textContent = translations[lang]["service-button"];
        });

        console.log("Content update complete for language:", lang);
    }

    // Set initial language from localStorage or default to Romanian
    const savedLang = localStorage.getItem("selectedLanguage") || "ro";
    console.log("Initial language from localStorage:", savedLang);

    document.body.setAttribute("data-lang", savedLang);

    const languageLinks = document.querySelectorAll(".language-selector .dropdown a, .language-selector > a");
    const body = document.body;
    const heroSection = document.querySelector(".hero");
    const languageSelector = document.querySelector(".language-selector > a");

    if (languageSelector) {
        languageSelector.textContent = savedLang.toUpperCase();
        languageSelector.setAttribute("data-lang", savedLang);
        languageSelector.innerHTML = savedLang.toUpperCase() + ' <i class="fas fa-chevron-down"></i>';

        const dropdown = languageSelector.nextElementSibling;
        if (dropdown) {
            const dropdownLink = dropdown.querySelector("a");
            if (dropdownLink) {
                const otherLang = savedLang === "ro" ? "ru" : "ro";
                dropdownLink.textContent = otherLang.toUpperCase();
                dropdownLink.setAttribute("data-lang", otherLang);
            }
        }
    }

    updateContent(savedLang);

    // Add scroll event listener for hero shadow effect
    if (heroSection) {
        window.addEventListener("scroll", () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 50) {
                heroSection.classList.add("scrolled");
            } else {
                heroSection.classList.remove("scrolled");
            }
        });
    }

    // --- MENIU MOBIL: dropdown-uri responsive ---
    const nav = document.querySelector(".nav");
    const navLinks = document.querySelector(".nav-links");
    const mobileBtn = document.querySelector(".mobile-menu-btn");
    const dropdowns = document.querySelectorAll(".nav-links .has-dropdown > a");

    // Toggle meniu principal
    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();

            navLinks.classList.toggle("active");
            mobileBtn.classList.toggle("active");
            document.body.classList.toggle("menu-open", navLinks.classList.contains("active"));

            // Închide toate dropdown-urile când se deschide/închide meniul principal
            document.querySelectorAll(".dropdown.open").forEach((dropdown) => {
                dropdown.classList.remove("open");
            });
            document.querySelectorAll(".has-dropdown.active").forEach((item) => {
                item.classList.remove("active");
            });

            // Închide meniul simptome dacă e deschis
            const symptomsDropdown = document.getElementById("symptomsDropdown");
            if (symptomsDropdown) {
                symptomsDropdown.classList.remove("active");
            }
        });
    }

    // Închide meniul la click pe link simplu (fără dropdown)
    if (navLinks) {
        navLinks.querySelectorAll("a:not(.has-dropdown > a):not(#symptomsTab)").forEach((link) => {
            link.addEventListener("click", () => {
                if (window.innerWidth <= 992) {
                    navLinks.classList.remove("active");
                    mobileBtn.classList.remove("active");
                    document.body.classList.remove("menu-open");
                }
            });
        });
    }

    // Toggle dropdown la click pe mobil/tabletă (pentru toate dropdown-urile normale)
    dropdowns.forEach((drop) => {
        drop.addEventListener("click", function (e) {
            if (window.innerWidth > 992) return; // Doar pe mobil/tabletă

            e.preventDefault();
            e.stopPropagation();

            const parentLi = this.parentElement;
            const submenu = parentLi.querySelector(".dropdown");

            // Închide alte dropdownuri la același nivel
            parentLi.parentElement.querySelectorAll(".has-dropdown").forEach((item) => {
                if (item !== parentLi) {
                    item.classList.remove("active");
                    const otherSubmenu = item.querySelector(".dropdown");
                    if (otherSubmenu) otherSubmenu.classList.remove("open");
                }
            });

            // Toggle dropdown curent
            parentLi.classList.toggle("active");
            if (submenu) {
                submenu.classList.toggle("open");
            }
        });
    });

    // Pentru sub-submeniuri (nivel 2)
    if (navLinks) {
        navLinks.querySelectorAll(".has-dropdown .has-dropdown > a").forEach((drop) => {
            drop.addEventListener("click", function (e) {
                if (window.innerWidth > 992) return;
                e.preventDefault();
                e.stopPropagation();

                const parentLi = this.parentElement;
                const submenu = parentLi.querySelector(".dropdown");

                // Închide alte sub-submeniuri la același nivel
                parentLi.parentElement.querySelectorAll(".has-dropdown").forEach((item) => {
                    if (item !== parentLi) {
                        item.classList.remove("active");
                        const otherSubmenu = item.querySelector(".dropdown");
                        if (otherSubmenu) otherSubmenu.classList.remove("open");
                    }
                });

                // Toggle dropdown curent (nivel 2)
                parentLi.classList.toggle("active");
                if (submenu) {
                    submenu.classList.toggle("open");
                }
            });
        });
    }

    // Scroll doar în meniu când e deschis pe mobil
    if (navLinks) {
        navLinks.addEventListener(
            "touchmove",
            (e) => {
                if (window.innerWidth <= 992 && navLinks.classList.contains("active")) {
                    e.stopPropagation();
                }
            },
            { passive: false },
        );
    }

    // Închide meniul la resize dacă treci pe desktop
    window.addEventListener("resize", () => {
        if (window.innerWidth > 992) {
            if (navLinks) navLinks.classList.remove("active");
            if (mobileBtn) mobileBtn.classList.remove("active");
            document.body.classList.remove("menu-open");
            document.querySelectorAll(".dropdown.open").forEach((opened) => opened.classList.remove("open"));
            document.querySelectorAll(".has-dropdown.active").forEach((item) => item.classList.remove("active"));

            // Închide și meniul simptome
            const symptomsDropdown = document.getElementById("symptomsDropdown");
            if (symptomsDropdown) {
                symptomsDropdown.classList.remove("active");
            }
        }
    });

    // Language switcher
    languageLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const lang = this.getAttribute("data-lang");
            const currentLang = languageSelector ? languageSelector.getAttribute("data-lang") : "ro";

            console.log("Language clicked:", lang);
            console.log("Current language:", currentLang);

            if (lang === currentLang) {
                console.log("Same language, doing nothing");
                return;
            }

            localStorage.setItem("selectedLanguage", lang);
            console.log("Saved language to localStorage:", lang);

            if (languageSelector) {
                languageSelector.textContent = lang.toUpperCase();
                languageSelector.setAttribute("data-lang", lang);
                languageSelector.innerHTML = lang.toUpperCase() + ' <i class="fas fa-chevron-down"></i>';

                const dropdown = languageSelector.nextElementSibling;
                if (dropdown) {
                    const dropdownLink = dropdown.querySelector("a");
                    if (dropdownLink) {
                        dropdownLink.textContent = currentLang.toUpperCase();
                        dropdownLink.setAttribute("data-lang", currentLang);
                    }
                }
            }

            body.setAttribute("data-lang", lang);
            updateContent(lang);

            if (window.innerWidth <= 768) {
                this.closest(".has-dropdown").classList.remove("active");
            }
        });
    });

    // Funcție pentru a verifica dacă un element este în viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 && rect.bottom >= 0;
    }

    // Funcție pentru a activa animațiile
    function activateAnimations() {
        const sections = document.querySelectorAll(".services-section, .about-section, .monthly-offer, .packages-section");
        const cards = document.querySelectorAll(".service-card, .package-card, .treatment-card");
        const headers = document.querySelectorAll(".section-header");

        sections.forEach((section) => {
            if (isInViewport(section)) {
                section.classList.add("visible");
            } else {
                section.classList.remove("visible");
            }
        });

        cards.forEach((card) => {
            if (isInViewport(card)) {
                card.classList.add("visible");
            } else {
                card.classList.remove("visible");
            }
        });

        headers.forEach((header) => {
            if (isInViewport(header)) {
                header.classList.add("visible");
            } else {
                header.classList.remove("visible");
            }
        });
    }
})
    // Adăugăm event listener pentru scroll cu throttling

