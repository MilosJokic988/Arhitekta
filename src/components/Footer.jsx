
import React from 'react';

function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-dark text-white text-center">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Spectroom. All rights reserved.</p>
        <p>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a> |{' '}
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
