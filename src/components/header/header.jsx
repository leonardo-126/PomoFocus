import { useEffect, useState } from 'react';
import './header.scss'
import { AiFillCheckCircle, AiOutlineSetting} from 'react-icons/ai';
import { HiOutlineDocumentReport } from 'react-icons/hi';
import { IoMdContact } from 'react-icons/io';
import { Settings } from '../settings/settings';

export const Header = () => {
    const [modalSetting, setModalSetting] = useState(false)
    
    const modalTongle = () => {
        setModalSetting(!modalSetting)
        
    }
    
    useEffect(() => {

        console.log(modalSetting)
    },[modalSetting])


    return (
        <>
            <div className='header-container'>
                <div className="header-content">
                    <div className='header-content-logo'>
                        <a href="#"><AiFillCheckCircle/>MeuFoco</a>
                    </div>
                    <nav className="header-content-navbar">
                        <ul>
                            <li>
                                <a href="#"><HiOutlineDocumentReport/>Report</a>
                            </li>
                            <li>
                                <a href="#" onClick={modalTongle}><AiOutlineSetting/>Setting</a>
                            </li>
                            <li>
                                <a href="#"><IoMdContact/>Report</a>
                            </li>
                        </ul>
                    </nav>

                </div>
                <div className='header-content-border'></div>
                
            </div>
            {modalSetting ? <Settings setModalProps={modalTongle} /> : <></>} {/*modal of settings*/}
        </>
    )
}