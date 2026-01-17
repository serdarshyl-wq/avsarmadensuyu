import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './IntroAnimation.css';

function IntroAnimation({ onComplete }) {
    const containerRef = useRef(null);
    const centerProductRef = useRef(null);
    const leftProductRef = useRef(null);
    const rightProductRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({
            onComplete: () => {
                setTimeout(() => onComplete(), 300);
            }
        });

        gsap.set(centerProductRef.current, { opacity: 0, scale: 0.5 });
        gsap.set(leftProductRef.current, { x: 0, y: 0, rotation: 0, opacity: 0 });
        gsap.set(rightProductRef.current, { x: 0, y: 0, rotation: 0, opacity: 0 });

        tl
            .to(centerProductRef.current, {
                opacity: 1,
                scale: 1,
                duration: 0.6,
                ease: 'back.out(1.7)'
            })
            .to([leftProductRef.current, rightProductRef.current], {
                opacity: 1,
                x: (index) => index === 0 ? -50 : 50,
                y: -20,
                rotation: (index) => index === 0 ? -10 : 10,
                duration: 0.6,
                ease: 'power2.out'
            }, '-=0.2')
            .to([leftProductRef.current, rightProductRef.current], {
                opacity: 0,
                x: 0,
                y: 0,
                rotation: 0,
                duration: 0.5,
                ease: 'power2.in'
            }, '+=0.4')
            .to(containerRef.current, {
                opacity: 0,
                duration: 0.5,
                ease: 'power2.inOut'
            }, '+=0.2');

    }, [onComplete]);

    return (
        <div ref={containerRef} className="intro-container">
            <div className="intro-products">
                <img
                    ref={leftProductRef}
                    src="/urunler/urun_greyfurtyabanmersini.png"
                    alt="Grey Furt Yaban Mersini"
                    className="intro-product intro-product-left"
                />
                <img
                    ref={centerProductRef}
                    src="/urunler/dogal-maden-suyu.png"
                    alt="Doğal Maden Suyu"
                    className="intro-product intro-product-center"
                />
                <img
                    ref={rightProductRef}
                    src="/urunler/urun_dusesarmudunektarin.png"
                    alt="Düşe Şarmu Nektarin"
                    className="intro-product intro-product-right"
                />
            </div>
        </div>
    );
}

export default IntroAnimation;
