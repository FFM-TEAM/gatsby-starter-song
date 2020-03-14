import * as React from 'react';
import styled from 'styled-components';
import PageTemplate from './PageTemplate';
import media from '../../lib/styles/media';
import '../../typography.css';
const MainTemplateBlock = styled(PageTemplate)`
  main {
    width: 1200px;
    ${media.large} {
      width: 1024px;
    }
    margin: 0 auto;
    margin-top: 3.5rem;
    margin-bottom: 8rem;
    display: flex;
    justify-content: space-between;
    ${media.medium} {
      justify-content: center;
      width: 100%;
      margin-top: 1rem;
    }
  }
`;
export interface MainTemplateProps {}
type MainTemplateNamespace = {
  Left: typeof Left;
  Main: typeof Main;
  Right: typeof Right;
};
const Left = styled.div`
  width: 192px;
  ${media.medium} {
    display: none;
  }
`;
const Main = styled.div`
  width: 702px;
  ${media.large} {
    width: 526px;
  }
  ${media.medium} {
    width: 768px;
  }
  ${media.small} {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;
const Right = styled.div`
  width: 240px;
  ${media.medium} {
    display: none;
  }
`;

const MainTemplate: React.FC<MainTemplateProps> & MainTemplateNamespace = ({
  children,
}) => {
  return (
    <MainTemplateBlock>
      <main>{children}</main>
    </MainTemplateBlock>
  );
};
MainTemplate.Main = Main;
MainTemplate.Left = Left;
MainTemplate.Right = Right;
export default MainTemplate;
