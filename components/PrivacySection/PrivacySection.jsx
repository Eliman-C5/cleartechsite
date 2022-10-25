import React from 'react'
import Section from 'components/Wrappers/NormalAndFadeInSection';

const PrivacySection = ({title, info}) => {
  return (
    <Section>
      <h2 
        className='tittles' 
        style={{ marginBottom: '20px', textAlign: 'left' }}
      >
        {title}
      </h2>
      {
        info.map(data => (
          <p key={data.id}>
            {data.text}
          </p>))
      }
    </Section>
  )
}

export default PrivacySection