import React from 'react';
import './style.scss';
import sharathPhoto from '../../assets/pexels-sharath-g-2251247.jpg';
import Button from '../Button';

const SecondSection = () => (
    <section id="produkty">
        <div className="secondSection">
            <div className="leftPhoto">
                <img src={sharathPhoto} alt="biuro" />
            </div>
            <div className="descriptionSec2">
                <h2>Nasze produkty projektujemy tak, jak byśmy robili to dla siebie</h2>
                <p>Odkryj naszą najnowszą kolekcję inspirowaną latami '80. Cofnij się w czasie i wprowadź do swojej
                przestrzeni unikatowy klimat retro. Wyjątkowe połączenie drewna, szkła i metalu pozwoliło nam
                uzyskać efekt idealnej harmonii.</p>
                < Button text="Katalog produktów" />
            </div>

        </div>
    </section>
)

export default SecondSection;