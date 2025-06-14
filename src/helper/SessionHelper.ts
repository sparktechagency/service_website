import { IAuthUser } from "@/types/global.type";
import { SuccessToast } from "./ValidationHelper";
import { jwtDecode } from "jwt-decode";


class SessionHelper {
  setToken(token: string) {
    localStorage.setItem("token", token);
  }

  getToken() {
    if (typeof window !== "undefined" && window.localStorage) {
      return localStorage.getItem("token");
    }
    return "";
  }

  getUserInfo() {
    const token = getToken();
    if (token) {
      const decodedData = jwtDecode(token) as IAuthUser;
      return decodedData;
    }
    if (typeof window !== "undefined" && window.localStorage) {
       window.localStorage.clear();
       window.location.href = "/";
    }
  }

  setEmail(email: string) {
    localStorage.setItem("email", email);
  }

  getEmail() {
    return localStorage.getItem("email");
  }

  setVerifyEmail(email: string) {
    localStorage.setItem("verifyEmail", email);
  }

  getVerifyEmail() {
    if (typeof window !== "undefined" && window.localStorage) {
      return localStorage.getItem("verifyEmail");
    }
  }

  setOtp(otp: string) {
    localStorage.setItem("otp", otp);
  }

  getOtp() {
    return localStorage.getItem("otp");
  }

  logout() {
    localStorage.clear();
    window.location.href = "/";
    SuccessToast("Logout Success");
  }
}





export const { setToken, getToken, setEmail, getEmail, setVerifyEmail, getVerifyEmail, setOtp, getOtp, logout } = new SessionHelper();