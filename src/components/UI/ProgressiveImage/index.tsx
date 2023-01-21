import { FC } from "react";

import Image from "react-progressive-graceful-image";

import { Props } from "components/UI/ProgressiveImage/types";

const ProgressiveImage: FC<Props> = ({ image, className }) => {
  return (
    <Image
      threshold={[1]}
      src={`${image.attributes.formats.medium.url}`}
      placeholder={`${image.attributes.formats.thumbnail.url}`}
    >
      {(src) => (
        <img
          draggable={false}
          className={className}
          src={src}
          alt={`image-${className}`}
        />
      )}
    </Image>
  );
};

export default ProgressiveImage;
