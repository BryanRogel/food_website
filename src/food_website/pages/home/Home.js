import React from 'react';
import Styled from 'styled-components';

const Home = () => {
    return (
        <Style>
            <div className="text">otra pagina</div>
        </Style>
    );
};

const Style = Styled.div`
height: calc(115vh - 15vh);
width: 100%;
background-color: black;
font-family: 'Courier New';
// font-family: 'sans-serif';
position: relative;

.text {
    position: absolute;
	top: 50%;
	left: 50%;
	height: 30%;
	width: 50%;
    margin: -15% 0 0 -25%;
    text-transform: uppercase;
    font-size: 24px;
    text-align: center;
    letter-spacing: 2px;
    color: white;
}

.square{
    position: absolute;
	top: 50%;
	left: 50%;
    transform: translate(-50%, 50%);
    width: 108px;
    height: 60px;
    line-height: 60px;
    text-decoration: none;
    transition: 0.5s;
    font-size: 24px;
    text-align: center;
    letter-spacing: 2px;
    color: white;

}

.square svg rect{
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    fill: transparent;
}

.square svg rect{
    stroke: #fff;
    stroke-width: 16;
    transition: 1.5s !important;
    stroke-dasharray: 900;
    stroke-dashoffset: 900;
}

.square:hover svg rect{
    stroke-dashoffset: 0;
}
.square:hover{
    transition-delay: 1.5s;
}
`

export default Home;