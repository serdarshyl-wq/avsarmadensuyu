import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import PageBanner from './PageBanner';
import './Iletisim.css';
import { FaMapMarkerAlt, FaPhone, FaFax, FaEnvelope } from 'react-icons/fa';

const Iletisim = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Navbar />
            <div className="iletisim-section">
                <PageBanner title="İLETİŞİM" pageIndex={4} />
                <iframe
                    title="Avşar Maden Suyu Konum"
                    src="https://maps.google.com/maps?q=Av%C5%9Far%20Do%C4%9Fal%20Maden%20Suyu%20Fabrikas%C4%B1%2C%20Fatih%2C%2003750%20%C4%B0scehisar%2FAfyonkarahisar%2C%20T%C3%BCrkiye&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    className="iletisim-map"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>

                <div className="iletisim-container">
                    <div className="iletisim-info-column">
                        <h2 className="iletisim-title">İletişim bilgilerimiz üzerinden bize ulaşabilirsiniz.</h2>

                        <div className="iletisim-details">
                            <div className="iletisim-detail-item">
                                <div className="iletisim-icon-wrapper">
                                    <FaMapMarkerAlt />
                                </div>
                                <div className="iletisim-text">
                                    Şirinevler Mh. Avşar Deresi Cd. No:1<br />
                                    İscehisar / Afyonkarahisar
                                </div>
                            </div>

                            <div className="iletisim-detail-item">
                                <div className="iletisim-icon-wrapper">
                                    <FaPhone />
                                </div>
                                <div className="iletisim-text">
                                    Tel: +90 0272 341 5555
                                </div>
                            </div>

                            <div className="iletisim-detail-item">
                                <div className="iletisim-icon-wrapper">
                                    <FaFax />
                                </div>
                                <div className="iletisim-text">
                                    Fax: +90 0272 341 5500
                                </div>
                            </div>

                            <div className="iletisim-detail-item">
                                <div className="iletisim-icon-wrapper">
                                    <FaEnvelope />
                                </div>
                                <div className="iletisim-text">
                                    <a href="mailto:info@avsarmadensuyu.com" className="iletisim-detail-link">
                                        info@avsarmadensuyu.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="iletisim-form-column">
                        <form onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="text"
                                className="iletisim-input"
                                placeholder="Adınız ve Soyadınız"
                            />
                            <input
                                type="email"
                                className="iletisim-input"
                                placeholder="E-Posta Adresiniz"
                            />
                            <textarea
                                className="iletisim-textarea"
                                placeholder="Mesajınız"
                            ></textarea>

                            <button type="submit" className="iletisim-submit-btn" disabled>
                                GÖNDER
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Iletisim;
