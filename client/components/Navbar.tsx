import React, {useState} from 'react';
import {useRouter} from 'next/router';
import images from '../assets'
import {motion, AnimatePresence, useMotionValue, useTransform} from "framer-motion";
import Image from "next/image";
import {HiOutlineSearchCircle, HiOutlineSearch} from 'react-icons/hi'
import {AiOutlineHome, AiOutlineShoppingCart} from 'react-icons/ai'
import {BsFillHandbagFill} from 'react-icons/bs'
import {BsBagDash} from 'react-icons/bs'

interface NavbarProps {
    navItems?: string[]
}
const Navbar: React.FC<NavbarProps> = ({navItems}) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const router = useRouter()
    const handleLinkClick = (e: any) => {
        e.stopPropagation();
        e.preventDefault();
        const href = e.target.getAttribute('href');
        if (href) {
            router.push(href);
        }
    };
    const containerVariants = {
        expanded: {
            width: '75%',
            transition: {
                type: 'spring',
                stiffness: 500,
                damping: 15,
            },
        },
        collapsed: {
            width: '40%',
            transition: {
                type: 'spring',
                stiffness: 500,
                damping: 15,
            },
        },
    };
    return (
        <motion.nav
            initial={{scale: 0}}
            animate={{scale: .9}}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20
            }}
            whileHover={{scale: 1}}
            whileTap={{
                scale: 1.4,
                borderRadius: "100%"
            }}
            className={'overflow-hidden sticky top-0 z-50 transition-100 ease-in'}

        >
            <motion.nav
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
                <motion.nav className={`flex justify-center items-center`}>
                    <motion.nav
                        variants={containerVariants}
                        animate={isExpanded ? 'expanded' : 'collapsed'}
                        whileHover={isExpanded ? {width: '70%',} : {width: '50%'}}
                        onClick={() => {
                            setIsExpanded(!isExpanded)
                        }}
                        className={`select-none flex  items-center justify-center text-white sticky bg-black h-[60px] mt-4 rounded-full border-none transition-100 ease-in ${isExpanded ? 'justify-center' : 'justify-between'}`}>
                        {isExpanded ? '' : (
                            <Image src={images.parishkar} alt={''}
                                   className={`no-drag w-[50px] ml-2 h-[50px] select-none rounded-full`}/>
                        )
                        }
                            <div
                                className={`select-none flex flex-row justify-center items-center rounded-full ${isExpanded ? '' : 'hidden'}`}>

                                <AiOutlineHome onClick={handleLinkClick} href={`#HomePage`} size={50}
                                               className={'mr-1 text-neutral-200'}/>
                                <BsBagDash onClick={handleLinkClick} href={`#Orders`} size={45}
                                           className={'mr-1 text-neutral-200'}/>
                                <AiOutlineShoppingCart onClick={handleLinkClick} href={`#Cart`} size={50}
                                                       className={'mr-1 text-neutral-200'}/>
                                {/*className={`select-none text-[14px] md:text-2xl mr-4 cursor-pointer rounded-full no-drag`}>*/}
                            </div>
                        <HiOutlineSearchCircle size={50} className={'mr-1 text-neutral-200'}/>

                    </motion.nav>
                </motion.nav>
            </motion.nav>
        </motion.nav>
    );
};

export default Navbar;
