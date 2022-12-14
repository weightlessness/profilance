import React from 'react';
import ReactPaginate from 'react-paginate';

type PaginationProps = {
    pageSelected: number
    selectPage: (page: number) => void
    pageCount: number
}

export function Pagination(props: PaginationProps) {

    const { pageSelected, selectPage, pageCount } = props

    const handlePageClick = (event: {selected: number}) => {
        selectPage(event.selected)
    };

    return (
        <>
            <ReactPaginate
                breakLabel="..."
                nextLabel=""
                onPageChange={handlePageClick}
                pageRangeDisplayed={1}
                forcePage={pageSelected}
                pageCount={pageCount}
                previousLabel=""
            />
        </>
    );
}