import pj1 from '../../../imgs/pj1.png';
import pj2 from '../../../imgs/pj2.png';
import pj3 from '../../../imgs/pj3.png';
import pj4 from '../../../imgs/pj4.png';
import pj5 from '../../../imgs/pj5.png';
export default function Projects() {
    return (
        <>
            <div id='project' className='h-[100px]'> </div>
            <div className="flex justify-center" id=''>
                <div className="text-[#2F89EC] mb-[60px] text-[34px] font-bold">
                    PROJECTS
                </div>
            </div>
            <div className='lg:flex justify-between sm:block md:items-center mb-[40px]'>
                <div className='md:mr-[20px] lg:w-[50%] imgEx sm:w-[100%] mb-[30px]'>
                    <img src={pj1} alt="image" className='rounded-[20px]' />
                </div>
                <div className='lg:text-end lg:w-[50%] sm:text-center'>
                    <div className="text-[24px] font-bold mb-[10px]">
                        Website IT industry recruitment website
                    </div>
                    <div className="text-[20px] font-bold text-[#555555]">
                        03/2024 - 05/2024
                    </div>
                    <div className="text-[16px] font-bold text-[#555555]">
                        ReactJS, NodeJS, Firebase
                    </div>
                    <div className='text-[16px] font-bold'>
                        The website offers the following functions: Login, Register, Apply, Search, and View Jobs.
                    </div>
                    <div className='text-[16px] font-bold'>
                        On the admin side, the functions include: Manage Jobs, CVs, and Company Information Management.
                    </div>
                    <div className='flex mt-[20px] lg:justify-end sm:justify-center md:items-center'>
                        <div className='itemLink button-89 font-bold'>
                            <a href="https://github.com/Jinnuss/firebase" target="blank" >  Link github </a>
                        </div>
                        <div className='itemLink button-89 font-bold'>
                            <a href="https://firebase-rosy.vercel.app/" target="blank" >Link vercel </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[100%] h-[2px] bg-[#555555] mb-[40px]'></div>
            <div className='lg:flex justify-between sm:block md:items-center mb-[40px]'>
                <div className='lg:text-start lg:w-[50%] sm:text-center'>
                    <div className="text-[24px] font-bold mb-[10px]">
                        Website Music
                    </div>
                    <div className="text-[20px] font-bold text-[#555555]">
                        07/2024 - 07/2024
                    </div>
                    <div className="text-[16px] font-bold text-[#555555]">
                        ReactJS, NodeJS, Firebase
                    </div>
                    <div className='text-[16px] font-bold'>
                        The website offers the following functions: Listen to music, play tracks, rewind, switch songs, adjust the volume, and display songs by artist and genre.
                    </div>
                    <div className='flex mt-[20px] lg:justify-start sm:justify-center md:items-center mb-[20px]'>
                        <div className='itemLink button-89 font-bold'>
                            <a href="https://github.com/Jinnuss/musicappreact" target="blank" >  Link github </a>
                        </div>
                        <div className='itemLink button-89 font-bold'>
                            <a href="https://musicappreact.vercel.app/" target="blank" >Link vercel </a>
                        </div>
                    </div>
                </div>
                <div className='lg:ml-[20px] lg:w-[50%] imgEx sm:w-[100%] mb-[30px]'>
                    <img src={pj2} alt="image" className='rounded-[20px]' />
                </div>
            </div>
            <div className='w-[100%] h-[2px] bg-[#555555] mb-[40px]'></div>
            <div className="md:block lg:flex  py-[3%] lg:justify-between lg:mb-[120px] sm:mb-[40px]">
                <div className='flex justify-center mb-[40px]'>
                    <div className="item2-section2home-left lg:w-[35vw] sm:w-[100%] ">
                        <div className="item2-section2home-left-card-inner">
                            <div className="item2-section2home-left-card-front relative">
                                <img className="rounded-[20px] absolute top-0 left-0 z-[0]  lg:w-[35vw] sm:w-[100%]" src={pj3} alt="anh" />
                            </div>
                            <div className="item2-section2home-left-card-back">
                                <img className="rounded-[20px] absolute top-0 left-0 z-[0] lg:w-[35vw] sm:w-[100%]" src={pj4} alt="anh" />

                            </div>
                        </div>

                    </div>
                </div>
                <div className='lg:text-end lg:w-[50%] sm:text-center lg:mt-[20px] md:mt-[420px] sm:mt-[320px]'>
                    <div className="text-[24px] font-bold mb-[10px]">
                        The template interface
                    </div>
                    <div className="text-[20px] font-bold text-[#555555]">
                        06/2024 - 06/2024
                    </div>
                    <div className="text-[16px] font-bold text-[#555555]">
                        NextJS, Tailwind & Javascript, Scss
                    </div>
                    <div className='flex mt-[20px] lg:justify-end sm:justify-center md:items-center'>
                        <div className='itemLink button-89 font-bold'>
                            <a href="https://github.com/Jinnuss/Next-Test" target="blank" >  Link github 1 </a>
                        </div>
                        <div className='itemLink button-89 font-bold'>
                            <a href="https://next-test-liard-nine.vercel.app/" target="blank" >Link vercel 1</a>
                        </div>
                    </div>
                    <div className='flex mt-[20px] lg:justify-end sm:justify-center md:items-center'>
                        <div className='itemLink button-89 font-bold'>
                            <a href="https://github.com/Jinnuss/project-4" target="blank" >  Link github 2 </a>
                        </div>
                        <div className='itemLink button-89 font-bold'>
                            <a href="https://emtentrung-pj4.vercel.app/" target="blank" >Link vercel 2 </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[100%] h-[2px] bg-[#555555] mb-[40px]'></div>
            <div className='lg:flex justify-between sm:block md:items-center mb-[80px]'>
                <div className='lg:text-start lg:w-[50%] sm:text-center'>
                    <div className="text-[24px] font-bold mb-[10px]">
                        Module Estimate Price
                    </div>
                    <div className="text-[20px] font-bold text-[#555555]">
                        01/2024 - 01/2024
                    </div>
                    <div className="text-[16px] font-bold text-[#555555]">
                        Angular, NodeJS
                    </div>
                    <div className='text-[16px] font-bold'>
                        The module functions to calculate the Price based on the values entered by the user and the country they select.
                    </div>
                    <div className='flex mt-[20px] lg:justify-start sm:justify-center md:items-center mb-[20px]'>
                        <div className='itemLink button-89 font-bold'>
                            <a href=" https://github.com/Jinnuss/EstimatePrice" target="blank" >  Link github </a>
                        </div>
                        <div className='itemLink button-89 font-bold'>
                            <a href="https://estimate-price-tyq2.vercel.app/" target="blank" >Link vercel </a>
                        </div>
                    </div>
                </div>
                <div className='md:ml-[20px] lg:w-[50%] imgEx sm:w-[100%] mb-[30px]'>
                    <img src={pj5} alt="image" className='rounded-[20px]' />
                </div>
            </div>

        </>
    )
}