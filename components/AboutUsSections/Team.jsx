import Section from 'components/Wrappers/NormalAndFadeInSection';
import { team } from '../../public/data';

const TeamCard = ({ image, name, job, likedinlink }) => {
  return (
    <div className="w-[20%] mb-[45px]">
      <div className="flex flex-col justify-center items-center  w-[80%]">
        <img src={image} alt={name} className="mb-[20px]" />
        <p className="font-bold roboto text-center mb-[10px] ">{name}</p>
        <p className="text-center text-sm h-[40px] mb-[10px] ">{job}</p>
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
        <div className="flex flex-wrap">
          {team.map((t) => (
            <TeamCard image={t.image} name={t.name} job={t.job} />
          ))}
        </div>
      </article>
    </Section>
  );
};

export default Team;
