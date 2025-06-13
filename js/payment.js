// Fetch trip details from URL parameters
const urlParams = new URLSearchParams(window.location.search);
const tripName = urlParams.get('trip');
const tripPrice = urlParams.get('price');


if (tripName && tripPrice) {
  document.getElementById('trip-name').value = tripName;

  // Calculate total amount based on number of persons
  const numPersonsInput = document.getElementById('num-persons');
  const totalAmountInput = document.getElementById('total-amount');

  numPersonsInput.addEventListener('input', () => {
    const numPersons = parseInt(numPersonsInput.value);
    const totalAmount = numPersons * parseFloat(tripPrice);
    totalAmountInput.value = `$${totalAmount.toFixed(2)}`;
  });
}

// Handle form submission
document.getElementById('booking-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const numPersons = document.getElementById('num-persons').value;
  const totalAmount = document.getElementById('total-amount').value;

  // Redirect to payment gateway (e.g., Stripe or PayPal)
  // Replace with your payment gateway integration
  alert(`Redirecting to payment gateway for ${numPersons} persons. Total amount: ${totalAmount}`);
});
