export class PaginatedJsonResponse {
  public readonly success: boolean;
  public readonly size: number = 0;
  public readonly totalPages: number = 0;
  constructor (public readonly data: any,
               public readonly totalElements,
               public readonly pageNumber: number = 0,
               customStatus?: boolean) {
    this.size = data.length;
    this.totalPages = Math.floor(this.totalElements / this.size);
    this.success = customStatus === undefined ? true : customStatus;
  }
}
