import './SettingsTheme.scss'
import { BiSolidMagicWand, BiSolidDownArrow } from 'react-icons/bi';
import { IoMdOpen } from 'react-icons/io';
import { ButtonSettings } from '../buttonSettings/buttonSettings';

export const SettingsTheme = () => {

    return (
        <div className="container-theme">
            <div className="container-theme-title">
                <BiSolidMagicWand/><span>THEME</span>
            </div>
            <div className="container-theme-content">
                <div className="container-theme-content-color">
                    <h1>Color Themes</h1>
                    <div className='container-theme-content-color-setar'>
                        <div className="container-theme-content-color-setar-colors">
                            
                        </div>
                        <div className="container-theme-content-color-setar-colors">
                            
                        </div>
                        <div className="container-theme-content-color-setar-colors">
                            
                        </div>
                    </div>
                </div>
                <div className='container-theme-content-color'>
                    <h1>Hour Format</h1>
                    <div className='container-theme-content-color-hour'>
                        <span>24-hour</span>
                        <BiSolidDownArrow/>
                    </div>
                </div>
                <div className='container-theme-content-color'>
                    <h1>Dark Mode when running</h1>
                    <ButtonSettings/>
                </div>
                <div className='container-theme-content-color'>
                    <h1>Small Window</h1>
                    <button id='button'>Open<IoMdOpen/></button>
                </div>
            </div>
        </div>
    )
}