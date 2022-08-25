import React from 'react';
import PageHeader from 'components/Atoms/PageHeader';
import Challenge from '../../components/CasesSections/Challenge';
import Deal from '../../components/CasesSections/Deal';
import { deal_bimbo } from '../../public/data';
import Result from '../../components/CasesSections/Results';
const Bimbo = () => {
  return (
    <div>
      <PageHeader
        title="BIMBO"
        desc="The entire industry is using AI to make strategic decisions. Dont be left behind! Let our data scientists help you!"
      />
      <Challenge
        list={[
          'The aim was to centralize information from multiple sources and model a centralized repository to meet the needs of the business with a focus on customers and business profitability.',
          'Automate profitability generation processes',
          'Facilitate and promote self-service BI',
        ]}
        img={'/img/cases/challenge_bimbo.png'}
      />
      <Deal deal_data={deal_bimbo} />
      <Result />
    </div>
  );
};

export default Bimbo;
