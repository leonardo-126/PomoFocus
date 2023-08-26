import { useEffect, useState } from 'react'
import './viewPomodoro.scss'
import { secondToTime } from './secondToTime/secondToTime'

export const ViewPomodoro = (props) => {
    const [time, setTime] = useState(1500) 
    useEffect(() => {
        if (props.type == "pomodoro") {
            setTime(1500)
        }else if (props.type == "short") {
            setTime(300)
        }else {
            setTime(3600)
        }
    }, [props.type])
    return (
        <div className="container-timer">
            <div className="container-timer-timer">
                <h1>{secondToTime(time)}</h1>
            </div>
            <div className="container-timer-start">
                <button>
                    <h1>START</h1>
                </button>
            </div>
        </div>
    )
}