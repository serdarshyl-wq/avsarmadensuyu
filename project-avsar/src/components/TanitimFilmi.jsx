import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import PageBanner from './PageBanner';
import './TanitimFilmi.css';

const TanitimFilmi = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Navbar />
            <div className="tanitim-section">
                <PageBanner title="TANITIM FİLMİ" pageIndex={5} />
                <div className="tanitim-container">
                    <div className="video-wrapper">
                        <iframe
                            src="https://www.youtube.com/embed/Xd5z24nY65s"
                            title="Avşar Maden Suyu Tanıtım Filmi"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default TanitimFilmi;
