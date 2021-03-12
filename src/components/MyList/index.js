import React from 'react';

const MyList = ({ onClick, text }) => {


    return (
        <div onClick={onClick}>
            {text}
        </div>

    )
}

export default MyList; 
