import React from 'react';
import {AiOutlineInstagram} from 'react-icons/ai';
import {AiOutlineTwitter} from 'react-icons/ai';
import {BiLogoFacebook} from 'react-icons/bi';
import {BiLogoLinkedin} from 'react-icons/bi';
import {AiFillYoutube} from 'react-icons/ai';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container mx-auto py-4 px-6">
                <div className="flex flex-wrap justify-center md:justify-between">
                    <div className="w-full md:w-auto mb-4 md:mb-0 text-center">
                        <h4 className="text-lg font-bold">Our Address</h4>
                        <p>EM-Kitchen-5/East Building, Rani Kamlapati Railway Station, Habib Ganj, Bhopal, Madhya Pradesh 462023</p>
                    </div>
                    <div className="w-full md:w-auto mb-4 md:mb-0 text-center">
                        <h4 className="text-lg font-bold">Opening Hours</h4>
                        <p>Mon - Sun 10:00 AM - 11:30 PM</p>
                    </div>
                    <div className="w-full md:w-auto text-center">
                        <h4 className="text-lg font-bold">Contact Us</h4>
                        <p>Email : info@toneopeats.com</p>
                        <p>Phone: 7400989898</p>
                    </div>
                </div>
            </div>
            <div className='text-center'>
                <div className='flex justify-center'>
                    <div><AiOutlineInstagram/></div>
                    <div><BiLogoFacebook/></div>
                    <div><AiOutlineTwitter/></div>
                    <div><BiLogoLinkedin/></div>
                    <div><AiFillYoutube/></div>
                </div>
                <div>
                    <h5>© Copyright All rights reserved by TONEOPEATS</h5> 
                </div>
            </div>
        </footer>
    );
};

export default Footer;

