// Function to open modal
function openModal(modalId, triggerElement) {
  const modal = document.getElementById(modalId)
  if (!modal) return

  // Declare openTreatmentModal function or import it
  function openTreatmentModal(treatmentId, target) {
    console.log("Opening treatment modal for ID:", treatmentId, "in target:", target)
    // Implementation for opening treatment modal
  }

  if (modalId === "treatmentModal" && triggerElement) {
    const treatmentId = triggerElement.getAttribute("data-treatment")
    if (typeof openTreatmentModal === "function") {
      openTreatmentModal(treatmentId, "body")
    } else {
      console.error("openTreatmentModal function is not defined.")
    }
  }

  modal.style.display = "flex"
  modal.style.opacity = "0"
  setTimeout(() => {
    modal.style.opacity = "1"
  }, 10)
}

// Function to close modal
function closeModal(modalId) {
  const modal = document.getElementById(modalId)
  if (modal) {
    modal.style.opacity = "0"
    setTimeout(() => {
      modal.style.display = "none"
    }, 300)
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // Translations object
  const translations = {
    ro: {
      despre: "Despre noi",
      simptome: "Simptome",
      servicii: "Servicii",
      preturi: "Prețuri",
      contacte: "Contacte",
      "hero-subtitle": "Îngrijire personalizată, atenție la fiecare detaliu",
      "hero-title": "Frumusețea ta, în mâini sigure<br>și dedicate!",
      "hero-description":
        "Servicii cosmetologice profesionale oferite cu grijă<br>într-un spațiu intim și relaxant din Chișinău",
      "cta-button": "Programează-te acum",
      "offer-title": "Ofertă lunii",
      "offer-package-title": "Pachet Premium Facial",
      "offer-description": "Tratament facial complet + Peeling chimic + Mezoterapie",
      "offer-price": "Preț special: 1500 lei",
      "offer-original": "Preț normal: 2000 lei",
      "services-title": "Serviciile centrului nostru",
      "services-subtitle": "Frumusețea ta merită toată grija — te aștept cu sufletul deschis.",
      "service-face-title": "Cosmetologie estetică",
      "service-face-description":
        "Tratamente profesionale pentru îngrijirea și îmbunătățirea aspectului pielii, adaptate nevoilor individuale.",
      "service-peeling-title": "Peelinguri chimice",
      "service-peeling-description":
        "Proceduri specializate pentru exfoliere și reînnoirea pielii, cu rezultate vizibile imediate.",
      "service-premium-title": "Tratamente faciale premium",
      "service-premium-description": "Proceduri de lux cu produse de înaltă calitate pentru un efect maxim și durabil.",
      "service-dermapen-title": "Mezoterapie fracționară (Dermapen)",
      "service-dermapen-description": "Tehnologie avansată pentru regenerarea profundă a pielii și stimularea producției de colagen.",
      "service-body-title": "Remodelare corporală",
      "service-body-description": "Tratamente specializate pentru conturarea și tonifierea corpului, cu rezultate vizibile.",
      "service-massage-title": "Masaj",
      "service-massage-description": "Tehnici de masaj pentru relaxare, detensionare și îmbunătățirea circulației, adaptate nevoilor tale.",
      "service-button": "Detalii",
      "symptoms-face": "Față",
      "symptoms-lips": "Buze",
      "symptoms-body": "Corp",
      "symptoms-scalp": "Scalp",
      "footer-about": "Despre noi",
      "footer-gallery": "Galerie",
      "footer-services": "Serviciile centrului nostru",
      "footer-follow": "Urmăriți-ne...",
      "footer-write": "Scrieti în direct...",
      "footer-rights": "Toate drepturile rezervate.",
      // Submeniuri "Despre noi"
      "preparate": "Preparate",
      "rezultate": "Rezultate",
      "despre-companie": "Despre companie",
      // Simptome - Față
      "acnee": "Acnee / Coșuri",
      "post-acnee": "Post-acnee / Cicatrici",
      "pori-dilatati": "Pori dilatați",
      "ten-gras": "Ten gras / Seboree",
      "deshidratare": "Deshidratare și descuamare",
      "ten-tern": "Ten tern / lipsit de strălucire",
      "pigmentare": "Pigmentare / pete pigmentare",
      "cuperoza": "Cuperoză / rețea vasculară vizibilă",
      "riduri": "Riduri",
      "pierdere-tonusului": "Pierderea fermității și a tonusului",
      "riduri-cercuri-sub-ochi": "Riduri / Cercuri întunecate sub ochi",
      "barbie-dubla": "Bărbie dublă",
      "relaxare-oval": "Relaxarea ovalului facial / ptoză",
      // Simptome - Buze
      "deshidratare-buze": "Deshidratarea buzelor",
      "riduri-buze": "Riduri fine în jurul buzelor",
      "volum-buze": "Volum insuficient",
      // Simptome - Corp
      "vergeturi": "Vergeturi (striae)",
      "celulita": "Celulită / Depozite locale de grăsime",
      "lasare-piele": "Lăsarea pielii după slăbire",
      // Simptome - Scalp
      "caderea-parului": "Căderea părului",
      // Servicii
      "facial-care": "Cosmetologie estetică",
      "body-care": "Peelinguri chimice",
      "premium-facial": "Tratamente faciale premium",
      "dermapen": "Mezoterapie fracționară (Dermapen)",
      "body-remodeling": "Remodelare corporală",
      "massage": "Masaj",
    },
    ru: {
      despre: "О нас",
      simptome: "Симптомы",
      servicii: "Услуги",
      preturi: "Цены",
      contacte: "Контакты",
      "hero-subtitle": "Индивидуальный уход, внимание к каждой детали",
      "hero-title": "Ваша красота в надежных<br>и заботливых руках!",
      "hero-description":
        "Профессиональные косметологические услуги<br>в уютном и расслабляющем пространстве в Кишиневе",
      "cta-button": "Записаться сейчас",
      "offer-title": "Предложение месяца",
      "offer-package-title": "Премиум пакет для лица",
      "offer-description": "Полный уход за лицом + Химический пилинг + Мезотерапия",
      "offer-price": "Специальная цена: 1500 лей",
      "offer-original": "Обычная цена: 2000 лей",
      "services-title": "Услуги нашего центра",
      "services-subtitle": "Ваша красота достойна особой заботы — жду вас с открытым сердцем.",
      "service-face-title": "Эстетическая косметология",
      "service-face-description":
        "Профессиональные процедуры по уходу и улучшению внешнего вида кожи, адаптированные к индивидуальным потребностям.",
      "service-peeling-title": "Химические пилинги",
      "service-peeling-description":
        "Специализированные процедуры для отшелушивания и обновления кожи с видимыми результатами.",
      "service-premium-title": "Премиум процедуры для лица",
      "service-premium-description": "Процедуры премиум-класса с высококачественными продуктами для максимального и длительного эффекта.",
      "service-dermapen-title": "Фракционная мезотерапия (Дермапен)",
      "service-dermapen-description": "Передовые технологии для глубокой регенерации кожи и стимуляции выработки коллагена.",
      "service-body-title": "Коррекция фигуры",
      "service-body-description": "Специализированные процедуры для контурирования и тонизирования тела с видимыми результатами.",
      "service-massage-title": "Массаж",
      "service-massage-description": "Техники массажа для расслабления, снятия напряжения и улучшения кровообращения, адаптированные к вашим потребностям.",
      "service-button": "Подробнее",
      "symptoms-face": "Лицо",
      "symptoms-lips": "Губы",
      "symptoms-body": "Тело",
      "symptoms-scalp": "Кожа головы",
      "footer-about": "О нас",
      "footer-gallery": "Галерея",
      "footer-services": "Услуги нашего центра",
      "footer-follow": "Следите за нами...",
      "footer-write": "Напишите в директ...",
      "footer-rights": "Все права защищены.",
      // Submeniuri "Despre noi"
      "preparate": "Препараты",
      "rezultate": "Результаты",
      "despre-companie": "О компании",
      // Simptome - Față
      "acnee": "Акне / Прыщи",
      "post-acnee": "Пост-акне / Шрамы",
      "pori-dilatati": "Расширенные поры",
      "ten-gras": "Жирная кожа / Себорея",
      "deshidratare": "Обезвоживание и шелушение",
      "ten-tern": "Тусклая кожа / отсутствие сияния",
      "pigmentare": "Пигментация / пигментные пятна",
      "cuperoza": "Купероз / видимая сосудистая сетка",
      "riduri": "Морщины",
      "pierdere-tonusului": "Потеря упругости и тонуса",
      "riduri-cercuri-sub-ochi": "Морщины / Темные круги под глазами",
      "barbie-dubla": "Двойной подбородок",
      "relaxare-oval": "Птоз / расслабление овала лица",
      // Simptome - Buze
      "deshidratare-buze": "Обезвоживание губ",
      "riduri-buze": "Мелкие морщины вокруг губ",
      "volum-buze": "Недостаточный объем",
      // Simptome - Corp
      "vergeturi": "Растяжки (стрии)",
      "celulita": "Целлюлит / Локальные жировые отложения",
      "lasare-piele": "Обвисание кожи после похудения",
      // Simptome - Scalp
      "caderea-parului": "Выпадение волос",
      // Servicii
      "facial-care": "Эстетическая косметология",
      "body-care": "Химические пилинги",
      "premium-facial": "Премиум процедуры для лица",
      "dermapen": "Фракционная мезотерапия (Дермапен)",
      "body-remodeling": "Коррекция фигуры",
      "massage": "Массаж",
    },
  }

  // Function to update content based on selected language
  function updateContent(lang) {
    console.log("Updating content to language:", lang)

    // Update navigation menu
    const menuItems = document.querySelectorAll(".nav-links a")
    menuItems.forEach((item) => {
      const href = item.getAttribute("href")
      if (href) {
        let key = href.replace("#", "")
        if (href === "#despre") key = "despre"
        else if (href === "#simptome") key = "simptome"
        else if (href === "#servicii") key = "servicii"
        else if (href === "prices.html") key = "preturi"
        else if (href === "contacte.html") key = "contacte"
        else if (href === "preparate.html") key = "preparate"
        else if (href === "gallery.html") key = "rezultate"
        else if (href === "despre_companie.html") key = "despre-companie"
        
        if (translations[lang][key]) {
          if (item.querySelector(".fas.fa-chevron-down")) {
            item.innerHTML = translations[lang][key] + ' <i class="fas fa-chevron-down"></i>'
          } else {
            item.textContent = translations[lang][key]
          }
        }
      }
    })

    // Update hero section
    const heroSubtitle = document.querySelector(".hero-subtitle")
    const heroTitle = document.querySelector(".hero-title")
    const heroDescription = document.querySelector(".hero-description")
    const ctaButtons = document.querySelectorAll(".cta-button")

    if (heroSubtitle) heroSubtitle.textContent = translations[lang]["hero-subtitle"]
    if (heroTitle) heroTitle.innerHTML = translations[lang]["hero-title"]
    if (heroDescription) heroDescription.innerHTML = translations[lang]["hero-description"]
    ctaButtons.forEach(button => {
      if (button) button.textContent = translations[lang]["cta-button"]
    })

    // Update offer section
    const offerTitle = document.querySelector(".offer-title")
    const offerPackageTitles = document.querySelectorAll(".offer-details h3")
    const offerDescriptions = document.querySelectorAll(".offer-description")
    const offerPrices = document.querySelectorAll(".offer-price")
    const offerOriginals = document.querySelectorAll(".offer-original")

    if (offerTitle) offerTitle.textContent = translations[lang]["offer-title"]
    offerPackageTitles.forEach(title => {
      if (title) title.textContent = translations[lang]["offer-package-title"]
    })
    offerDescriptions.forEach(desc => {
      if (desc) desc.textContent = translations[lang]["offer-description"]
    })
    offerPrices.forEach(price => {
      if (price) price.textContent = translations[lang]["offer-price"]
    })
    offerOriginals.forEach(original => {
      if (original) original.textContent = translations[lang]["offer-original"]
    })

    // Update services section
    const servicesTitle = document.querySelector(".services-title")
    const servicesSubtitle = document.querySelector(".services-subtitle")

    if (servicesTitle) servicesTitle.textContent = translations[lang]["services-title"]
    if (servicesSubtitle) servicesSubtitle.textContent = translations[lang]["services-subtitle"]

    // Update service cards
    const serviceCards = document.querySelectorAll(".service-card")
    serviceCards.forEach((card, index) => {
      const title = card.querySelector(".service-title")
      const description = card.querySelector(".service-description")
      const button = card.querySelector(".details-button")

      if (index === 0) {
        if (title) title.textContent = translations[lang]["service-face-title"]
        if (description) description.textContent = translations[lang]["service-face-description"]
      } else if (index === 1) {
        if (title) title.textContent = translations[lang]["service-peeling-title"]
        if (description) description.textContent = translations[lang]["service-peeling-description"]
      } else if (index === 2) {
        if (title) title.textContent = translations[lang]["service-premium-title"]
        if (description) description.textContent = translations[lang]["service-premium-description"]
      } else if (index === 3) {
        if (title) title.textContent = translations[lang]["service-dermapen-title"]
        if (description) description.textContent = translations[lang]["service-dermapen-description"]
      } else if (index === 4) {
        if (title) title.textContent = translations[lang]["service-body-title"]
        if (description) description.textContent = translations[lang]["service-body-description"]
      } else if (index === 5) {
        if (title) title.textContent = translations[lang]["service-massage-title"]
        if (description) description.textContent = translations[lang]["service-massage-description"]
      }

      if (button) button.textContent = translations[lang]["service-button"]
    })

    // Update symptoms dropdown
    const symptomsTitles = document.querySelectorAll(".symptoms-col-title")
    symptomsTitles.forEach((title, index) => {
      if (index === 0) title.textContent = translations[lang]["symptoms-face"]
      else if (index === 1) title.textContent = translations[lang]["symptoms-lips"]
      else if (index === 2) title.textContent = translations[lang]["symptoms-body"]
      else if (index === 3) title.textContent = translations[lang]["symptoms-scalp"]
    })

    // Update footer
    const footerAbout = document.querySelector('.footer-column:nth-child(2) h3')
    const footerAboutLinks = document.querySelectorAll('.footer-column:nth-child(2) a')
    const footerServices = document.querySelector('.footer-column:nth-child(3) h3')
    const footerServicesLinks = document.querySelectorAll('.footer-column:nth-child(3) a')
    const footerFollow = document.querySelector('.footer-column:nth-child(4) h3:first-of-type')
    const footerWrite = document.querySelector('.footer-column:nth-child(4) h3:last-of-type')
    const footerRights = document.querySelector('.footer-bottom p')

    if (footerAbout) footerAbout.textContent = "Dimitrova Clinic"
    if (footerAboutLinks[0]) footerAboutLinks[0].textContent = translations[lang]["footer-about"]
    if (footerAboutLinks[1]) footerAboutLinks[1].textContent = translations[lang]["footer-gallery"]
    if (footerServices) footerServices.textContent = translations[lang]["footer-services"]
    
    // Update footer services links
    footerServicesLinks.forEach((link, index) => {
      if (index === 0) link.textContent = translations[lang]["service-face-title"]
      else if (index === 1) link.textContent = translations[lang]["service-peeling-title"]
      else if (index === 2) link.textContent = translations[lang]["service-premium-title"]
      else if (index === 3) link.textContent = translations[lang]["service-dermapen-title"]
      else if (index === 4) link.textContent = translations[lang]["service-body-title"]
      else if (index === 5) link.textContent = translations[lang]["service-massage-title"]
    })
    
    if (footerFollow) footerFollow.textContent = translations[lang]["footer-follow"]
    if (footerWrite) footerWrite.textContent = translations[lang]["footer-write"]
    if (footerRights) {
      const currentYear = new Date().getFullYear()
      footerRights.innerHTML = `&copy; ${currentYear} Dimitrova.Clinic. ${translations[lang]["footer-rights"]}`
    }

    // Update simptome dropdown links
    const simptomeLinks = document.querySelectorAll('#symptomsDropdown a')
    simptomeLinks.forEach(link => {
      const href = link.getAttribute('href')
      if (href) {
        let key = ''
        if (href.includes('acnee')) key = 'acnee'
        else if (href.includes('post-acnee')) key = 'post-acnee'
        else if (href.includes('pori-dilatati')) key = 'pori-dilatati'
        else if (href.includes('ten-gras')) key = 'ten-gras'
        else if (href.includes('deshidratare')) key = 'deshidratare'
        else if (href.includes('ten-tern')) key = 'ten-tern'
        else if (href.includes('pigmentare')) key = 'pigmentare'
        else if (href.includes('cuperoza')) key = 'cuperoza'
        else if (href.includes('riduri.html') && link.textContent.includes('Cercuri')) key = 'riduri-cercuri-sub-ochi'
        else if (href.includes('riduri')) key = 'riduri'
        else if (href.includes('pierdere-tonusului')) key = 'pierdere-tonusului'
        else if (href.includes('barbie-dubla')) key = 'barbie-dubla'
        else if (href.includes('relaxare-oval')) key = 'relaxare-oval'
        else if (href.includes('tratamente-buze')) {
          if (link.textContent.includes('Deshidratarea')) key = 'deshidratare-buze'
          else if (link.textContent.includes('Riduri fine')) key = 'riduri-buze'
          else if (link.textContent.includes('Volum')) key = 'volum-buze'
        }
        else if (href.includes('vergeturi')) key = 'vergeturi'
        else if (href.includes('celulita')) key = 'celulita'
        else if (href.includes('lasare-piele')) key = 'lasare-piele'
        else if (href.includes('caderea_parului')) key = 'caderea-parului'
        if (translations[lang][key]) link.textContent = translations[lang][key]
      }
    })

    // Update servicii dropdown links
    // Caută dropdown-ul care are ca link principal textul 'Servicii' (sau traducerea lui)
    const serviciiDropdown = Array.from(document.querySelectorAll('.nav-links .has-dropdown')).find(li => {
      const a = li.querySelector('a');
      return a && (a.textContent.trim().startsWith(translations[lang]['servicii']) || a.textContent.trim().startsWith('Servicii'));
    });
    if (serviciiDropdown) {
      const serviciiLinks = serviciiDropdown.querySelectorAll('.dropdown a');
      serviciiLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href) {
          let key = '';
          if (href.includes('facial-care')) key = 'facial-care';
          else if (href.includes('body-care')) key = 'body-care';
          else if (href.includes('premium-facial')) key = 'premium-facial';
          else if (href.includes('dermapen')) key = 'dermapen';
          else if (href.includes('body-remodeling')) key = 'body-remodeling';
          else if (href.includes('massage')) key = 'massage';
          if (translations[lang][key]) link.textContent = translations[lang][key];
        }
      });
    }

    console.log("Content update complete for language:", lang)
  }

  // Set initial language from localStorage or default to Romanian
  const savedLang = localStorage.getItem("selectedLanguage") || "ro"
  console.log("Initial language from localStorage:", savedLang)

  document.body.setAttribute("data-lang", savedLang)

  const languageLinks = document.querySelectorAll(".language-selector .dropdown a, .language-selector > a")
  const body = document.body
  const heroSection = document.querySelector(".hero")
  const languageSelector = document.querySelector(".language-selector > a")

  if (languageSelector) {
    languageSelector.textContent = savedLang.toUpperCase()
    languageSelector.setAttribute("data-lang", savedLang)
    languageSelector.innerHTML = savedLang.toUpperCase() + ' <i class="fas fa-chevron-down"></i>'

    const dropdown = languageSelector.nextElementSibling
    if (dropdown) {
      const dropdownLink = dropdown.querySelector("a")
      if (dropdownLink) {
        const otherLang = savedLang === "ro" ? "ru" : "ro"
        dropdownLink.textContent = otherLang.toUpperCase()
        dropdownLink.setAttribute("data-lang", otherLang)
      }
    }
  }

  updateContent(savedLang)

  // Add scroll event listener for hero shadow effect
  if (heroSection) {
    window.addEventListener("scroll", () => {
      const scrollPosition = window.scrollY
      if (scrollPosition > 50) {
        heroSection.classList.add("scrolled")
      } else {
        heroSection.classList.remove("scrolled")
      }
    })
  }

  // --- MENIU MOBIL: dropdown-uri responsive ---
  const nav = document.querySelector(".nav")
  const navLinks = document.querySelector(".nav-links")
  const mobileBtn = document.querySelector(".mobile-menu-btn")
  const dropdowns = document.querySelectorAll(".nav-links .has-dropdown > a")

  // Toggle meniu principal
  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener("click", (e) => {
      e.preventDefault()
      e.stopPropagation()

      navLinks.classList.toggle("active")
      mobileBtn.classList.toggle("active")
      document.body.classList.toggle("menu-open", navLinks.classList.contains("active"))

      // Închide toate dropdown-urile când se deschide/închide meniul principal
      document.querySelectorAll(".dropdown.open").forEach((dropdown) => {
        dropdown.classList.remove("open")
      })
      document.querySelectorAll(".has-dropdown.active").forEach((item) => {
        item.classList.remove("active")
      })

      // Închide meniul simptome dacă e deschis
      const symptomsDropdown = document.getElementById("symptomsDropdown")
      if (symptomsDropdown) {
        symptomsDropdown.classList.remove("active")
      }
    })
  }

  // Închide meniul la click pe link simplu (fără dropdown)
  if (navLinks) {
    navLinks.querySelectorAll("a:not(.has-dropdown > a):not(#symptomsTab)").forEach((link) => {
      link.addEventListener("click", () => {
        if (window.innerWidth <= 992) {
          navLinks.classList.remove("active")
          mobileBtn.classList.remove("active")
          document.body.classList.remove("menu-open")
        }
      })
    })
  }

  // Toggle dropdown la click pe mobil/tabletă (pentru toate dropdown-urile normale)
  dropdowns.forEach((drop) => {
    drop.addEventListener("click", function (e) {
      if (window.innerWidth > 992) return // Doar pe mobil/tabletă

      e.preventDefault()
      e.stopPropagation()

      const parentLi = this.parentElement
      const submenu = parentLi.querySelector(".dropdown")

      // Închide alte dropdownuri la același nivel
      parentLi.parentElement.querySelectorAll(".has-dropdown").forEach((item) => {
        if (item !== parentLi) {
          item.classList.remove("active")
          const otherSubmenu = item.querySelector(".dropdown")
          if (otherSubmenu) otherSubmenu.classList.remove("open")
        }
      })

      // Toggle dropdown curent
      parentLi.classList.toggle("active")
      if (submenu) {
        submenu.classList.toggle("open")
      }
    })
  })

  // Pentru sub-submeniuri (nivel 2)
  if (navLinks) {
    navLinks.querySelectorAll(".has-dropdown .has-dropdown > a").forEach((drop) => {
      drop.addEventListener("click", function (e) {
        if (window.innerWidth > 992) return
        e.preventDefault()
        e.stopPropagation()

        const parentLi = this.parentElement
        const submenu = parentLi.querySelector(".dropdown")

        // Închide alte sub-submeniuri la același nivel
        parentLi.parentElement.querySelectorAll(".has-dropdown").forEach((item) => {
          if (item !== parentLi) {
            item.classList.remove("active")
            const otherSubmenu = item.querySelector(".dropdown")
            if (otherSubmenu) otherSubmenu.classList.remove("open")
          }
        })

        // Toggle dropdown curent (nivel 2)
        parentLi.classList.toggle("active")
        if (submenu) {
          submenu.classList.toggle("open")
        }
      })
    })
  }

  // Scroll doar în meniu când e deschis pe mobil
  if (navLinks) {
    navLinks.addEventListener(
      "touchmove",
      (e) => {
        if (window.innerWidth <= 992 && navLinks.classList.contains("active")) {
          e.stopPropagation()
        }
      },
      { passive: false },
    )
  }

  // Închide meniul la resize dacă treci pe desktop
  window.addEventListener("resize", () => {
    if (window.innerWidth > 992) {
      if (navLinks) navLinks.classList.remove("active")
      if (mobileBtn) mobileBtn.classList.remove("active")
      document.body.classList.remove("menu-open")
      document.querySelectorAll(".dropdown.open").forEach((opened) => opened.classList.remove("open"))
      document.querySelectorAll(".has-dropdown.active").forEach((item) => item.classList.remove("active"))

      // Închide și meniul simptome
      const symptomsDropdown = document.getElementById("symptomsDropdown")
      if (symptomsDropdown) {
        symptomsDropdown.classList.remove("active")
      }
    }
  })

  // Language switcher
  languageLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const lang = this.getAttribute("data-lang")
      const currentLang = languageSelector ? languageSelector.getAttribute("data-lang") : "ro"

      console.log("Language clicked:", lang)
      console.log("Current language:", currentLang)

      if (lang === currentLang) {
        console.log("Same language, doing nothing")
        return
      }

      localStorage.setItem("selectedLanguage", lang)
      console.log("Saved language to localStorage:", lang)

      if (languageSelector) {
        languageSelector.textContent = lang.toUpperCase()
        languageSelector.setAttribute("data-lang", lang)
        languageSelector.innerHTML = lang.toUpperCase() + ' <i class="fas fa-chevron-down"></i>'

        const dropdown = languageSelector.nextElementSibling
        if (dropdown) {
          const dropdownLink = dropdown.querySelector("a")
          if (dropdownLink) {
            dropdownLink.textContent = currentLang.toUpperCase()
            dropdownLink.setAttribute("data-lang", currentLang)
          }
        }
      }

      updateContent(lang)

      // Emit eveniment custom pentru traducerea paginilor individuale (apare.js)
      const event = new CustomEvent('languageChanged', { detail: { lang } })
      window.dispatchEvent(event)

      if (window.innerWidth <= 768) {
        this.closest(".has-dropdown").classList.remove("active")
      }
    })
  })

  // Close modal when clicking outside
  window.addEventListener("click", (event) => {
    if (event.target.classList.contains("modal")) {
      const modalId = event.target.id
      closeModal(modalId)
    }
  })

  // Close modal when pressing Escape key
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      const openModals = document.querySelectorAll('.modal[style*="display: flex"]')
      openModals.forEach((modal) => {
        closeModal(modal.id)
      })
    }
  })

  // Funcție pentru a verifica dacă un element este în viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect()
    return rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 && rect.bottom >= 0
  }

  // Funcție pentru a activa animațiile
  function activateAnimations() {
    const sections = document.querySelectorAll(".services-section, .about-section, .monthly-offer, .packages-section")
    const cards = document.querySelectorAll(".service-card, .package-card, .treatment-card")
    const headers = document.querySelectorAll(".section-header")

    sections.forEach((section) => {
      if (isInViewport(section)) {
        section.classList.add("visible")
      } else {
        section.classList.remove("visible")
      }
    })

    cards.forEach((card) => {
      if (isInViewport(card)) {
        card.classList.add("visible")
      } else {
        card.classList.remove("visible")
      }
    })

    headers.forEach((header) => {
      if (isInViewport(header)) {
        header.classList.add("visible")
      } else {
        header.classList.remove("visible")
      }
    })
  }

  // Adăugăm event listener pentru scroll cu throttling
  let isScrolling
  window.addEventListener("scroll", () => {
    window.clearTimeout(isScrolling)
    isScrolling = setTimeout(() => {
      activateAnimations()
    }, 20)
  })

  activateAnimations()

  // Funcționalitate carusel oferte (doar pe index)
  const carousel = document.querySelector(".offer-carousel-container")
  if (carousel) {
    const cards = document.querySelectorAll(".offer-card")
    const prevButton = document.querySelector(".prev-arrow")
    const nextButton = document.querySelector(".next-arrow")

    if (cards.length > 0) {
      let currentIndex = 0
      const cardWidth = cards[0].offsetWidth
      let autoplayInterval

      function updateCarousel() {
        carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`
      }

      function nextSlide() {
        currentIndex = (currentIndex + 1) % cards.length
        updateCarousel()
      }

      function prevSlide() {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length
        updateCarousel()
      }

      function startAutoplay() {
        autoplayInterval = setInterval(nextSlide, 5000)
      }

      function stopAutoplay() {
        clearInterval(autoplayInterval)
      }

      if (prevButton) {
        prevButton.addEventListener("click", () => {
          stopAutoplay()
          prevSlide()
          startAutoplay()
        })
      }

      if (nextButton) {
        nextButton.addEventListener("click", () => {
          stopAutoplay()
          nextSlide()
          startAutoplay()
        })
      }

      startAutoplay()

      carousel.addEventListener("mouseenter", stopAutoplay)
      carousel.addEventListener("mouseleave", startAutoplay)

      window.addEventListener("resize", () => {
        const newCardWidth = cards[0].offsetWidth
        carousel.style.transform = `translateX(-${currentIndex * newCardWidth}px)`
      })
    }
  }

  // --- MENIU SIMPTOME RESPONSIVE ---
  const symptomsTab = document.getElementById("symptomsTab")
  const symptomsDropdown = document.getElementById("symptomsDropdown")

  if (symptomsTab && symptomsDropdown) {
    let hoverTimeout
    const isModalOpen = false

    function checkForOpenModals() {
      const openModals = document.querySelectorAll('.modal[style*="display: flex"], .modal[style*="display: block"]')
      return openModals.length > 0
    }

    function openSymptomsDropdown() {
      if (!checkForOpenModals()) {
        clearTimeout(hoverTimeout)
        symptomsDropdown.classList.add("active")
      }
    }

    function closeSymptomsDropdown() {
      if (!checkForOpenModals()) {
        hoverTimeout = setTimeout(() => {
          symptomsDropdown.classList.remove("active")
        }, 100)
      }
    }

    // Comportament pentru desktop (hover)
    if (window.innerWidth > 992) {
      symptomsTab.addEventListener("mouseenter", openSymptomsDropdown)
      symptomsTab.addEventListener("mouseleave", closeSymptomsDropdown)
      symptomsDropdown.addEventListener("mouseenter", openSymptomsDropdown)
      symptomsDropdown.addEventListener("mouseleave", closeSymptomsDropdown)
    }

    // Comportament pentru mobil/tabletă (click)
    symptomsTab.addEventListener("click", (e) => {
      if (window.innerWidth <= 992) {
        e.preventDefault()
        e.stopPropagation()

        // Închide alte dropdown-uri
        document.querySelectorAll(".has-dropdown.active").forEach((item) => {
          item.classList.remove("active")
          const submenu = item.querySelector(".dropdown")
          if (submenu) submenu.classList.remove("open")
        })

        // Toggle meniul simptome
        symptomsDropdown.classList.toggle("active")
      }
    })

    // Verificăm periodic starea modalelor
    setInterval(() => {
      if (checkForOpenModals()) {
        symptomsDropdown.classList.remove("active")
      }
    }, 100)

    // Închidem dropdown-ul la scroll doar dacă nu există modale deschise
    window.addEventListener("scroll", () => {
      if (!checkForOpenModals() && window.innerWidth > 992) {
        symptomsDropdown.classList.remove("active")
      }
    })

    // Click în afara dropdown-ului
    document.addEventListener("click", (event) => {
      if (!symptomsTab.contains(event.target) && !symptomsDropdown.contains(event.target)) {
        symptomsDropdown.classList.remove("active")
      }
    })

    // Reapply event listeners on window resize
    window.addEventListener("resize", () => {
      // Remove old event listeners and reapply based on screen size
      symptomsTab.removeEventListener("mouseenter", openSymptomsDropdown)
      symptomsTab.removeEventListener("mouseleave", closeSymptomsDropdown)
      symptomsDropdown.removeEventListener("mouseenter", openSymptomsDropdown)
      symptomsDropdown.removeEventListener("mouseleave", closeSymptomsDropdown)

      if (window.innerWidth > 992) {
        symptomsTab.addEventListener("mouseenter", openSymptomsDropdown)
        symptomsTab.addEventListener("mouseleave", closeSymptomsDropdown)
        symptomsDropdown.addEventListener("mouseenter", openSymptomsDropdown)
        symptomsDropdown.addEventListener("mouseleave", closeSymptomsDropdown)
      }
    })
  }
})
