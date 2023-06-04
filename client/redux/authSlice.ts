import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {DisplayUser} from "@/models/interfaces/DisplayUser.interface";
import {Jwt} from "@/models/Jwt";
import {NewUser} from "@/models/NewUser";
import authService from "@/utils/services/auth.service";

interface AsyncState {
    isLoading: boolean;
    isError: boolean;
    isSuccess: boolean;
}

interface AuthState extends AsyncState {
    user?: DisplayUser | null
    jwt?: Jwt | null
    isAuthenticated?: boolean
}

export const register = createAsyncThunk(
    'auth/register',
    async (user: NewUser, thunkAPI) => {
        try {
            return await authService.register(user)
        } catch (e) {
            return thunkAPI.rejectWithValue('Unable to register')
        }
    }
)
export const login = createAsyncThunk(
    'auth/login',
    async (user: NewUser, thunkAPI) => {
        try {
            return await authService.login(user.email, user.password)
        } catch (e) {
            return thunkAPI.rejectWithValue('Unable to login')
        }

    }
)
const initialState: AuthState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    user: null,
    jwt: null,
    isAuthenticated: false

}
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isError = false
            state.isSuccess = false
            state.user = null
            state.jwt = null
            state.isAuthenticated = false
        }
    },
    extraReducers: (builder) => {
        //Register
        builder.addCase(register.pending, (state) => {
            state.isLoading = true
            state.isError = false
            state.isSuccess = false
        })
            .addCase(register.fulfilled, (state, action) => {
                state.isLoading = false
                state.isError = false
                state.isSuccess = true
                state.user = action.payload
            })
            .addCase(register.rejected, (state) => {
                state.isLoading = false
                state.isError = true
                state.isSuccess = false
                state.user = null
            })
    }
})
export default authSlice.reducer
