import React from 'react';

interface DisplayProps { 
    message: number;
}

export default function Display(props: DisplayProps) {
    const {message} = props;
    return( 
        <div>
            {message}
        </div>
    );
};