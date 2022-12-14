import React from 'react';
import PageHeader from 'components/Atoms/PageHeader';
import Challenge from '../../components/CasesSections/Challenge';
import Deal from '../../components/CasesSections/Deal';
import { deal_bimbo, bimbo_resultData } from '../../public/data';
import Result from '../../components/CasesSections/Results';
const Bimbo = () => {
  return (
    <div>
      <PageHeader
        title="BIMBO"
        desc=""
        show={false}
      />
      <Challenge
        list={[
          'The aim was to centralize information from multiple sources and model a centralized repository to meet the needs of the business with a focus on customers and business profitability.',
          'Automate profitability generation processes',
          'Facilitate and promote self-service BI',
        ]}
        //img={'/img/cases/challenge_bimbo.png'}
        img={'/img/cases/Bimbo-challenge.png'}
      />
      <Deal deal_data={deal_bimbo} />
      <Result
        results_data={bimbo_resultData.cards_data}
        rightImage={bimbo_resultData.right_image}
      />
    </div>
  );
};

export default Bimbo;
