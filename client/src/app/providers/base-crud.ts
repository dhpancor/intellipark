import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {map} from "rxjs/operators";
import {EagerLoadingStrategy} from "./types/eager-loading-strategy.enum";
import {PagedData} from "../models/paged-data";
import {AccessLog} from "../models/accesslog";

@Injectable()
export class BaseCRUD<T> {

  protected baseUrl = "http://localhost:4200/api/v1";

  constructor(protected httpClient: HttpClient, protected specificEndpoint: string | string[]) {
  }

  findOne(id: number, eagerLoading?: EagerLoadingStrategy): Observable<T> {
    const endpointSuffix = `/${id}` + (eagerLoading !== undefined ? this.getEagerLoadingEndpoint(eagerLoading) : '');
    return this.httpClient.get<T>(this.baseUrl + this.specificEndpoint + endpointSuffix)
      .pipe(map(result => result['data']));
  }

  findAll(eagerLoading?: EagerLoadingStrategy): Observable<T[]> {
    const endpointSuffix = (eagerLoading !== undefined ? `/${this.getEagerLoadingEndpoint(eagerLoading)}` : '');
    return this.httpClient.get<T[]>(this.baseUrl + this.specificEndpoint + endpointSuffix)
      .pipe(map(result => result['data']));
  }

  findPaginated(page: number = 0, eagerLoading?: EagerLoadingStrategy): Observable<PagedData<T[]>> {
    const endpointSuffix = (eagerLoading !== undefined ? `${this.getEagerLoadingEndpoint(eagerLoading)}&` : '?');
    return this.httpClient.get(this.baseUrl + this.specificEndpoint + `/paginated${endpointSuffix}page=${page}`);
  }

  create(object: T): Observable<T> {
    return this.httpClient.post<T>(this.baseUrl + this.specificEndpoint, object)
      .pipe(map(result => result['success'] ? result['data'] : null));
  }

  update(object: T): Observable<T> {
    return this.httpClient.put<T>(this.baseUrl + this.specificEndpoint + `/${object['id']}`, object)
      .pipe(map(result => result['data']));
  }

  delete(id: number): Observable<T> {
    return this.httpClient.delete<T>(this.baseUrl + this.specificEndpoint + `/${id}`)
      .pipe(map(result => result['data']));
  }

  protected getEagerLoadingEndpoint(strategy: EagerLoadingStrategy): string {
    return `?with${strategy}=true`;
  }
}
