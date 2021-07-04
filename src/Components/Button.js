import React, { useState,useEffect } from 'react'
import DisplayTime from './DisplayTime'
import ItemsList from './ItemsList'
import Navbar from './Navbar'
import Testing from './Testing'


function Button(props) {
    
    const [items, setItems] = useState([])

    useEffect(() => {
        window.scrollTo({
            top: document.body.scrollHeight,
            left: 0,
            behavior: 'smooth'
          });
    },[items])
   
    const handleClick = () => {

        console.log('Button Clicked');

        const timeSlot = {
            hunOfSecond: props.hunOfSecond,
            second: props.second,
            minute: props.minute,
            hour: props.hour
        }

        setItems((prev) => {
            return [ 
                ...prev,
                timeSlot
            ]
            
        })

    }

    const display = (items , i) => {
        return (
            <DisplayTime 
            hunOfSecond= {items.hunOfSecond}
            second= {items.second}
            minute= {items.minute}
            hour= {items.hour}
            key={i}
            id={i}
        />  
        )
    }


    return (
        <div>
            <Navbar 
                hunOfSecond= {props.hunOfSecond}
                second= {props.second}
                minute= {props.minute}
                hour= {props.hour}
                handleClick= {handleClick}
            />

            <ItemsList 
                items= {items}
                display= {display}
            />
        </div>
    )
}

export default Button
