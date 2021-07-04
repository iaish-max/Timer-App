import React from 'react'

function Testing(props) {
    return (
        <div>
            <h1>STOPWATCH</h1>
            <h1>{props.hour} : {props.minute} : {props.second} : {props.hunOfSecond}</h1>
            <button type="button" className="btn btn-outline-dark" onClick={props.handleClick}>CLICK</button>
        </div>
    )
}

export default Testing
