import React from 'react';


const NamesList = (props) => {
    return props.namesList.map( (name) => {
        return <ul>{name}</ul>
    })
};  


export default NamesList;