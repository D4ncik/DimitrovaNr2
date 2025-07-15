// Optimized image loading with lazy loading and WebP support
class ImageOptimizer {
    constructor() {
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '50px 0px'
        };
        this.init();
    }
    
    init() {
        // Add loading="lazy" to all images
        this.addLazyLoadingToImages();
        
        // Implement intersection observer for advanced lazy loading
        this.implementIntersectionObserver();
        
        // Add WebP support detection
        this.addWebPSupport();
    }
    
    addLazyLoadingToImages() {
        const images = document.querySelectorAll('img:not([loading])');
        images.forEach(img => {
            img.loading = 'lazy';
            img.decoding = 'async';
        });
    }
    
    implementIntersectionObserver() {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.classList.add('loaded');
                        imageObserver.unobserve(img);
                    }
                }
            });
        }, this.observerOptions);
        
        // Observe images with data-src attribute
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));
    }
    
    addWebPSupport() {
        // Check if browser supports WebP
        const supportsWebP = () => {
            return new Promise((resolve) => {
                const webP = new Image();
                webP.onload = webP.onerror = () => resolve(webP.height === 2);
                webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
            });
        };
        
        supportsWebP().then(supported => {
            if (supported) {
                document.documentElement.classList.add('webp');
            }
        });
    }
}

// Initialize image optimizer when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new ImageOptimizer();
});

// CSS for image optimization
const imageOptimizationCSS = `
    img {
        transition: opacity 0.3s ease;
        opacity: 0;
    }
    
    img.loaded, img[loading="lazy"] {
        opacity: 1;
    }
    
    /* Progressive image loading */
    img:not(.loaded) {
        background-color: #f0f0f0;
        background-image: linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.5) 50%, transparent 60%);
        background-size: 200% 100%;
        animation: loading 1.5s infinite;
    }
    
    @keyframes loading {
        0% { background-position: -200% 0; }
        100% { background-position: 200% 0; }
    }
    
    /* WebP optimization */
    .webp .service-image {
        background-image: url('images/service.webp');
    }
    
    .no-webp .service-image {
        background-image: url('images/service.jpg');
    }
`;

// Add CSS to head
const style = document.createElement('style');
style.textContent = imageOptimizationCSS;
document.head.appendChild(style);