import logo from '../../imgs/Trung-logo-1.jpg';
import { SiPowerpages } from "react-icons/si";
import { TbSectionFilled } from "react-icons/tb";
import { SiGoogledocs } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { IoPerson } from "react-icons/io5";
import { IoBookSharp } from "react-icons/io5";
import { GiSkills } from "react-icons/gi";
import { MdWorkHistory } from "react-icons/md";
import { PiProjectorScreenFill } from "react-icons/pi";

export default function Menu() {
    const [menu, setMenu] = useState(false);
    const openMenu = () => {
        setMenu(true);
    }
    const closeMenu = () => {
        setMenu(false);

    }
    return (
        <>
            <div className="">
                <div className="menu p-[10px] rounded-[10px] flex justify-between">
                    <div className='w-[50px] h-[50px] lg:block'>
                        <Link to={'/'}><img src={logo} alt='logo' className='object-cover rounded-[10px]' /></Link>
                    </div>
                    <div className='flex md:justify-between items-center sm:justify-center'>
                        <div className='text-[white] sm:hidden lg:block md:text-[16px] lg:text-[20px] mr-[10px] itemmenu flex items-center cursor-pointer w-[100px] hover:text-[22px] hover:font-bold'>
                            <div className='inline-flex items-center'>
                                <IoPerson className='mr-[10px] inline' />
                            </div>
                            <a href='#about'>About</a>
                        </div>
                        <div className='text-[white] sm:hidden lg:block md:text-[16px] lg:text-[20px] mr-[10px] itemmenu flex items-center cursor-pointer w-[140px] hover:text-[22px] hover:font-bold'>
                            <div className='inline-flex items-center'>
                                <IoBookSharp className='mr-[10px] inline' />
                            </div>
                            <a href='#Edu' >Education</a>
                        </div>
                        <div className='text-[white] sm:hidden lg:block md:text-[16px] lg:text-[20px] mr-[10px] itemmenu flex items-center cursor-pointer w-[100px] hover:text-[22px] hover:font-bold'>
                            <div className='inline-flex items-center'>
                                <GiSkills className='mr-[10px] inline' />
                            </div>
                            <a href='#Skill'>Skills</a>
                        </div>
                        <div className='text-[white] sm:hidden lg:block md:text-[16px] lg:text-[20px] mr-[10px] itemmenu flex items-center cursor-pointer w-[160px] hover:text-[22px] hover:font-bold'>
                            <div className='inline-flex items-center'>
                                <MdWorkHistory className='mr-[10px] inline' />
                            </div>
                            <a href='#exp'>Experience</a>
                        </div>
                        <div className='text-[white] sm:hidden lg:block md:text-[16px] lg:text-[20px] mr-[10px] itemmenu flex items-center cursor-pointer w-[160px] hover:text-[22px] hover:font-bold'>
                            <div className='inline-flex items-center'>
                                <PiProjectorScreenFill className='mr-[10px] inline' />
                            </div>
                            <a href='/'>Projects</a>
                        </div>
                        <a href='/documents/cv-NguyenThanhTrung.pdf' download='/documents/cv-NguyenThanhTrung.pdf'>
                            <div className='text-[white] p-[10px] btn1 md:text-[16px] lg:text-[20px] text-[white] rounded-[10px] font-bold cursor-pointer opacity-80'>
                                DOWNLOAD CV
                            </div>
                        </a>
                    </div>
                    <div className='lg:hidden sm:block text-[white] font-bold mt-[10px] text-[30px]'>
                        {menu ? <IoClose onClick={closeMenu} /> : <AiOutlineMenu onClick={openMenu} />}
                    </div>
                </div>
            </div>
            <div className={menu ? 'bg-[white]  opacity-100 mt-[5px] rounded-[10px] tableMenu lg:hidden md:block' : 'bg-[white]  opacity-100 mt-[20px] rounded-[10px] tableMenu lg:hidden hidden'} id='tableMenu'>
                <div className='text-[16px]  mr-[10px] itemmenu flex items-center cursor-pointer hover:text-[22px] hover:font-bold hover:bg-[#6373c1fa] w-[100%] rounded-[10px]'>
                    <div className='inline-flex items-center'>
                        <SiPowerpages className='mr-[10px] inline' />
                    </div>
                    About
                </div>
                <div className='text-[16px]  mr-[10px] itemmenu flex items-center cursor-pointer hover:text-[22px] hover:font-bold hover:bg-[#6373c1fa] w-[100%] rounded-[10px]'>
                    <div className='inline-flex items-center'>
                        <TbSectionFilled className='mr-[10px] inline' />
                    </div>
                    Sections
                </div>
                <div className='text-[16px]  mr-[10px] itemmenu flex items-center cursor-pointer hover:text-[22px] hover:font-bold hover:bg-[#6373c1fa] w-[100%] rounded-[10px]'>
                    <div className='inline-flex items-center'>
                        <SiGoogledocs className='mr-[10px] inline' />
                    </div>
                    Docs
                </div>
                <div className='text-[16px]  mr-[10px] itemmenu flex items-center cursor-pointer hover:text-[22px] hover:font-bold hover:bg-[#6373c1fa] w-[100%] rounded-[10px]'>
                    <div className='inline-flex items-center'>
                        <FaGithub className='mr-[10px] inline' />
                    </div>
                    Github
                </div>
            </div>

        </>
    )
}