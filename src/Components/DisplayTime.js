import React from 'react'
import clock from '../photos/clockImage5.jpg'

function DisplayTime(props) {
   
    return (
        <div className='TimeSlots'>
            <div className='TimeDiv'>
                <h1 className='Time'>Time {props.id + 1 }</h1>
                <img src={clock} className='TimeSlotimg'></img>
            </div>
            <h2>{props.hour} : {props.minute} : {props.second} : {props.hunOfSecond}</h2>
        </div>
    )
}

export default DisplayTime
