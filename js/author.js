const signupUrl = 'https://myapp-backend.com/api/signup';
const loginUrl = 'https://myapp-backend.com/api/login';
document.getElementById('signup-form')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;
  

  if (!email || !password) {
    alert('Please enter email and password both.');
    return;
  }

  try {
    
    const response = await fetch(signupUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error('Sign-up failed. Please try again later.');
    }

    const data = await response.json();
    
    console.log('Sign-up successful:', data);
    alert('Sign-up successful!');
    
  } catch (error) {
    console.error('Error signing up:', error.message);
    alert('Error signing up. Please try again later.');
  
  }
});


document.getElementById('login-form')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;
  
  
  if (!email || !password) {
    alert('Please enter both email and password.');
    return;
  }

  try {
    
    const response = await fetch('loginUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error('Login failed. Please check your credentials.');
    }

    const data = await response.json();
    
    console.log('Login successful:', data);
    alert('Login successful!');
    
  } catch (error) {
    console.error('Error logging in:', error.message);
    alert('Error logging in. Please check your credentials and try again.');
    
  }
});
