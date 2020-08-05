import {useEffect,useCallback} from 'react';
import {advancePage, fetchPlayersSuccess,firstpage} from '../appState/actions';
import { useDispatch } from 'react-redux';
import apiUtils from '../apis/apiUtils';

export const useFetch = (pager,sorts) => {
    const dispatch = useDispatch();
    const getPlayers = useCallback(()=>{
        apiUtils.get(`/players?size=${pager.size}&from=${pager.start}&sortBy=${sorts.sortBy}&sortOrder=${sorts.sortOrder}`)
            .then(function(response){
                if(pager.start === 0) dispatch(firstpage(response.data));
                 else dispatch(fetchPlayersSuccess(response.data));
            }); 
    },[dispatch,pager]);

    useEffect(() => {
        getPlayers()
    }, [getPlayers]);
}

// infinite scrolling with intersection observer
export const useInfiniteScroll = (scrollRef) => {
    const dispatch = useDispatch();
    const scrollObserver = useCallback(
      node => {
        new IntersectionObserver(entries => {
          entries.forEach(en => {
            if (en.intersectionRatio > 0) {
              dispatch(advancePage());
            }
          });
        }).observe(node);
      },
      [dispatch]
    );
  
    useEffect(() => {
      if (scrollRef.current) {
        scrollObserver(scrollRef.current);
      }
    }, [scrollObserver, scrollRef]);
}