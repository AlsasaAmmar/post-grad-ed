import React, { useState } from 'react';


function HoverableComponent({ hoverChildren, children, timeout, ...props }) {
    const [mouseHovering, setMouseHovering] = useState(false)

    const handleHover = () => {
        setMouseHovering((prevSt) => !prevSt)
        if (timeout) {
            setTimeout(() => {
                setMouseHovering(false)
            }, timeout);
        }
    }
    return (
        <div className={`hover_container ${props.class}`} onMouseEnter={handleHover} onMouseLeave={handleHover}>
            {!mouseHovering &&
                <div className='hover_el_front_side'>{children}</div>
            }
            {mouseHovering &&
                <div className='hover_el_back_side'>{hoverChildren}</div>
            }
        </div>
    );
}

export default HoverableComponent;
