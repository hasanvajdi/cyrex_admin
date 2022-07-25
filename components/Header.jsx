import { useState, useEffect } from "react";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";


import headerStyle from '../styles/header.module.scss'


const Header = ({ menuStatue, setMenuStatus })=>{
    const [menuStatus2, setMenuStatus2] = useState(menuStatue)

    

    useEffect(()=>{
        

        if(menuStatue === "open"){
            setMenuStatus2(headerStyle.widthOpen100)
        }
        else{
            console.log('in else')
            setMenuStatus2(headerStyle.widthClose)
            setMenuStatus("close")
        }
    }, [menuStatue])


    const handleSmallNavbar = ()=>{
        setMenuStatus2(headerStyle.widthClose)
        setMenuStatus("close")
    }

    return(
        <>  
           
            <div className={ `${headerStyle.headerContainer } ${menuStatus2} `} >
                <div className={headerStyle.closeNavbarIcons} onClick={handleSmallNavbar}>
                    <AiOutlineClose  />
                </div>

                <span>Logo/Name</span>

                <ul>
                    <li>About</li>
                    <li>MyPlatform</li>
                    <li>Plans</li>
                    <li>Copytrading</li>
                    <li>Contact</li>
                </ul>

                <div className={ headerStyle.socialMedia }>
                    <FaInstagram className={ headerStyle.socialMediaIcon }/>
                    <FaTwitter className={ headerStyle.socialMediaIcon }/>
                    <FaFacebookF className={ headerStyle.socialMediaIcon }/>
                </div>
            </div>
        
        </>
    )
}

export default Header;