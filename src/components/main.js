import React from 'react';
import { Route, Switch } from 'react-router-dom';
import FirstSection from './FirstSection';
import SecondSection from './SecondSection';
import ThirdSection from './ThirdSection';
import FourthSection from './FourthSection';

// dlaczego exact wszystko zmienia ?? //
const MyRoutes = () => (

    <Switch>
        <Route exact path='/' component={FirstSection} />
        <Route path='/produkty' component={SecondSection} />
        <Route path='/naszaFirma' component={ThirdSection} />
        <Route path='/kontakt' component={FourthSection} />
    </Switch>

);

export default MyRoutes;
