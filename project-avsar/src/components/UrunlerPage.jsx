import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import PageBanner from './PageBanner';
import './UrunlerPage.css';

const products = [
    { id: 1, image: 'dogal-maden-suyu.png', name: 'Doğal Maden Suyu', fruits: [] },
    { id: 2, image: 'urun_berryhibiscus.png', name: 'Berry & Hibiscus', fruits: ['meyve_berry_hibiscus.png'] },
    { id: 3, image: 'urun_coollime.png', name: 'Cool Lime', fruits: ['meyve_cool-lime.png'] },
    { id: 4, image: 'urun_dusesarmudunektarin.png', name: 'Düşes Armudu & Nektarin', fruits: ['meyve_duses-armudu.png', 'meyve_seftali.png'] },
    { id: 5, image: 'urun_gazoznew.png', name: 'Gazoz', fruits: ['meyve_gazoz.png'] },
    { id: 6, image: 'urun_greyfurtyabanmersini.png', name: 'Greyfurt & Yaban Mersini', fruits: ['meyve-greyfurt.png', 'meyve-yaban-mersini.png'] },
    { id: 7, image: 'urun_immune.png', name: 'Immune', fruits: ['meyve_acai.png', 'meyve_murver-cicegi.png'] },
    { id: 8, image: 'urun_karadutfrenk.png', name: 'Karadut & Frenk Üzümü', fruits: ['meyve-karadut.png', 'meyve_frenk-üzümü.png'] },
    { id: 9, image: 'urun_karamixnew.png', name: 'Karamix', fruits: [] },
    { id: 10, image: 'urun_karpuzcilek.png', name: 'Karpuz & Çilek', fruits: ['meyve_karpuz.png', 'meyve_cilek.png'] },
    { id: 11, image: 'urun_kirmizielma.png', name: 'Kırmızı Elma', fruits: ['meyve_kırmızı-elma.png'] },
    { id: 12, image: 'urun_kivi_limon.png', name: 'Kivi & Limon', fruits: ['meyve_kivi.png', 'meyve_limon.png'] },
    { id: 13, image: 'urun_limon.png', name: 'Limon', fruits: ['meyve_limon.png'] },
    { id: 14, image: 'urun_limonata.png', name: 'Limonata', fruits: ['meyve_limonata.png'] },
    { id: 15, image: 'urun_limoncplus.png', name: 'Limon C+', fruits: ['meyve_limon.png'] },
    { id: 16, image: 'urun_mandalina.png', name: 'Mandalina', fruits: ['meyve_mandalina.png'] },
    { id: 17, image: 'urun_mangoananas.png', name: 'Mango & Ananas', fruits: ['meyve_mango.png', 'meyve_ananas.png'] },
    { id: 18, image: 'urun_sirkeli.png', name: 'Sirkeli', fruits: ['meyve_seftali.png', 'meyve_kara-murver.png'] },
    { id: 19, image: 'urun_tutkumuz.png', name: 'Tutkumuz', fruits: ['meyve_tutku-meyvesi.png', 'meyve_muz.png'] },
    { id: 20, image: 'urun_tuzluerik.png', name: 'Tuzlu Erik', fruits: ['meyve_yesil-erik.png'] },
    { id: 21, image: 'urun_tuzlukaramel.png', name: 'Tuzlu Karamel', fruits: ['meyve_karamel.webp'] },
    { id: 22, image: 'urun_volkanik.png', name: 'Volkanik', fruits: [] },
    { id: 23, image: 'urun_yesilelma.png', name: 'Yeşil Elma', fruits: ['meyve_yesil-elma.png'] },
];

const UrunlerPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Navbar />
            <div className="urunler-page-container">
                <PageBanner title="ÜRÜNLERİMİZ" pageIndex={3} />
                <div className="urunler-content-wrapper">
                    <div className="urunler-grid">
                        {products.map((product) => (
                            <div key={product.id} className="urun-card">
                                <div className="urun-image-wrapper">
                                    {product.fruits.map((fruit, idx) => (
                                        <img
                                            key={idx}
                                            src={`/urunler-meyve/${fruit}`}
                                            alt=""
                                            className={`fruit-img fruit-${idx} ${product.fruits.length === 1 ? 'fruit-single' : ''}`}
                                        />
                                    ))}
                                    <img
                                        src={`/urunler/${product.image}`}
                                        alt={product.name}
                                        className="urun-image"
                                    />
                                </div>
                                <h3 className="urun-name">{product.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default UrunlerPage;
