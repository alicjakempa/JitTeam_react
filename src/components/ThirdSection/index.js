import React from 'react';
import quintinPhoto from '../../assets/pexels-quintin-gellar-313776.jpg';
import './style.scss';

const ThirdSection = () => (
    <section id="nasza_firma">
        <div className="thirdSection">
            <div className="descriptionSec3">
                <h2>Tworzymy rodzinną firmę najlepszych specjalistów</h2>
                <p>Od lat wspierają nas najlepsi specjaliści z okolicy. Współpracujemy z tartakiem oraz wspaniałym
                zespołem stolarzy. Mamy własnych tapicerów, którzy potrafią tworzyć cuda z najwyżej półki. Nasza
                siła to wspólne działanie. </p>
                <p>Od lat wspierają nas najlepsi specjaliści z okolicy. Współpracujemy z tartakiem oraz wspaniałym
                zespołem stolarzy. Mamy własnych tapicerów, którzy potrafią tworzyć cuda z najwyżej półki. Nasza
                siła to wspólne działanie. </p>
            </div>
            <div className="rightPhoto">
                <img src={quintinPhoto} alt="quintinPhoto" />
            </div>
        </div>
    </section>
)

export default ThirdSection;