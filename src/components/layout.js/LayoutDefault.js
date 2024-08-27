import { Outlet } from "react-router-dom";
import Menu from "../../commonComponent/menu/Menu";
import { motion, useScroll } from "framer-motion";
import Footer from "../home.js/componentHome/footer";

export default function LayoutDefault() {
    const { scrollYProgress } = useScroll();
    return (
        <>
            <div className="relative">
                <motion.div
                    className="progress-bar"
                    style={{ scaleY: scrollYProgress }}
                />
                <div className="fixed top-[15px] right-[10%] left-[10%] z-10">
                    <Menu />
                </div>
                <Outlet className="z-20" />
                <div className="fixed bottom-[0px] right-[0px] left-[0px] z-10">
                    <Footer />
                </div>
            </div>
        </>
    )
}