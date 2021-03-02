import React, { useState, Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './style.scss';
import classNames from 'classnames';
import FirstSection from '../FirstSection';
import SecondSection from '../SecondSection';
import ThirdSection from '../ThirdSection';
import FourthSection from '../FourthSection';


function Menu() {

    const [toggleClicked, setToggleClicked] = useState(false);

    console.log('test!', toggleClicked);

    const classValue = classNames({
        'item': true,
        'active': toggleClicked
    });

    return (
        <Router>
            <div>
                <nav>
                    <ul className='menu'>
                        <li className="logo"><Link to={'/'} className="nav-link">UniBox</Link></li>
                        <li className={classValue}><Link to={'/produkty'} className="nav-link">Produkty</Link></li>
                        <li className={classValue}><Link to={'/naszaFirma'} className="nav-link">Nasza Firma</Link></li>
                        <li className={classValue}><Link to={'/kontakt'} className="nav-link">Kontakt</Link></li>
                        <li className='toggle'><button onClick={() => setToggleClicked(!toggleClicked)}><i className="fas fa-bars"></i></ button></li>
                    </ul>

                </nav>
                <Switch>
                    <Route exact path='/' component={FirstSection} />
                    <Route path='/produkty' component={SecondSection} />
                    <Route path='/naszaFirma' component={ThirdSection} />
                    <Route path='/kontakt' component={FourthSection} />
                </Switch>
            </div>
        </Router>
    );
};

export default Menu
