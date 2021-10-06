import React from 'react';


const DisplayName = (props) => {
    return (
        <div>
            <h1>{props.name.firstName} {props.name.lastName}</h1>
        </div>
    );
}

export default DisplayName;