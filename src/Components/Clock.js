import React, { useEffect, useState } from 'react'
import Button from './Button'
import Testing from './Testing'

function Clock() {
    const [hunOfSecond, setHunOfSecond] = useState('00')
    const [second, setSecond] = useState('00')
    const [minute, setMinute] = useState('00')
    const [hour, setHour] = useState('00')

    const time = new Date().getTime() 
    // give number of milliseconds from midnight of January 1, 1970.
    // (The internal clock in JavaScript counts from midnight January 1, 1970.) 

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime()
            const distance = now - time

            const HunOfSecondTimer = (Math.floor(distance/10))%100
            const secondTimer = (Math.floor(distance/(10*100)))%60
            const minuteTimer = (Math.floor(distance/(10*100*60)))%60
            const hourTimer = (Math.floor(distance/(10*100*60*60)))%60

            if(HunOfSecondTimer <= 9) setHunOfSecond('0' + HunOfSecondTimer)
            else setHunOfSecond('' + HunOfSecondTimer)

            if(secondTimer <= 9) setSecond('0'+ secondTimer)
            else setSecond('' + secondTimer)

            if( minuteTimer <= 9) setMinute('0'+minuteTimer)
            else setMinute('' + minuteTimer)

            if( hourTimer <= 9) setHour('0'+hourTimer)
            else setHour('' + hourTimer)  
        },10)
        return () => clearInterval(interval)
    },[])

    return (
           <Button 
                hunOfSecond = {hunOfSecond}
                second = {second}
                minute = {minute}
                hour = {hour}
            />   
    )
}

export default Clock
