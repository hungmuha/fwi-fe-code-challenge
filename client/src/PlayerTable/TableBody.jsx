import React from 'react';
import PropTypes from 'prop-types';
import TableRow from './TableRow';
import { COUNTRIES } from '../constants';

const TableBody = ({ players }) => {
  return (
    <table
      id="player-table-body"
      role="presentation"
      className="table table--body"
    >
      <tbody>
        {players.map(({ id, name, country, winnings, imageUrl }) => (
          <TableRow 
            key = {id}
            name = {name}
            country = {country}
            winnings = {winnings}
            imageUrl = {imageUrl}
          />
        ))}
      </tbody>
    </table>
  );
};

TableBody.propTypes = {
  players: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      country: PropTypes.oneOf(Object.keys(COUNTRIES)),
      winnings: PropTypes.number.isRequired,
      imageUrl: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TableBody;
