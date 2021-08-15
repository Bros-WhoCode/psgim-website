import React, { useState } from "react";

const Marquee = ({className, behavior, direction, text, scrollamt}) => {

    const [_text, ] = useState(text);
    const [_scrollamt, setScrollamt] = useState(scrollamt);

    return (
        <div 
            onMouseOver={(e) => {setScrollamt(0);}}
            onMouseDown={(e) => {setScrollamt(0);}}
            onMouseUp={(e) => {setScrollamt(scrollamt);}}
            onMouseLeave={(e) => {setScrollamt(scrollamt);}}
            className={className}
        >
            {/* <marquee 
                behavior={behavior} 
                direction={direction}
                scrollamount={`${_scrollamt}`}
            >{_text}</marquee> */}
        </div>
    );
}
 
export default Marquee;