import React from 'react'
import Img from '../img/mcKinleyCard.png'

export default function McKinleyCard(props) {
  return (
    <div className='mcKinleyCard'>
        <div className="mcKinleyCard__item">
            <div className="mcKinleyCard__img">
                <img src={Img} alt="" />
            </div>
            <div className="mcKinleyCard__title">
                {props.title ? props.title : 'Intellectual Property'}
            </div>
            <div className="mcKinleyCard__subtitle">
                Intellectual Property law deals with laws to protect creators and owners of inventions, writing, music, designs and other works.
            </div>
            <div className="mcKinleyCard__more">
                Learn More
            </div>
            
        </div>
    </div>
  )
}
