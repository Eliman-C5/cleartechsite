import React from 'react'
import Section from 'components/Wrappers/NormalAndFadeInSection';

const CookieText = () => {
  return (
    <Section>
      <h2 
        className='tittles' 
        style={{ marginBottom: '20px', textAlign: 'left' }}
      >
        Our Cookie Policy
      </h2>
      <p>Once you agree to allow our website to use cookies, you also agree to use the data it collects regarding your online behavior (analyze web traffic, web pages you spend the most time on, and websites you visit).</p>
      <p>The data we collect by using cookies is used to customize our website to your needs. After we use the data for statistical analysis, the data is completely removed from our systems.</p>
      <p>Please note that cookies don't allow us to gain control of your computer in any way. They are strictly used to monitor which pages you find useful and which you do not so that we can provide a better experience for you.</p>
      <p>
      If you want to disable cookies, you can do it by accessing the settings of your internet browser. You can visit <a href="https://www.internetcookies.com" target='_blank' className='text-blue-700 underline'>www.internetcookies.com</a>, which contains comprehensive information on how to do this on a wide variety of browsers and devices.
      </p>
    </Section>
  )
}

export default CookieText