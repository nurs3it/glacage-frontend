export interface Response<D> {
  data: ResponseData<D>;
  meta: unknown;
}

export interface ArrayResponse<D> {
  data: ResponseData<D>[];
  meta: Meta;
}

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface ResponseData<D> {
  id: string;
  attributes: D;
}

export interface Dates {
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}

export interface AboutBody extends Dates {
  about: string;
  buttonText: string;
  background: Response<PhotoBody>;
}

export interface ContactsBody extends Dates {
  number: string;
  instagram: string;
  facebook: string;
  twitter: string;
}

export interface PhotoBody {
  url: string;
}

export interface Category extends Dates {
  name: string;
  show: boolean;
  description: string;
  background: Response<PhotoBody>;
}
