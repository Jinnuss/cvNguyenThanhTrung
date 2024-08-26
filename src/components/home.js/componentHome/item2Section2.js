
export default function Item2Section2(props) {
    const icon = props.icon;
    const title = props.title;
    const desc = props.desc;
    return (
        <>
            <div className="mr-[20px] md:w-[50%] sm:w-[100%]">
                <div className="text-[40px] text-center sm:flex sm:justify-center lg:block font-bold text-[#2F89EC] mb-[10px]">
                    {icon}
                </div>
                <div className="text-[20px] font-bold mb-[10px] h-[50px] sm:text-center lg:text-start">
                    {title}
                </div>
                <div className="text-[16px] sm:text-center lg:text-start">
                    {desc}
                </div>
            </div>
        </>
    )
}