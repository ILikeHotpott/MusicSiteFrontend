'use client';

import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {request} from '@/utils/request';
import {setToken, removeToken} from '@/utils/token';


const userSlice = createSlice({
    name: 'user',
    initialState: {
        email: '',
        password: '',
        userInfo: {},
        rememberMe: false,
        isVisible: false,
        status: 'idle',
        error: null,
    },
    reducers: {
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setPassword: (state, action) => {
            state.password = action.payload;
        },
        setRememberMe: (state, action) => {
            state.rememberMe = action.payload;
        },
        setUserInfo: (state, action) => {
            state.userInfo = action.payload;
        },

        togglePasswordVisibility: (state) => {
            state.isVisible = !state.isVisible;
        },
        logout: (state) => {
            removeToken();
            state.email = '';
            state.password = '';
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchLogin.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchLogin.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.error = null;
            })
            .addCase(fetchLogin.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload.error || 'Login failed';
            });
    },
});


export const {setUserInfo, setEmail, setPassword, setRememberMe, togglePasswordVisibility, logout} = userSlice.actions;


export const fetchLogin = createAsyncThunk('user/fetchLogin', async (values, thunkAPI) => {
    try {
        const response = await request.post('/api/react-login/', values);
        const data = response.data;
        setToken(data.access);
        console.log("成功的data:", data);
        return data;
    } catch (error) {
        console.log("失败", error);
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

// 获取用户信息
export const fetchUserInfo = () => {
    return async (dispatch) => {
        try {
            const res = await request.get('/api/user/profile/');
            dispatch(setUserInfo(res.data));
        } catch (error) {
            console.error('Error fetching user profile:', error);
        }
    };
};

export default userSlice.reducer;
