import Navbar from './Navbar';
import HeroSlider from './HeroSlider';
import Hikayemiz from './Hikayemiz';
import UrunAilesi from './UrunAilesi';
import Oduller from './Oduller';
import Haberler from './Haberler';
import Footer from './Footer';
import './HomePage.css';

function HomePage({ introComplete }) {
    return (
        <>
            <Navbar />
            <HeroSlider introComplete={introComplete} />
            <Hikayemiz />
            <UrunAilesi />
            <Oduller />
            <Haberler />
            <Footer />
        </>
    );
}

export default HomePage;
