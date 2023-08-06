import React from "react";

interface FeaturedActivitySlideProps {
  slideTitle: string;
  slideContent: string;
}

const FeaturedActivitySlide: React.FC<FeaturedActivitySlideProps> = ({
  slideTitle,
  slideContent,
}) => {
  return (
    <div className="featured-activity-slide">
      <h1 className="slide-title">{slideTitle}</h1>
      <p className="slide-content">{slideContent}</p>
    </div>
  );
};

export default FeaturedActivitySlide;
