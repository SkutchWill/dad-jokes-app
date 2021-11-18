import React, { Component } from 'react';
import axios from 'axios';
import Joke from './Joke';
import {v4 as uuidv4} from 'uuid';
import SideBanner from './SideBanner';
import './Styles/DadJokeMain.css';
import { SideBannerH1 }  from './Styles/SideBannerStyles';

const Joke_API = 'https://icanhazdadjoke.com/';

class DadJokeMain extends Component {
    static defaultProps = {
        numJokesToGet: 10
    };
    constructor(props) {
        super(props);
        this.state = {
            jokes: JSON.parse(window.localStorage.getItem('jokes') || '[]'),
            loading: false
        };
        this.seenJokes = new Set(this.state.jokes.map(j => j.text));
        this.handleVote = this.handleVote.bind(this);
        this.getjokes = this.getjokes.bind(this);
    }
    componentDidMount() {
        if (this.state.jokes.length === 0) {
            this.getjokes();
        }
    }
    async getjokes() {
        this.setState({loading: true});
        let jokes = [];
        try {
            while(jokes.length < this.props.numJokesToGet) {
                let res = await axios.get(Joke_API, {
                    headers: {Accept: 'application/json'}
                });
                let newJoke = res.data.joke;
                if (!this.seenJokes.has(newJoke)) {
                    jokes.push({id: uuidv4(), text: res.data.joke, votes: 0});
                } else {
                    console.log('Found a duplicate');
                    console.log(newJoke);
                }            
            }
            this.setState(st => ({
                loading: false,
                jokes: [...st.jokes, ...jokes]
            }),
            () => window.localStorage.setItem('jokes', JSON.stringify(this.state.jokes))
            );
        } catch(e) {
            alert(e);
            this.setState({ loading: false });
        }  
    }
    handleVote(id, delta) {
        this.setState( st => ({
            jokes: st.jokes.map(j => j.id === id ? {...j, votes: j.votes + delta} : j)
        }),
            () => window.localStorage.setItem('jokes', JSON.stringify(this.state.jokes))
        );
    }

    render() {
        if(this.state.loading) {
            return (
                <div className='DadJokeMain-spinner'>
                    <i className='far fa-8x fa-laugh fa-spin'/>
                    <SideBannerH1>Loading...</SideBannerH1>
                </div>
            );
        }
        let jokes = this.state.jokes.sort((a,b) => b.votes - a.votes);
        return(
            <div className='DadJokeMain'>
                <SideBanner getJoke={this.getjokes}/>
                <div className='DadJokeMain-list'>
                    {jokes.map( j => (
                        <Joke 
                            text={j.text} 
                            votes={j.votes}
                            voteFun={this.handleVote}
                            key={j.id}
                            id={j.id}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default DadJokeMain;