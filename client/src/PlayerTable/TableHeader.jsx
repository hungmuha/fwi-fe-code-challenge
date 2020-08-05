import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import { useDispatch,useSelector} from 'react-redux';

import {sortedPlayer} from '../appState/actions';
// get our fontawesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortUp,faSortDown} from '@fortawesome/free-solid-svg-icons'
import apiUtils from '../apis/apiUtils';

const TableHeader = () => {
  const dispatch = useDispatch();
  const handleSort = (sortBy,sortOrder) => { 
    // apiUtils.get(`/players?sortBy=${sortBy}&sortOrder=${sortOrder}`)
    //   .then(function(response){
    //       dispatch(sortedPlayer(response.data,sortBy,sortOrder));
    //       setActiveSort(sortBy + sortOrder);
    //   });  
    dispatch(sortedPlayer(sortBy,sortOrder));
  }
  const sorts = useSelector((state) => state.sorts);

  return (
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
            <div className="sorting-box ">
              <a href={void(0)} 
                onClick={()=> handleSort('name','asc')} 
                className="action-link"
                aria-label='sort ascending by name'>
                <FontAwesomeIcon icon={faSortUp} className={`${sorts.sortBy ==='name' && sorts.sortOrder === 'asc'? "active":""}`}/>
              </a>
              <a href={void(0)} 
                onClick={()=> handleSort('name','desc')} 
                className="action-link"
                aria-label='sort descending by name'>
                <FontAwesomeIcon icon={faSortDown} className={`${sorts.sortBy ==='name' && sorts.sortOrder === 'desc'? "active":""}`}/> 
              </a>
            </div>
          </th>
          <th role="columnheader" className="table__header table__action">
            Actions
          </th>
          <th role="columnheader" className="table__header table__winnings">
            Winnings
            <div className="sorting-box ">
              <a href={void(0)} 
                onClick={()=> handleSort('winnings','asc')} 
                className="action-link"
                aria-label='sort ascending by winnings'>
                <FontAwesomeIcon icon={faSortUp} className={`${sorts.sortBy ==='winnings' && sorts.sortOrder === 'asc'? "active":""}`}/>
              </a>
              <a href={void(0)} 
                onClick={()=> handleSort('winnings','desc')} 
                className="action-link"
                aria-label='sort descending by winnings'>
                <FontAwesomeIcon icon={faSortDown} className={`${sorts.sortBy ==='winnings' && sorts.sortOrder === 'desc'? "active":""}`}/> 
              </a>
            </div>
          </th>
          <th role="columnheader" className="table__header table__native">
            Native of
          </th>
        </tr>
      </thead>
    </table>
  );
}

export default TableHeader;
