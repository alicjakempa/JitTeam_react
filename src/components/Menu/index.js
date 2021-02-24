import React, { useState, useEffect } from 'react';
import './style.scss';

function Menu() {

    const [toggleClicked, setToggleClicked] = useState(false);

    console.log('test!', toggleClicked);


    return (

        <nav>
            <ul className='menu'>
                <li className="logo"><a href='#'>UniBox</a></li>
                <li className={["item", toggleClicked ? 'active' : ''].join(' ')}><a href='#produkty'>Produkty</a></li>
                <li className={["item", toggleClicked ? 'active' : ''].join(' ')}><a href='#nasza_firma'>Nasza firma</a></li>
                <li className={["item", toggleClicked ? 'active' : ''].join(' ')}><a href='#kontakt'>Kontakt</a></li>
                <li className='toggle'><button onClick={() => setToggleClicked(!toggleClicked)}><i className="fas fa-bars"></i></ button></li>
            </ul>

        </nav>
    );
};

export default Menu
