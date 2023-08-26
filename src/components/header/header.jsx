import './header.scss'
import { AiFillCheckCircle, AiOutlineSetting} from 'react-icons/ai';
import { HiOutlineDocumentReport } from 'react-icons/hi';
import { IoMdContact } from 'react-icons/io';

export const Header = () => {
    return (
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
                            <a href="#"><AiOutlineSetting/>Setting</a>
                        </li>
                        <li>
                            <a href="#"><IoMdContact/>Report</a>
                        </li>
                    </ul>
                </nav>

            </div>
            <div className='header-content-border'></div>
            
        </div>
    )
}