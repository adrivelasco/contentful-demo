import Carousel, { CarouselProps } from "@brainhubeu/react-carousel";
import '@brainhubeu/react-carousel/lib/style.css';
import styled from "@emotion/styled";

export interface GalleryProps extends CarouselProps {
  children: any;
}

const StyledCarousel = styled(Carousel)`
  .BrainhubCarousel__arrows:not(:disabled) {
    background: ${({ theme }: any) => theme.colors.primary};

    &:hover {
      background: ${({ theme }: any) => theme.colors.secondary};
    }
  }
`;

export const Gallery = ({ children, ...props }: GalleryProps) => (
  <StyledCarousel {...props} plugins={children?.length > 1 ? ['arrows'] : []}>
    {children}
  </StyledCarousel>
);