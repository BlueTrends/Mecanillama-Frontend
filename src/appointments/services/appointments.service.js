import http from "../../core/services/http-common";

export class AppointmentsApiService {
    getAll() {
      return http.get("/appointments", { headers: { 'Authorization': `Bearer ${localStorage.getItem("accessToken")}`}});
    }
    getById(id) {
      return http.get(`/appointments/${id}`, { headers: { 'Authorization': `Bearer ${localStorage.getItem("accessToken")}`}});
    }
    create(data) {
      return http.post("/appointments", data, { headers: { 'Authorization': `Bearer ${localStorage.getItem("accessToken")}`}});
    }
    update(id, data) {
      return http.put(`/appointments${id}`, data, { headers: { 'Authorization': `Bearer ${localStorage.getItem("accessToken")}`}});
    }
    delete(id) {
      return http.delete(`/appointments${id}`, { headers: { 'Authorization': `Bearer ${localStorage.getItem("accessToken")}`}});
    }
    findByCustomer(customer) {
      return http.get(`/appointments?customer=${customer}`, { headers: { 'Authorization': `Bearer ${localStorage.getItem("accessToken")}`}});
    }
  }