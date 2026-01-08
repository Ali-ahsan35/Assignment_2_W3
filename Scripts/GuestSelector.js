
if (window.innerWidth >= 1024) {

  let guests = 1;
  let infants = 1;
  let pets = 1;

  const guestSelector = document.getElementById('guestSelector');
  const guestModal = document.getElementById('guestModal');
  const guestCloseBtn = document.getElementById('guestCloseBtn');
  const guestDisplay = document.getElementById('guestDisplay');

  const guestsCountEl = document.getElementById('guestsCount');
  const infantsCountEl = document.getElementById('infantsCount');
  const petsCountEl = document.getElementById('petsCount');


  function updateGuestDisplay() {
    let parts = [];
    
    if (guests > 0) {
      parts.push(`${guests} Guest${guests !== 1 ? 's' : ''}`);
    }
    
    if (infants > 0) {
      parts.push(`${infants} Infant${infants !== 1 ? 's' : ''}`);
    }
    
    if (pets > 0) {
      parts.push(`${pets} Pet${pets !== 1 ? 's' : ''}`);
    }
    
    guestDisplay.textContent = parts.length > 0 ? parts.join(', ') : 'Select guests';
  }

  // Open modal
  if (guestSelector) {
    guestSelector.addEventListener('click', (e) => {
      e.stopPropagation();
      const isActive = guestModal.classList.contains('active');
      guestModal.classList.toggle('active');
    });
  }

  // Close modal
  if (guestCloseBtn) {
    guestCloseBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      guestModal.classList.remove('active');
    });
  }

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (guestModal && guestModal.classList.contains('active')) {
      if (!guestModal.contains(e.target) && !guestSelector.contains(e.target)) {
        guestModal.classList.remove('active');
      }
    }
  });


  document.querySelectorAll('.guest-btn-plus, .guest-btn-minus').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const type = e.target.dataset.type;
      const isPlus = e.target.classList.contains('guest-btn-plus');
      
      if (type === 'guests') {
        if (isPlus) {
          guests++;
        } else if (guests > 1) {
          guests--;
        }
        guestsCountEl.textContent = guests;
      } else if (type === 'infants') {
        if (isPlus) {
          infants++;
        } else if (infants > 0) {
          infants--;
        }
        infantsCountEl.textContent = infants;
      } else if (type === 'pets') {
        if (isPlus) {
          pets++;
        } else if (pets > 0) {
          pets--;
        }
        petsCountEl.textContent = pets;
      }
      
      updateGuestDisplay();
      updateButtonStates();
    });
  });


  function updateButtonStates() {
    document.querySelectorAll('.guest-btn-minus').forEach(btn => {
      const type = btn.dataset.type;
      if ((type === 'guests' && guests === 1) ||
          (type === 'infants' && infants === 0) ||
          (type === 'pets' && pets === 0)) {
        btn.disabled = true;
      } else {
        btn.disabled = false;
      }
    });
  }


  updateGuestDisplay();
  updateButtonStates();
}