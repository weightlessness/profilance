import React from 'react';
import { ShortUrl } from '../../redux/reducer';

type LinkProps = {
    link: ShortUrl
}

function Link(props: LinkProps) {

    const { link } = props

    return (
        <div className='linkList__link'>
            {link.id}
            <a href={link.url}>{link.url}</a>
            <a href={link.short_url}>{link.short_url}</a>
            <div className='circle'>{link.clicks}</div>
        </div>
    );
}

export default Link;
