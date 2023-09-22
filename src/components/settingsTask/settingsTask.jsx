import { ButtonSettings } from '../buttonSettings/buttonSettings';
import './settingsTask.scss'
import { MdTaskAlt } from 'react-icons/md';
import { BiSolidErrorCircle } from 'react-icons/bi';

export const SettingsTask = () => {
    const styleIcon = {
        color: '#acacac'
    }
    return (
        <div className="container">
            <div className="container-title">
                <MdTaskAlt/><span>TASK</span>
            </div>
            <div className="container-content">
                <h1>Auto Start Breaks <BiSolidErrorCircle style={styleIcon}/></h1>
                <ButtonSettings/>
            </div>
            <div className="container-content">
                <h1>Auto Start Breaks <BiSolidErrorCircle style={styleIcon}/></h1>
                <ButtonSettings/>
            </div>
        </div>
    )
}