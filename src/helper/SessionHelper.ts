
class SessionHelper {
    setToken(token:string){
        localStorage.setItem("token", token)
    }

    getToken(){
        return localStorage.getItem('token');
    }

    setEmail(email:string){
        localStorage.setItem("email", email)
    }

    getEmail(){
        return localStorage.getItem('email');
    }

    setOtp(otp:string){
        localStorage.setItem("otp", otp)
    }

    getOtp(){
        return localStorage.getItem('otp');
    }

    logout(){
        localStorage.clear();
        window.location.href="/login";
    }
}





export const { setToken, getToken, setEmail, getEmail, setOtp, getOtp, logout } = new SessionHelper();