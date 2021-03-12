import React, { useState, useEffect } from 'react';
import Button from '../Button';
import './style.scss';

const FourthSection = () => {

    const [likes, setLikes] = useState(89);
    const [message, setMessage] = useState(' ');

    useEffect(() => {
        if (likes == 100) {
            setMessage('Zzerowano licznik');
            setLikes(0);
        }

    }, [likes])

    return (
        <section id="kontakt">
            <div className="fourthSection">
                <div className="textSec4">
                    <h1>Jesteś zainteresowany?</h1>
                    <h2>Pomagamy przy wycenie projektów indywidualnych.</h2>
                    <Button text="Napisz do nas!" />
                    <br />
                    <p>Lubi nas już: {likes} osób!</p> <button onClick={() => setLikes(likes + 1)}>Lubię to!</button>
                    <p>{message}</p>
                </div>
            </div>
        </section>
    );
}

export default FourthSection;