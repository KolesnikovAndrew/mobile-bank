import { createPortal } from "react-dom";
import SlideCarousel from "shared/ui/slideCarousel";
import { ItemWithSlides } from "shared/sharedTypes";

interface SlideCarouselContainerProps {
  modalRootElement: string;
  payload: ItemWithSlides[];
  openedActivityDetailsId: number;
  isActivityDetailsOpen: boolean;
  handleActivityDetailsToggle: (id: number) => void;
}

const SlideCarouselContainer: React.FC<SlideCarouselContainerProps> = ({
  modalRootElement,
  payload,
  openedActivityDetailsId,
  isActivityDetailsOpen,
  handleActivityDetailsToggle,
}) => {
  const modalRoot = document.getElementById(modalRootElement);

  const activity = payload.find(
    (activity) => activity.id === openedActivityDetailsId
  );

  if (activity && modalRoot) {
    return createPortal(
      <SlideCarousel
        activityId={activity.id}
        slides={activity.slides}
        handleSlideCarouselToggle={handleActivityDetailsToggle}
        isActivityDetailsOpen={isActivityDetailsOpen}
      />,
      modalRoot
    );
  }

  return null;
};

export default SlideCarouselContainer;
