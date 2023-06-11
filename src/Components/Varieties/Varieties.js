import React from 'react';
import './Varieties.css';
import Card from '../Card/Card';
import americano from '../../images/coffe/americano.png';
import cappuccino from '../../images/coffe/cappuccino.png';
import conPanna from '../../images/coffe/con-panna.png';
import espresso from '../../images/coffe/espresso.png';
import flatWhite from '../../images/coffe/flat-white.png';
import latte from '../../images/coffe/latte.png';
import macchiato from '../../images/coffe/macchiato.png';
import mocha from '../../images/coffe/mocha.png';
import ristereto from '../../images/coffe/ristereto.png';

class Varieties extends React.Component {
  render() {
    return (
      <div className="coffe-varieties">
        <div className="coffe-varieties__header">
          <h2 className="coffe-varieties__title">Різновиди кави</h2>
        </div>
        <div className="card-container coffe-varieties__card">
          <Card title="Americano" img={americano} />
          <Card title="Cappuccino" img={cappuccino} />
          <Card title="Con-panna" img={conPanna} />
          <Card title="Espresso" img={espresso} />
          <Card title="Flat-white" img={flatWhite} />
          <Card title="Mocchiato" img={macchiato} />
          <Card title="Mocha" img={mocha} />
          <Card title="Restereto" img={ristereto} />
          <Card title="Latte" img={latte} />
        </div>
      </div>
    );
  }
}

export default Varieties;
