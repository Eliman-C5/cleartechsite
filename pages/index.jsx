//import Hello from 'components/hello';
import HeroSection from 'components/HomeSections/HeroSection';
import LogoSection from 'components/HomeSections/LogoSection';
import AboutUsSection from 'components/HomeSections/AboutUsSection';
import Cases from 'components/HomeSections/CasesSection';
import WorkWithUs from 'components/HomeSections/WorkWithUs';
import Map from 'components/HomeSections/MapSection';
import Contact from 'components/HomeSections/Contact';
import Testimonials from 'components/Testimonials';
const Home = () => {
  return (
    <>
      <HeroSection />
      <LogoSection />
      <WorkWithUs />
      <Cases />
      <AboutUsSection />
      <Map />
      <Testimonials />
      <Contact />
    </>
  );
};

export default Home;
