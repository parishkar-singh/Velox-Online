import React, {useState} from 'react';
import {useRouter} from 'next/router';
import images from '@/assets'
import {motion, AnimatePresence, useMotionValue, useTransform} from "framer-motion";
import Image from "next/image";

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
            className={'overflow-visible border-none sticky top-0 z-50 transition-100 ease-in'}

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
                        className={` select-none flex  items-center justify-center text-white sticky bg-black h-[60px] mt-4 rounded-full border-none transition duration-200 ease-in ${isExpanded ? 'justify-center' : 'justify-between'}`}>
                        <Image src={images.parishkar} alt={''}
                               className={`${isExpanded ? 'hidden' : ''} no-drag w-[50px] ml-2 h-[50px] select-none rounded-full `}/>
                        <div
                            className={`select-none font-black font-BebasNeue italic grid grid-cols-4 text-3xl gap-10 md:gap-20 lg:gap-40 xl:60 2xl:gap-80 rounded-full transition duration-200 ease-in ${isExpanded ? '' : 'hidden'}`}>
                            {['1', '2', '3', '4'].map(num => (
                                <motion.span
                                    initial={{scale: 1}}
                                    whileHover={{scale:2}}
                                    whileTap={{scale: 2}}
                                    key={num}>{num}</motion.span>
                            ))}
                            {/*<Image className={`mr-2`} src={images.home} width={50} alt={``}/>*/}
                            {/*<Image className={`mr-2 rounded-3xl`} src={images.me} width={55} alt={``}/>*/}
                            {/*<Image className={`mr-2`} src={images.skills} width={50} alt={``}/>*/}
                            {/*<Image className={`mr-2 `} src={images.projects} width={50} alt={``}/>*/}
                        </div>
                        {/*<Image className={`mr-1 ${isExpanded ? 'hidden' : ''}`} src={images.update} width={50}*/}
                        {/*       alt={``}/>*/}
                    </motion.nav>
                </motion.nav>
            </motion.nav>
        </motion.nav>
    );
};

export default Navbar;


// <AiOutlineHome onClick={handleLinkClick} href={`#HomePage`} size={50}
//                className={'mr-1 text-neutral-200'}/>
// <BsBagDash onClick={handleLinkClick} href={`#Orders`} size={45}
//            className={'mr-1 text-neutral-200'}/>
// <AiOutlineShoppingCart onClick={handleLinkClick} href={`#Cart`} size={50}
//                        className={'mr-1 text-neutral-200'}/>

