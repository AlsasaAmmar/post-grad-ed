import React from 'react';
import { Link } from 'react-router-dom';
import { Fade } from "react-awesome-reveal";

import './Card.css';

function Card({ hover, link, image, alt, children, onClick, ...props }) {
    const cardBody = <div> {image && <img src={image} alt={alt} />}
        {children}</div>
    return (
        <Fade>
            <div className={`card ${props.class} ${hover && 'hover'}`} onClick={onClick}>
                {link ?
                    <Link to={`/${link}`} style={{ textDecoration: 'none' }}>
                        {cardBody}
                    </Link>
                    : <>
                        {cardBody}
                    </>
                }
            </div>
        </Fade>
    );
}

export default Card;
