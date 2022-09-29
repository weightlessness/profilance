import React from 'react';
import { ShortUrl } from '../../redux/reducer';
import Link from './Link';

type LinksListProps = {
    title: string
    links: ShortUrl[]
}

function LinksList(props: LinksListProps) {

    const { title, links } = props

    return (
        <div className='linkList noBorder'>
            <div className='linkList__title noBorder'>{title}</div>
            <div className='linkList__links noBorder'>
                {links.map((link, index) => 
                    <Link link={link} key={link?.id + index}/>
                )}
            </div>
        </div>
    );
}

export default LinksList;
