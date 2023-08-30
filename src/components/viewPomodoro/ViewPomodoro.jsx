import { useEffect, useState } from 'react'
import './viewPomodoro.scss'
import { secondToTime } from './secondToTime/secondToTime'

export const ViewPomodoro = (props) => {
    const [time, setTime] = useState(1500) 
    const  [start, setStart] = useState(false)

    // navegacao
    useEffect(() => {
        if (props.type == "pomodoro") {
            setTime(1500)
            setStart(false)
        }else if (props.type == "short") {
            setTime(300)
            setStart(false)
        }else {
            setTime(3600)
            setStart(false)
        }
    }, [props.type])

    //timer
    useEffect(() => {
        let startTimer
        if (start && time > 0) {
            startTimer = setInterval(() => {
                setTime(prevValor => prevValor - 1) // prevValor pega um valor antigo armazenado no useState
            }, 1000)
        } else if (time === 0) {
            setStart(false)
            window.alert("Finish your time")
            if (props.type == "short"){
                
            }


        }
        return () => {
            clearInterval(startTimer)
        }
    }, [start, time])


    //pausar e iniciar
    const handleStart = () => {
        setStart(true)
    }
    const handlePause = () => {
        setStart(false)
    }


    return (
        <div className="container-timer">
            <div className="container-timer-timer">
                <h1>{secondToTime(time)}</h1>
            </div>
            <div className="container-timer-start">
                <button onClick={start ? handlePause : handleStart}>
                    <h1>{start ? 'Pause' : 'Start'}</h1>
                </button>
            </div>
        </div>
    )
}