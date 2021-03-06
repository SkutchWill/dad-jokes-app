import styled from "styled-components";

const SideBannerDiv = styled.div`
    background-color: #9575cd;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 30%;
    text-align: center;
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.1),
    inset 0 0 25px #7e57c2;
    z-index: 2;
`;

const SideBannerH1 = styled.h1`
    font-size: 4rem;
    margin: 2rem;
    color: white;
    font-weight: 300;
    letter-spacing: 0.6rem;
`;

const SideBannerSpan = styled.span`
    font-weight: 700;
    letter-spacing: 0;
`;

const SideBannerEmoji = styled.img`
    width: 50%;
    border-radius: 50%;
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0,0,0, 0.1);
`;

const SideBannerButton = styled.button`
    font-size: 1.5rem;
    width: 50%;
    border-radius: 2rem;
    padding: 1rem 2rem;
    color: white;
    font-weight: 700;
    border: none;
    outline: none;
    margin: 2rem;
    word-spacing: 0.5rem;
    cursor: pointer;
    transition: 0.8s cubic-bezier(0.2, 1, 0.2, 1);
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0,0,0, 0.1);
    background: linear-gradient(
		135deg,
		rgba(179, 229, 252, 1) 0%,
		rgba(179, 229, 252, 1) 50%,
		rgba(240, 98, 146, 1) 50%,
		rgba(240, 98, 146, 1) 100%
	);
`;



export {SideBannerDiv, SideBannerH1, SideBannerEmoji, SideBannerButton, SideBannerSpan};