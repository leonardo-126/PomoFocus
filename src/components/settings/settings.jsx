import './settings.scss'
import { AiOutlineClose } from 'react-icons/ai';
import { BiAlarm } from 'react-icons/bi';

export const Settings = (props) => {
    return (
        <>
        <div className="container-st" onClick={props.setModalProps}>
            
        </div>
        <div className="container-st-child">
            <div className="container-st-child-content">
                <div className="container-st-child-content-nav">
                    <h1>Setting</h1>
                    <i><AiOutlineClose onClick={props.setModalProps}/></i>
                </div>
                <div className='container-st-child-content-timer'>
                    <div className="container-st-child-content-timer-title">
                        <BiAlarm/><span>TIMER</span>
                    </div>
                    <div className="container-st-child-content-timer-stminutes">
                        <h1>Time (minutes)</h1>
                        <div className="container-st-child-content-timer-stminutes-setar">
                            <div className="container-st-child-content-timer-stminutes-setar-pomo">
                                <p>Pomodoro</p>
                                <input type="number" value={1}/>
                            </div>
                            <div className="container-st-child-content-timer-stminutes-setar-pomo">
                                <p>Short Break</p>
                                <input type="number"/>
                            </div>
                            <div className="container-st-child-content-timer-stminutes-setar-pomo">
                                <p>Long Break</p>
                                <input type="number" value={1} />
                            </div>
                        </div>
                    </div>
                    <div className="container-st-child-content-timer-breaks">
                        <h1>Auto Start Breaks</h1>
                        <div className="container-st-child-content-timer-breaks-setar">
                            <div className="container-st-child-content-timer-breaks-setar-position">
                                colocar o button
                            </div>
                        </div>
                    </div>
                    <div className="container-st-child-content-timer-breaks">
                        <h1>Auto Start Pomodoros</h1>
                        <div className="container-st-child-content-timer-breaks-setar">
                            <div className="container-st-child-content-timer-breaks-setar-position">
                                colocar o button
                            </div>
                        </div>
                    </div>
                    <div className="container-st-child-content-timer-breaks">
                        <h1>Long Break interval</h1>
                        <input type="number" />
                    </div>
                </div>
                <div>
                    teste
                </div>
            </div>
        </div>
        </>
    )
}