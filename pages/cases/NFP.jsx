import React from 'react';
import PageHeader from 'components/Atoms/PageHeader';
import Challenge from '../../components/CasesSections/Challenge';
import Deal from '../../components/CasesSections/Deal';
import { deal_NFP, NFP_resultData } from '../../public/data';
import Result from '../../components/CasesSections/Results';
const Bimbo = () => {
  return (
    <div>
      <PageHeader
        title="NFP"
        desc="The entire industry is using AI to make strategic decisions. Dont be left behind! Let our data scientists help you!"
      />
      <Challenge
        list={[
          'NFP had been working with another consultancy firm for some time. The main tasks were centered around gathering information from a set of data collection systems (DCS), condensing the information in a Data Warehouse, refining said information, and creating Reports for end users.',
          'This Data Model had several unnecessary complexities, and the Reports were struggling to be accurate and reflect the reality of the business operations.           ',
          'Most of this Reports were aimed at external stakeholders, investors, and partners, which exposed the client to negative remarks.',
        ]}
        img={'/img/cases/challenge_NFP.png'}
      />
      <Deal deal_data={deal_NFP} />
      <Result results_data={NFP_resultData} />
    </div>
  );
};

export default Bimbo;
