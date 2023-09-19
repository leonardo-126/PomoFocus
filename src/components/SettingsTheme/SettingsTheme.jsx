import './SettingsTheme.scss'
import { BiSolidMagicWand } from 'react-icons/bi';

export const SettingsTheme = () => {
    const colorIcon = {
        color: '#acacac,'
    }
    return (
        <div className="container-theme">
            <div className="container-theme-title">
                <BiSolidMagicWand/><span>THEME</span>
            </div>
        </div>
    )
}