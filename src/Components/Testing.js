import React, { useEffect, useState } from 'react'
import Button from './Button'


function Testing() {
    const [hunOfSecond, setHunOfSecond] = useState('00')
    const [second, setSecond] = useState('00')
    const [minute, setMinute] = useState('00')
    const [hour, setHour] = useState('00')
    
    const [pauseHunOfSecond, setpauseHunOfSecond] = useState(0)
    const [pauseSecond, setpauseSecond] = useState(0)
    const [pauseMinute, setpauseMinute] = useState(0)
    const [pauseHour, setpauseHour] = useState(0)

    const [isRunning, setIsRunning] = useState(false)

    useEffect(() => {
        let hunOfSecIntervalID;
        let SecIntervalID;
        let minuteIntervalID;
        let hourIntervalID;

        let HunOfSecondTimer;
        let SecondTimer;
        let MinuteTimer;
        let HourTimer;

        if(isRunning === true)
        {
            HunOfSecondTimer=pauseHunOfSecond;
            hunOfSecIntervalID = setInterval(() => { 
                HunOfSecondTimer+=1;
                HunOfSecondTimer%=100;
                setpauseHunOfSecond(HunOfSecondTimer)
                if(HunOfSecondTimer <= 9) setHunOfSecond('0'+HunOfSecondTimer)
                else setHunOfSecond(HunOfSecondTimer)
            },10)

            SecondTimer=pauseSecond;
            SecIntervalID = setInterval(() => {
                SecondTimer+=1;
                SecondTimer%=60;
                setpauseSecond(SecondTimer)
                if(SecondTimer <= 9) setSecond('0'+SecondTimer)
                else setSecond(SecondTimer)
            },1000)

            MinuteTimer = pauseMinute;
            minuteIntervalID = setInterval(() => {
                MinuteTimer++;
                MinuteTimer%=60;
                setpauseMinute(MinuteTimer)
                if(MinuteTimer <= 9) setMinute('0'+MinuteTimer)
                else setMinute(MinuteTimer)
            }, 1000*60);

            HourTimer=pauseHour;
            hourIntervalID = setInterval(() => {
                HourTimer+=1;
                setpauseHour(HourTimer)
                if(HourTimer <= 9) setHour('0'+HourTimer)
                else setHour(HourTimer)
            },1000*60*60)
        }

        return () => {
            clearInterval(hunOfSecIntervalID);
            clearInterval(SecIntervalID);
            clearInterval(minuteIntervalID);
            clearInterval(hourIntervalID);
        } 
    },[isRunning])

    
    
    const handleClickStartORPause = () => {
        setIsRunning(!isRunning)
    }

    const handleClickReset = () => {
        setpauseHunOfSecond(0)
        setpauseSecond(0)
        setpauseMinute(0)
        setpauseHour(0)

        setHunOfSecond('00')
        setSecond('00')
        setMinute('00')
        setHour('00')
    }
    
    

    return (
           <Button 
                hunOfSecond = {hunOfSecond}
                second = {second}
                minute = {minute}
                hour = {hour}
                isRunning= {isRunning}

                handleClickStartORPause= {handleClickStartORPause}
                handleClickReset= {handleClickReset}
            />   
    )
}

export default Testing
