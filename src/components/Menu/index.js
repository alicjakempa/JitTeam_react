import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import classNames from 'classnames';
import MyRoutes from '../main';



function Menu() {

    const [toggleClicked, setToggleClicked] = useState(false);

    console.log('test!', toggleClicked);

    const classValue = classNames({
        'item': true,
        'active': toggleClicked
    });

    return (
        <nav>
            <ul className='menu'>
                <li className="logo"><Link to={'/'} className="nav-link">UniBox</Link></li>
                <li className={classValue}><Link to={'/produkty'} className="nav-link">Produkty</Link></li>
                <li className={classValue}><Link to={'/naszaFirma'} className="nav-link">Nasza Firma</Link></li>
                <li className={classValue}><Link to={'/kontakt'} className="nav-link">Kontakt</Link></li>
                <li className='toggle'><button onClick={() => setToggleClicked(!toggleClicked)}><i className="fas fa-bars"></i></ button></li>
            </ul>
            <MyRoutes />
        </nav>
    );
};

export default Menu
