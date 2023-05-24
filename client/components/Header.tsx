import React from 'react';
import Bounce from "@/motion/Bounce";

const Header: React.FC = () => {
    return (
        <Bounce>
            <div className={`mt-2 bg-black`}>
                <div className={`w-full h-[350px]`}>
                    <span className={'text-white'}>
                    This is a photo
                    </span>
                </div>
            </div>
        </Bounce>
    );
};

export default Header;
