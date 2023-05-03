import http from "../../core/services/http-common";

export class CustomersApiService {
    
    getAll() {
        const token = localStorage.getItem("token");
        return http.get("/customers", { headers: { 'Authorization': `Bearer ${token}`}});
      }
    getByUserId(userId) {
        const token = localStorage.getItem("token");
        return http.get(`/customers/uid/${ userId }`, { headers: { 'Authorization': `Bearer ${token}`}} );
    }
}