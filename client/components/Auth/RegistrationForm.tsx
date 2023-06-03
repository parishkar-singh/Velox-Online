import React from 'react';
import {Box, Grid, TextField, InputLabel, Typography, Button, Divider} from "@mui/material";
import Link from "next/link";
const RegistrationForm: React.FC = () => {
    const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('form submitted');
    }
    return (
        <div className={`bg-white rounded-3xl border-2 border-neutral-200 p-4`}>
            <Box sx={{ width: '350px', marginTop: 2}}>
                <form onSubmit={onSubmitHandler}>
                    <Grid container className={`flex flex-col justify-items-start p-2`}>
                        <span className={`text-4xl mb-4`}>Create Account</span>
                        <InputLabel className={`text-medium mt-1`} htmlFor={'name'}>Your Name</InputLabel>
                        <TextField type={'text'} name={'name'} id={`name`} variant={`outlined`} size={'small'}/>
                        <InputLabel className={`text-medium mt-1`} htmlFor={'email'}>Email</InputLabel>
                        <TextField type={'text'} name={'email'} id={`email`} variant={`outlined`} size={'small'}/>
                        <InputLabel className={`text-medium mt-1`} htmlFor={'password'}>Password</InputLabel>
                        <TextField type={'text'} name={'password'} id={`password`} variant={`outlined`} size={'small'}
                                   placeholder={`Minimum 6 characters required`}/>
                        <InputLabel className={`text-medium mt-1`} htmlFor={'confirmPassword'}>Re-Enter
                            Password</InputLabel>
                        <TextField type={'text'} name={'confirmPassword'} id={`confirmPassword`} variant={`outlined`}
                                   size={'small'} placeholder={`Minimum 6 characters required`}/>
                        <Button type={`submit`} className={`mt-4 bg-amber-200 text-black rounded`}>Register</Button>
                    </Grid>
                </form>
                <div className={`mt-[10px]`}>
                    <small>
                        <span>By creating an account, your agree to Volex Store's</span>
                    </small>
                </div>
                <div className={`mt-[10px]`}>
                    <small>
                        <a className={`text-blue-700`} href={`#`}>Conditions of use</a>{``} and {``} <a className={`text-blue-700`} href={`#`}>Privacy Notice</a>
                    </small>
                </div>
                <Divider className={`mt-2`}/>
                <div className={`mt-[10px]`}>
                    <small>
                        Already have an account?{` `}
                        <Link className={'text-amber-500'} href={`/Login`}>Sign-In</Link>
                    </small>
                </div>
            </Box>
        </div>
    );
};
export default RegistrationForm;
