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
  delivery: string;
  payment: string;
  buttonText: string;
  background: Response<PhotoBody>;
}

export interface TimeForOrder extends Dates {
  startTim: Date;
  endTime: Date;
}

export interface Address extends Dates {
  address: string;
  mapUrl?: string;
}

export interface Product extends Dates {
  name: string;
  price: number;
  count: number;
  description: string;
  images: ArrayResponse<PhotoBody[]> | Response<PhotoBody[]>;
  category: Response<ResponseData<Category>>;
  weight: number;
  shortDescription: string;
  composition: string;
}

export interface ProductInCart extends Product {
  count: number;
}

export interface ContactsBody extends Dates {
  number: string;
  instagram: string;
  facebook: string;
  twitter: string;
  telegram: string;
}

export interface FormatData {
  ext: string;
  hash: string;
  height: number;
  mime: string;
  name: string;
  path: string;
  size: number;
  url: string;
  width: number;
}

export interface PhotoFormats {
  small: FormatData;
  medium: FormatData;
  thumbnail: FormatData;
}

export interface PhotoBody {
  url: string;
  formats: PhotoFormats;
}

export interface Category extends Dates {
  name: string;
  shortDescription: string;
  show: boolean;
  description: string;
  price: number;
  background: Response<PhotoBody>;
  images?: ArrayResponse<PhotoBody>;
}
