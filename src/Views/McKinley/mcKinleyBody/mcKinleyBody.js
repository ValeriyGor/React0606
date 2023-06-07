import React from 'react'
import img from '../img/img-right.png';


function McKinleyBody(props) {
  return (
    <div className='mcKinleyBody'>
        <div className="mcKinleyBody--left">
            <div className="mcKinleyBody__title">
                {props.title}
            </div>
            <div className="mcKinleyBody__subtitle">
                {props.subtitle}
            </div>
            <div className="mcKinleyBody__button">
                <button>Request Consultation</button>
            </div>
        </div>
        <div className="mcKinleyBody--right">
            <img src={img} alt="img" />
        </div>
    </div>
  )
}

export default McKinleyBody
