import React from 'react';
import Button from '../Button';
import './style.scss'

const FirstSection = () => (
    <section id="home">
        <div className="firstSection">
            <h1>Unikatowe meble do wyjątkowych wnętrz</h1>
            <h2>Prawdziwe drewno, delikatne obicia, dbałość o każdy detal.</h2>
            <Button text="Sprawdź naszą ofertę" />
        </div>
    </section>
)

export default FirstSection;