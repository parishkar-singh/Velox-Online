import React, {useState} from 'react';
import SpringText from "@/motions/SpringText";
import Bounce from "@/motions/Bounce";
import {motion, AnimatePresence, useMotionValue, useTransform} from "framer-motion";
interface NavbarProps {
    navItems?: string[]
}
const Navbar: React.FC<NavbarProps> = ({navItems}) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const containerVariants = {
        expanded: {
            width: '50%',
            transition: {
                type: 'spring',
                stiffness: 500,
                damping: 15,
            },
        },
        collapsed: {
            width: '15%',
            transition: {
                type: 'spring',
                stiffness: 500,
                damping: 15,
            },
        },
    };
    return (
        <motion.div
            initial={{scale: 0}}
            animate={{scale: .9}}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20
            }}
            whileHover={{scale: 1}}
            whileTap={{
                scale: 0.8,
                borderRadius: "100%"
            }}
        >
            <motion.div
                style={{
                    borderRadius: 30,
                    cursor: "grab",
                }}
                drag
                dragConstraints={{top: 0, right: 0, bottom: 0, left: 0}}
                dragTransition={{bounceStiffness: 600, bounceDamping: 20}}
                dragElastic={0.7}
                whileTap={{cursor: "grabbing"}}
            >
                <div className={`flex justify-center items-center`}>
                    <motion.div
                        variants={containerVariants}
                        animate={isExpanded ? 'expanded' : 'collapsed'}
                        whileHover={isExpanded ? {width: '60%',} : {width: '30%'}}
                        onClick={() => {
                            setIsExpanded(!isExpanded)
                        }}
                        className={`flex flex-row items-center justify-center text-white sticky bg-black h-[60px] mt-4 rounded-full border-none transition-100 ease-in`}>
                        <div
                            className={`flex flex-row justify-center items-center ${isExpanded ? '' : 'hidden'}`}>
                            {navItems?.map((item,index)=>(
                            <span key={index} className={`mr-4`}>{item}</span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>

    );
};

export default Navbar;
