import InlineSVG from "react-inlinesvg";
import { FC } from "react";
import { IconProps } from "components/UI/IIcon/types";

const IIcon: FC<IconProps> = ({ icon, size = 24, className }) => {
  return (
    <InlineSVG className={className} src={icon} width={size} height={size} />
  );
};

export default IIcon;
