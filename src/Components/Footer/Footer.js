import React from 'react';
import logo from '../../images/logo.svg';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <div className='footer-container'>
        <ul className='footer-menu'>
        <li>List 1
            {/* <a href='#'></a> */}
          </li>
          <li>List 2
            {/* <a href='#'></a> */}
          </li>
          <li>
            <img src={logo} className="logo" alt="logo" />
          </li>
          <li>List 4
          </li>
          <li>List 5
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer