let isHuman = false;
let selectedProvider = '';

function verifyHuman() {
  isHuman = true;
  alert("You have been verified as human!");
}

function chooseProvider(provider) {
  selectedProvider = provider;
  alert(`Provider selected: ${provider}`);
}

document.getElementById('signupForm').addEventListener('submit', function(event) {
  event.preventDefault();

  if (!isHuman) {
    alert("Please verify you're human before signing up!");
    return;
  }

  if (!selectedProvider) {
    alert("Please select a sign-in provider (Gmail or Apple)!");
    return;
  }

  const firstName = document.getElementById('firstName').value.trim();
  const lastName = document.getElementById('lastName').value.trim();
  const emailInput = document.getElementById('email').value.trim();

  const emailUsername = emailInput.split('@')[0];
  const email = `${emailUsername}@${selectedProvider}`;

  const user = {
    firstName,
    lastName,
    email
  };

  localStorage.setItem('user', JSON.stringify(user));

  alert("Signup successful! User info saved.");
});
