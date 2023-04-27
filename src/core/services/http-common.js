import axios from "axios";
import { ApiUrl } from "@/core/services/api-url";

//API runs in port 3000, consider this for all services.js

export default axios.create({
    baseURL: ApiUrl,
    headers: { 'Content-type': 'application/json' }
})