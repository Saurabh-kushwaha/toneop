import React, { useState } from 'react';
import logo from '../asset/logo.bfbeb79e.png';
import backicon from '../asset/backicon.svg';
import white_logo from '../asset/toneopeats_white.e59ef674.png';
import menuPlate from '../asset/menuplate.fe3e423b.webp';
import iconmenu from '../asset/iconmenu.svg';
import call from '../asset/call.svg';
import wattasapp from '../asset/whatsapp.0a107a53.png';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { BiLogoFacebook } from 'react-icons/bi';
import { BiLogoLinkedin } from 'react-icons/bi';
import { AiFillYoutube } from 'react-icons/ai';
const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header className="Navbar_headerSec">
            <div className="prZero">
                <div className="topBar">
                    <ul className="flex justify-between Navbar_topUl">
                        <li>
                            <a className="Navbar_logoText" href="/">
                                <img src={logo} alt="Logo" />
                            </a>
                        </li>
                        <li className="Navbar_TopliMid">
                            <a href="/">
                                <div style={{ color: 'black' }}>Meal Subscription Plans</div>
                            </a>
                            <a href="/menu">
                                <div style={{ color: 'rgb(128, 181, 59)' }}>Menu</div>
                            </a>
                        </li>
                        <li className="text-right">
                            <span className="cursor-pointer" style={{ width: '0%' }} onClick={toggleMenu}>
                                <img src={iconmenu} alt="Menu" />
                            </span>
                        </li>
                    </ul>
                </div>
                <ul
                    id="Navbar_mySidenav"
                    className={`Navbar_sidenav ${isMenuOpen ? 'open' : ''}`}
                    style={{ width: isMenuOpen ? '100%' : '0%', listStyleType: 'none', paddingLeft: '0px' }}
                >
                    <li className="Navbar_closebtn" onClick={closeMenu}>
                        <img src={backicon} alt="Close" />
                    </li>
                    <li className='pl-10'>
                        <a href="/" className="Navbar_menulogo ml-10">
                            <img src={white_logo} alt="Toneop" />
                        </a>
                    </li>
                    <li className='pl-10'>
                        <div className="Navbar_menuPlans">
                            <a href="/menu">Menu</a>
                        </div>
                    </li>
                    <li className='pl-10'>
                        <a href="/home">Home</a>
                    </li>
                    <li className='pl-10'>
                        <a href="/about">About Us</a>
                    </li>
                    <li className='pl-10'>
                        <a href="/faq">FAQ</a>
                    </li>
                    <li className='pl-10'>
                        <div className="Navbar_menuSocial space-x-2">
                            <a href="https://www.instagram.com/toneopofficial" target="_blank" rel="noopener noreferrer">
                                <div className='border border-gray-300 p-2 rounded-full hover:bg-lime-500 hover:text-white'><AiOutlineInstagram /></div>
                            </a>
                            <a href="https://www.facebook.com/toneopfitness" target="_blank" rel="noopener noreferrer">
                                <div className='border border-gray-300 p-2 rounded-full hover:bg-lime-500 hover:text-white'><BiLogoFacebook /></div>
                            </a>
                            <a href="https://twitter.com/OfficialToneop" target="_blank" rel="noopener noreferrer">
                                <div className='border border-gray-300 p-2 rounded-full hover:bg-lime-500 hover:text-white'><AiOutlineTwitter /></div>
                            </a>
                            <a href="https://www.linkedin.com/company/toneopfitness" target="_blank" rel="noopener noreferrer">
                                <div className='border border-gray-300 p-2 rounded-full hover:bg-lime-500 hover:text-white'><BiLogoLinkedin /></div>
                            </a>
                            <a href="https://www.youtube.com/channel/UCkGuRDxNbUIVZgxpv41YOlg" target="_blank" rel="noopener noreferrer">
                                <div className='border border-gray-300 p-2 rounded-full hover:bg-lime-500 hover:text-white'><AiFillYoutube /></div>
                            </a>
                        </div>
                    </li>
                    <li className="Navbar_imgLi">
                        <img src={menuPlate} alt="Menu Plate" />
                    </li>
                </ul>
            </div>
            <div className="Navbar_contact_container">
                <div className="Navbar_contact_chip">
                    <button className="Navbar_contact_dialer" style={{ outline: 'none' }}>
                        <img src={call} alt="Call" className='h-5 w-5'/>
                    </button>
                    <button
                        style={{ border: 'none', backgroundColor: 'rgb(255, 255, 255)', height: '35px', width: '35px', borderRadius: '30px', marginLeft: '5px', marginTop: '6px', outline: 'none' }}
                    >
                        <img src={wattasapp} alt="WhatsApp" className='h-9 w-9'  />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
