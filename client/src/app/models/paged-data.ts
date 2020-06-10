export interface PagedData<T> {
  success?: boolean;
  data?: T;
  totalElements?: number;
  pageNumber?: number;
  size?: number;
  totalPages?: number;
}
