import React from 'react';
import Avatar from '../Avatar';
import Flags from 'react-world-flags';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {deletePlayer} from '../appState/actions';
import apiUtils from '../apis/apiUtils';

const TableRow = ({id, name, country, winnings, imageUrl }) => {
    const dispatch = useDispatch();
    const handleDelete = (e) => {
        e.preventDefault();
        apiUtils.delete(`/players/${id}`)
        .then((response)=>{
            dispatch(deletePlayer(id));
        });
    }
    return(
        <tr role="row" className="table__row">
            <td role="gridcell" className="table__avatar">
                <Avatar src={imageUrl} />
            </td>
            <td role="gridcell" className="table__player">
                {name}
            </td>
            <td role="gridcell" className="table__action">
                <Link to={'/editplayer/' + id} className="action-link">
                    Update
                </Link>
                <a href={void(0)}  onClick={handleDelete} className="action-link danger">Delete</a>
            </td>
            <td role="gridcell" className="table__winnings">
                {winnings.toLocaleString(undefined, {
                style: 'currency',
                currency: 'USD',
                })}
            </td>
            <td role="gridcell" className="table__native">
                <div className="country">
                <Avatar>
                    <Flags code={country} alt="" />
                </Avatar>
                {country}
                </div>
            </td>
        </tr>
    )
}

export default TableRow;