import React from 'react';
import PageHeader from '../../components/Atoms/PageHeader';
import Value from '../../components/AboutUsSections/Value';
import Choose from '../../components/AboutUsSections/Choose';
const index = () => {
  return (
    <div>
      <PageHeader
        title={'About us'}
        desc="Discover What Clear Data Insights Can Do For Your Business"
      />
      <Value />
      <Choose />
    </div>
  );
};

export default index;
