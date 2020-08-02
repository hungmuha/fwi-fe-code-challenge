import React, { useState } from 'react';
import './CreatePlayer.scss';
import { COUNTRIES } from '../constants';
import {postNewPlayer} from '../appState/actions';
import apiUtils from '../apis/apiUtils';
import { useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';

const CreatePlayer = () => {
    const [name, setName] = useState('');
    const [imageUrl, setimageUrl] = useState('');
    const [winnings, setWinnings] = useState(0);
    const [country, setCountry] = useState('US');
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPlayer = {
            name: name,
            // imageUrl:imageUrl,   
            country: country,
            winnings: parseInt(winnings,10),
        };
        (async function create() { 
            const response = await apiUtils.post('/players',newPlayer);
            await history.push('/');
            await dispatch(postNewPlayer(response.data));
        })();
        // .then(function(response){
        //     history.push('/');
        //     dispatch(postNewPlayer(response.data));
        // });    
    }
    
    let CountryOptions= Object.keys(COUNTRIES).map((key, index) => {
        return(
            <option key={key} value={key}>{COUNTRIES[key]}</option>
        )
    });
    return(
        <section className="create-edit-player">
            <h3 className="create-edit-player__header">Create New Player</h3>
            <form className="create-edit-player__form" onSubmit={handleSubmit} >
                <div className="input-field">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" value={name}  onChange={(e) => setName(e.target.value)}/>
                </div>
                {/* <div className="input-field">
                    <label htmlFor="imageUrl">ImageUrl</label>
                    <input type="url" id="imageUrl" value={imageUrl}  onChange={(e) => setimageUrl(e.target.value)}/>
                </div> */}
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