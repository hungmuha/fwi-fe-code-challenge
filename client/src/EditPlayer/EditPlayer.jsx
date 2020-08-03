import React, {useState,useEffect} from 'react';
import {useParams} from 'react-router';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';

import apiUtils from '../apis/apiUtils';
import {updatePlayer} from '../appState/actions';
import InputField from '../Components/InputField';
import SelectField from '../Components/SelectField';
import {imageUrlMsg,winningsError,nameError} from '../constants';

const EditPlayer = () => {
    const [name, setName] = useState('');
    const [imageUrl, setimageUrl] = useState('');
    const [winnings, setWinnings] = useState(0);
    const [country, setCountry] = useState('US');
    const [isLoading, setLoading] = useState(true);
    const [isError,setError] = useState(false);

    const history = useHistory();
    const dispatch = useDispatch();
    const {id} = useParams();
    useEffect(()=>{
        apiUtils.get(`/players/${id}`)
        .then(function(response){
            setName(response.data.name);
            setimageUrl(response.data.imageUrl);
            setWinnings(response.data.winnings);
            setCountry(response.data.country);
            setLoading(false);
        });
    },[]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim() || winnings === '') {
            return setError(true);
        }
        const updatedPlayer = {
            name: name,
            imageUrl:imageUrl,   
            country: country,
            winnings: parseInt(winnings,10),
        };
        apiUtils.patch(`/players/${id}`,updatedPlayer)
        .then((response)=>{
            dispatch(updatePlayer(response.data));
            history.push('/');
        });    
    };

    return (
        <section className="create-edit-player">
            <h3 className="create-edit-player__header">Edit Player</h3>
            
            {isLoading && (
                <div className=".create-edit-player">
                    loading...
                </div>
                ) || (
                <form className="create-edit-player__form" onSubmit={handleSubmit}>
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
            )}
        </section>
    )
}

export default EditPlayer;