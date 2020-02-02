import React from 'react';

export default function Header(props) {
    let {title} = props;

    return (
        <h1 className="ui dividing centered header">{title}</h1>
    );
   
}