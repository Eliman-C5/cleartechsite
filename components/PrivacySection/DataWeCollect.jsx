import React from 'react'
import Section from 'components/Wrappers/NormalAndFadeInSection';

const DataWeCollect = ({title, desc, info}) => {
  return (
    <Section>
      <h2 
        className='tittles' 
        style={{ marginBottom: '20px' }}
      >
        {title}
      </h2>
      <p style={{ marginBottom: '20px' }}>{desc}</p>
      <ul>
      {
        info.map(data => (
          <li key={data.id} className='list-disc w-[95%] mx-auto roboto mb-5 text-color03_black'>
            {data.text}
          </li>))
      }
      </ul>
    </Section>
  )
}

export default DataWeCollect