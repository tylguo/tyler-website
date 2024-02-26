import React from 'react'
import '../App.css'
import { useState } from 'react';

export const Home = () => {
    const [clicked, setClicked] = useState(0);
    const [inputBox, setInputBox] = useState('');
    const [display, setDisplay] = useState('');

    const [inputColor, setInputColor] = useState('');
    const [displayText, setDisplayText] = useState('');

    function handleClick() {
        setClicked(clicked + 1)
    }
    function handleTyping(event) {
        setInputBox(event.target.value)
    }
    function displayParagraph() {
        setDisplay(inputBox)
    }

    function handleChange(event) {
        setInputColor(event.target.value);
    }

    function handleSubmit() {
        setDisplayText(inputColor);
    }

    return (
        <div className='Home'>
            {/* <p>Hello</p>
            <p>This is the number of times clicked: {clicked}</p>
            <button onClick={handleClick}>Click me!</button>

            <p>{display}</p>
            <input value={inputBox} onChange = {handleTyping}/>
            <button onClick={displayParagraph}>Submit form</button> */}

            <p>Please input a color:</p>
            <input
                type='text'
                value={inputColor}
                onChange={handleChange}
            />
            <button onClick={handleSubmit}>Submit</button>
            <p style={{ color: displayText }}>{displayText}</p>
        </div>
    )

    
}

