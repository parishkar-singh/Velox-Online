import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {DisplayUser} from "@/models/interfaces/DisplayUser.interface";
import {Jwt} from "@/models/Jwt";
import {NewUser} from "@/models/NewUser";
import authService from "@/utils/services/auth.service";
import {RootState} from "@/store";
import {LoginUser} from "@/models/interfaces/LoginUser.interface";

const storedUser: string | null = localStorage.getItem('user')
const user: DisplayUser | null = !!storedUser ? JSON.parse(storedUser) : null

const storedJwt: string | null = localStorage.getItem('jwt')
const jwt: Jwt | null = !!storedJwt ? JSON.parse(storedJwt) : null

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
    user: user,
    jwt: jwt,
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
export const login = createAsyncThunk(
    'auth/login',
    async (user: LoginUser, thunkAPI) => {
        try {
            return await authService.login(user)
        } catch (e) {
            return thunkAPI.rejectWithValue('Unable to login')
        }

    }
)
export const logout = createAsyncThunk(
    'auth/logout',
    async () => {
        try {
            await authService.logout()
        } catch (e) {
            console.log(e)
        }
    }
)
export const verifyJwt = createAsyncThunk(
    'auth/verify-jwt',
    async (jwt: string, thunkAPI) => {
        try {
            return await authService.verifyJwt(jwt)
        } catch (e) {
            return thunkAPI.rejectWithValue('Unable to verify jwt')
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
            // Login
            .addCase(login.pending, (state) => {
                state.isLoading = true

            })
            .addCase(login.fulfilled, (state, action) => {
                    state.isLoading = false
                    state.isSuccess = true
                    state.isAuthenticated = true
                    state.jwt = action.payload
                }
            )
            .addCase(login.rejected, (state) => {
                    state.isLoading = false
                    state.isError = true
                    state.jwt = null
                    state.isAuthenticated = false
                }
            )
            // Logout
            .addCase(logout.pending, (state) => {
                    state.isLoading = true
                }
            )
            .addCase(logout.fulfilled, (state) => {
                    state.isLoading = false
                    state.isSuccess = true
                    state.isAuthenticated = false
                    state.user = null
                    state.jwt = null
                }
            )
            .addCase(logout.rejected, (state) => {
                    state.isLoading = false
                    state.isError = true
                }
            )
            // Verify JWT
            .addCase(verifyJwt.pending, (state) => {
                    state.isLoading = true
                }
            )
            .addCase(verifyJwt.fulfilled, (state, action) => {
                    state.isLoading = false
                    state.isSuccess = true
                    state.isAuthenticated = action.payload
                }
            )
            .addCase(verifyJwt.rejected, (state) => {
                    state.isLoading = false
                    state.isError = true
                    state.isAuthenticated = false
                    state.user = null
                    state.jwt = null
                }
            )
    }
})
export const {reset} = authSlice.actions;
export default authSlice.reducer
export const selectedUser = (state: RootState) => {
    return state.auth;
};
