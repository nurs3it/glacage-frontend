export interface Props {
  count: StrNum;
  onChangeCount: (count: StrNum) => void;
  isMini?: boolean;
}

type StrNum = string | number;
