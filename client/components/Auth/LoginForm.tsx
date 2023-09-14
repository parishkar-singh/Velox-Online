import React from 'react';
import {Box, Button, CircularProgress, Divider, Grid, InputLabel, TextField} from "@mui/material";
import Link from "next/link";
import useInput from "@/hooks/input/use-input";
import {validateNameLength, ValidatePasswordLength} from "@/utils/validation/length";
import {ValidateEmail} from "@/utils/validation/email";
import {useAppDispatch, useAppSelector} from "@/redux/hooks/hooks";
import {LoginUser} from "@/models/interfaces/LoginUser.interface";
import {login} from "@/redux/authSlice";

const LoginForm: React.FC = () => {
    const clearForm = () => {
        emailClearHandler();
        passwordClearHandler();
    };
    const dispatch = useAppDispatch();
    const {isLoading, isSuccess,isAuthenticated} = useAppSelector((state) => state.auth)
    const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        if (emailHasError || passwordHasError)
            return;
        if (email.length === 0 || password.length === 0)
            return;
        const loginUser:LoginUser={email,password}
        dispatch(login(loginUser))
    }
    if (isLoading)
        return <CircularProgress sx={{marginTop:'64px'}} color='primary'/>
    const {
        text: name,
        shouldDisplayError: nameHasError,
        textChangeHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandler,
        clearHandler: nameClearHandler,
    } = useInput(validateNameLength);
    const {
        text: email,
        shouldDisplayError: emailHasError,
        textChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        clearHandler: emailClearHandler,
    } = useInput(ValidateEmail);
    const {
        text: password,
        shouldDisplayError: passwordHasError,
        textChangeHandler: passwordChangeHandler,
        inputBlurHandler: passwordBlurHandler,
        clearHandler: passwordClearHandler,
    } = useInput(ValidatePasswordLength);
    return (
        <div className={`bg-white mt-2  border-2 border-neutral-200 p-4`}>
            <Box sx={{width: '350px', marginTop: 2}}>
                <form onSubmit={onSubmitHandler}>
                    <Grid container className={`flex flex-col justify-items-start p-2`}>
                        <span className={`text-4xl mb-4`}>Sign In</span>
                        <InputLabel className={`text-medium mt-1`} htmlFor={'email'}>Email</InputLabel>
                        <TextField
                            value={email}
                            onChange={emailChangeHandler}
                            onBlur={emailBlurHandler}
                            error={emailHasError}
                            helperText={emailHasError && 'Please enter a valid email'}
                            type={'text'} name={'email'} id={`email`} variant={`outlined`} size={'small'}/>
                        <InputLabel className={`text-medium mt-1`} htmlFor={'password'}>Password</InputLabel>
                        <TextField
                            value={password}
                            onChange={passwordChangeHandler}
                            onBlur={passwordBlurHandler}
                            error={passwordHasError}
                            helperText={passwordHasError && 'Password must be at least 6 characters'}
                            type={'password'} name={'password'} id={`password`} variant={`outlined`} size={'small'}
                            placeholder={`Minimum 6 characters required`}/>
                        <Button type={`submit`} className={`mt-4 bg-amber-200 text-black rounded`}>Login</Button>
                    </Grid>
                </form>
                <div className={`mt-[10px]`}>
                    <small>
                        <span>By continuing, you agree to Volex Store's</span>
                    </small>
                </div>
                <div className={`mt-[10px]`}>
                    <small>
                        <a className={`text-blue-700`} href={`#`}>Conditions of use</a>{``} and {``} <a
                        className={`text-blue-700`} href={`#`}>Privacy Notice</a>
                    </small>
                </div>
                <Divider className={`mt-2`}/>
                <div className={`mt-[10px]`}>
                    <small>
                        New to Volex?{` `}
                        <Link className={'text-amber-500'} href={`/Register`}>Sign-Up</Link>
                    </small>
                </div>
            </Box>
        </div>
    );
};
export default LoginForm;
