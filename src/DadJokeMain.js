import React, { Component } from 'react';
import axios from 'axios';
import Joke from './Joke';
import SideBanner from './SideBanner';
import { DadJokeMainDiv } from './Styles/DadJokeMainStyles';

const Joke_API = 'https://icanhazdadjoke.com/';

class DadJokeMain extends Component {
    static defaultProps = {
        numJokesToGet: 10
    };
    constructor(props) {
        super(props);
        this.state = {
            jokes: []
        };
    }
    async componentDidMount() {
        let jokes = [];
        while(jokes.length < this.props.numJokesToGet) {
            let res = await axios.get(Joke_API, {
                headers: {Accept: 'application/json'}
            });
            jokes.push(res.data.joke);
        }
        this.setState({jokes: jokes});
    }

    render() {
        return(
            <DadJokeMainDiv>
                <SideBanner />
                <div className= 'DadJokeMain-Jokes'>
                    {this.state.jokes.map( j => (
                        <Joke text={j}/>
                    ))}
                </div>
            </DadJokeMainDiv>
        );
    }
}

export default DadJokeMain;