import React, { useState } from 'react';

function PasswordStrengthChecker() {
  const [password, setPassword] = useState('');

  function getPasswordStrength() {
    let strength = 0;
    if (password.match(/[a-z]/)) {
      strength += 1;
    }
    if (password.match(/[A-Z]/)) {
      strength += 1;
    }
    if (password.match(/[0-9]/)) {
      strength += 1;
    }
    if (password.match(/[!@#$%^&*(),.?":{}|<>]/)) {
      strength += 1;
    }
    if (password.length >= 8) {
      strength += 1;
    }
    return strength;
  }

  function getStrengthText() {
    const strength = getPasswordStrength();
    switch (strength) {
      case 0:
        return '';
      case 1:
        return 'Weak';
      case 2:
        return 'Moderate';
      case 3:
        return 'Strong';
      case 4:
        return 'Very Strong';
      default:
        return '';
    }
  }

  return (
    <div className='passDiv'>
      <label>Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <div>Password Strength: {getStrengthText()}</div>
    </div>
  );
}

export default PasswordStrengthChecker;
