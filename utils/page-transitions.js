// Page transition utilities for iframe-like scrolling experience

class PageTransitionManager {
  constructor() {
    this.isTransitioning = false;
    this.currentPath = null;
    this.contentFrame = null;
    this.router = null;
    this.init();
  }

  init() {
    // Find the content frame
    this.contentFrame = document.querySelector('.content-frame');
    
    // Set up responsive viewport units
    this.setupResponsiveUnits();
    
    // Listen for window resize
    window.addEventListener('resize', () => this.setupResponsiveUnits());
    
    // Initialize router when available
    this.initializeRouter();
  }

  initializeRouter() {
    // Router events are optional - the main functionality works without them
    // The content frame scrolling and page transitions work via useEffect in components
    console.log('PageTransitionManager initialized - router events disabled for stability');
  }

  setupResponsiveUnits() {
    const doc = document.documentElement;
    const vw = 0.01 * doc.clientWidth;
    const vh = 0.01 * doc.clientHeight;
    
    doc.style.setProperty('--vw', `${vw}px`);
    doc.style.setProperty('--vh', `${vh}px`);
    doc.style.setProperty('--vmax', `${Math.max(vw, vh)}px`);
    doc.style.setProperty('--vmin', `${Math.min(vw, vh)}px`);
  }

  async switchPage(newPath) {
    if (this.isTransitioning || this.currentPath === newPath) return;
    
    this.isTransitioning = true;
    
    // Hide current page
    if (this.currentPath) {
      await this.hidePage();
    }
    
    // Reset scroll position
    this.resetScroll();
    
    // Show new page
    await this.showPage();
    
    this.currentPath = newPath;
    this.isTransitioning = false;
  }

  async hidePage() {
    if (!this.contentFrame) return;
    
    this.contentFrame.classList.add('is-leaving');
    
    return new Promise(resolve => {
      setTimeout(() => {
        this.contentFrame.classList.remove('is-leaving');
        resolve();
      }, 300);
    });
  }

  async showPage() {
    if (!this.contentFrame) return;
    
    this.contentFrame.classList.add('is-entering');
    
    return new Promise(resolve => {
      setTimeout(() => {
        this.contentFrame.classList.remove('is-entering');
        resolve();
      }, 900);
    });
  }

  resetScroll() {
    if (this.contentFrame) {
      this.contentFrame.scrollTop = 0;
    }
  }

  startTransition() {
    if (this.contentFrame) {
      this.contentFrame.classList.add('is-transitioning');
    }
  }

  endTransition() {
    if (this.contentFrame) {
      this.contentFrame.classList.remove('is-transitioning');
      this.resetScroll();
    }
  }
}

// Initialize the page transition manager
let pageTransitionManager = null;

if (typeof window !== 'undefined') {
  pageTransitionManager = new PageTransitionManager();
}

export default pageTransitionManager;
