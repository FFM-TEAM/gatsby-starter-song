import * as React from 'react';
import styled from 'styled-components';
import PageTemplate from './PageTemplate';
import media from '../../lib/styles/media';
import '../../typography.css';
import GlobalStyles from '../../GlobalStyles';
const MainTemplateBlock = styled(PageTemplate)`
  main {
    display: flex;
    margin-top: 2rem;
    /* width: 1200px;
    ${media.large} {
      width: 1024px;
    }
    margin: 0 auto;
    margin-top: 3.5rem;
    margin-bottom: 8rem;
    flex: 1;
    justify-content: space-between;
    ${media.medium} {
      justify-content: center;
      width: 100%;
      margin-top: 1rem;
    } */
  }
`;
export interface MainTemplateProps {}
type MainTemplateNamespace = {
  Main: typeof Main;
  Right: typeof Right;
};
const Main = styled.div`
  flex: 1;
  /* width: 1200px; */
  /* ${media.large} {
    width: 526px;
  }
  ${media.medium} {
    width: 768px;
  }
  ${media.small} {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  } */
  ${media.small} {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;
const Right = styled.aside`
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
      <GlobalStyles />
      <main>{children}</main>
    </MainTemplateBlock>
  );
};
MainTemplate.Main = Main;
MainTemplate.Right = Right;
export default MainTemplate;
