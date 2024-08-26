import bgsection1homepage from '../../../imgs/homepage1.jpg';
import { PiHandTapLight } from "react-icons/pi";
import front from '../../../imgs/z5758448805811_1953e96a2e9d9b742ac474a60823b764.jpg';
import back from '../../../imgs/z5758448854576_d3ea4d356d6938e186229d5f4899cb40.jpg';
import { BsCalendar2DateFill } from "react-icons/bs";
import { FaTransgender } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import Item2Section2 from "./item2Section2";
import ItemSection2 from "./itemSection2";
import { FaReact } from "react-icons/fa";
import { SiCss3 } from "react-icons/si";
import { FaAngular } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io5";
import img2 from '../../../imgs/img2.png';
import Experience from './section3';

export default function Section1Home() {
    return (
        <>
            <div className='h-[600px] overflow-hidden'>
                <div className='' id='about'>
                    <img src={bgsection1homepage} alt='bg' className='img' />
                    <div className='absolute md:top-[30%] sm:top-[20%] text-[white] flex justify-center w-[100%] text-center'>
                        <div className='flex items-center justify-between'>
                            <div className='sm:p-[10px] md:p-[20px] bg-[black] rounded-[20px] opacity-70 w-[33%] border'>
                                <div className='flex items-center mb-[20px] '>
                                    <div className="relative z-[1] text-[white] md:text-[18px] sm:text-[14px] lg:text-[26px] font-bold mr-[20px]">
                                        <BsCalendar2DateFill />
                                    </div>
                                    <div className="relative z-[1] text-[white] md:text-[18px] sm:text-[14px] lg:text-[26px]">
                                        28-08-2002
                                    </div>
                                </div>
                                <div className='flex items-center '>
                                    <div className="relative z-[1] text-[white] md:text-[18px] sm:text-[14px] lg:text-[26px] font-bold mr-[20px]">
                                        <FaTransgender />
                                    </div>
                                    <div className="relative z-[1] text-[white] md:text-[18px] sm:text-[14px] lg:text-[26px]">
                                        Male
                                    </div>
                                </div>
                            </div>
                            <div className='sm:mx-[20px] md:mx-[50px] w-[30%]' >
                                <div className='lg:text-[44px] md:text-[24px] sm:text-[16px] font-bold mb-[8px]'>
                                    NGUYEN THANH TRUNG
                                </div>
                                <div className='lg:text-[20px] md:text-[16px] sm:text-[14px]'>
                                    FRONTEND DEVELOPER
                                </div>
                            </div>
                            <div className='sm:p-[10px] md:p-[20px] bg-[black] rounded-[20px] opacity-70 w-[33%] border'>
                                <div className='flex items-center mb-[20px] '>
                                    <div className="relative z-[1] text-[white] md:text-[18px] sm:text-[14px] lg:text-[26px] font-bold mr-[20px]">
                                        <FaPhoneAlt />
                                    </div>
                                    <div className="relative z-[1] text-[white] md:text-[18px] sm:text-[14px] lg:text-[26px]">
                                        0867116642
                                    </div>
                                </div>
                                <div className='flex items-center '>
                                    <div className="relative z-[1] text-[white] md:text-[18px] sm:text-[14px] lg:text-[26px] font-bold mr-[20px]">
                                        <FaMapMarkerAlt />
                                    </div>
                                    <div className="relative z-[1] text-[white] md:text-[18px] sm:text-[14px] lg:text-[26px]">
                                        Ung Hoa, Ha Noi
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="item1-section2home left-[5%]  absolute sm:top-[48%] md:top-[55%] lg:top-[75%] w-[90%] bg-[white]" id='About'>
                        <div >
                            <div id='Edu' className='h-[100px]'> </div>
                            <div className="flex justify-center">
                                <div className="text-[#2F89EC] text-[40px] font-bold">
                                    EDUCATION
                                </div>
                            </div>
                            <div className="flex px-[10%] pt-[3%] justify-between">
                                <ItemSection2 number={715} title="English output standards" desc="Can read and listen to documents in English well." />
                                <div className="w-[1px] h-[9-%] bg-[#555555]"></div>
                                <ItemSection2 number={0} gpa="2020-2024" title="Thang Long University" desc="Computer science" />
                                <div className="w-[1px] h-[9-%] bg-[#555555]"></div>
                                <ItemSection2 number={0} gpa="3.2" title="GPA" desc="" />
                            </div>
                            <div className='flex  justify-center mt-[40px]'>
                                <img src={img2} alt='ảnh' className='imgEx' />
                            </div>
                        </div>
                        <div>
                            <div id='Skill' className='h-[100px]'> </div>
                            <div className="flex justify-center mb-[10px]" id=''>
                                <div className="text-[#2F89EC] text-[40px] font-bold">
                                    SKILLS AND PROFESSIONAL GOALS
                                </div>
                            </div>
                            <div className="md:block lg:flex px-[10%] py-[3%] lg:justify-between mb-[50px]">
                                <div className='flex justify-center mb-[40px]'>
                                    <div className="item2-section2home-left w-[40%]">
                                        <div className="item2-section2home-left-card-inner">
                                            <div className="item2-section2home-left-card-front relative">
                                                <div className="p-[40px]">
                                                    <div className="flex justify-center mb-[15px]">
                                                        <PiHandTapLight className="relative z-[2] text-[36px] font-bold text-[#7cc6f7]" />
                                                    </div>
                                                    <div className="relative z-[3] text-[#7cc6f7] text-[24px] font-bold">
                                                        PROFESSIONAL GOALS
                                                    </div>
                                                    <div className="relative z-[2] text-[white] text-[18px] font-bold">
                                                        I am seeking a position in a professional work environment after graduation.
                                                        Gain valuable experience from the organization.
                                                        Become a full-time employee of the organization.
                                                        Take advantage of future advancement opportunities.
                                                    </div>
                                                </div>
                                                <img className="rounded-[20px] absolute top-0 left-0 z-[0] w-[400px] h-[460px]" src={front} alt="anh" />
                                                <div className="rounded-[20px] absolute top-0 left-0 z-[1] w-[400px] h-[460px] bg-[black] opacity-60"></div>
                                            </div>
                                            <div className="item2-section2home-left-card-back">
                                                <img className="rounded-[20px] absolute top-0 left-0 z-[0] w-[400px] h-[460px]" src={back} alt="anh" />
                                                <div className="rounded-[20px] absolute top-0 left-0 z-[1] w-[400px] h-[460px] bg-[black] opacity-60"></div>
                                                <div className="p-[40px] text-center mt-[20%]">
                                                    <div className="relative z-[1] text-[#7cc6f7] text-[30px] font-bold">
                                                        Desire
                                                    </div>
                                                    <div className="relative z-[1] text-[white] text-[20px] font-bold">
                                                        I aim to remain with the company for a long time and also wish to learn as much as I can from my colleagues.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className='flex justify-center mb-[20px] w-[55%]'>
                                    <div className="item2-section2home-right lg:w-[100%] md:w-[100%]">
                                        <div className="flex ml-[40px] justify-between mb-[20px]">
                                            <Item2Section2 icon={<FaReact />} title="ReactJS" desc="Acquire knowledge applicable to both large and small projects, including interface design, developing a music listening website, and building a comprehensive recruitment website with all essential functionalities." />
                                            <Item2Section2 icon={<SiCss3 />} title="Tailwind, Bootstrap, HTML5, CSS, SCSS" desc="Possess application skills that can be utilized to develop web interfaces." />
                                        </div>
                                        <div className="flex ml-[40px] justify-between">
                                            <Item2Section2 icon={<FaAngular />} title="NextJS, Angular, Firebase" desc="Understand the fundamentals to incorporate into a project." />
                                            <Item2Section2 icon={<IoLogoNodejs />} title="NodeJS, MySQL" desc="Can utilize straightforward commands such as CRUD." />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='px-[10%] py-[3%]'>
                            <Experience />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}