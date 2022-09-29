import React, { useState, useEffect } from 'react';
import { useInitLinks } from '../customHooks/useInitLinks';
import { useDispatch, useSelector } from 'react-redux'
import LinksList from './Links/LinksList';
import { appActions } from '../redux/reducer';
import { RootState } from '../redux/store';
import { Pagination } from './Pagination';

function RightBlock() {    
    const dispatch = useDispatch()
    const links = useSelector((state: RootState) => state.appReducer.short_urls.data)
    const pageCount = useSelector((state: RootState) => state.appReducer.short_urls.paginatorInfo.lastPage)

    const [page, setPage] = useState(0)
    
    const {data} = useInitLinks(page + 1)

    const dataString = JSON.stringify(data)

    useEffect(() => {
        
        if(dataString) {
            const parsedData = JSON.parse(dataString)
            dispatch(appActions.init({data: parsedData}))
        }
    },[dataString])

    return (
        <div className="container__Block noBorder">
            <LinksList title={'Список ссылок'} links={links}/>
            <Pagination selectPage={setPage} pageSelected={page} pageCount={pageCount}/>
        </div>
    );
}

export default RightBlock;
