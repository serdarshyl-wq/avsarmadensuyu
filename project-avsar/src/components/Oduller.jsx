import React from 'react';
import './Oduller.css';

const Oduller = () => {
    return (
        <section className="oduller-section">
            <div className="oduller-container">
                <div className="oduller-left">
                    <img
                        src="/urunler/dogal-maden-suyu.png"
                        alt="Doğal Maden Suyu"
                        className="odul-bottle-left"
                    />
                </div>

                <div className="oduller-center">
                    <img
                        src="/logo-ve-diğerleri/ribbon_superiortaste.png"
                        alt="Superior Taste Award"
                        className="odul-ribbon"
                    />
                    <div className="odul-text-content">
                        <h2 className="odul-title">LEZZETİMİZ ÖDÜLLÜ!</h2>
                        <p className="odul-subtitle">DÜNYA ÇAPINDA PRESTİJE SAHİP SERTİFİKALARLA ONURLANDIRILDIK!</p>
                    </div>
                </div>

                <div className="oduller-right">
                    <img
                        src="/urunler/urun_greyfurtyabanmersini.png"
                        alt="Greyfurt & Yaban Mersini"
                        className="odul-bottle-right"
                    />
                </div>
            </div>
        </section>
    );
};

export default Oduller;
