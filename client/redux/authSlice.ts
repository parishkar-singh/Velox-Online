import {createSlice} from "@reduxjs/toolkit";
import {DisplayUser} from "@/models/interfaces/DisplayUser.interface";
import {Jwt} from "@/models/Jwt";
interface AsyncState {
    isLoading: boolean;
    isError: boolean;
    isSuccess: boolean;
}
interface AuthState extends AsyncState{
    user?:DisplayUser|null
    jwt?:Jwt|null
    isAuthenticated?:boolean
}

const initialState : AuthState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    user: null,
    jwt: null,
    isAuthenticated: false

}
export const authSlice= createSlice({
    name:'auth',
    initialState:{
})
