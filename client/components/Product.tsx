import React from 'react';
import Image from 'next/image'
import SpringText from "@/motion/SpringText";
import images from '../assets'
import Bounce from "@/motion/Bounce";

const Product: React.FC = () => {
    return (
        <Bounce>
            <SpringText>
                <div className={'flex flex-col mt-2 w-[30%] h-[30%] justify-center items-center bg-blue-400'}>
                    <div>
                        <Image className={`w-auto h-auto`} src={images.parishkar} alt={``}/>
                    </div>
                    <span>
                Parishkar singh 50$
            </span>
                </div>
            </SpringText>
        </Bounce>
    );
};

export default Product;
