// src/components/HomePage.js
import React from 'react';
import { auth } from '../firebase';

function HomePage() {
  const signOut = () => {
    auth.signOut();
  };

  return (
    <div>
      <h1>Welcome to Mini CRM</h1>
      <button onClick={signOut}>Sign out</button>
    </div>
  );
}

export default HomePage;
