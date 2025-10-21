// Handles mobile navigation toggle and closes the menu when a link is selected.
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
        document.body.classList.toggle('nav-open');
    });

    navLinks.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            document.body.classList.remove('nav-open');
        });
    });
}

// Updates the copyright year automatically.
const currentYearEl = document.getElementById('current-year');
if (currentYearEl) {
    currentYearEl.textContent = new Date().getFullYear();
}

// Adds a subtle active-state indicator to nav links while scrolling.
const sections = document.querySelectorAll('main section[id]');
const observer = new IntersectionObserver(
    (entries) => {
        const visible = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible) {
            return;
        }

        const activeId = visible.target.getAttribute('id');
        navLinks?.querySelectorAll('a').forEach((link) => {
            const isActive = link.getAttribute('href') === `#${activeId}`;
            link.classList.toggle('is-active', isActive);
        });
    },
    {
        threshold: [0.3, 0.6, 0.9],
    }
);

sections.forEach((section) => observer.observe(section));

// ============================================
// LIVE EDIT MODE FUNCTIONALITY
// ============================================

const editToggle = document.getElementById('editToggle');
const saveBtn = document.getElementById('saveBtn');
let isEditMode = false;

// Elements that can be edited
const editableSelectors = [
    'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 
    'p', 'li', 'span.fact-value', 'span.eyebrow',
    '.lead', '.timeline-meta', 'figcaption',
    'label', 'a.btn', '.form-note'
];

// Load saved content from localStorage
function loadSavedContent() {
    const savedContent = localStorage.getItem('portfolioContent');
    if (savedContent) {
        try {
            const contentMap = JSON.parse(savedContent);
            Object.keys(contentMap).forEach(key => {
                const element = document.querySelector(`[data-edit-id="${key}"]`);
                if (element) {
                    element.innerHTML = contentMap[key];
                }
            });
            console.log('✅ Loaded saved content from localStorage');
        } catch (e) {
            console.error('Error loading saved content:', e);
        }
    }
}

// Save content to localStorage
function saveContent() {
    const contentMap = {};
    document.querySelectorAll('[data-edit-id]').forEach(element => {
        const id = element.getAttribute('data-edit-id');
        contentMap[id] = element.innerHTML;
    });
    localStorage.setItem('portfolioContent', JSON.stringify(contentMap));
    
    // Show save confirmation
    const originalText = saveBtn.textContent;
    saveBtn.textContent = '✓ Saved!';
    saveBtn.style.background = '#10b981';
    saveBtn.style.color = '#ffffff';
    
    setTimeout(() => {
        saveBtn.textContent = originalText;
        saveBtn.style.background = '';
        saveBtn.style.color = '';
    }, 2000);
    
    console.log('✅ Content saved to localStorage');
}

// Toggle edit mode
function toggleEditMode() {
    isEditMode = !isEditMode;
    document.body.classList.toggle('edit-mode', isEditMode);
    
    const editableElements = document.querySelectorAll(editableSelectors.join(', '));
    editableElements.forEach((element, index) => {
        // Skip nav links and certain elements
        if (element.closest('.nav-links') || 
            element.closest('.social-links') ||
            element.closest('.project-links') ||
            element.id === 'current-year') {
            return;
        }
        
        // Add unique ID for saving
        if (!element.hasAttribute('data-edit-id')) {
            element.setAttribute('data-edit-id', `edit-${index}`);
        }
        
        element.contentEditable = isEditMode;
        
        if (isEditMode) {
            element.setAttribute('title', 'Click to edit this text');
        } else {
            element.removeAttribute('title');
        }
    });
}

// Initialize edit functionality
if (editToggle && saveBtn) {
    // Load saved content on page load
    loadSavedContent();
    
    editToggle.addEventListener('click', toggleEditMode);
    
    saveBtn.addEventListener('click', saveContent);
    
    // Auto-save on Ctrl+S or Cmd+S
    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 's') {
            e.preventDefault();
            if (isEditMode) {
                saveContent();
            }
        }
    });
    
    // Escape key to exit edit mode
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && isEditMode) {
            toggleEditMode();
        }
    });
    
    console.log('✏️ Edit mode initialized. Click the pencil icon in the nav to start editing!');
}
