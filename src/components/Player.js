import React, { Component } from 'react'
import { data } from '../shared/ListOfPlayer'
import { useState } from 'react'
import { Link } from 'react-router-dom'
function Player() {
    <Link to={`Detail/${data.id}`}>
        <p><button>Detail</button></p>
    </Link>
    const [players, setPlayer] = useState([])
    return (
        <div className='container'>
            {data.map((data) => (
                <div className='column' key={data.id}>
                    <div className='card'>
                        <img src={data.img} />
                        <h3>{data.name}</h3>
                        <p className='title'>{data.club}</p>
                        <button onClick={() => { setPlayer(data) }}><a href='#popup1' id='openPopUp'>Detail</a></button>
                    </div>
                </div>
            ))}
            <div id='popup1' className='overlay'>
                <div className='popup'>
                    <img src={data.img} />
                    <h2>{data.name}</h2>
                    <a className='close' href='#'>&times;</a>
                    <div className='content'>
                        {data.info}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Player;
