import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import PageBanner from './PageBanner';
import './Belgelerimiz.css';

const Belgelerimiz = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const documents = [
        "/kurumsal-görseller/belge1.jpg",
        "/kurumsal-görseller/belge2.jpg",
        "/kurumsal-görseller/belge3.jpg",
        "/kurumsal-görseller/belge4.jpg",
        "/kurumsal-görseller/belge5.jpg",
        "/kurumsal-görseller/belge6.jpg",
        "/kurumsal-görseller/belge7.jpg"
    ];

    const openModal = (image) => {
        setSelectedImage(image);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedImage(null);
        document.body.style.overflow = 'auto';
    };

    return (
        <>
            <Navbar />
            <div className="belgelerimiz-section">
                <PageBanner title="BELGELERİMİZ" pageIndex={1} />
                <div className="belgelerimiz-container">

                    <div className="belgelerimiz-grid">
                        {documents.map((doc, index) => (
                            <div key={index} className="belge-card" onClick={() => openModal(doc)}>
                                <img
                                    src={doc}
                                    alt={`Belge ${index + 1}`}
                                    className="belge-image"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {selectedImage && (
                <div className="lightbox-overlay" onClick={closeModal}>
                    <div className="lightbox-content-wrapper" onClick={(e) => e.stopPropagation()}>
                        <button className="lightbox-close" onClick={closeModal}>&times;</button>
                        <img src={selectedImage} alt="Full Screen" className="lightbox-image" />
                    </div>
                </div>
            )}

            <Footer />
        </>
    );
};

export default Belgelerimiz;
