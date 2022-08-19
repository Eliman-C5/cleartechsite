import React from 'react';
import FeatureSection from './FeatureSection';

const LittleCards = [
  {
    id: 1,
    icon: '/img/icons/workwithus/clock.svg',
    title: 'Time Savings',
  },
  {
    id: 2,
    icon: '/img/icons/workwithus/user.svg',
    title: 'Best technical staff',
  },
  {
    id: 3,
    icon: '/img/icons/workwithus/briefcase.svg',
    title: 'Benefits from our experience',
  },
  {
    id: 4,
    icon: '/img/icons/workwithus/credit-card.svg',
    title: 'Cost savings',
  },
  {
    id: 5,
    icon: '/img/icons/workwithus/fi_settings.svg',
    title: 'Excelent support',
  },
  {
    id: 6,
    icon: '/img/icons/workwithus/flag.svg',
    title: 'Focus on core bussiness activity',
  },
];

const LittleCard = ({ icon, title }) => {
  return (
    <div className="w-[40%] md:w-[15%] mb-10 md:mb-0">
      <img src={icon} alt={title} />
      <p className=" text-color02_blue text-sm">{title}</p>
    </div>
  );
};

const Outsourcing = () => {
  return (
    <FeatureSection>
      <p className=" text-color02_blue">
        From design to reality: We build customized end-to-end solutions that
        satisfy your needs. We fix costs into variable costs and help to release
        the capital for investment in your business.{' '}
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
