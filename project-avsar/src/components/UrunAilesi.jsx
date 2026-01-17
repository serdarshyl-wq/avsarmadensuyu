import { useState, useRef, useEffect } from 'react';
import './UrunAilesi.css';

const rawProducts = [
    { id: 1, image: 'dogal-maden-suyu.png', name: 'Doğal Maden Suyu' },
    { id: 2, image: 'urun_berryhibiscus.png', name: 'Berry & Hibiscus' },
    { id: 3, image: 'urun_coollime.png', name: 'Cool Lime' },
    { id: 4, image: 'urun_dusesarmudunektarin.png', name: 'Düşes Armudu & Nektarin' },
    { id: 5, image: 'urun_gazoznew.png', name: 'Gazoz' },
    { id: 6, image: 'urun_greyfurtyabanmersini.png', name: 'Greyfurt & Yaban Mersini' },
    { id: 7, image: 'urun_immune.png', name: 'Immune' },
    { id: 8, image: 'urun_karadutfrenk.png', name: 'Karadut & Frenk Üzümü' },
    { id: 9, image: 'urun_karamixnew.png', name: 'Karamix' },
    { id: 10, image: 'urun_karpuzcilek.png', name: 'Karpuz & Çilek' },
    { id: 11, image: 'urun_kirmizielma.png', name: 'Kırmızı Elma' },
    { id: 12, image: 'urun_kivi_limon.png', name: 'Kivi & Limon' },
    { id: 13, image: 'urun_limon.png', name: 'Limon' },
    { id: 14, image: 'urun_limonata.png', name: 'Limonata' },
    { id: 15, image: 'urun_limoncplus.png', name: 'Limon C+' },
    { id: 16, image: 'urun_mandalina.png', name: 'Mandalina' },
    { id: 17, image: 'urun_mangoananas.png', name: 'Mango & Ananas' },
    { id: 18, image: 'urun_sirkeli.png', name: 'Sirkeli' },
    { id: 19, image: 'urun_tutkumuz.png', name: 'Tutkumuz' },
    { id: 20, image: 'urun_tuzluerik.png', name: 'Tuzlu Erik' },
    { id: 21, image: 'urun_tuzlukaramel.png', name: 'Tuzlu Karamel' },
    { id: 22, image: 'urun_volkanik.png', name: 'Volkanik' },
    { id: 23, image: 'urun_yesilelma.png', name: 'Yeşil Elma' },
];

const products = [...rawProducts, ...rawProducts, ...rawProducts];

const UrunAilesi = () => {
    const [activeIndex, setActiveIndex] = useState(rawProducts.length);
    const [centerOffset, setCenterOffset] = useState(0);
    const sliderRef = useRef(null);
    const transitionEnabled = useRef(true);

    const [itemWidth, setItemWidth] = useState(300);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            const newItemWidth = width <= 768 ? 250 : 300;
            setItemWidth(newItemWidth);

            const visible = width / newItemWidth;
            setCenterOffset(Math.floor(visible / 2));
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (activeIndex >= products.length - rawProducts.length) {
            setTimeout(() => {
                transitionEnabled.current = false;
                setActiveIndex(rawProducts.length + (activeIndex % rawProducts.length));
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        transitionEnabled.current = true;
                    });
                });
            }, 500);
        } else if (activeIndex < rawProducts.length) {
            setTimeout(() => {
                transitionEnabled.current = false;
                setActiveIndex(rawProducts.length + activeIndex);
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        transitionEnabled.current = true;
                    });
                });
            }, 500);
        } else {
            transitionEnabled.current = true;
        }
    }, [activeIndex]);


    const handleNext = () => {
        setActiveIndex(prev => prev + 1);
    };

    const handlePrev = () => {
        setActiveIndex(prev => prev - 1);
    };

    return (
        <section className="urun-ailesi-section">
            <h2 className="section-title">AVŞAR ÜRÜN AİLESİ</h2>
            <div className="slider-container" ref={sliderRef}>
                <button
                    className="control-btn prev-btn"
                    onClick={handlePrev}
                >
                    &#10094;
                </button>
                <div
                    className="slider-track"
                    style={{
                        transform: `translateX(calc(-${activeIndex * itemWidth}px + 50vw - ${itemWidth / 2}px))`,
                        transition: transitionEnabled.current ? 'transform 0.5s ease-out' : 'none'
                    }}
                >
                    {products.map((product, index) => {
                        const isActive = index === activeIndex;

                        return (
                            <div
                                key={`${product.id}-${index}`}
                                className={`slider-item ${isActive ? 'active' : ''}`}
                                onClick={() => setActiveIndex(index - centerOffset)}
                            >
                                <div className="product-card">
                                    <img
                                        src={`/urunler/${product.image}?v=3`}
                                        alt={product.name}
                                        className="product-image"
                                    />
                                    <h3 className="product-name">{product.name}</h3>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <button
                    className="control-btn next-btn"
                    onClick={handleNext}
                >
                    &#10095;
                </button>
            </div>
        </section>
    );
};

export default UrunAilesi;
