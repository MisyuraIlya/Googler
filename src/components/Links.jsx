import React from 'react';
import { Link } from "react-router-dom";

const links = [
    { url: '/search', text: 'All'},
    { url: '/image', text: 'images'},
    { url: '/videos', text: 'videos'},
    { url: '/news', text: 'news'},
];

const Links = () => {
    return (
        <div className='links'>
            {links.map(({url, text}) => (
                <Link to={url} className="inline_link"><p>{text}</p></Link>
            ))}
        </div>
    );
};

export default Links;