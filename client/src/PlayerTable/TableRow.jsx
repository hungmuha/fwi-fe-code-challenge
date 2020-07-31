import React from 'react';
import Avatar from '../Avatar';
import Flags from 'react-world-flags';

const TableRow = ({name, country, winnings, imageUrl }) => {
    return(
        <tr role="row" className="table__row">
            <td role="gridcell" className="table__avatar">
                <Avatar src={imageUrl} />
            </td>
            <td role="gridcell" className="table__player">
                {name}
            </td>
            <td role="gridcell" className="table__action">
                <button type="button" >Delete</button>
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