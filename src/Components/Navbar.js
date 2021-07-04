import React from 'react'

function navbar(props) {
    return (
        <div className='Navbar'>
            <h1>STOPWATCH</h1>
            <div className='watchfbox'>
                <div className='Box'>
                <h1>{props.hour} : {props.minute} : {props.second} : {props.hunOfSecond}</h1>
                </div>
            </div>
            <button type="button" className="btn btn-outline-dark button" onClick={props.handleClick}>CLICK</button>
        </div>
    )
}

export default navbar
