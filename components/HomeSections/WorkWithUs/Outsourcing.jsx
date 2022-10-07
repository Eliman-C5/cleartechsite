import React from 'react';
import FeatureSection from './FeatureSection';

const LittleCards = [
  {
    id: 1,
    icon: '/img/icons/workwithus/clock.svg',
    title: 'Saves Time',
  },
  {
    id: 2,
    icon: '/img/icons/workwithus/user.svg',
    title: 'Best-in-class Staff',
  },
  {
    id: 3,
    icon: '/img/icons/workwithus/briefcase.svg',
    title: 'Benefits from Experience',
  },
  {
    id: 4,
    icon: '/img/icons/workwithus/credit-card.svg',
    title: 'Reduces Costs',
  },
  {
    id: 5,
    icon: '/img/icons/workwithus/fi_settings.svg',
    title: 'Continuous Support',
  },
  {
    id: 6,
    icon: '/img/icons/workwithus/flag.svg',
    title: 'Concentrate on running your business',
  },
];

const LittleCard = ({ icon, title }) => {
  return (
    <div className="w-[40%] md:w-[15%] mb-10 md:mb-0">
      <img src={icon} alt={title} className='mx-auto mb-[10px]'/>
      <p className=" text-color02_blue text-sm text-center">{title}</p>
    </div>
  );
};

const Outsourcing = () => {
  return (
    <FeatureSection>
      <p className=" text-color02_blue">
        From design to reality: we build custom end-to-end solutions that
        satisfy your needs.{' '}
        <span className="font-bold">The benefits of outsorcing are:</span>
      </p>
      <div className="flex flex-wrap justify-between mt-[40px]">
        {LittleCards.map((item) => (
          <LittleCard key={item.id} icon={item.icon} title={item.title} />
        ))}
      </div>
    </FeatureSection>
  );
};

export default Outsourcing;
