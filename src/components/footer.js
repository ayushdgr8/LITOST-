 import './footer.css'
const Footer = () => (
  <footer className="footer">
  <h2>Connect with Us</h2>

  <div className="social-media">
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-facebook"></i>
    </a>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-twitter"></i>
    </a>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-instagram"></i>
    </a>
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-linkedin"></i>
    </a>
  </div>

  <div className="contact-info">
    <p>For any inquiries, email us at: <a href="mailto:info@company.com">info@company.com</a></p>
    <p>Phone: +1 234 567 890</p>
  </div>

  <div className="footer-bottom">
    <p>&copy; 2025 Company Name. All rights reserved.</p>
  </div>
</footer>

  );
  
  export default Footer;
  