import React, { useCallback, useReducer } from 'react';
import ButtonTwo from '../ButtonTwo';
import './style.scss'

const collecions = {
    viva: 'Dodaj kolekcję Viva',
    gerta: 'Dodaj kolekcję Gerta',
    margo: 'Dodaj kolekcję Margo'
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'addViva':
            return {
                ...state,
                viva: 'Dodano kolekcję Viva!',
            }
        case 'addGerta':
            return {
                ...state,
                gerta: 'Dodano kolekcję Gerta!',
            }
        case 'addMargo':
            return {
                ...state,
                margo: 'Dodano kolekcję Margo!',
            }
        case 'resign':
            return {
                viva: 'Dodaj kolekcję Viva',
                gerta: 'Dodaj kolekcję Gerta',
                margo: 'Dodaj kolekcję Margo'
            }
        default:
            return state;
    }
}

const FirstSection = () => {

    const [state, dispatch] = useReducer(reducer, collecions);

    const addViva = useCallback(() => dispatch({ type: 'addViva' }), [dispatch]);
    const addGerta = useCallback(() => dispatch({ type: 'addGerta' }), [dispatch]);
    const addMargo = useCallback(() => dispatch({ type: 'addMargo' }), [dispatch]);
    const resign = useCallback(() => dispatch({ type: 'resign' }), [dispatch]);


    return (
        <section id="home">
            <div className="firstSection">
                <h1>Unikatowe meble do wyjątkowych wnętrz</h1>
                <h2>Prawdziwe drewno, delikatne obicia, dbałość o każdy detal.</h2>
                <br />

                <p>Dodaj kolekcję do swojej listy: </p>
                <ButtonTwo text={state.viva} onClick={addViva} />
                <ButtonTwo text={state.gerta} onClick={addGerta} />
                <ButtonTwo text={state.margo} onClick={addMargo} />

                {/* <button type="button" onClick={addViva}>{state.viva}</button>
                <button type="button" onClick={addGerta}>{state.gerta}</button>
                <button type="button" onClick={addMargo}>{state.margo}</button> */}
                <br />
                <button className="resign" type="button" onClick={resign}>Anuluj dodawanie kolekcji</button>

            </div>
        </section>
    );
}

export default FirstSection; 