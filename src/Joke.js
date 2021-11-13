import React, { Component } from 'react';
import { JokeDiv } from './Styles/JokeStyles';

class Joke extends Component {
    render() {
        return(
            <JokeDiv>
                {this.props.text}
            </JokeDiv>
        );
    }
}

export default Joke;