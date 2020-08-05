import React, { useEffect,useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {useInfiniteScroll ,useFetch} from '../apis/customHooks';

import './PlayerTable.scss';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

const getPlayers = (state) => state.playerIds.map((id) => state.players[id]);

const PlayerTable = () => {

  const pager = useSelector((state) => state.pages);
  const sorts = useSelector((state) => state.sorts);
  useFetch(pager,sorts);
  const players = useSelector(getPlayers);
  let bottomBoundaryRef = useRef(null);
  useInfiniteScroll(bottomBoundaryRef);
  return (
    <div
      id="player-table-grid"
      role="grid"
      aria-label="Poker Players"
      className="player-table"
    >
      <TableHeader />
      <TableBody players={players} />
      <div id='page-bottom-boundary' ref={bottomBoundaryRef}></div>
    </div>
  );
};

export default PlayerTable;
