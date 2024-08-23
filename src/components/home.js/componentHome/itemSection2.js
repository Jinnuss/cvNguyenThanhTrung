import { useEffect, useState } from "react";

export default function ItemSection2(props) {
    const countnumber = props.number;
    const title = props.title;
    const desc = props.desc;
    const gpa = props.gpa;
    const [number, setnumber] = useState(0);

    useEffect(() => {
        if (number < countnumber) {
            setTimeout(() => {
                setnumber(number + 1);
            }, 1);
        }
    }, [number])
    return (
        <>
            <div className="text-center p-[16px] w-[32%]">
                <div className="lg:text-[46px] md:text-[24px] font-bold text-[#2F89EC] mb-[10px]">
                    {countnumber === 0 ? gpa : number}
                </div>
                <div className="lg:text-[20px] md:text-[18px] font-bold mb-[10px]">
                    {title}
                </div>
                <div className="lg:text-[16px] ">
                    {desc}
                </div>
            </div>
        </>
    )
}