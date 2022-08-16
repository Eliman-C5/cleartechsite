import React from 'react';
import { cases } from '../../../public/data';
import Card from './Card';
const ThreeCases = () => {
  return (
    <div className="flex justify-between">
      {cases.map((c) => (
        <Card
          key={c.id}
          imgsrc={c.img}
          title={c.title}
          desc={c.desc}
          link={c.link}
        />
      ))}
    </div>
  );
};

export default ThreeCases;
