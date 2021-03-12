import React, { useState, useEffect, useCallback } from 'react';
import './style.scss';
import sharathPhoto from '../../assets/pexels-sharath-g-2251247.jpg';
import MyList from '../MyList';

const SecondSection = () => {

    const [clicked, setClicked] = useState(false);
    const [listaKolekcji, setListaKolekcji] = useState(' ');

    const itsClicked = useCallback(() => setClicked(!clicked), [clicked]);

    const disappear = () => {
        setListaKolekcji('Haha! Not today!');
    }

    useEffect(() => {
        if (clicked == true) {
            setListaKolekcji(
                <div>
                    <ul>
                        <li>Kolekcja Viva</li>
                        <li>Kolekcja Gerta</li>
                        <li>Kolekcja Margo</li>
                    </ul>
                </div>);
        } else {
            setListaKolekcji(' ');
        }

    }, [clicked])


    return (
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
                    <button onClick={itsClicked}> Katalog produktów</button>

                    <MyList text={listaKolekcji} onClick={disappear} />
                </div>

            </div>
        </section>
    );
}

export default SecondSection;