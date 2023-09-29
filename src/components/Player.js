import React, { Component } from 'react'
import {players} from '../shared/ListOfPlayer'
import { useState } from 'react'
export default function Player(){
    const [players, setPlayer] = useState([])
        return (
            <div className='container'>
                {players.map((players)=>(
                <div className='column' key={players.id}>
                    <div className='card'>
                        <img src={players.img} />
                        <h3>{players.name}</h3>
                        <p className='title'>{players.club}</p>
                        <button onClick={()=>{setPlayer(players)}}><a href='#popup1' id ='openPopUp'>Detail</a></button>
                    </div>
                </div>
                ))}
                <div id='popup1' className='overlay'>
                    <div className='popup'>
                        <img src={players.img}/>
                        <h2>{players.name}</h2>
                        <a className='close' href='#'>&times;</a>
                        <div className='content'>
                            {players.info}
                        </div>
                    </div>
                </div>
            </div>
        )
}