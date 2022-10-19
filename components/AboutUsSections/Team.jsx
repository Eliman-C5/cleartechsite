import Section from 'components/Wrappers/NormalAndFadeInSection';
import { team } from '../../public/data';
import Button from 'components/Atoms/Button';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// import required modules
import { Pagination, Navigation } from 'swiper';

const TeamCard = ({ image, name, job, likedinlink }) => {
  return (
    <div className="lg:w-[20%] mb-[45px]">
      <div className="flex flex-col justify-center items-center  w-[90%]">
        <img src={image} alt={name} className="mb-[20px]" />
        <p className="font-bold roboto text-[16px] text-center mb-[15px] ">{name}</p>
        <p className="text-center text-base h-[40px] mb-[15px] ">{job}</p>
        <img src="/img/team/linkedin.svg" className="cursor-pointer" />
      </div>
    </div>
  );
};
const Team = () => {
  return (
    <Section>
      <article>
        <h2 className="tittles" style={{ marginBottom: '20px' }}>
          Our <span className="gradient_title ">Team</span>
        </h2>
        <div className="hidden lg:flex flex-wrap ">
          {team.map((t) => (
            <TeamCard image={t.image} name={t.name} job={t.job} />
          ))}
        </div>
        {/*slider for mobile*/}
        <div className="lg:hidden relative">
          <Swiper
            pagination={false}
            modules={[Navigation]}
            spaceBetween={20}
            loop={true}
            slidesPerView={1.5}
            className="mySwiper"
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
          >
            {team.map((t) => (
              <SwiperSlide>
                <TeamCard image={t.image} name={t.name} job={t.job} />
              </SwiperSlide>
            ))}
          </Swiper>
          <button className="swiper-button-prev absolute bottom-[-70px] left-0 ">
            <img src="/img/Left.svg" alt="left" />
          </button>
          <button className="swiper-button-next absolute bottom-[-70px]  right-0 ">
            <img src="/img/Right.svg" alt="left" />
          </button>
        </div>
      </article>
      <div className="flex justify-center mt-[30px]">
        <Button title="Contact us" link={'/contact'} />
      </div>
    </Section>
  );
};

export default Team;
