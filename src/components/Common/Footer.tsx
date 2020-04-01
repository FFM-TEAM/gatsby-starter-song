import * as React from 'react';
import styled from 'styled-components';
import BottomSticky from './BottomSticky';
import media from '../../lib/styles/media';

const FooterBlock = styled.div`
  ${media.medium} {
    display: none;
  }
  width: 100%;
  align-items: center;
  text-align: center;
  font-weight: 400;
  font-size: 0.75rem;
  margin-bottom: 1rem;
  a {
    color: inherit;
    font-weight: bold;
    text-decoration: none;
  }
`;
export interface FooterProps {}

const Footer: React.FC<FooterProps> = props => {
  return (
    <FooterBlock>
      ©<a href="https://github.com/s-ong-c">s-ong-c</a>, Built with{' '}
      <a href="https://github.com/FFM-team/gatsby-starter-song">
        Gatsby-starter-song
      </a>
    </FooterBlock>
  );
};

export default Footer;
