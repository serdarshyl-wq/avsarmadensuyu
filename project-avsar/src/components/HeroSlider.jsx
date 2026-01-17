import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import './HeroSlider.css';

function HeroSlider({ introComplete }) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const bgImageRef = useRef(null);
    const productRef = useRef(null);
    const backProductRef = useRef(null);
    const product1Ref = useRef(null);
    const product2Ref = useRef(null);
    const product3Ref = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const descriptionRef = useRef(null);
    const isFirstRender = useRef(true);

    const slides = [
        {
            bgImage: '/silder-görseller/duses-armudu-background.png',
            backProduct: '/silder-görseller/duses-armudu.png',
            product: '/urunler/urun_dusesarmudunektarin.png',
            title: 'Doğal Zengin Mineralli',
            subtitle: 'Düşes Armudu Aromalı ',
            description: 'Tadı damakta bırakan lezzet'
        },
        {
            bgImage: '/silder-görseller/slider-2-bg.jpg',
            bgOpacity: 0.7,
            layout: 'three-products',
            products: [
                { image: '/urunler/dogal-maden-suyu.png' },
                { image: '/urunler/dogal-maden-suyu.png' },
                { image: '/urunler/dogal-maden-suyu.png' }
            ],
            tagline: 'Lezzeti Doğallığından'


        },
        {
            bgImage: '/silder-görseller/slider-3-bg.png',
            bgOpacity: 1,
            layout: 'v-carousel',
            allProducts: [
                { image: '/urunler/urun_karadutfrenk.png', scale: 0.65 },
                { image: '/urunler/urun_karpuzcilek.png', scale: 0.85 },
                { image: '/urunler/urun_mandalina.png', scale: 1.05 },
                { image: '/urunler/dogal-maden-suyu.png', scale: 1.25 },
                { image: '/urunler/urun_limoncplus.png', scale: 1.05 },
                { image: '/urunler/urun_tutkumuz.png', scale: 0.85 },
                { image: '/urunler/urun_greyfurtyabanmersini.png', scale: 0.65 }
            ],
            title: 'Her Damak Tadına Uygun Aromalar'
        },

    ];

    useEffect(() => {
        const currentSlideData = slides[currentSlide];
        const isThreeProducts = currentSlideData.layout === 'three-products';
        const isProductCarousel = currentSlideData.layout === 'product-carousel';

        gsap.set(bgImageRef.current, { scale: 1.3, opacity: 0 });

        if (isThreeProducts) {
            if (product1Ref.current) gsap.set(product1Ref.current, { y: 100, opacity: 0 });
            if (product2Ref.current) gsap.set(product2Ref.current, { y: 100, opacity: 0 });
            if (product3Ref.current) gsap.set(product3Ref.current, { y: 100, opacity: 0 });
        } else if (isVCarousel) {
            gsap.set('.v-carousel-item', { opacity: 0 });
            gsap.set('.v-carousel-item img', { y: 100 });
        } else {
            if (backProductRef.current) {
                gsap.set(backProductRef.current, { y: 100, scale: 0.6, opacity: 0 });
            }
            if (productRef.current) {
                gsap.set(productRef.current, { y: 100, scale: 0.7, opacity: 0 });
            }
        }

        gsap.set(titleRef.current, { y: 50, scale: 0.8, opacity: 0 });
        if (subtitleRef.current) {
            gsap.set(subtitleRef.current, { y: 50, scale: 0.8, opacity: 0 });
        }
        gsap.set(descriptionRef.current, { y: 50, scale: 0.8, opacity: 0 });

        if (!introComplete && isFirstRender.current) {
            return;
        }

        const delay = isFirstRender.current ? 0.5 : 0;
        const tl = gsap.timeline({ delay });

        tl.to(bgImageRef.current, {
            scale: 1,
            opacity: currentSlideData.bgOpacity || 1,
            duration: 1.2,
            ease: 'power3.out'
        });

        if (isThreeProducts) {
            tl.to(product3Ref.current, {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: 'back.out(1.3)'
            }, '-=0.6')
                .to(product2Ref.current, {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: 'back.out(1.3)'
                }, '-=0.5')
                .to(product1Ref.current, {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: 'back.out(1.3)'
                }, '-=0.5');
        } else if (isVCarousel) {
            tl.to('.v-carousel-item', {
                opacity: 1,
                duration: 0.5,
                stagger: 0.1,
            }, '-=0.5')
                .to('.v-carousel-item img', {
                    y: 0,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: 'back.out(1.3)'
                }, '<');
        } else {
            if (backProductRef.current) {
                tl.to(backProductRef.current, {
                    y: 0,
                    scale: 1,
                    opacity: 1,
                    duration: 1,
                    ease: 'back.out(1.3)'
                }, '-=0.8');
            }

            if (productRef.current) {
                tl.to(productRef.current, {
                    y: 0,
                    scale: 1,
                    opacity: 1,
                    duration: 1,
                    ease: 'back.out(1.3)'
                }, '-=0.8');
            }


        }

        tl.to(titleRef.current, {
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: 'back.out(1.3)'
        }, '-=0.6');

        if (subtitleRef.current) {
            tl.to(subtitleRef.current, {
                y: 0,
                scale: 1,
                opacity: 1,
                duration: 0.8,
                ease: 'back.out(1.3)'
            }, '-=0.7');
        }

        tl.to(descriptionRef.current, {
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: 'back.out(1.3)'
        }, '-=0.5');

        if (isFirstRender.current) {
            isFirstRender.current = false;
        }
    }, [currentSlide, introComplete]);

    useEffect(() => {
        if (!introComplete) return;

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 20000);

        return () => clearInterval(interval);
    }, [introComplete, slides.length, currentSlide]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };



    const currentSlideData = slides[currentSlide];
    const isThreeProducts = currentSlideData.layout === 'three-products';
    const isVCarousel = currentSlideData.layout === 'v-carousel';

    return (
        <div className="hero-slider" data-slide={currentSlide}>
            <div
                className="hero-bg-image"
                ref={bgImageRef}
                style={{ opacity: currentSlideData.bgOpacity || 1 }}
            >
                {currentSlideData.bgImage.includes('gradient') ? null : <img src={currentSlideData.bgImage} alt="Background" />}
            </div>

            {currentSlideData.tagline && (
                <div className="hero-tagline">{currentSlideData.tagline}</div>
            )}

            {!isVCarousel && (
                <div className="hero-content">
                    <h1 ref={titleRef}>{currentSlideData.title}</h1>
                    {currentSlideData.subtitle && (
                        <h2 className="hero-subtitle" ref={subtitleRef}>{currentSlideData.subtitle}</h2>
                    )}
                    <p ref={descriptionRef}>{currentSlideData.description}</p>
                </div>
            )}

            {isThreeProducts ? (
                <div className="hero-three-products">
                    <div className="product-item" ref={product1Ref}>
                        <img src={currentSlideData.products[0].image} alt="Product 1" />
                    </div>
                    <div className="product-item center" ref={product2Ref}>
                        <img src={currentSlideData.products[1].image} alt="Product 2" />
                    </div>
                    <div className="product-item" ref={product3Ref}>
                        <img src={currentSlideData.products[2].image} alt="Product 3" />
                    </div>
                </div>
            ) : isVCarousel ? (
                <div className="v-carousel-container">
                    <div className="v-carousel-title" ref={titleRef}>
                        <h1>{currentSlideData.title}</h1>
                    </div>

                    {currentSlideData.allProducts && currentSlideData.allProducts.map((product, index) => {
                        const totalProducts = currentSlideData.allProducts.length;
                        const centerIndex = Math.floor(totalProducts / 2);
                        const distanceFromCenter = index - centerIndex;

                        const absDist = Math.abs(distanceFromCenter);
                        const calculatedDist = absDist * 150 - (absDist * absDist * 10);
                        const horizontalSpacing = Math.sign(distanceFromCenter) * calculatedDist;

                        const verticalOffset = absDist * 10;

                        return (
                            <div
                                key={index}
                                className="v-carousel-item"
                                style={{
                                    transform: `translateX(${horizontalSpacing}px) translateY(-${verticalOffset}px) scale(${product.scale})`,
                                    zIndex: 100 - Math.abs(distanceFromCenter),
                                    height: `${400 * product.scale}px`
                                }}
                            >
                                <img src={product.image} alt={`Product ${index + 1}`} />
                            </div>
                        );
                    })}
                </div>
            ) : (
                <div className="hero-product-container">
                    {currentSlideData.backProduct && (
                        <div className="hero-back-product" ref={backProductRef}>
                            <img src={currentSlideData.backProduct} alt="Background Product" />
                        </div>
                    )}
                    {currentSlideData.product && (
                        <div className="hero-product" ref={productRef}>
                            <img src={currentSlideData.product} alt={currentSlideData.title} />
                        </div>
                    )}
                </div>
            )}

            <button className="slider-arrow slider-arrow-left" onClick={prevSlide}>
                ‹
            </button>
            <button className="slider-arrow slider-arrow-right" onClick={nextSlide}>
                ›
            </button>
            <div className="slider-dots">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`slider-dot ${currentSlide === index ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
}

export default HeroSlider;
