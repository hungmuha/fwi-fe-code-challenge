import React from 'react';
import {Link} from 'react-router-dom';

const TableHeader = () => (
  <table
    id="player-table-header"
    role="presentation"
    className="table table--fixed"
  >
    <thead>
      <tr role="row">
        <th role="columnheader" className="table__header table__avatar">
          <Link to={'/createplayer'}>
            <button className="add-button" aria-label="add new player">+</button>
          </Link>
        </th>
        <th role="columnheader" className="table__header table__player">
          Player
        </th>
        <th role="columnheader" className="table__header table__winnings">
          Winnings
        </th>
        <th role="columnheader" className="table__header table__native">
          Native of
        </th>
      </tr>
    </thead>
  </table>
);

export default TableHeader;
