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
        desc=""
        show={false}
      />
      <Challenge
        list={[
          'NFP had been working with another consultancy firm for some time. The main tasks were centered around gathering information from a set of data collection systems (DCS), condensing the information in a Data Warehouse, refining said information, and creating Reports for end users.',
          'This Data Model had several unnecessary complexities, and the Reports were struggling to be accurate and reflect the reality of the business operations.           ',
          'Most of these Reports were aimed at external stakeholders, investors, and partners, which exposed the client to negative remarks.',
        ]}
        img={'/img/cases/challenge_NFP.png'}
      />
      <Deal deal_data={deal_NFP} />
      <Result
        results_data={NFP_resultData.cards_data}
        rightImage={NFP_resultData.right_image}
      />
    </div>
  );
};

export default Bimbo;
