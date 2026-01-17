import React from 'react';
import './PageBanner.css';

const PageBanner = ({ title }) => {

    const products = [
        '/urunler/dogal-maden-suyu.png',
        '/urunler/urun_berryhibiscus.png',
        '/urunler/urun_dusesarmudunektarin.png',
        '/urunler/urun_coollime.png'
    ];

    return (
        <div className="page-banner-section">
            <div className="page-banner-container">
                <h1 className="page-banner-title">{title}</h1>

                <div className="page-banner-products">
                    {products.map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            alt="Avşar Doğal Maden Suyu"
                            className="banner-product-ref"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PageBanner;
