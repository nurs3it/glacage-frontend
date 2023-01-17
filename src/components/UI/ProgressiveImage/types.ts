import { PhotoBody, ResponseData } from "types/body";

export interface Props {
  image: ResponseData<PhotoBody>;
  className?: string;
}
