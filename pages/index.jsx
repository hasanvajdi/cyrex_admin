import { useEffect, useState } from "react";

import {Input, Form, Carousel } from 'antd';
import { FaAlignJustify } from 'react-icons/fa'
import 'animate.css';
import Image from 'next/image'




import Header from '../components/Header';
import  homeStyle from '../styles/home.module.scss'

// images
import homeImage from '../public/images/home/home.webp'
import userImage from '../public/images/home/user.webp'
import yourSelf from '../public/images/home/yourself.webp'

import imageOne from '../public/images/home/1.jpg'
import imageTwo from '../public/images/home/2.jpg'
import imageThree from '../public/images/home/3.jpg'






const Home = ()=>{
    const [menuStatue, setMenuStatus] = useState("close")


    const handleSmallNavbar = ()=>{
        console.log("yeeeeeee", menuStatue)

        if(menuStatue === "open"){
            console.log("iffffffffffffffff")
            setMenuStatus("close")
        }
        else{
            console.log('elsss')
            setMenuStatus("open")
        }
    }

    return(
        <>
            <div className={ homeStyle.menuIconContainer }>
                <div className={homeStyle.navbarOptionsMenuIcon} >        
                    <FaAlignJustify className={homeStyle.navbarOptionsMenuIconIcon} onClick={handleSmallNavbar}/>
                </div>
            </div>


            <Header 
                menuStatue={menuStatue} 
                setMenuStatus={setMenuStatus}
            />


            <div className={ homeStyle.afterHeaderContainer }>
                
                <Image 
                    src="/images/home/home.webp" 
                    alt="homewebie" 
                    layout="fill"
                    className={ homeStyle.img }
                />


                <div className={ homeStyle.afterHeaderContainerCover }>
                    <div className={ homeStyle.descriptionContainer }>
                        <div >
                            <span>Copytrading</span>

                            <div>
                                Trades made by professional traders in the financial markets could be copied by other traders and users. 
                                The main reason to copy trade is for you to have the same profits as a successful investor. It’s investing with less room for costly mistakes.
                            </div>

                            <div className={ homeStyle.donwloadPlatform }>
                                Download Platform
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={ homeStyle.bodyContainer }>
                
                <div className={ homeStyle.userInfoPlatformContainer }>

                    
                    <div className={ homeStyle.userInfoContainer }>
                        <div className={ homeStyle.userInfoImageContainer}>
                            <Image 
                                src="/images/home/user.webp" 
                                layout="fill"
                                className={ homeStyle.img }
                            />
                        </div>

                        <div className={ homeStyle.userInfoDescription }>
                            <div>
                                <h1>Name</h1>
                                <div className={ homeStyle.userInfoStatitics}>
                                    <div>
                                        <h2>Volume in month</h2>
                                        <span>500</span>
                                    </div>

                                    <div>
                                        <h2>Users</h2>
                                        <span>500</span>
                                    </div>

                                    <div>
                                        <h2>Total Volume</h2>
                                        <span>500</span>
                                    </div>
                                </div>

                                <p>
                                I am a trader in the financial markets, and I use the copy trading platform to share my expertise with newcomers who want to invest in the market.
I do this to replicate my transactions into the accounts of my clients.
Visit  ??? to learn more about how does the platform work
                                </p>
                            </div>
                        </div>
                    </div>
                        
                    <div className={ homeStyle.userPlatformContainer }>
                        <div className={ homeStyle.userPlatformMain }> 
                            <div className={ homeStyle.userPlatformImageContainer }>
                                <Image 
                                   src="/images/home/yourself.webp" 
                                   layout="fill"
                                   className={ homeStyle.img }
                                />
                            </div>

                            <div className={ homeStyle.userPlatformDescription }>
                                <h1>My Copytrading Platform</h1>
                                <p>
                                The financial market's copy trading method allows my users to utilize my approach and experience based on the size of their assets.

Simply, when I open an order, all users profit from the same deal.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={ homeStyle.supportedByCyrex }>
                    <span>Supported By Cyrex</span>
                </div>

                <div className={ homeStyle.tradeHistoryContainer }>
                    <h1>Trade History </h1>
                    <div className={ homeStyle.tradeHistory } >

                        <Carousel autoplay className={ homeStyle.carouselContainer}>
                            <div>
                                <div className={ homeStyle.carouselItem }>
                                    <Image src="/images/home/1.jpg"  alt="user image" layout="fill" className={ homeStyle.carouselItemImage }/>
                                </div>
                            </div>
                            <div>
                                <div className={ homeStyle.carouselItem }>
                                    <Image src="/images/home/3.jpg"  alt="user image" layout="fill" className={ homeStyle.carouselItemImage }/>
                                </div>
                            </div>
                            <div>
                                <div className={ homeStyle.carouselItem }>
                                    <Image src="/images/home/2.jpg"  alt="user image" layout="fill" className={ homeStyle.carouselItemImage }/>
                                </div>
                            </div>
                            <div>
                                <div className={ homeStyle.carouselItem }>
                                    <Image src="/images/home/3.jpg"  alt="user image" layout="fill" className={ homeStyle.carouselItemImage }/>
                                </div>
                            </div>
                        </Carousel>
                    
                    </div>
                </div>

                <div className={ homeStyle.plansContainer }>
                    <h1>Plans</h1>

                    <div>
                        <div className={homeStyle.plansItem} >
                            <div className={ homeStyle.plansImageContainer }>
                                <Image src="/images/home/2.jpg"  alt="user image" layout="fill" className={ homeStyle.carouselItem}/>
                            </div>
                            <div className={ homeStyle.plansItemDescription } ></div>
                        </div>
                        <div className={homeStyle.plansItem} >
                            <div className={ homeStyle.plansImageContainer }>
                                <Image src="/images/home/2.jpg"  alt="user image" layout="fill" className={ homeStyle.carouselItem}/>
                            </div>
                            <div className={ homeStyle.plansItemDescription } ></div>
                        </div>
                        <div className={homeStyle.plansItem} >
                            <div className={ homeStyle.plansImageContainer }>
                                <Image src="/images/home/2.jpg"  alt="user image" layout="fill" className={ homeStyle.carouselItem}/>
                            </div>
                            <div className={ homeStyle.plansItemDescription } ></div>
                        </div>
                    </div>
                </div>

                <div className={ homeStyle.getInTouch }>
                    <div className={ homeStyle.formContainer }>
                        <h2>Get in touch</h2>
                        <Form
                            name="get_in_watch_form"
                            layout="vertical"
                            className={ homeStyle.formContainerForm }

                        >
                            <div>
                                <Form.Item
                                    label="FullName"
                                    className={ homeStyle.formItme }
                                >
                                    <Input 
                                        className={ homeStyle.formItmeInput }
                                    size="large"
                                    />
                                </Form.Item>

                                <Form.Item
                                    label="Email"
                                    className={ homeStyle.formItme }
                                >
                                    <Input 
                                        className={ homeStyle.formItmeInput }
                                    size="large"
                                    />
                                </Form.Item>
                            </div>

                            <Form.Item
                                    label="Message"
                                    className={ homeStyle.formTextArea }
                                    size="large"
                                >
                                    <Input.TextArea  rows={8} cols={53} />
                                </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;