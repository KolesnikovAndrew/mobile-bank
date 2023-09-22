import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Slide } from "shared/sharedTypes";

interface CarouselProps {
  activityId: number;
  slides: Slide[];
  handleSlideCarouselToggle: (id: number) => void;
  isActivityDetailsOpen: boolean; // Добавляем isActivityDetailsOpen
}

const SlideCarousel: React.FC<CarouselProps> = ({
  slides,
  handleSlideCarouselToggle,
  isActivityDetailsOpen,
  activityId,
}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    console.log("SlideCarousel isActivityDetailsOpen:", isActivityDetailsOpen);
  }, [isActivityDetailsOpen]);

  const modalRoot = document.getElementById("modal-root");

  // Создаем новый элемент для модального окна
  const modalElement = document.createElement("div");

  useEffect(() => {
    // Добавляем элемент модального окна в корневой элемент
    modalRoot?.appendChild(modalElement);

    // Удаление элемента при размонтировании компонента
    return () => {
      modalRoot?.removeChild(modalElement);
    };
  }, [modalElement, modalRoot]);

  return createPortal(
    <div className="">
      <div className="carousel fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-full bg-blue-500 z-10 p-6">
        <button
          onClick={() => handleSlideCarouselToggle(activityId)}
          className=" top-0 right-0 text-white m-5 rounded-full transition-all duration-300 hover:bg-white hover:text-blue-500 w-[40px] h-[40px]"
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <Slider {...settings} className="carousel-slider mt-16 ">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="slide text-white flex flex-col items-center justify-center"
            >
              <p className="text-2xl mb-10 text-yellow-300">
                {slide.slideTitle}
              </p>
              <p className="">{slide.slideContent}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>,
    modalElement
  );
};

export default SlideCarousel;
