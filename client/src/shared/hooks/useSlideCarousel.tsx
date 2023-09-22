import { useState, useEffect, ReactPortal } from "react";
import { createPortal } from "react-dom";
import SlideCarousel from "shared/ui/slideCarousel";

interface UseSlideCarouselProps {
  activitiesState: any;
  openedActivityDetailsId: number;
  isActivityDetailsOpen: boolean;
  handleActivityDetailsToggle: (activityId: number) => void;
}

const useSlideCarousel: React.FC<UseSlideCarouselProps> = ({
  activitiesState,
  openedActivityDetailsId,
  isActivityDetailsOpen,
  handleActivityDetailsToggle,
}) => {
  const [slideCarousel, setSlideCarousel] = useState<ReactPortal | null>(null);

  useEffect(() => {
    const modalRoot = document.getElementById("modal-root");
    const activity = activitiesState.find(
      (activity: any) => activity.activityId === openedActivityDetailsId
    );

    if (activity && modalRoot) {
      const slideCarouselElement = (
        <SlideCarousel
          activityId={activity.activityId}
          slides={activity.slides}
          handleSlideCarouselToggle={handleActivityDetailsToggle}
          isActivityDetailsOpen={isActivityDetailsOpen}
        />
      );

      setSlideCarousel(createPortal(slideCarouselElement, modalRoot));
    } else {
      setSlideCarousel(null);
    }
  }, [
    activitiesState,
    openedActivityDetailsId,
    isActivityDetailsOpen,
    handleActivityDetailsToggle,
  ]);

  return slideCarousel;
};

export default useSlideCarousel;
