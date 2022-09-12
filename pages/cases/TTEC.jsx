import React from 'react';
import PageHeader from 'components/Atoms/PageHeader';
import Challenge from '../../components/CasesSections/Challenge';
import Deal from '../../components/CasesSections/Deal';
import { deal_TTEC, TTEC_resultData } from '../../public/data';
import Result from '../../components/CasesSections/Results';
const Bimbo = () => {
  return (
    <div>
      <PageHeader
        title="TTEC"
        desc="The entire industry is using AI to make strategic decisions. Dont be left behind! Let our data scientists help you!"
      />
      <Challenge
        list={[
          'TTEC was looking to develop a Workforce Automation solution that would provide their WFM and Operations teams with real-time information on what agents are doing.          ',
          'They needed a system that allow them to improve the costs of their workforce management operations and provide key metrics for operational performance.          ',
          'A solution capable of integrating with their tools, monitor their agents in real time and alert supervisors and WFM specialists of any performance and schedule deviation.          ',
        ]}
        img={'/img/cases/challenge_TTEC.png'}
      />
      <Deal deal_data={deal_TTEC} />
      <Result
        results_data={TTEC_resultData.cards_data}
        rightImage={TTEC_resultData.right_image}
      />
    </div>
  );
};

export default Bimbo;
