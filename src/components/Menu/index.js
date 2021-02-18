import React from 'react';
import './style.scss';


class Menu extends React.Component {
    render() {
        return (
            <nav>
                <ul className='menu'>
                    <li className='logo'><a href='#'>UniBox</a></li>
                    <li className='item'><a href='#produkty'>Produkty</a></li>
                    <li className='item'><a href='#nasza_firma'>Nasza firma</a></li>
                    <li className='item'><a href='#kontakt'>Kontakt</a></li>
                    <li className="toggle"><a href="#"><i className="fas fa-bars"></i></a></li>
                </ul>
            </nav>
        );
    }
}
export default Menu