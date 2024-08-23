import { Outlet } from "react-router-dom";
import Menu from "../../commonComponent/menu/Menu";

export default function LayoutDefault() {
    return (
        <>
            <div className="relative">
                <div className="fixed top-[20px] right-[10%] left-[10%] z-10">
                    <Menu />
                </div>
                <Outlet className="z-20" />
            </div>
        </>
    )
}