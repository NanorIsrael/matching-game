import React from 'react';
import './Button.css';

const Button = (props) => ( <button onClick={(num) => props.startGame(num)}>{ props.playing ? 'reset' : 'start'}</button> )

export default Button
