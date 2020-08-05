import React, { useState } from 'react';
import { useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';

import './CreatePlayer.scss';
import {postNewPlayer} from '../appState/actions';
import apiUtils from '../apis/apiUtils';
import InputField from '../Components/InputField';
import SelectField from '../Components/SelectField';
import {imageUrlMsg,winningsError,nameError} from '../constants';

const CreatePlayer = () => {
    const [name, setName] = useState('');
    const [imageUrl, setimageUrl] = useState('');
    const [winnings, setWinnings] = useState(0);
    const [country, setCountry] = useState('US');
    const [isError,setError] = useState(false);

    const dispatch = useDispatch();
    const history = useHistory();
    

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim() || winnings === '') {
            return setError(true);
        }
        const newPlayer = {
            name: name,
            imageUrl:imageUrl,   
            country: country,
            winnings: parseInt(winnings,10),
        }
        apiUtils.post('/players',newPlayer)
        .then(function(response){
            dispatch(postNewPlayer(response.data));
            history.push('/');
        });  
    }

    return(
        <section className="create-edit-player">
            <h3 className="create-edit-player__header">Create New Player</h3>
            <form className="create-edit-player__form" onSubmit={handleSubmit} >
                <InputField
                    label = 'name'
                    type='text'
                    value = {name}
                    changeFn ={setName}
                    showMsg = {isError}
                    msgClass = 'danger'
                    message = {nameError}
                />
                <InputField
                    label = 'imageUrl'
                    type='url'
                    value = {imageUrl}
                    changeFn ={setimageUrl}
                    message = {imageUrlMsg}
                />               
                <InputField
                    label = 'winnings'
                    type='number'
                    value = {winnings}
                    changeFn ={setWinnings}
                    showMsg = {isError}
                    msgClass = 'danger'
                    message = {winningsError}
                />
                <SelectField
                    label = 'Country'
                    value = {country}
                    changeFn ={setCountry}
                />
                <input className="submit-button" type="submit" value="Submit"/>
            </form>
        </section>
    );

}

export default CreatePlayer;