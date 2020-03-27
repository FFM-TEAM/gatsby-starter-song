import * as React from 'react';
import styled from 'styled-components';
import BottomSticky from './BottomSticky';

const FooterBlock = styled(BottomSticky)`
  width: 100%;
  align-items: center;
  text-align: center;
  a {
    color: inherit;
    text-decoration: none;
  }
`;
export interface FooterProps {}

const Footer: React.FC<FooterProps> = props => {
  return (
    <FooterBlock bottom={0}>
      ©<a href="https://github.com/s-ong-c">s-ong-c</a>, Built with{' '}
      <a href="https://github.com/FFM-team/gatsby-starter-song">
        Gatsby-starter-song
      </a>
    </FooterBlock>
  );
};

export default Footer;
