import React from 'react';
import { Link } from 'react-router-dom';
import './Haberler.css';

const newsData = [
    {
        id: 1,
        image: '/logo-ve-diğerleri/haber1.jpg',
        title: "AVŞAR MADEN SUYU'NA TAM NOT",
        link: "/haberler#news-1"
    },
    {
        id: 2,
        image: '/logo-ve-diğerleri/haber2.jpg',
        title: "ARTIK SİZE ÇOK YAKINIZ",
        link: "/haberler#news-2"
    },
    {
        id: 3,
        image: '/logo-ve-diğerleri/haber3.jpg',
        title: "GÜNDE 1 MİLYON ŞİŞE",
        link: "/haberler#news-3"
    }
];

const Haberler = () => {
    return (
        <section className="haberler-section">
            <h2 className="section-title">BİZDEN HABERLER</h2>
            <div className="haberler-grid">
                {newsData.map((news) => (
                    <Link to={news.link} key={news.id} className="haber-card-link">
                        <div className="haber-card">
                            <div className="haber-image-wrapper">
                                <img
                                    src={news.image}
                                    alt={news.title}
                                    className="haber-image"
                                />
                            </div>
                            <h3 className="haber-title">{news.title}</h3>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default Haberler;
