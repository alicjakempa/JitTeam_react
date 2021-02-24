import React, { useState } from 'react';
import './style.scss';
import classNames from 'classnames';

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
                <li className="logo"><a href='#'>UniBox</a></li>
                <li className={classValue}><a href='#produkty'>Produkty</a></li>
                <li className={classValue}><a href='#nasza_firma'>Nasza firma</a></li>
                <li className={classValue}><a href='#kontakt'>Kontakt</a></li>
                <li className='toggle'><button onClick={() => setToggleClicked(!toggleClicked)}><i className="fas fa-bars"></i></ button></li>
            </ul>

        </nav>
    );
};

export default Menu
