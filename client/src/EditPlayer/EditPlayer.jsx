import React, {useState,useEffect} from 'react';
import {useParams} from 'react-router';
import {useHistory} from 'react-router-dom';
import './EditPlayer.scss';
import { COUNTRIES } from '../constants';
import apiUtils from '../apis/apiUtils';
import {updatePlayer} from '../appState/actions';
import {useDispatch,useSelector} from 'react-redux';

const EditPlayer = () => {
    const [name, setName] = useState('');
    const [imageUrl, setimageUrl] = useState('');
    const [winnings, setWinnings] = useState(0);
    const [country, setCountry] = useState('US');
    const [isLoading, setLoading] = useState(true);

    const history = useHistory();

    const dispatch = useDispatch();
    const {id} = useParams();
    useEffect(()=>{
        apiUtils.get(`/players/${id}`)
        .then(function(response){
            // dispatch(PostNewPlayer(response.data));
            console.log(response.data);
            setName(response.data.name);
            setimageUrl(response.data.imageUrl);
            setWinnings(response.data.winnings);
            setCountry(response.data.country);
            setLoading(false);
        });
        console.log(id);
    },[]);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const updatedPlayer = {
            name: name,
            imageUrl:imageUrl,   
            country: country,
            winnings: parseInt(winnings,10),
        };
        apiUtils.patch(`/players/${id}`,updatedPlayer)
        .then(function(response){
            console.log(response);
            dispatch(updatePlayer(response.data));
            history.push('/');
        });    
    };

    let CountryOptions= Object.keys(COUNTRIES).map((key, index) => {
        return(
            <option key={key} value={key}>{COUNTRIES[key]}</option>
        )
    });
    return (
        <section className="create-edit-player">
            <h3 className="create-edit-player__header">Edit Player</h3>
            
            {!isLoading && (
                <form className="create-edit-player__form" onSubmit={handleSubmit}>
                    <div className="input-field">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" value={name}  onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="imageUrl">ImageUrl</label>
                        <input type="url" id="imageUrl" value={imageUrl}  onChange={(e) => setimageUrl(e.target.value)}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="winnings">Winnings</label>
                        <input type="number" id="winnings" value={winnings}  onChange={(e) => setWinnings(e.target.value)}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="country">Country</label>
                        <select id="country" value={country} onChange={(e) => setCountry(e.currentTarget.value)}>
                            {CountryOptions}
                        </select>
                    </div>
                    <input className="submit-button" type="submit" value="Submit"/>
                </form>
            )}
        </section>
    )
}

export default EditPlayer;