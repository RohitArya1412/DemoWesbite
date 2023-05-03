import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MookService {
  url='http://localhost:3000/student';
  url2="http://localhost:3000/sales"

  constructor(private http:HttpClient) { }
  getPosts() {
    return this.http.get('http://localhost:3000/student');
  }
  setPost(user:any){
    return this.http.post('http://localhost:3000/student',user)
  }
  setPut(id:number,userUpdate:any){
    console.log(`${this.url}/${id}`);
    
    return this.http.put(`${this.url}/${id}`,userUpdate)
  }
  delete(id:number){
    return this.http.delete(`${this.url}/${id}`)
  }
  getStudentById(id:number){
    return this.http.get(this.url+'/'+id);
  }
  getChart(){
    return this.http.get(this.url2);
  }
  setChart(data:any){
    return this.http.post(this.url2,data);
  }
  deleteChart(id:number){
    return this.http.delete(`${this.url2}/${id}`)
  }
  putCharts(id:any,userUpdate:any){
    return this.http.put(`${this.url2}/${id}`,userUpdate);
  }
}
