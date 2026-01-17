import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import PageBanner from './PageBanner';
import './BasindaBiz.css';
import { FaPlus, FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';

const BasindaBiz = () => {
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);


    const images = [
        { id: 1, src: '/kurumsal-basın/basın1.jpg' },
        { id: 2, src: '/kurumsal-basın/basın2.jpg' },
        { id: 3, src: '/kurumsal-basın/basın3.jpg' },
        { id: 4, src: '/kurumsal-basın/basın4.jpg' },
        { id: 5, src: '/kurumsal-basın/basın5.jpg' },
        { id: 6, src: '/kurumsal-basın/basın6.jpg' },
        { id: 7, src: '/kurumsal-basın/basın7.jpg' },
        { id: 8, src: '/kurumsal-basın/basın8.jpg' },
        { id: 9, src: '/kurumsal-basın/basın9.jpg' },
        { id: 10, src: '/kurumsal-basın/basın10.jpg' },
        { id: 11, src: '/kurumsal-basın/basın11.webp' },
        { id: 12, src: '/kurumsal-basın/basın12.jpg' },
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const openLightbox = (index) => {
        setSelectedImageIndex(index);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setSelectedImageIndex(null);
        document.body.style.overflow = 'auto';
    };

    const nextImage = (e) => {
        e.stopPropagation();
        setSelectedImageIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = (e) => {
        e.stopPropagation();
        setSelectedImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <>
            <Navbar />
            <div className="basindabiz-section">
                <PageBanner title="BASINDA BİZ" pageIndex={5} />
                <div className="basindabiz-container">
                    <div className="basindabiz-grid">
                        {images.map((img, index) => (
                            <div
                                key={img.id}
                                className="basindabiz-item"
                                onClick={() => openLightbox(index)}
                            >
                                <img src={img.src} alt={`Basında Biz ${img.id}`} className="basindabiz-image" />
                                <div className="basindabiz-overlay">
                                    <FaPlus className="basindabiz-icon" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            {selectedImageIndex !== null && ReactDOM.createPortal(
                <div
                    className="lightbox-modal active"
                    onClick={closeLightbox}
                >
                    <div className="lightbox-close" onClick={closeLightbox}>
                        <FaTimes />
                    </div>
                    <button className="lightbox-arrow lightbox-prev" onClick={prevImage}>
                        <FaChevronLeft />
                    </button>
                    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <img
                            src={images[selectedImageIndex].src}
                            alt={`Basında Biz Full ${selectedImageIndex + 1}`}
                            className="lightbox-image"
                        />
                    </div>
                    <button className="lightbox-arrow lightbox-next" onClick={nextImage}>
                        <FaChevronRight />
                    </button>
                </div>,
                document.body
            )}

            <Footer />
        </>
    );
};

export default BasindaBiz;
