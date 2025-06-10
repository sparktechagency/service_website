
class SessionHelper {
  setToken(token: string) {
    localStorage.setItem("token", token);
  }

  getToken() {
    return localStorage.getItem("token");
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
    window.location.href = "/login";
  }
}





export const { setToken, getToken, setEmail, getEmail, setVerifyEmail, getVerifyEmail, setOtp, getOtp, logout } = new SessionHelper();