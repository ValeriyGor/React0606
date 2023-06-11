import React from 'react';
import './Coffe.css';
import Varieties from '../../Components/Varieties/Varieties';
import Description from '../../Components/Description/Description';

class Coffe extends React.Component {
  render() {
    return (
      <div className="coffe">
        <div className="coffe-header">
          <h1 className="coffe-header__title">Чому кава популярний продукт?</h1>
        </div>
        <Description />
        <hr></hr>
        <Varieties />
      </div>
    );
  }
}

export default Coffe;
