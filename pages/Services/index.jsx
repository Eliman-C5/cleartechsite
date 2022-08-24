import React from 'react';
import PageHeader from 'components/Atoms/PageHeader';
import ServicesCards from 'components/ServicesSections/ServicesCards';
import Provide from 'components/ServicesSections/Provide';
import Industries from 'components/ServicesSections/Industries';
import Support from '../../components/ServicesSections/Support';
const index = () => {
  return (
    <div>
      <PageHeader
        title="What we offer"
        desc="We grow your organizational analytics capabilities. With the right help, you can create better value with your data assets, maximizing its potential."
      />
      <ServicesCards />
      <Provide />
      <Industries />
      <Support />
    </div>
  );
};

export default index;
