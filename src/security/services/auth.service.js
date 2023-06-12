import axios from "axios";
import http from "../../core/services/http-common-login";


const API_URL = "https://bluetrends-mecanillama-api.azurewebsites.net/api/v1/users/sign-up";
const API_URL_SIGNIN = "https://bluetrends-mecanillama-api.azurewebsites.net/api/v1/users/sign-in";

class AuthService {
    signUp(user) {
        return http.post(API_URL, user);
    }

    signIn(user){
        return http.post(API_URL_SIGNIN, user);
    }
    // Get Current User
    getCurrentUser() {
        return localStorage.getItem("user");
      }
}
export default new AuthService();
