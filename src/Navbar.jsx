import {FaBars,FaTwitter} from 'react-icons/fa'
import { ReactDOM } from 'react';
import logo from './logo.svg'
import './navbar.css' ;
import { links } from './data';
import { useEffect, useRef, useState } from 'react';

const Navbar =() =>{
    const [showlinks,setShowLinks] = useState(false)
    const linksRef = useRef(null)
    useEffect(() =>{
        setTimeout(() => {
            var rect = linksRef.current.getBoundingClientRect() 
            console.log(rect)
        })
    },[showlinks]);
    
    
    return (
        <nav>
            <div className='nav-center'>
                <div className='nav-header'>
                    <img className='logo' src={logo} alt='logo'   />
                    <button className='nav-toggle' onClick={() => setShowLinks(!showlinks)}><FaBars/></button> 
                </div>
                {showlinks &&(<div className={`${showlinks? "links-container show-container" : 'links-container'}`}>
                    <ul ref={linksRef} className="links">
                        {links.map((link) => {
                            const {id,url,text} = link
                            return (
                                <li key={id}>
                                    <a href={url}>{text}</a>
                                </li>
                            )
                        } )}
                    </ul>
                </div>) }
                
                <ul className='social-icons'>
                    <li><a href='https://www.twitter.com'><FaTwitter /></a></li>
                    <li><a href='https://www.twitter.com'><FaTwitter /></a></li>
                    <li><a href='https://www.twitter.com'><FaTwitter /></a></li>
                </ul>

        </div>
        </nav>
    )
}
export default Navbar ;