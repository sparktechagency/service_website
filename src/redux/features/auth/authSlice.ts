import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    loading:false,
    ForgotError: "",
    VerifyOtpError: "",
    ResetPasswordError: "",
    LoginError: "",
    RegisterError: "",
    ChangePasswordError: "",
    ProfileError: ""
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        ShowLoading : (state)=>{
            state.loading=true;
        },
        HideLoading : (state)=>{
            state.loading=false;
        },
        SetForgotError : (state, action)=>{
            state.ForgotError=action.payload;
        },
        SetVerifyOtpError : (state, action)=>{
            state.VerifyOtpError=action.payload;
        },
        SetResetPasswordError : (state, action)=>{
            state.ResetPasswordError=action.payload;
        },
        SetLoginError : (state, action)=>{
            state.LoginError=action.payload;
        },
        SetRegisterError : (state, action)=>{
            state.RegisterError=action.payload;
        },
        SetChangePasswordError : (state, action)=>{
            state.ChangePasswordError=action.payload;
        },
        SetProfileError : (state, action)=>{
            state.ProfileError=action.payload;
        }
    }
})



export const {ShowLoading, HideLoading, SetForgotError, SetVerifyOtpError, SetResetPasswordError, SetLoginError, SetRegisterError, SetChangePasswordError, SetProfileError} = authSlice.actions;

const authSliceReducer = authSlice.reducer;
export default authSliceReducer;