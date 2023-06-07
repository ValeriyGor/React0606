import React from 'react';
import './McKinley.css';
import McKinleyBody from './mcKinleyBody/mcKinleyBody';
import McKinleyCard from './McKinleyCard/McKinleyCard';

export default function McKinley() {
    const subtitle = 'We understand the difficulties and stress that your legal issues bring. Our team is committed to providing you with the individual attention, communication, and dedication you deserve.'
  return (
    <div className='mcKinley-component'>
        <div className="mcKinley-container">
            <McKinleyBody title='Corporate Legal Representation' subtitle={subtitle} />
        </div>
        <div className="mcKinleyCard-container">
            <McKinleyCard title='Real Estate' />
            <McKinleyCard title='Tax Law'/>
            <McKinleyCard />
        </div>
    </div>
  )
}
