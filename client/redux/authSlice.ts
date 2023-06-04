import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {DisplayUser} from "@/models/interfaces/DisplayUser.interface";
import {Jwt} from "@/models/Jwt";
import {NewUser} from "@/models/NewUser";

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

        } catch (e) {
            return thunkAPI.rejectWithValue('Unable to register')
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
    reducers: {},
    extraReducers: (builder) => {
        //Register
    .
        addCase()
    }
})
