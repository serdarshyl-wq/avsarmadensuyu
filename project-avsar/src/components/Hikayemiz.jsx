import { useEffect, useRef, useState } from 'react';
import './Hikayemiz.css';

const Hikayemiz = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            },
            {
                threshold: 0.2
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section className={`hikayemiz-section ${isVisible ? 'visible' : ''}`} ref={sectionRef}>
            <div className="hikayemiz-container">
                <div className="hikayemiz-image-wrapper">
                    <img
                        src="/logo-ve-diğerleri/anasayfa_hakkimizda.png"
                        alt="Avşar Maden Suyu Hakkımızda"
                        className="hikayemiz-img"
                    />
                </div>
                <div className="hikayemiz-content">
                    <h2 className="hikayemiz-title">HİKAYEMİZ</h2>
                    <div className="hikayemiz-text">
                        <p className="highlight-text">
                            Avşar Maden Suyu Afyonkarahisar-Ankara istikameti üzerinde, İscehisar ilçe merkezine 3km mesafede, Avşar Deresi mevkiindedir.
                        </p>
                        <p>
                            Avşar Maden Suyu hakkında ilk yazılı bilgi Türkiye çağında maden suyu ve kaplıcaların tetkiklerini yapan Prof. Dr. S. Calvi’nin 1940 yılında Türk Hıfzısıhha ve Tecrübi Biyoloji mecmuasının 3. sayısındadır. Bu yazıda Afyon’a dört saat mesafede Avşar Membaları’nın bulunduğundan bahsedilmektedir.
                        </p>
                        <p>
                            Daha sonraki yıllarda Avşar Maden Suları ile ilgili birçok araştırma ve analiz yapılmış ve Avşar Maden Suyunun üstün vasıflara sahip olduğu belirtilmiştir. İncelemelerin yapıldığı Avşar Maden Suyu kaynağının, membanın etrafına dizilmiş taşlardan oluşan bir havuzdan yaklaşık 0,13/sn. debi ile kaynamakta olduğu Dr. M. Sadettin AYGEN tarafından yazılmış “Afyonkarahisar Kaplıcaları ve Maden Suları” isimli makalede belirtilmiştir.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hikayemiz;
