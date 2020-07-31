import React, { useState } from 'react';
import './CreatePlayer.scss';
import { COUNTRIES } from '../constants';
import {PostNewPlayer} from '../appState/actions';
import apiUtils from '../apis/apiUtils';
import { useDispatch, useSelector } from 'react-redux';

const CreatePlayer = () => {
    const [name, setName] = useState('');
    const [winnings, setWinnings] = useState('');
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
            <form onSubmit={handleSubmit} >
                <h3>Create New Player</h3>
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
                <input type="submit" value="Submit"/>
            </form>
        </section>
    );

}

export default CreatePlayer;