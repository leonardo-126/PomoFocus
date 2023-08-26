import { useState } from 'react'
import './timer.scss'
import { ViewPomodoro } from '../viewPomodoro/ViewPomodoro'

export const Timer = () => {
    const [viewTimer, setViewTimer] = useState("pomodoro")
    return (
        <div className="timer-container">
            <div className="timer-nav">
                <button active={viewTimer == "pomodoro" ? "true" : "false"} onClick={() => {
                    setViewTimer('pomodoro')
                }}>Pomodoro</button>
                <button active={viewTimer == "short" ? "true" : "false"} onClick={() => {
                    setViewTimer('short')
                }}>Short Break</button>
                <button active={viewTimer == "long" ? "true" : "false"} onClick={() => {
                    setViewTimer('long')
                }}>Long Break</button>
            </div>
            <ViewPomodoro type={viewTimer} />
        </div>
    )
}