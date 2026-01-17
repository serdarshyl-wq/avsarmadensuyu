import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import IntroAnimation from './components/IntroAnimation';
import HomePage from './components/HomePage';
import UrunlerPage from './components/UrunlerPage';
import HaberlerPage from './components/HaberlerPage';
import Hakkimizda from './components/Hakkimizda';
import Belgelerimiz from './components/Belgelerimiz';
import KurulusPolitikamiz from './components/KurulusPolitikamiz';
import TanitimFilmi from './components/TanitimFilmi';
import Galeri from './components/Galeri';
import BasindaBiz from './components/BasindaBiz';
import InsanKaynaklari from './components/InsanKaynaklari';
import TuketiciAnketi from './components/TuketiciAnketi';
import Iletisim from './components/Iletisim';
import './App.css';

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);
  const [introComplete, setIntroComplete] = useState(false);

  const handleIntroComplete = () => {
    setShowIntro(false);
    setFadeIn(true);
    setTimeout(() => {
      setIntroComplete(true);
    }, 1000);
  };

  return (
    <>
      {showIntro && <IntroAnimation onComplete={handleIntroComplete} />}

      <div className={`main-content ${fadeIn ? 'fade-in' : ''}`}>
        <Routes>
          <Route path="/" element={<HomePage introComplete={introComplete} />} />
          <Route path="/urunlerimiz" element={<UrunlerPage />} />
          <Route path="/haberler" element={<HaberlerPage />} />
          <Route path="/kurumsal/hakkimizda" element={<Hakkimizda />} />
          <Route path="/kurumsal/belgelerimiz" element={<Belgelerimiz />} />
          <Route path="/kurumsal/kurulus-politikamiz" element={<KurulusPolitikamiz />} />
          <Route path="/kurumsal/tanitim-filmi" element={<TanitimFilmi />} />
          <Route path="/kurumsal/galeri" element={<Galeri />} />
          <Route path="/kurumsal/basinda-biz" element={<BasindaBiz />} />
          <Route path="/kurumsal/insan-kaynaklari" element={<InsanKaynaklari />} />
          <Route path="/kurumsal/tuketici-anketi" element={<TuketiciAnketi />} />
          <Route path="/iletisim" element={<Iletisim />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
