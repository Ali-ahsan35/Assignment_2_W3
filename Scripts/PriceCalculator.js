const BASE_PRICE = 2026;

const today = new Date();
const todayString = today.toISOString().split('T')[0];

// Get tomorrow's date
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);
const tomorrowString = tomorrow.toISOString().split('T')[0];

const checkinInput = document.getElementById('checkin');
const checkoutInput = document.getElementById('checkout');
const priceBreakdown = document.getElementById('priceBreakdown');
const totalPrice = document.getElementById('totalPrice');

// Set initial dates and minimum dates
checkinInput.value = todayString;
checkoutInput.value = tomorrowString;
checkinInput.min = todayString;
checkoutInput.min = tomorrowString;


function calculatePrice() {
    const checkinDate = new Date(checkinInput.value);
    const checkoutDate = new Date(checkoutInput.value);
    
    // Calculate number of days
    const timeDiff = checkoutDate - checkinDate;
    const days = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    
    if (days > 0) {
        const total = days * BASE_PRICE;
        
        // Update price breakdown
        priceBreakdown.textContent = `$${BASE_PRICE.toLocaleString()} × ${days} ${days === 1 ? 'night' : 'nights'}`;
        

        totalPrice.textContent = `$${total.toLocaleString()}`;
    } else {
        priceBreakdown.textContent = '$2026 × 0 nights';
        totalPrice.textContent = '$0';
    }
}

// Update minimum checkout date when checkin changes
checkinInput.addEventListener('change', function() {
    const selectedCheckin = new Date(this.value);
    const nextDay = new Date(selectedCheckin);
    nextDay.setDate(nextDay.getDate() + 1);
    const nextDayString = nextDay.toISOString().split('T')[0];
    
    checkoutInput.min = nextDayString;
    
    // If checkout is before or equal to checkin, update it to next day
    if (checkoutInput.value <= this.value) {
        checkoutInput.value = nextDayString;
    }
    
    calculatePrice();
});

// Calculate price when checkout changes
checkoutInput.addEventListener('change', calculatePrice);

calculatePrice();