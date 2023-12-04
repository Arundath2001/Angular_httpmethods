import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) { }

  add(list: any): Observable<any> {
    return this.http.post('https://jsonplaceholder.typicode.com/todos', list);
  }

  displayall(): Observable<any[]> {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/todos');
  }

  getdata(id: number): Observable<any> {
    const url = `${'https://jsonplaceholder.typicode.com/todos'}/${id}`;
    return this.http.get<any>(url);
  }

  putitem(id: number, newData: any): Observable<any> {
    const url = `${'https://jsonplaceholder.typicode.com/todos'}/${id}`;
    return this.http.put(url, newData);
  }

  patchitem(id: number, partialData: any): Observable<any> {
    const url = `${'https://jsonplaceholder.typicode.com/todos'}/${id}`;
    return this.http.patch(url, partialData);
  }

  deleteitem(id: number): Observable<any> {
    const url = `${'https://jsonplaceholder.typicode.com/todos'}/${id}`;
    return this.http.delete(url);
  }
}
