import React from 'react';
import { useListenNewClick } from '../customHooks/useListenNewClick';
import LeftBlock from './LeftBlock';
import RightBlock from './RightBlock';
import {useDispatch} from 'react-redux'
import './styles.scss';
import { appActions } from '../redux/reducer';

function UrlShortener() {  

  const dispatch = useDispatch()

  useListenNewClick({
    callBack: (payload: any) => {
      dispatch(appActions.newClick({link: payload.short_url}))
    }
  })


  return (
    <div className="root">
      <header>Сокращатель</header>
      <div className='container noBorder'>
          <LeftBlock />
          <RightBlock />
      </div>
    </div>
  );
}

export default UrlShortener;
