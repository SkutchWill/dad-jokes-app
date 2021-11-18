import styled from "styled-components";

const JokeVote = styled.span`
    width: 50px;
    height: 50px;
    line-height: 50px;
    border-radius: 50%;
    text-align: center;
    border: 3px solid hsl(${props => props.voteColor}, 100%, 50%);
    font-size: 20px;
    font-weight: 300;
    box-shadow: 0 10px 38px rgba(0, 0, 0, 0.2), 0 10px 12px rgba(0, 0, 0, 0.1);
`;

export default JokeVote;