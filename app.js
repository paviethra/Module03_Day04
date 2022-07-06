// DOM SELECTORS
const btn = document.getElementById('btn');
const countDownDate = document.getElementById('user-date')

// EVENT LISTENERS
btn.addEventListener('click', function() {
  
  let userTime = new Date(countDownDate.value).getTime();

  // User input validation
  if(countDownDate.value != '') {
    // Update count every second
  const x = setInterval(function() {

    // Get today's date and time
    const now = new Date().getTime();
  
    // Get distance between now and countdown date
    const distance = userTime - now;
  
    // Time calc
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    // Display result
    document.getElementById('output').innerHTML = `<div>  ${days}   :   ${hours}   :    ${minutes}    :    ${seconds}</div>`;
  
  
    // Countdown finished text
    if(distance < 0) {
      clearInterval(x);
      document.getElementById('output').innerHTML = 'It\'s Done!';
    }
  }, 1000);
    
  } else {
    showError('Please check your date.');
  }
});

// Show error if date not enetered
function showError(error) {
  // Create div
  const errorDiv = document.createElement('div');
  // Get elements
  const heading = document.getElementById('heading');
  const container = document.querySelector('.container');
  // Add class
  errorDiv.className = 'error';
  // Create text node for error
  errorDiv.appendChild(document.createTextNode(error))
  // Insert error message after heading
  container.insertBefore(errorDiv, heading)

  setTimeout(clearError, 3000);
}

// Clear error from DOM
function clearError() {
  document.querySelector('.error').remove();
}