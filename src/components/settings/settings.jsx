import './settings.scss'
import { AiOutlineClose } from 'react-icons/ai';
import { PiTimer } from 'react-icons/pi';

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
                    <span><PiTimer/>TIMER</span>
                </div>
            </div>
        </div>
        </>
    )
}