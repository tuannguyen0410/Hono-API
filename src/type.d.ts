type Meta = {
    totalPages: number,
    limit: number,
    total: number,
    page: number
  };

  
type APIResponsePagination<T> =  {
    data: T;
    meta: Meta;
}