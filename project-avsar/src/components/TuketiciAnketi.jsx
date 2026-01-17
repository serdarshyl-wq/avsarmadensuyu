import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import PageBanner from './PageBanner';
import './TuketiciAnketi.css';

const TuketiciAnketi = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const products = [
        "Sade", "Karadut & Frenk", "Mango Ananas", "Tutkumuz", "Immune",
        "Düşes Armudu Nektarin", "Mandalina C Plus", "Limon C Plus", "Kivi & Limon",
        "Karpuz & Çilek", "Yeşil Elma", "Limon", "Gazoz", "Karamix", "Cool Lime",
        "Limonata", "Kırmızı Elma", "Sirkeli", "Volkanik", "Berry Hibiscus", "Tuzlu Erik",
        "Tuzlu Karamel", "Greyfurt & Yaban Mersini"
    ];

    const reasons = [
        "Marka", "Kalite", "Fiyat", "Duyusal (Tat, Koku)", "İçerik", "Ambalaj",
        "Üretim Yeri", "Güven"
    ];

    return (
        <>
            <Navbar />
            <div className="anket-section">
                <PageBanner title="TÜKETİCİ MEMNUNİYETİ ANKETİ" pageIndex={3} />
                <div className="anket-container">
                    <form className="anket-form" onSubmit={(e) => e.preventDefault()}>

                        <div className="anket-group">
                            <label className="anket-label anket-label-required">Adınız ve Soyadınız</label>
                            <input type="text" className="anket-input" required />
                        </div>

                        <div className="anket-group">
                            <label className="anket-label anket-label-required">Yaşınız</label>
                            <input type="text" className="anket-input" required />
                        </div>

                        <div className="anket-group">
                            <label className="anket-label">Telefon Numaranız</label>
                            <input type="tel" className="anket-input" />
                        </div>

                        <div className="anket-group">
                            <label className="anket-label anket-label-required">E-posta Adresi</label>
                            <input type="email" className="anket-input" required />
                        </div>

                        <div className="anket-group">
                            <label className="anket-label">Adresiniz</label>
                            <input type="text" className="anket-input" />
                        </div>

                        <div className="anket-group">
                            <label className="anket-label">Avşar Maden Suyu'nu lezzetli buluyor musunuz?</label>
                            <select className="anket-select">
                                <option>Evet</option>
                                <option>Hayır</option>
                                <option>Kısmen</option>
                            </select>
                        </div>

                        <div className="anket-group">
                            <label className="anket-label">Avşar Maden Suyu'nun ambalaj tasarımı sizce nasıl?</label>
                            <select className="anket-select">
                                <option>Çok İyi</option>
                                <option>İyi</option>
                                <option>Orta</option>
                                <option>Kötü</option>
                            </select>
                        </div>

                        <div className="anket-group">
                            <label className="anket-label">Avşar Maden Suyu'nu kaliteli buluyor musunuz?</label>
                            <select className="anket-select">
                                <option>Evet</option>
                                <option>Hayır</option>
                                <option>Kısmen</option>
                            </select>
                        </div>

                        <div className="anket-group">
                            <label className="anket-label">Avşar Maden Suyu ile iletişime geçmek istediğinizde hızlı bir şekilde iletişim kurabiliyor musunuz?</label>
                            <select className="anket-select">
                                <option>Evet</option>
                                <option>Hayır</option>
                            </select>
                        </div>

                        <div className="anket-group">
                            <label className="anket-label">Avşar Maden Suyu ile ilgili herhangi bir bildiriminizde geri dönüşler size hızlı bir şekilde yapılıyor mu?</label>
                            <select className="anket-select">
                                <option>Evet</option>
                                <option>Hayır</option>
                            </select>
                        </div>

                        <div className="anket-group">
                            <label className="anket-label">Avşar Maden Suyu'nun fiyat politikası sizce nasıl?</label>
                            <select className="anket-select">
                                <option>Çok İyi</option>
                                <option>İyi</option>
                                <option>Pahalı</option>
                                <option>Ucuz</option>
                            </select>
                        </div>

                        <div className="anket-group">
                            <label className="anket-label">Avşar Maden Suyu'nu kolaylıkla temin edebiliyor musunuz?</label>
                            <select className="anket-select">
                                <option>Evet</option>
                                <option>Hayır</option>
                                <option>Zorlanıyorum</option>
                            </select>
                        </div>

                        <div className="anket-group">
                            <label className="anket-label anket-label-required">Avşar Maden Suyu'nun hangi ürünlerini tercih ediyorsunuz?</label>
                            <div className="anket-checkbox-group">
                                {products.map((item, idx) => (
                                    <label key={idx} className="anket-checkbox-label">
                                        <input type="checkbox" className="anket-checkbox" />
                                        {item}
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="anket-group">
                            <label className="anket-label anket-label-required">Avşar Maden Suyu'nu tercih etme sebebiniz nedir?</label>
                            <div className="anket-checkbox-group">
                                {reasons.map((item, idx) => (
                                    <label key={idx} className="anket-checkbox-label">
                                        <input type="checkbox" className="anket-checkbox" />
                                        {item}
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="anket-group">
                            <label className="anket-label">Görüş ve Öneriler</label>
                            <textarea className="anket-textarea"></textarea>
                        </div>

                        <button type="submit" className="anket-submit-btn" disabled>Mesaj Gönder</button>

                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default TuketiciAnketi;
