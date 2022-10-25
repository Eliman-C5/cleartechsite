import React from 'react'
import PageHeader from 'components/Atoms/PageHeader';
import DataWeCollect from 'components/PrivacySection/DataWeCollect';
import { dataWeCollect } from '../../public/data';
import PrivacySections from 'components/PrivacySection/PrivacySections';
import PrivacyDesc from 'components/PrivacySection/PrivacyDesc';

const index = () => {
  return (
    <div>
      <PageHeader 
        title='Privacy Policy'
        desc=''
        show={false}
      />
      <PrivacyDesc />
      <DataWeCollect 
        title='What User Data We Collect'
        desc='When you visit the website, we may collect the following data:'
        info={dataWeCollect.what_user}
      />
      <DataWeCollect 
        title='Why We Collect Your Data'
        desc='We are collecting your data for several reasons:'
        info={dataWeCollect.why_user}
      />
      <PrivacySections />
    </div>
  )
}

export default index