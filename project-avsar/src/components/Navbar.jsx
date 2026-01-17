import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

function Navbar() {
    const [activeLink, setActiveLink] = useState('');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const menuItems = [
        {
            name: 'Kurumsal',
            path: '/#kurumsal',
            subItems: [
                { name: 'Hakkımızda', path: '/kurumsal/hakkimizda' },
                { name: 'Belgelerimiz', path: '/kurumsal/belgelerimiz' },
                { name: 'Kuruluş Politikamız', path: '/kurumsal/kurulus-politikamiz' },
                { name: 'Tanıtım Filmi', path: '/kurumsal/tanitim-filmi' },
                { name: 'Galeri', path: '/kurumsal/galeri' },
                { name: 'Basında Biz', path: '/kurumsal/basinda-biz' },
                { name: 'İnsan Kaynakları', path: '/kurumsal/insan-kaynaklari' },
                { name: 'Tüketici Memnuniyeti Anketi', path: '/kurumsal/tuketici-anketi' }
            ]
        },
        { name: 'Ürünlerimiz', path: '/urunlerimiz' },
        { name: 'Haberler', path: '/haberler' },
        { name: 'İletişim', path: '/iletisim' }
    ];

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={() => setIsMobileMenuOpen(false)}>
                    <img src="/logo-ve-diğerleri/logo.png" alt="Avşar Logo" />
                </Link>

                <div className="menu-icon" onClick={toggleMobileMenu}>
                    {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                </div>

                <ul className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                    {menuItems.map((item) => (
                        <li
                            key={item.name}
                            className={`navbar-item ${item.subItems ? 'has-dropdown' : ''}`}
                            onMouseEnter={() => {
                                if (window.innerWidth > 960) {
                                    setActiveLink(item.name)
                                }
                            }}
                            onMouseLeave={() => {
                                if (window.innerWidth > 960) {
                                    setActiveLink('')
                                }
                            }}
                        >
                            {item.subItems ? (
                                <span
                                    className={`navbar-link ${activeLink === item.name ? 'active' : ''}`}
                                    style={{ cursor: 'default' }}
                                    onClick={() => window.innerWidth <= 960 && setActiveLink(activeLink === item.name ? '' : item.name)}
                                >
                                    {item.name}
                                    <span className="navbar-underline"></span>
                                </span>
                            ) : (
                                <Link
                                    to={item.path}
                                    className={`navbar-link ${activeLink === item.name ? 'active' : ''}`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.name}
                                    <span className="navbar-underline"></span>
                                </Link>
                            )}
                            {item.subItems && (
                                <ul className={`dropdown-menu ${activeLink === item.name ? 'active' : ''}`}>
                                    {item.subItems.map((subItem) => (
                                        <li key={subItem.name} className="dropdown-item">
                                            <Link
                                                to={subItem.path}
                                                className="dropdown-link"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                {subItem.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
