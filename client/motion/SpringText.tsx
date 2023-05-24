import {motion, useMotionValue, useTransform} from "framer-motion";
import React from "react";

interface SpringTextProps {
    text?: string
    height?: number
    width?: number
    className?: string
    motionClassName?:string
    textSize?: number
    size?:number
    children?: React.ReactNode
}

const SpringText: React.FC<SpringTextProps> = ({size,motionClassName,text,textSize, children, width, className, height}) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [60, -60]);
    const rotateY = useTransform(x, [-100, 100], [-60, 60]);
    return (
        <div >
            <motion.div
                className={className}
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
                {children ? (
                    React.cloneElement(children as React.ReactElement, {text})
                ) : (
                    <span>{text}</span>
                )}
            </motion.div>
        </div>
    );
}
export default SpringText;
