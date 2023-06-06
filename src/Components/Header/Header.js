import './Header.css';
import logo from '../../images/logo.svg';

import {NavLink} from "react-router-dom";

function Header(props) {
    return (
        <header>
            <div className="container">
                <div>
                    <img src={logo} className="logo" alt={props.altlogo} />
                </div>
                <ul className="menu">
                    <li>
                        <NavLink to="/">Products</NavLink>
                    </li>
                    <li>
                        <NavLink to="/analytics">Analytics</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contacts">Contacts</NavLink>
                    </li><li>
                        <NavLink to="/famouspeople">Famous-People</NavLink>
                    </li>
                    <li>
                        <NavLink to="/films">Films</NavLink>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header