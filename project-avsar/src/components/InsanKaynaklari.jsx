import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import PageBanner from './PageBanner';
import './InsanKaynaklari.css';

const InsanKaynaklari = () => {
    const [fileName, setFileName] = useState('Dosya seçilmedi');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleFileChange = (e) => {
        if (e.target.files.length > 0) {
            setFileName(e.target.files[0].name);
        } else {
            setFileName('Dosya seçilmedi');
        }
    };

    return (
        <>
            <Navbar />
            <div className="ik-section">
                <PageBanner title="İNSAN KAYNAKLARI" pageIndex={6} />
                <div className="ik-container">
                    <div className="ik-text-column">
                        <h3 className="ik-policy-title">İNSAN KAYNAKLARI POLİTİKAMIZ</h3>
                        <p className="ik-policy-text">
                            İnsan Kaynakları yönetimi, dinamik, gelişime açık ve yenilikçi bir ortam oluşturarak
                            çalışanların performanslarını artırmayı, kurumsal hedefleri bireysel hedeflere indirgemeyi
                            böylece şirket hedeflerimize etkin ve verimli biçimde ulaşılmasını desteklemekle yükümlüdür.
                        </p>
                        <p className="ik-apply-note">
                            İş başvurusunu yandaki formdan doldurabilirsiniz.
                        </p>
                    </div>

                    <div className="ik-form-column">
                        <h2 className="ik-form-title">İş Başvuru Formu</h2>
                        <p style={{ marginBottom: '20px', color: '#666' }}>
                            İş başvurularınız için alt kısımdaki formu doldurabilirsiniz.
                        </p>

                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className="ik-form-group">
                                <label className="ik-label">Adınız Soyadınız</label>
                                <input type="text" className="ik-input" placeholder="Adınız Soyadınız" />
                            </div>

                            <div className="ik-form-group">
                                <label className="ik-label">E-Posta Adresiniz</label>
                                <input type="email" className="ik-input" placeholder="ornek@email.com" />
                            </div>

                            <div className="ik-form-group">
                                <label className="ik-label">Doğum Tarihiniz</label>
                                <input type="date" className="ik-input" />
                            </div>

                            <div className="ik-form-group">
                                <label className="ik-label">Telefon Numaranız</label>
                                <input type="tel" className="ik-input" placeholder="05XX XXX XX XX" />
                            </div>

                            <div className="ik-file-upload">
                                <span className="ik-file-label-text">Fotoğraflı CV Dosyanız</span>
                                <div className="ik-file-input-wrapper">
                                    <label htmlFor="cv-upload" className="ik-file-button">
                                        Dosya Seç
                                    </label>
                                    <span className="ik-file-name">{fileName}</span>
                                    <input
                                        type="file"
                                        id="cv-upload"
                                        onChange={handleFileChange}
                                        accept=".pdf,.doc,.docx,.jpg,.png"
                                    />
                                </div>
                            </div>

                            <button type="submit" className="ik-submit-btn" disabled>
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

export default InsanKaynaklari;
