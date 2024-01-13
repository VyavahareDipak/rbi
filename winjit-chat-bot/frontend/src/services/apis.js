
const BASE_URL = process.env.REACT_APP_API_KEY

export const  endPoints = {
    SIGNUP_API : BASE_URL + "/signup",
    LOGIN_API : BASE_URL + "/login",

    SENDOTP_API :BASE_URL +"/password/sendotp",
    RESETPASSWORD_API: BASE_URL + "/password/reset",
}