import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PasantiaService {

  private baseUrl = 'http://localhost:8082/api/pasantias';

  constructor(private http: HttpClient) { }

  getCustomer(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
 
  createCustomer(customer: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/create`, customer);
  }
 
  updateCustomer(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
 
  deleteCustomer(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
 
  getPasantiasList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
 
  getPasantiasByCedula(cedula: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/cedula/${cedula}`);
  }
 
  deleteAll(): Observable<any> {
    return this.http.delete(`${this.baseUrl}` + `/delete`, { responseType: 'text' });
  }
}
