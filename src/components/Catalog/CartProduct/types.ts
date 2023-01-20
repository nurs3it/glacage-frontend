import { Product } from "types/body";

export interface Props {
  isLast?: boolean;
  product: Product;
  id: string;
  count: number;
}
