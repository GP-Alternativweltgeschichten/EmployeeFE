import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError as observableThrowError } from "rxjs";
import { catchError } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  private readonly basePath: string = "http://localhost:8080";
  private standardHeaders: HttpHeaders;
  private readonly options: object;

  constructor(private http: HttpClient) {
    this.standardHeaders = new HttpHeaders();
    this.standardHeaders = this.standardHeaders.set("Content-Type", "application/json");
    this.standardHeaders = this.standardHeaders.set("Access-Control-Allow-Origin", "*");
    this.options = {
      headers: this.standardHeaders,
    };
  }

  public get<returnType>(path: string, customHeaders?: HttpHeaders, type?: string): Observable<returnType> {
    if (customHeaders) {
      this.handleCustomheaders(customHeaders);
    }
    path = this.createPath(path);

    if (type) {
      // @ts-ignore
      this.options["responseType"] = type;
    } else {
      // @ts-ignore
      this.options["responseType"] = "json";
    }
    return this.http
      .get<returnType>(path, this.options)
      .pipe(catchError(err => observableThrowError(this.errorHandler(err))));
  }

  public post<returnType>(path: string, body: any, customHeaders?: HttpHeaders, type?: string): Observable<returnType> {
    if (customHeaders) {
      this.handleCustomheaders(customHeaders);
    }
    path = this.createPath(path);

    if (type) {
      // @ts-ignore
      this.options["responseType"] = type;
    }
    return this.http
      .post<returnType>(path, body, this.options)
      .pipe(catchError(err => observableThrowError(this.errorHandler(err))));
  }

  public put<returnType>(path: string, body: any, customHeaders?: HttpHeaders): Observable<returnType> {
    if (customHeaders) {
      this.handleCustomheaders(customHeaders);
    }
    path = this.createPath(path);

    return this.http.put<returnType>(path, body, this.options).pipe(
      catchError(err => {
        this.errorHandler(err);
        return observableThrowError(err);
      })
    );
  }

  public sendFile(path: string, file: any, {set}: HttpHeaders): Observable<any> {
    path = this.createPath(path);
    const headers: HttpHeaders = set("Authorization", "Bearer ");

    const requestOptions = {
      headers,
    };

    return this.http.post<any>(path, file, requestOptions).pipe(
      catchError(err => {
        this.errorHandler(err);
        return observableThrowError(err);
      })
    );
  }

  public delete<returnType>(path: string, customHeaders?: HttpHeaders): Observable<returnType> {
    if (customHeaders) {
      this.handleCustomheaders(customHeaders);
    }
    path = this.createPath(path);
    return this.http.delete<returnType>(path, this.options).pipe(
      catchError(err => {
        this.errorHandler(err);
        return observableThrowError(err);
      })
    );
  }


  private handleCustomheaders(customHeaders: HttpHeaders) {
    if (customHeaders) {
      const headers: string[] = customHeaders.keys();
      for (const header of headers) {
        // @ts-ignore
        this.standardHeaders = this.standardHeaders.set(header, customHeaders.get(header));
      }
    }
  }

  private createPath(path: string): string {
    return this.basePath + path;
  }

  private errorHandler(err: { error: any; }): void {
    console.error("Error in CommunicationService", err.error);
  }

}
