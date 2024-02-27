import React from 'react'
import '../App.css'
import "../styles/header.css"

export const Header = () => {
    return (
        <header>
            <h1>Welcome to my Website</h1>
            <nav>
                <a href = "/">Home</a>
                <a href = "/aboutme">About Me</a>
                <a href = "/myprojects">My Projects</a>
                <a href = "/otherwebsites">Other Websites</a>
            </nav>
        </header>
    )
}