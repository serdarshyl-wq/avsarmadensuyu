import { Link } from 'react-router-dom';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="footer-container">
                <div className="footer-column left-col">
                    <img
                        src="/logo-ve-diğerleri/logo.png"
                        alt="Avşar Logo"
                        className="footer-logo"
                    />
                    <div className="contact-info">
                        <h3 className="footer-heading contact-heading">Bize Ulaşın</h3>
                        <address className="footer-address">
                            <p>Şirinevler Mh. Avşar Deresi Cd. No:1</p>
                            <p>İscehisar / AFYONKARAHİSAR</p>
                            <p className="contact-link">
                                <a href="mailto:info@avsarmadensuyu.com">info@avsarmadensuyu.com</a>
                            </p>
                            <p>Tel: 0 272 341 55 55</p>
                            <p>Fax: 0 272 341 55 00</p>
                        </address>
                    </div>
                </div>

                <div className="footer-column center-col">
                    <h3 className="footer-heading">Sayfalar</h3>
                    <ul className="footer-links">
                        <li><Link to="/kurumsal/hakkimizda">Hakkımızda</Link></li>
                        <li><Link to="/urunlerimiz">Ürünlerimiz</Link></li>
                        <li><Link to="/haberler">Haberler</Link></li>
                        <li><Link to="/iletisim">İletişim</Link></li>
                    </ul>
                </div>

                <div className="footer-column right-col">
                    <h3 className="footer-heading">Takip Edin</h3>
                    <div className="social-icons">
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
                            <FaLinkedin />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon x-twitter">
                            <FaXTwitter />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
                            <FaInstagram />
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer-copyright">
                <p>Copyright © {new Date().getFullYear()} Avşar Doğal Maden Suyu</p>
            </div>
        </footer>
    );
};

export default Footer;
