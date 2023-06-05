import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {DisplayUser} from "@/models/interfaces/DisplayUser.interface";
import {Jwt} from "@/models/Jwt";
import {NewUser} from "@/models/NewUser";
import authService from "@/utils/services/auth.service";
import {RootState} from "@/store";

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
const initialState: AuthState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    user: null,
    jwt: null,
    isAuthenticated: false
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

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isError = false
            state.isSuccess = false
        }
    },
    extraReducers: (builder) => {
        //Register
        builder.addCase(register.pending, (state) => {
            state.isLoading = true
        })
            .addCase(register.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
            })
            .addCase(register.rejected, (state) => {
                state.isLoading = false
                state.isError = true
                state.user = null
            })
    }
})
export const { reset } = authSlice.actions;
export default authSlice.reducer
export const selectedUser = (state: RootState) => {
    return state.auth;
};
