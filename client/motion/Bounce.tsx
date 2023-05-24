import {motion, useMotionValue, useTransform} from "framer-motion";
import React from "react";

interface BounceProps {
    text?: string
    height?: number
    width?: number
    className?: string
    motionClassName?:string
    textSize?: number
    size?:number
    children?: React.ReactNode
}

const Bounce: React.FC<BounceProps> = ({size,motionClassName,text,textSize, children, width, className, height}) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [60, -60]);
    const rotateY = useTransform(x, [-100, 100], [-60, 60]);
    return (
        <div >
            <motion.div
                className={className}
                // whileInView={{x: [-100, 0], opacity: [0, 1]}}
                initial={{ scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                }}
            >
                {children ? (
                    React.cloneElement(children as React.ReactElement, {text})
                ) : (
                    <span>{text}</span>
                )}
            </motion.div>
        </div>
    );
}
export default Bounce;
