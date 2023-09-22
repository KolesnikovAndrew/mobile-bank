export interface ItemWithSlides {
  title: string;
  id: number;
  slides: Slide[];
  icon?: string;
}

export interface Slide {
  slideTitle: string;
  slideContent: string;
}
