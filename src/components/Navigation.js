import React from 'react'
import { ThemeContext } from './ThemeContext'
import { useContext } from 'react'
export default function Navigation() {
    const {theme, toggle, dark } = useContext(ThemeContext)
    return (
        <div>
        <nav style={{backgroundColor: theme.backgroundColor, color: theme.color }}>
            <ul>
                <li><a className='active' href='#home'>Home</a></li>
                <li><a href='#news'>News</a></li>
                <li><a href='#about'>Abouts</a></li>
                <li><a href='#contact'>Contacts</a></li>
            </ul>
            <div style={{position: 'left'}}>
                <a className='switch-mode' href='#' onClick={toggle}
                style={{
                    backgroundColor: theme.backgroundColor,
                    color: theme.color,
                    outline: 'none'
                }}data-testid = "toggle-theme-btn">
                    switch Nav to {!dark ? 'Dark' : 'Light'} Mode
                </a>
            </div>
        </nav>
        </div>
    )
}