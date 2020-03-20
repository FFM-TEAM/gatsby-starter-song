import React from 'react';
import styled from 'styled-components';

const ImageSectionBlock = styled.div`
  width: 100%;
  position: relative;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
`;

export interface ImageSectionProps {
  widthRatio: number;
  heightRatio: number;
  src: string;
  alt?: string;
  className?: string;
}

const ImageSection: React.FC<ImageSectionProps> = ({
  widthRatio,
  heightRatio,
  src,
  alt,
  className,
}) => {
  const paddingTop = `${(heightRatio / widthRatio) * 100}%`;
  return (
    <ImageSectionBlock
      style={{
        paddingTop,
      }}
      className={className}
    >
      <img src={src} alt={alt} />
    </ImageSectionBlock>
  );
};

export default ImageSection;
