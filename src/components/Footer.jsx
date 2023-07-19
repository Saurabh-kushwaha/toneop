import React from 'react';
import {AiOutlineInstagram} from 'react-icons/ai';
import {AiOutlineTwitter} from 'react-icons/ai';
import {BiLogoFacebook} from 'react-icons/bi';
import {BiLogoLinkedin} from 'react-icons/bi';
import {AiFillYoutube} from 'react-icons/ai';
import logo from '../asset/logo.bfbeb79e.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className='flex justify-center py-20'>
                <img className='w-96' src={logo} alt='logo' />    
            </div>
            <div className="mx-auto border-b pb-10">
                <div className="flex flex-wrap justify-center md:justify-between footer_address">
                    <div className="w-full md:w-auto mb-4 md:mb-0 text-center">
                        <h2 className="text-3xl font-semibold py-1">Our Address</h2>
                        <p className='text-md font-medium'>EM-Kitchen-5/East Building, Rani Kamlapati Railway Station, Habib Ganj, Bhopal, Madhya Pradesh 462023</p>
                    </div>
                    <div className="w-full md:w-auto mb-4 md:mb-0 text-center">
                        <h2 className="text-3xl font-semibold py-1">Opening Hours</h2>
                        <p className='text-md font-medium'>Mon - Sun 10:00 AM - 11:30 PM</p>
                    </div>
                    <div className="w-full md:w-auto text-center">
                        <h2 className="text-3xl font-semibold py-1">Contact Us</h2>
                        <p className='text-md font-medium'>Email : info@toneopeats.com</p>
                        <p className='text-md font-medium'>Phone: 7400989898</p>
                    </div>
                </div>
            </div>
            <div className='text-center py-10'>
                <div className='flex justify-center space-x-8'>
                    <div className='border border-gray-300 p-2 rounded-full hover:bg-lime-500 hover:text-white cursor-pointer'><AiOutlineInstagram/></div>
                    <div className='border border-gray-300 p-2 rounded-full hover:bg-lime-500 hover:text-white cursor-pointer'><BiLogoFacebook/></div>
                    <div className='border border-gray-300 p-2 rounded-full hover:bg-lime-500 hover:text-white cursor-pointer'><AiOutlineTwitter/></div>
                    <div className='border border-gray-300 p-2 rounded-full hover:bg-lime-500 hover:text-white cursor-pointer'><BiLogoLinkedin/></div>
                    <div className='border border-gray-300 p-2 rounded-full hover:bg-lime-500 hover:text-white cursor-pointer'><AiFillYoutube/></div>
                </div>
                <div className='text-sm font-semibold text-gray-600 py-5'>
                    <h5>© Copyright All rights reserved by TONEOPEATS</h5> 
                </div>
            </div>
        </footer>
    );
};

export default Footer;

