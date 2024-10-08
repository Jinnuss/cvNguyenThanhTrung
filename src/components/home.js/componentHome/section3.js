import exp from '../../../imgs/image.png';
export default function Experience() {
    return (
        <>
            <div id='exp' className='h-[100px]'> </div>
            <div className="flex justify-center" id=''>
                <div className="text-[#2F89EC] mb-[60px] text-[34px] font-bold">
                    WORK EXPERIENCE
                </div>
            </div>
            <div className='lg:flex justify-between sm:block md:items-center'>
                <div className='md:mr-[20px] lg:w-[50%] imgEx sm:w-[100%] mb-[30px]'>
                    <img src={exp} alt="image" className='rounded-[20px]' />
                </div>
                <div className='lg:text-end lg:w-[50%] sm:text-center'>
                    <div className="text-[24px] font-bold mb-[10px]">
                        Sodo Asia Technology and Trading LLC
                    </div>
                    <div className="text-[20px] font-bold text-[#555555]">
                        10/2023 - 4/2024
                    </div>
                    <div className="text-[16px] font-bold text-[#555555]">
                        Intern Frontend
                    </div>
                    <div className='text-[16px] font-bold'>
                        Get familiar with the working environment.
                    </div>
                    <div className='text-[16px] font-bold'>
                        Learn how to write clean, concise projects.
                    </div>
                    <div className='text-[16px] font-bold'>
                        Participate directly in the project.
                    </div>
                    <div className='flex mt-[20px] lg:justify-end sm:justify-center md:items-center'>
                        <div className='itemLink button-89 font-bold'>
                            <a href="https://customer.sumoexpress.vn/yahooauction/estimate" target="blank" > Link website </a>
                        </div>
                        <div className='itemLink button-89 font-bold'>
                            <a href="https://github.com/Jinnuss/EstimatePrice" target="blank" >  Link github </a>
                        </div>
                        <div className='itemLink button-89 font-bold'>
                            <a href="https://estimate-price-tyq2.vercel.app/" target="blank" >Link vercel </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}