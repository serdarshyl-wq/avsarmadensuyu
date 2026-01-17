import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import PageBanner from './PageBanner';
import './KurulusPolitikamiz.css';

const KurulusPolitikamiz = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const policies = [
        {
            image: "/kurumsal-görseller/kuruluş2.jpeg",
            text: "AVŞAR MADEN SUYU, Müşterilerinin inanç, istek ve ihtiyaçlarını ulusal ve uluslararası standart ve şartnamelere uygun olarak en kısa zamanda ve daima karşılamayı politika edinmiştir."
        },
        {
            image: "/kurumsal-görseller/hakkımızda3.png",
            text: "AVŞAR MADEN SUYU, yönetimi olarak kalitenin ve verimliliğin artırılması ve iyileştirilmesine yönelik yapılacak çalışmalara her türlü destek verilecektir."
        }
    ];

    return (
        <>
            <Navbar />
            <div className="kurulus-section">
                <PageBanner title="KURULUŞ POLİTİKAMIZ" pageIndex={2} />
                <div className="kurulus-container">
                    {policies.map((policy, index) => (
                        <div key={index} className="policy-card">
                            <div className="policy-image-wrapper">
                                <img src={policy.image} alt={`Politika ${index + 1}`} className="policy-image" />
                            </div>
                            <div className="policy-content">
                                <p className="policy-text">{policy.text}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="kurulus-text-container">
                    <h2 className="kurulus-subtitle">KURULUŞUMUZ</h2>
                    <div className="kurulus-text-content">
                        <p>
                            Birinci amaç olarak çevreyi koruyarak %100 HELAL, kaliteli ve güvenli gıda sağlamayı, eğitimli çalışanlarımızla birlikte, teknolojik gelişmeyi yakından takip ederek, sürekli gelişme bilinciyle İslami kurallara uygun, güvenilir, dürüst, planlı, zamanında, istenen kalitede iş yapmayı,
                        </p>
                        <p>
                            çalışanlarımızın daha fazla sorumluluk üstlenmelerini, kendilerini geliştirmeye olanak tanımayı ve çalışanların etkin katılımını sağlamayı,
                        </p>
                        <p>
                            Helal, Kalite, Çevre ve Gıda Güvenliği Yönetim sisteminin gereklerini tüm çalışanların yerine getirdiği bir tesiste, kirliliği önleyerek çevreye en az zarar veren üretim metotlarını uygulayarak, mümkün olabilen en düşük maliyetle üretilmiş en güvenilir ürünleri piyasaya sunmayı,
                        </p>
                        <p>
                            tedarikçilerimizle hizmetin kalitesinin artırılması ve müşteri memnuniyetine yönelik uygulamalarda açık iletişim kanalları oluşturmayı,
                        </p>
                        <p>
                            Uzman yönetim kadrosu ve eğitimli personeli ile ekip çalışmasını ön planda tutarak müşteri memnuniyetini en üst seviyede sağlamayı,
                        </p>
                        <p>
                            Helal Gıda Yönetim, Kalite Yönetim, Çevre Yönetim ve Gıda Güvenliği Yönetim Sistemlerini yasa, mevzuatlar, müşteri şartları ve standart şartlarına uyarak sürekli iyileştirmeyi,
                        </p>
                        <p>
                            Firmamız Entegre Yönetim Sistemi Politikası olarak benimsemiştir.
                        </p>
                        <div className="signature-box">
                            <span className="signature-name">Mehmet BAŞPINAR</span>
                            <span className="signature-title">Genel Müdür</span>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default KurulusPolitikamiz;
