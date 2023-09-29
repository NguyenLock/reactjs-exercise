import React, { Component } from 'react'
export default class Navigation extends Component{
    render(){
        return(
            <div>
                <nav>
                    <ul>
                        <li><a className='active' href='#home'>Home</a></li>
                        <li><a href='#news'>News</a></li>
                        <li><a href='#about'>Abouts</a></li>
                        <li><a href='#contact'>Contacts</a></li>
                    </ul>
                </nav>
            </div>
        )
    }
}