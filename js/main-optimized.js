// Optimized main JavaScript with performance improvements
document.addEventListener("DOMContentLoaded", function() {
    // Initialize translation manager
    translationManager.init();
    
    // Mobile menu optimization
    const mobileBtn = document.querySelector(".mobile-menu-btn");
    const navLinks = document.querySelector(".nav-links");
    
    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener("click", function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            navLinks.classList.toggle("active");
            mobileBtn.classList.toggle("active");
            document.body.classList.toggle("menu-open", navLinks.classList.contains("active"));
        });
    }
    
    // Close mobile menu when clicking on links
    if (navLinks) {
        navLinks.addEventListener("click", function(e) {
            if (e.target.tagName === "A" && window.innerWidth <= 992) {
                navLinks.classList.remove("active");
                mobileBtn.classList.remove("active");
                document.body.classList.remove("menu-open");
            }
        });
    }
    
    // Optimized dropdown functionality
    const dropdowns = document.querySelectorAll(".has-dropdown");
    dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector("a");
        const menu = dropdown.querySelector(".dropdown");
        
        if (toggle && menu) {
            toggle.addEventListener("click", function(e) {
                if (window.innerWidth <= 992) {
                    e.preventDefault();
                    dropdown.classList.toggle("active");
                    menu.classList.toggle("open");
                }
            });
        }
    });
    
    // Optimized symptoms dropdown
    const symptomsTab = document.getElementById("symptomsTab");
    const symptomsDropdown = document.getElementById("symptomsDropdown");
    
    if (symptomsTab && symptomsDropdown) {
        let hoverTimeout;
        
        function showSymptomsDropdown() {
            clearTimeout(hoverTimeout);
            symptomsDropdown.classList.add("active");
        }
        
        function hideSymptomsDropdown() {
            hoverTimeout = setTimeout(() => {
                symptomsDropdown.classList.remove("active");
            }, 100);
        }
        
        // Desktop hover behavior
        if (window.innerWidth > 992) {
            symptomsTab.addEventListener("mouseenter", showSymptomsDropdown);
            symptomsTab.addEventListener("mouseleave", hideSymptomsDropdown);
            symptomsDropdown.addEventListener("mouseenter", showSymptomsDropdown);
            symptomsDropdown.addEventListener("mouseleave", hideSymptomsDropdown);
        }
        
        // Mobile click behavior
        symptomsTab.addEventListener("click", function(e) {
            if (window.innerWidth <= 992) {
                e.preventDefault();
                symptomsDropdown.classList.toggle("active");
            }
        });
    }
    
    // Optimized modal functionality
    function openModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = "flex";
            modal.style.opacity = "0";
            requestAnimationFrame(() => {
                modal.style.opacity = "1";
            });
        }
    }
    
    function closeModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.opacity = "0";
            setTimeout(() => {
                modal.style.display = "none";
            }, 300);
        }
    }
    
    // Global modal functions
    window.openModal = openModal;
    window.closeModal = closeModal;
    
    // Close modal when clicking outside
    document.addEventListener("click", function(e) {
        if (e.target.classList.contains("modal")) {
            closeModal(e.target.id);
        }
    });
    
    // Close modal with Escape key
    document.addEventListener("keydown", function(e) {
        if (e.key === "Escape") {
            const openModals = document.querySelectorAll('.modal[style*="display: flex"]');
            openModals.forEach(modal => closeModal(modal.id));
        }
    });
    
    // Optimized scroll animations with throttling
    let isScrolling = false;
    function handleScroll() {
        if (!isScrolling) {
            requestAnimationFrame(() => {
                const scrollPosition = window.scrollY;
                const heroSection = document.querySelector(".hero");
                
                if (heroSection) {
                    if (scrollPosition > 50) {
                        heroSection.classList.add("scrolled");
                    } else {
                        heroSection.classList.remove("scrolled");
                    }
                }
                
                isScrolling = false;
            });
            isScrolling = true;
        }
    }
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Optimized intersection observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px"
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, observerOptions);
    
    // Observe elements for animations
    const animatedElements = document.querySelectorAll(
        ".service-card, .treatment-card, .package-card, .section-header"
    );
    
    animatedElements.forEach(element => {
        observer.observe(element);
    });
    
    // Optimized carousel functionality
    const carousel = document.querySelector(".offer-carousel-container");
    if (carousel) {
        const cards = carousel.querySelectorAll(".offer-card");
        const prevButton = document.querySelector(".prev-arrow");
        const nextButton = document.querySelector(".next-arrow");
        
        if (cards.length > 0) {
            let currentIndex = 0;
            let autoplayInterval;
            
            function updateCarousel() {
                const cardWidth = cards[0].offsetWidth;
                carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
            }
            
            function nextSlide() {
                currentIndex = (currentIndex + 1) % cards.length;
                updateCarousel();
            }
            
            function prevSlide() {
                currentIndex = (currentIndex - 1 + cards.length) % cards.length;
                updateCarousel();
            }
            
            function startAutoplay() {
                autoplayInterval = setInterval(nextSlide, 5000);
            }
            
            function stopAutoplay() {
                clearInterval(autoplayInterval);
            }
            
            if (prevButton) {
                prevButton.addEventListener("click", () => {
                    stopAutoplay();
                    prevSlide();
                    startAutoplay();
                });
            }
            
            if (nextButton) {
                nextButton.addEventListener("click", () => {
                    stopAutoplay();
                    nextSlide();
                    startAutoplay();
                });
            }
            
            startAutoplay();
            carousel.addEventListener("mouseenter", stopAutoplay);
            carousel.addEventListener("mouseleave", startAutoplay);
            
            // Responsive carousel
            window.addEventListener("resize", () => {
                updateCarousel();
            });
        }
    }
    
    // Optimized window resize handler
    let resizeTimeout;
    window.addEventListener("resize", () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            if (window.innerWidth > 992) {
                // Reset mobile menu
                if (navLinks) navLinks.classList.remove("active");
                if (mobileBtn) mobileBtn.classList.remove("active");
                document.body.classList.remove("menu-open");
                
                // Reset dropdowns
                document.querySelectorAll(".dropdown.open").forEach(dropdown => {
                    dropdown.classList.remove("open");
                });
                document.querySelectorAll(".has-dropdown.active").forEach(item => {
                    item.classList.remove("active");
                });
                
                // Reset symptoms dropdown
                if (symptomsDropdown) {
                    symptomsDropdown.classList.remove("active");
                }
            }
        }, 100);
    });
});