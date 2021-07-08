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
            
            <button type="button" className="btn btn-outline-dark button1" onClick={props.handleClick}>CLICK</button>
            {
                props.isRunning ? 
                <button type="button" disabled className="btn btn-outline-dark button2" onClick={props.handleClickReset}>RESET</button>
                :
                <button type="button" className="btn btn-outline-dark button2" onClick={props.handleClickReset}>RESET</button>
            }
            <button type="button" className="btn btn-outline-dark button3" onClick={props.handleClickStartORPause}>{props.isRunning ? 'PAUSE':'START'}</button>
               
        </div>
    )
}

export default navbar
