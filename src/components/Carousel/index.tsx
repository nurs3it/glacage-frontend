import { FC, useEffect, useState } from "react";

import { Props } from "components/Carousel/types";

import classes from "./index.module.css";

import { useBreakpoints } from "hooks/useBreakpoints";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import { Skeleton } from "@mui/material";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Carousel: FC<Props> = ({ images }) => {
  const { mobile } = useBreakpoints();
  const [activeImage, setActiveImage] = useState<string>("");

  const handleImageClick = (i: string) => {
    setActiveImage(i);
  };

  useEffect(() => {
    setActiveImage(images?.[0]);
  }, [images]);

  return (
    <div className={classes.root}>
      <div className={`${classes.active} ${mobile && classes.mActive}`}>
        {!mobile ? (
          <img
            className={`${classes.image}`}
            src={activeImage}
            alt="active image"
          />
        ) : (
          <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
            {images.map((i) => (
              <SwiperSlide key={i}>
                <img
                  className={`${classes.swiperImage}`}
                  src={i}
                  alt="active image"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
      {!mobile && (
        <div className={classes.list}>
          {images.map((i) => (
            <div
              key={i}
              className={`${classes.listImage} ${
                i === activeImage && classes.activeImage
              }`}
              onClick={() => handleImageClick(i)}
            >
              {!i ? (
                <Skeleton
                  width="100%"
                  height="100%"
                  className={classes.miniImage}
                />
              ) : (
                <img className={classes.miniImage} src={i} alt={i} />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;
