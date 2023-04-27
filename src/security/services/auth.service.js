import axios from "axios";
import http from "../../core/services/http-common";
import { ApiUrl } from "@/core/services/api-url";


const API_URL = `${ApiUrl}users/sign-up`;
const API_URL_SIGNIN = `${ApiUrl}users/sign-in`;

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
