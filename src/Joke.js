import React, { Component } from 'react';
import './Styles/Joke.css';
import JokeVote from './Styles/JokeStyles';

class Joke extends Component {
    constructor(props) {
        super(props);
        this.upvote = this.upvote.bind(this);
        this.downvote = this.downvote.bind(this);
    }
    upvote() {
        this.props.voteFun(this.props.id, 1);
    }
    downvote() {
        this.props.voteFun(this.props.id, -1);
    }
    getEmoji() {
        const emojis = [
            'em em-rolling_on_the_floor_laughing',
            'em em-laughing',
            'em em-smiley',
            'em em-slightly_smiling_face',
            'em em-neutral_face',
            'em em-confused',
            'em em-angry'
        ];
        if (this.props.votes >= 15) {
            return emojis[0];
        } else if(this.props.votes >= 12) {
            return emojis[1];
        } else if(this.props.votes >= 9) {
            return emojis[2];
        } else if(this.props.votes >= 6) {
            return emojis[3];
        } else if(this.props.votes >= 3) {
            return emojis[4];
        } else if(this.props.votes >= 0) {
            return emojis[5];
        } else {
            return emojis[6];
        }
    }
    render() {
        let voteColor = this.props.votes * 5;
        if (voteColor < 0) {
            voteColor = 0;
        } else if (voteColor > 100) {
            voteColor = 100;
        }
        return(
            <div className='Joke'>
                <div className='Joke-buttons'>
                    <i className='fas fa-arrow-up' onClick={this.upvote}></i>
                    <JokeVote voteColor={voteColor}>{this.props.votes}</JokeVote>
                    <i className='fas fa-arrow-down' onClick={this.downvote}></i>
                </div>
                <div className='Joke-text'>{this.props.text}</div>
                <div className='Joke-emoji'>
                <i className={this.getEmoji()}/>
                </div>                
            </div>
        );
    }
}

export default Joke;