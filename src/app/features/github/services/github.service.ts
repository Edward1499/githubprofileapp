import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from, lastValueFrom, toArray } from 'rxjs';
import { map, switchMap, concatMap, count, mergeMap } from 'rxjs/operators';
import { environment } from '../../../../environments/environment.development';

@Injectable({
    providedIn: 'root'
  })
export class GithubService {

  private apiUrl: string = environment.API_URL;

  constructor(private http: HttpClient) { }

  search(searchTerm: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/search/users?q=${searchTerm}`)
      .pipe(
        map((response) =>  response.items),
        switchMap(items => from(items).pipe(
          concatMap((item: any)=>{ 
            return this.getFollowers(item.followers_url).pipe(
              map(count => ({ ...item, followersCount: count }))
            );
          }),
          toArray()
        )),
        map(items => items.slice(0, 10))
      );
  }

  get(name: string): Promise<any> {
    let promise = new Promise((resolve, reject) => {
      lastValueFrom(this.http.get<any>(`https://api.github.com/users/${name}`))
        .then(
          res => { 
            resolve(res);
          }
        );
    });
    return promise;
  }

  private getFollowers(followersUrl: string): Observable<number> { 
    return this.http.get<any>(followersUrl+'?per_page=100')
      .pipe(map(response => response.length));;
  }

}