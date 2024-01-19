import './Header.css'
import logo from '../../../../src/assets/logo/BgLogo.png'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <>
        <div className="Header">
            <div className="topHeader">
            <div className="logo"><img src={logo} alt='logo' className='bgLogo' /></div>
            </div>
        
            <nav className='navigateBar'>
                <div className="buttonList">
                    <Link href="#">Home</Link>
                    <Link href="#">Products</Link>
                    <Link href="#">Contacts</Link>
                    <Link href="#">About</Link>
                </div>
            </nav>
            </div>
        </>
    )
}