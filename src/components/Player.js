import React, { Component } from 'react'
import { players } from '../shared/ListOfPlayer'
export default function Player() {

    return (
        <div className='container'>
            {players.map((players) => (
                <div className='column' key={players.id}>
                    <div className='card'>
                        <img src={players.img} />
                        <h3>{players.name}</h3>
                        <p className='title'>{players.club}</p>
                        <p><button>Detail</button></p>
                    </div>
                </div>
            ))}
        </div>
    )
}