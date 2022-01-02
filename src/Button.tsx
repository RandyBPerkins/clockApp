import React from 'react';

interface ButtonProps {
    onClickFunction: () => void;
}

export default function Button(props: ButtonProps) {
    return( 
        <button onClick = {props.onClickFunction}> 
            +1
        </button>);
};


