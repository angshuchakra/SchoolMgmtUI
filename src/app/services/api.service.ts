import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private REST_API_SERVER = "https://localhost:5001/api/Student?studentId=8";
  constructor(private httpClient: HttpClient) { }
  public sendGetRequest(){
    return this.httpClient.get(this.REST_API_SERVER);
  }
}
