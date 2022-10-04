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
        desc="We help your organization develop its data &amp; analytics capabilities. With us, you can add value to your data assets, maximizing its potential"
      />
      <ServicesCards />
      <Provide />
      <Industries />
      <Support />
    </div>
  );
};

export default index;
