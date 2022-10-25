import React from 'react'
import { privacyInfo } from '../../public/data'
import CookieText from './CookieText'
import PrivacySection from './PrivacySection'

const PrivacySections = () => {
  return (
    <div>
      <PrivacySection 
        title='Safeguarding and Securing the Data'
        info={privacyInfo.safeguarding}
      />
      <CookieText />
      <PrivacySection 
        title='Links to Other Websites'
        info={privacyInfo.websites}
      />
      <PrivacySection 
        title='Restricting the Collection of your Personal Data'
        info={privacyInfo.restricting}
      />
    </div>
  )
}

export default PrivacySections