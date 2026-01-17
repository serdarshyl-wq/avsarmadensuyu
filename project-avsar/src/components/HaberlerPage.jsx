import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import PageBanner from './PageBanner';
import './HaberlerPage.css';

const newsData = [
    {
        id: 1,
        image: '/logo-ve-diğerleri/haber11.jpg',
        title: "AVŞAR MADEN SUYU'NA TAM NOT",
        content: `Maden suyu üretimi esnasında yapılan çalışmayı yerinde inceleyen Bakan Eroğlu, en son teknoloji ile donatılmış modern bir fabrika yapıldığını dile getirdi. Afyonkarahisar’da yapılan yatırımlara sonuna kadar destek verdiklerini söyleyen Eroğlu, fabrikayı kuran Şuayip ve Adnan Demirel’e teşekkür etti. Beraberindeki heyetle birlikte madensuyu içen Eroğlu, “Güzel bir madensuyu içtik. Bilindiği gibi hükümet olarak yatırım yapmak isteyen iş adamlarımıza her zaman destek olduk ve olmaya da devam edeceğiz. İscehisar ilçemize Şuayip ve Adnan Beyler güzel bir fabrika kazandırmışlar. Ben fabrikanın ilçemize, ilimize ve ülkemize hayırlı olmasını diliyorum” dedi. Kaynak:Gazete3`
    },
    {
        id: 2,
        image: '/logo-ve-diğerleri/haber2.jpg',
        title: "ARTIK SİZE ÇOK YAKINIZ!",
        content: `Geleneksel lezzetin modern sunumu; Afyonkarahisar’ın yeni maden suyu Avşar Maden suyu, marketlerde yerini almaya başladı.`
    },
    {
        id: 3,
        image: '/logo-ve-diğerleri/haber3.jpg',
        title: "GÜNDE 1 MİLYON ŞİŞE",
        content: `Afyonkarahisar’ın İscehisar ilçesinde Demireller Şirketler Grubu tarafından yeni kurulan Avşar Madensuyu fabrikasında günde 1 milyon şişe maden suyu üretilecek.
Tesisi ziyaret eden Kaymakam Ali Altınkaynak, ilçeye güzel bir yatırım kazandırıldığını söyledi. Kaymakam Altınkaynak’a Avşar Madensuyu Fabrikasını gezdiren, Demireller Şirketleri Grubu Yönetim Kurulu Başkanı Şuayip Demirel fabrika hakkında bilgiler verdi. Demirel, “50 bin metrekare düz alan oluşturularak 16 bin metrekare kapalı alana yaptığımız maden suyu dolum tesisinde 25 litre saniyede, günde 1 milyon, saatte 50 bin şişe maden suyu üretilme kapasitemiz bulunmaktadır” dedi.
Maden suyu üretimi esnasında yapılan çalışmayı yerinde inceleyen Kaymakam Altınkaynak, en son teknoloji ile donatılmış modern bir fabrika yapıldığını dile getirdi. Fabrikayı kuran Şuayip Demirel’e teşekkür eden Altınkaynak, “Güzel bir madensuyu içtik. İlçemiz artık mermerinden sonra madensuyu ile dünyaya ismini duyuracak. Avşar Madensuyu vatandaşlarımız içinde yeni bir istihdam kapısı olacak güzel bir fabrika kazandırmışlar. Ben fabrikanın ilçemize, ilimize ve ülkemize hayırlı olmasını diliyorum” diye konuştu.`
    }
];

const HaberlerPage = () => {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [hash]);

    return (
        <>
            <Navbar />
            <div className="haberler-page-container">
                <PageBanner title="HABERLER" pageIndex={4} />
                <div className="haberler-content-wrapper">
                    <div className="news-list">
                        {newsData.map((news) => (
                            <div key={news.id} id={`news-${news.id}`} className="news-item">
                                <div className="news-image-wrapper">
                                    <img
                                        src={news.image}
                                        alt={news.title}
                                        className="news-image"
                                    />
                                </div>
                                <div className="news-content">
                                    <h2 className="news-title">{news.title}</h2>
                                    {news.content.split('\n').map((paragraph, index) => (
                                        <p key={index} className="news-text">{paragraph}</p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default HaberlerPage;
