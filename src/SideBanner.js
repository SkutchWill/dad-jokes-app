import React, { Component } from 'react';
import { SideBannerDiv, SideBannerH1, SideBannerEmoji, SideBannerButton, SideBannerSpan } from './Styles/SideBannerStyles';
import './Styles/SideBanner.css';

class SideBanner extends Component{
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.getJoke();
    }
    render() {
        return (
            <SideBannerDiv>
                <SideBannerH1><SideBannerSpan>Dad</SideBannerSpan> Jokes</SideBannerH1>
                <SideBannerEmoji className={'SideBanner-emoji'} src='https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg' alt='crying with laughter'/>
                <SideBannerButton className={'SideBanner-button'} onClick={this.handleClick}>Fetch Jokes</SideBannerButton>
            </SideBannerDiv>
        );
    }
}

export default SideBanner;