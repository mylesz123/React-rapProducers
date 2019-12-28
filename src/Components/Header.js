import React from 'react';

class Header extends React.Component {
    constructor (props) {
        super(props);
    }

    render() {
        return(
            <h1 class="ui dividing centered header">{this.props.title}</h1>
        );
    }
    
}

export default Header;