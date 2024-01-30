import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {Music} from "../../model/music";

@Injectable({
  providedIn: 'root'
})
export class MusiqueService {

  private urlServer:any = {};

  constructor(private readonly httpClient: HttpClient) {
    let baseUrl = `${environment.backend.protocol}://${environment.backend.host}`;
    if (environment.backend.port) {
      baseUrl += `:${environment.backend.port}`;
    }

    // Build all backend urls
    Object.keys(environment.backend.endpoints).forEach(
      // @ts-ignore
      k => (this.urlServer[k] = `${baseUrl}${environment.backend.endpoints[k]}`)
    );
  }

  fetchAll(): Observable<Music[]> {
    return this.httpClient.get<Music[]>(this.urlServer.Default);
  }

  fetchRandom(): Observable<Music> {
    return this.httpClient.get<Music>(this.urlServer.Random);
  }

  fetchById(id: string): Observable<Music> {
    return this.httpClient.get<Music>(this.urlServer.ById.replace(':id', id));
  }

  searchByTitle(title: string): Observable<Music[]> {
    return this.httpClient.get<Music[]>(this.urlServer.ByTitle.replace(':title', title));
  }

  create(music: Music): Observable<Music> {
    return this.httpClient.post<Music>(this.urlServer.Default, music);
  }

  update(music: Music): Observable<Music> {
    return this.httpClient.put<Music>(this.urlServer.Default.replace(':id', music.id), music);
  }

  delete(id: string): Observable<any> {
    return this.httpClient.delete(this.urlServer.Default.replace(':id', id));
  }
}
