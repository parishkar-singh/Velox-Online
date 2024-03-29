import React, {useEffect} from 'react';
import {Box, Button, CircularProgress, Divider, Grid, InputLabel, TextField} from "@mui/material";
import Link from "next/link";
import useInput from "@/hooks/input/use-input";
import {validateNameLength, ValidatePasswordLength} from "@/utils/validation/length";
import {ValidateEmail} from "@/utils/validation/email";
import {NewUser} from "@/models/NewUser";
import {useAppDispatch, useAppSelector} from "@/redux/hooks/hooks";
import {useRouter} from "next/router";
import {register, reset} from "@/redux/authSlice";

const RegistrationForm: React.FC = () => {
    const router = useRouter();
    const dispatch = useAppDispatch()
    const {isLoading, isSuccess} = useAppSelector((state) => state.auth || {});
    const clearForm = () => {
        nameClearHandler();
        emailClearHandler();
        passwordClearHandler();
        confirmPasswordClearHandler();
    }
    const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (nameHasError || emailHasError || passwordHasError || confirmPasswordHasError || password !== confirmPassword)
            return;
        if (name.length === 0 || email.length === 0 || password.length === 0 || confirmPassword.length === 0)
            return;
        const newUser: NewUser = {
            name,
            email,
            password,
        }
        dispatch(register(newUser))
        clearForm();
    }
    useEffect(() => {
        if (isSuccess) {
            dispatch(reset())
            clearForm()
            router.push('/Login')
        }
    }, [isSuccess, dispatch])
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
    const {
        text: confirmPassword,
        shouldDisplayError: confirmPasswordHasError,
        textChangeHandler: confirmPasswordChangeHandler,
        inputBlurHandler: confirmPasswordBlurHandler,
        clearHandler: confirmPasswordClearHandler,
    } = useInput(ValidatePasswordLength);

    if (isLoading)
        return <CircularProgress className={`mt-2 text-black`}/>

    return (
        <div className={`bg-white mt-2 border-2 border-neutral-200 p-4`}>
            <Box sx={{width: '350px', marginTop: 2}}>
                <form onSubmit={onSubmitHandler}>
                    <Grid container className={`flex flex-col justify-items-start p-2`}>
                        <span className={`text-4xl mb-4`}>Create Account</span>
                        <InputLabel className={`text-medium mt-1`} htmlFor={'name'}>Your Name</InputLabel>
                        <TextField value={name} onChange={nameChangeHandler} onBlur={nameBlurHandler}
                                   error={nameHasError} helperText={nameHasError ? 'Enter your Name' : ' '}
                                   type={'text'} name={'name'} id={`name`} variant={`outlined`} size={'small'}/>
                        <InputLabel className={`text-medium mt-1`} htmlFor={'email'}>Email</InputLabel>
                        <TextField
                            value={email}
                            onChange={emailChangeHandler}
                            onBlur={emailBlurHandler}
                            error={emailHasError}
                            helperText={emailHasError ? 'Enter a valid email' : ' '}
                            type={'text'} name={'email'} id={`email`} variant={`outlined`} size={'small'}/>
                        <InputLabel className={`text-medium mt-1`} htmlFor={'password'}>Password</InputLabel>
                        <TextField
                            value={password}
                            onChange={passwordChangeHandler}
                            onBlur={passwordBlurHandler}
                            error={passwordHasError}
                            helperText={passwordHasError ? 'Enter a valid password' : ' '}
                            type={'password'} name={'password'} id={`password`} variant={`outlined`} size={'small'}
                            placeholder={`Minimum 6 characters required`}/>
                        <InputLabel className={`text-medium mt-1`} htmlFor={'confirmPassword'}>Re-Enter
                            Password</InputLabel>
                        <TextField
                            value={confirmPassword}
                            onChange={confirmPasswordChangeHandler}
                            onBlur={confirmPasswordBlurHandler}
                            error={confirmPassword.length > 0 && confirmPassword !== password}
                            helperText={confirmPassword.length > 0 && password !== confirmPassword
                                ? 'Passwords does not match'
                                : ''}
                            type={'password'} name={'confirmPassword'} id={`confirmPassword`} variant={`outlined`}
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
                        <a className={`text-blue-700`} href={`#`}>Conditions of use</a>{``} and {``} <a
                        className={`text-blue-700`} href={`#`}>Privacy Notice</a>
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
