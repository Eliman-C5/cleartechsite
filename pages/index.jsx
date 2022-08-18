//import Hello from 'components/hello';
import HeroSection from 'components/HomeSections/HeroSection';
import LogoSection from 'components/HomeSections/LogoSection';
import AboutUsSection from 'components/HomeSections/AboutUsSection';
import Cases from 'components/HomeSections/CasesSection';
import WorkWithUs from 'components/HomeSections/WorkWithUs';
import Map from 'components/HomeSections/MapSection';
import Contact from 'components/HomeSections/Contact';
const Home = () => {
  return (
    <>
      <HeroSection />
      <LogoSection />
      <AboutUsSection />
      <Cases />
      <WorkWithUs />
      <Map />
      <Contact />
    </>
  );
};

export default Home;
