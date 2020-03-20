import * as React from 'react';
import styled from 'styled-components';
import media from '../../lib/styles/media';

const PostResponsiveBlock = styled.div`
  width: 768px;
  margin-left: auto;
  margin-right: auto;
  ${media.small} {
    width: 100%;
  }
`;
export interface PostResponsiveProps {
  className?: string;
  style?: React.CSSProperties;
}

const PostResponsive: React.FC<PostResponsiveProps> = ({
  children,
  className,
  style,
}) => {
  return (
    <PostResponsiveBlock
      children={children}
      className={className}
      style={style}
    />
  );
};

export default PostResponsive;
