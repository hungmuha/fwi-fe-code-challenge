import React, { useState } from 'react';
import './CreatePlayer.scss';
import { COUNTRIES } from '../constants';
import {PostNewPlayer} from '../appState/actions';
import apiUtils from '../apis/apiUtils';
import { useDispatch} from 'react-redux';

const CreatePlayer = () => {
    const [name, setName] = useState('');
    const [winnings, setWinnings] = useState(0);
    const [country, setCountry] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const newPlayer = {
            name: name,   
            country: country,
            winnings: parseInt(winnings,10),
        }
        apiUtils.post('/players',newPlayer)
        .then(function(response){
            dispatch(PostNewPlayer(response.data));
        });    
    }
    
    let CountryOptions= Object.keys(COUNTRIES).map((key, index) => {
        return(
            <option key={key} value={key}>{COUNTRIES[key]}</option>
        )
    });
    return(
        <section className="create-player">
            <h3 className="create-player__header">Create New Player</h3>
            <form className="create-player__form" onSubmit={handleSubmit} >
                <div className="input-field">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" value={name}  onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="input-field">
                    <label htmlFor="winnings">Winnings</label>
                    <input type="number" id="winnings" value={winnings} onChange={(e) => setWinnings(e.target.value)}/>
                </div>
                <div className="input-field">
                    <label htmlFor="country">Country</label>
                    <select id="country" value={country} onChange={(e) => setCountry(e.currentTarget.value)}>
                        {CountryOptions}
                    </select>
                </div>
                <input className="submit-button" type="submit" value="Submit"/>
            </form>
        </section>
    );

}

export default CreatePlayer;