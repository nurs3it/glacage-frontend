export interface Props {
  count: StrNum;
  onChangeCount: (count: StrNum) => void;
}

type StrNum = string | number;
