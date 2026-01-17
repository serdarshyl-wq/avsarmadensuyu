import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import PageBanner from './PageBanner';
import './Galeri.css';
import { FaPlus, FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';

const Galeri = () => {
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);


    const images = Array.from({ length: 24 }, (_, i) => ({
        id: i + 1,
        src: `/kurumsal-galeri/g${i + 1}.jpg`
    }));

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
            <div className="galeri-section">
                <PageBanner title="GALERİ" pageIndex={6} />
                <div className="galeri-container">
                    <div className="galeri-grid">
                        {images.map((img, index) => (
                            <div
                                key={img.id}
                                className="galeri-item"
                                onClick={() => openLightbox(index)}
                            >
                                <img src={img.src} alt={`Galeri ${img.id}`} className="galeri-image" />
                                <div className="galeri-overlay">
                                    <FaPlus className="galeri-icon" />
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
                            alt={`Galeri Full ${selectedImageIndex + 1}`}
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

export default Galeri;
