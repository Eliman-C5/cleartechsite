import Menu from 'components/HomeSections/AboutUS/Menu';
import Manager from 'components/HomeSections/AboutUS/Manager';
import Button from 'components/Atoms/Button';
import Section from 'components/Wrappers/NormalAndFadeInSection';

const AboutUsSection = () => {
  return (
    <Section>
      <h2 className="tittles" style={{ marginBottom: '20px' }}>
        We make <span className="gradient_title ">data meaningful</span> for
        your business{' '}
      </h2>
      <p className="md:text-center roboto text-color03_black   mx-auto mb-[30px]">
        We bring the best solutions for every challenge, we a field of experts
        giving you a multidiscplinary, proactive and agile team.
      </p>
      <Menu />
      <Manager />
      <div className="flex justify-center mt-[35px]">
        <Button title={'Know how'} contactButton={false} link={'/Services'} />
      </div>
    </Section>
  );
};

export default AboutUsSection;
