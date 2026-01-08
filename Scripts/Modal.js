console.log('Modal.js loaded!');

const images = [
  'Assets/HeroPic1.jpg',
  'Assets/hero2.jpg',
  'Assets/hero3.jpg',
  'Assets/card_img.jpg',
  'Assets/HeroPic1.jpg',
  'Assets/hero2.jpg',
  'Assets/hero3.jpg',
  'Assets/card_img.jpg',
  'Assets/HeroPic1.jpg',
  'Assets/hero2.jpg'
];

const viewAllBtn = document.querySelector('.view_all_img_btn');
const modal = document.getElementById('galleryModal');
const closeModal = document.getElementById('closeModal');
const galleryGrid = document.getElementById('galleryGrid');

console.log('viewAllBtn:', viewAllBtn);
console.log('modal:', modal);
console.log('closeModal:', closeModal);
console.log('galleryGrid:', galleryGrid);

// Check if device is mobile
function isMobile() {
  return window.innerWidth < 376;
}

// Generate gallery items
function generateGallery() {
  console.log('Generating gallery...');
  galleryGrid.innerHTML = '';
  images.forEach((img, index) => {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    item.innerHTML = `
      <img src="${img}" alt="Image ${index + 1}" loading="lazy">
      <div class="image-number">${index + 1}/10</div>
    `;
    galleryGrid.appendChild(item);
  });
  console.log('Gallery generated!');
}

// Open modal
if (viewAllBtn) {
  viewAllBtn.addEventListener('click', () => {
    console.log('Button clicked!');
    console.log('Is mobile?', isMobile());
    
    if (isMobile()) {
      alert('Gallery is only available on tablet and desktop devices.');
      return;
    }
    
    console.log('Opening modal...');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    modal.scrollTop = 0;
    console.log('Modal should be visible now');
  });
}

// Close modal
if (closeModal) {
  closeModal.addEventListener('click', () => {
    console.log('Closing modal...');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  });
}

// Close modal when clicking outside the content
if (modal) {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      console.log('Clicked outside, closing modal...');
      modal.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  });
}


document.addEventListener('keydown', (e) => {
  if (modal && modal.classList.contains('active') && e.key === 'Escape') {
    console.log('Escape pressed, closing modal...');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
});


if (galleryGrid) {
  generateGallery();
} else {
  console.error('Gallery grid not found!');
}