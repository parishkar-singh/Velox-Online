import React, {ReactNode} from 'react';
import {Grid} from '@mui/material'
import Image from 'next/image';
import images from "@/assets";
const AuthLayout = ({children}: {children: ReactNode }) => {
    return (
        <Grid sx={{p:2}} container
              className={`flex flex-col items-center justify-start `}
        >
            <Image src={images.Volex} className={`w-14 h-14 rounded-full object-cover`} alt={'Volex Logo'} height={40}/>
            <main>{children}</main>
        </Grid>
    );
};

export default AuthLayout;
