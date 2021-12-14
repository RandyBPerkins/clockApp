import React from 'react';

export default function Display(props) {
    const {message} = props;
    return( 
        <div>
            {message}
        </div>
    );
};