import React from 'react';
import {Box, Grid, TextField, InputLabel, Typography, Button, Divider} from "@mui/material";

const RegistrationForm: React.FC = () => {
    return (
        <div className={``}>
            <Box sx={{border: 1, padding: 2, borderColor: '#cccccc', width: '350px', marginTop: 2}}>
                <form>
                    <Grid container className={`flex flex-col justify-items-start p-2`} >
                        <span className={`text-4xl`}>Create Account</span>
                        <InputLabel className={`text-medium mt-1`} htmlFor={'name'}>Your Name</InputLabel>
                        <TextField type={'text'} name={'name'} id={`name`} variant={`outlined`} size={'small'}/>
                        <InputLabel className={`text-medium mt-1`} htmlFor={'email'} >Email</InputLabel>
                        <TextField type={'text'} name={'email'} id={`email`} variant={`outlined`} size={'small'}/>
                        <InputLabel className={`text-medium mt-1`} htmlFor={'password'}>Password</InputLabel>
                        <TextField type={'text'} name={'password'} id={`password`} variant={`outlined`} size={'small'} placeholder={`Minimum 6 characters required`}/>
                        <InputLabel className={`text-medium mt-1`} htmlFor={'confirmPassword'}>Re-Enter Password</InputLabel>
                        <TextField type={'text'} name={'confirmPassword'} id={`confirmPassword`} variant={`outlined`} size={'small'} placeholder={`Minimum 6 characters required`}/>
                    </Grid>
                </form>
            </Box>
        </div>
    );
};

export default RegistrationForm;
