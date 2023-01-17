import { FC } from "react";

import Image from "react-progressive-graceful-image";

import { Props } from "components/UI/ProgressiveImage/types";

import { BASE_URL } from "src/api";

const ProgressiveImage: FC<Props> = ({ image, className }) => {
  return (
    <Image
      threshold={[1]}
      src={`${BASE_URL}${image.attributes.formats.medium.url}`}
      placeholder={`${BASE_URL}${image.attributes.formats.thumbnail.url}`}
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
