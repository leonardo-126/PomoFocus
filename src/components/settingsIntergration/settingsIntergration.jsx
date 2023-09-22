import './settingsIntergration.scss';
import { BiTransfer, BiSolidErrorCircle, BiLockAlt } from 'react-icons/bi';

export const SettingsIntegration = () => {
    const styleIcon = {
        color: '#acacac'
    }
    
    return (
        <div className="container">
            <div className="container-title">
                <BiTransfer/><span>INTEGRATION</span>
            </div>
            <div className="container-content">
                <h1>Todoist <BiSolidErrorCircle style={styleIcon}/></h1>
                <div className="container-content-todoist">
                    <span>Connect</span><BiLockAlt/>
                </div>
            </div>
            <div className="container-content">
                <h1>Webhook <BiSolidErrorCircle style={styleIcon}/></h1>
                <div className="container-content-webhook">
                    <span>Add</span><BiLockAlt/>
                </div>
            </div>
        </div>
    )
}