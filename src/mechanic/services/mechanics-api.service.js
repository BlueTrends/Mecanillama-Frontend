import http from "../../core/services/http-common";

export class MechanicsProfileApiService {
  

  getAll() {
    const token = localStorage.getItem("token");
    return http.get("/mechanics",{ headers: { 'Authorization': `Bearer ${token}`}});
  }
  getById(id) {
    const token = localStorage.getItem("token");
    return http.get(`/mechanics/${id}`,{ headers: { 'Authorization': `Bearer ${token}`}});
  }
  getByUserId(id) {
    const token = localStorage.getItem("token");
    return http.get(`/mechanics/uid/${id}`,{ headers: { 'Authorization': `Bearer ${token}`}});
  }
  create(data) {
    const token = localStorage.getItem("token");
    return http.post("/mechanics", data,{ headers: { 'Authorization': `Bearer ${token}`}});
  }
  update(id, data) {
    const token = localStorage.getItem("token");
    return http.put(`/mechanics/${id}`, data,{ headers: { 'Authorization': `Bearer ${token}`}});
  }
  delete(id) {
    const token = localStorage.getItem("token");
    return http.delete(`/mechanics/${id}`,{ headers: { 'Authorization': `Bearer ${token}`}});
  }

}
