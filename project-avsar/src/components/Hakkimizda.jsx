import React, { useEffect, useRef, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import PageBanner from './PageBanner';
import './Hakkimizda.css';

const Hakkimizda = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <Navbar />
            <div className={`hakkimizda-section ${isVisible ? 'visible' : ''}`} ref={sectionRef}>
                <PageBanner title="HAKKIMIZDA" pageIndex={0} />
                <div className="hakkimizda-wrapper">
                    <div className="hakkimizda-container">

                        <div className="hakkimizda-content">
                            <div className="hakkimizda-text">
                                <p>
                                    Avşar Maden Suyu Afyonkarahisar-Ankara istikameti üzerinde, İscehisar ilçe merkezine 3km mesafede, Avşar Deresi mevkiindedir.
                                </p>
                                <p>
                                    Avşar Maden Suyu hakkında ilk yazılı bilgi Türkiye çağında maden suyu ve kaplıcaların tetkiklerini yapan Prof. Dr. S. Calvi’nin 1940 yılında Türk Hıfzısıhha ve Tecrübi Biyoloji mecmuasının 3. sayısındadır. Bu yazıda Afyon’a dört saat mesafede Avşar Membaları’nın bulunduğundan bahsedilmektedir. Daha sonraki yıllarda Avşar Maden Suları ile ilgili birçok araştırma ve analiz yapılmış ve Avşar Maden Suyunun üstün vasıflara sahip olduğu belirtilmiştir.
                                </p>
                                <p>
                                    İncelemelerin yapıldığı Avşar Maden Suyu kaynağının, membanın etrafına dizilmiş taşlardan oluşan bir havuzdan yaklaşık 0,13/sn. debi ile kaynamakta olduğu Dr. M. Sadettin AYGEN tarafından yazılmış “Afyonkarahisar Kaplıcaları ve Maden Suları” isimli makalede belirtilmiştir.
                                </p>
                            </div>
                        </div>

                        <div className="hakkimizda-image-wrapper">
                            <img
                                src="/kurumsal-görseller/hakkimizda_2.jpg"
                                alt="Avşar Maden Suyu Hakkımızda"
                                className="hakkimizda-img"
                            />
                        </div>

                    </div>

                    <div className="hakkimizda-divider"></div>

                    <div className="hakkimizda-full-text">
                        <p>
                            Avşar Maden Suyu kaynağının içme amaçlı kullanımının yanısıra jeotermal sağlık kürü amaçlı kullanımı, kaynak noktasının yakınında bulunan 8 adet mağara ile anlaşılmaktadır. Avşar deresi civarında bulunan kayalara oyulmuş iki katlı mağaraların bulunması bu coğrafyada yerlerşim gösteren Eti ve Frig medeniyetleri tarafından Avşar Maden Suyu kaynağının sağlık amaçlı içme ve jeotermal kaplıca olarak kullanıldığını göstermektedir.
                        </p>
                        <p>
                            Eski Yunanlılarda Asklepionolarak adlandırılan Sıhhat Tanrısı Eskilop adına yaptırdıkları, sayısı 200 olarak bilinen tedavi merkezleri bulunmaktadır. Asklepionların ortak özellikleri ise ortada bulunan bir adet memba ve membanın etrafında dizilmiş odaların bulunmasıdır. Avşar Maden Suyunun bulunduğu mevkideki mağaraların Eski Yunanlılar döneminde de su tedavisi amacı ile şu anki modern ifade ile termal otel olarak kullanıldığını göstermektedir.
                        </p>
                        <p>
                            Tarih boyunca sağlık amacı ile kullanılmış olan Avşar Maden Suyu, 2015 yılında Demirci Hacı Ömer Oğulları Şirketler Grubu bünyesinde bulunan Şuayp Demirel İth. İhr. Taah. ve Tic. tarafından fabrika yatırımı başlatılarak, yurt içinde ve yurt dışında yaşayan insanların faydasına sunulmuştur.
                        </p>
                    </div>

                    <div className="hakkimizda-divider"></div>

                    <div className="hakkimizda-video-wrapper">
                        <iframe
                            width="100%"
                            height="500"
                            src="https://www.youtube.com/embed/izyfqmrjdyw"
                            title="Avşar Maden Suyu Tanıtım Filmi"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>

                    <div className="hakkimizda-sustainability-text">
                        <p>
                            Kurduğumuz güneş enerjisi sistemi ile yıllık yaklaşık 3.000.000 KWn enerji tüketimimizin tamamını güneşten sağlamayı hedeflemekteyiz.
                            Üretilen güneş enerji ile yıllık olarak neden olduğumuz 1230 ton CO2 salınımını %96 azaltarak iklim değişikliklerini yavaşlatmaya
                            bir katkımız olmakla birlikte doğadaki mevcut 184 ağacı kurtarmış olacağız. Ayrıca enerjimizi güneş ile üretirken hava kirliliği
                            ve su tüketiminin azalmasına katkı sağlamış olacağız.
                        </p>
                    </div>

                    <div className="hakkimizda-divider"></div>

                    <div className="sayilarla-section-wrapper">
                        <div className="sayilarla-content-box">
                            <h2 className="sayilarla-title">SAYILARLA AVŞAR</h2>
                            <p>
                                2021 yılında fabrikaya yapılan yatırımlarla üretim kapasitesi <span className="text-extra-bold">2 katına
                                </span> çıkarılmıştır. 2024 itibari ile Şuayp Demirel Madensuyu A.Ş. olarak faaliyet göstermektedir.
                            </p>
                            <p>
                                2021 yılında üretimde yapılan revizyonla;
                                Toplam <span className="text-extra-bold">330.000 m2</span> alan üzerine inşa edilen Avşar Maden Suyu fabrikası
                                <span className="text-extra-bold">16.200 m2</span> üretim, <span className="text-extra-bold">1.800 m2</span> idari bina olmak üzere
                                <span className="text-extra-bold">18.000 m2</span> kapalı alana sahip olup
                                <span className="text-extra-bold">100.000</span> şişe/saat üretim kapasitesi ile üstün hijyen koşullarında üretim yapmayı sağlayacak üst düzey teknolojiye sahiptir.
                            </p>
                        </div>

                        <div className="visible-trigger-stats"></div>

                        <div className="stats-container">
                            <CountUpCard end={2015} label="KURULUŞ YILI" useGrouping={false} />
                            <CountUpCard end={100000} label="ŞİŞE ÜRETİM KAPASİTESİ (Saat)" suffix="" />
                            <CountUpCard end={16200} label="ÜRETİM ALANI" suffix=" m²" />
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    );
};

const CountUpCard = ({ end, label, suffix = '', useGrouping = true }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                let start = 0;
                const duration = 2000;
                const increment = Math.ceil(end / (duration / 16));

                const timer = setInterval(() => {
                    start += increment;
                    if (start >= end) {
                        setCount(end);
                        clearInterval(timer);
                    } else {
                        setCount(start);
                    }
                }, 16);

                observer.disconnect();
            }
        }, { threshold: 0.5 });

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [end]);

    return (
        <div className="stat-card" ref={ref}>
            <div className="stat-number">
                {count.toLocaleString('tr-TR', { useGrouping })}
                {suffix}
            </div>
            <div className="stat-label">{label}</div>
        </div>
    );
};

export default Hakkimizda;
