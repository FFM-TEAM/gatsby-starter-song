import * as React from 'react';
import styled, { css } from 'styled-components';
import HeaderLogo, { HeaderLogoBlock } from './HeaderLogo';
import { breakpoints } from '../../lib/styles/responsive';
import media from '../../lib/styles/media';
import zIndexes from '../../lib/styles/zIndexes';
import { Link } from 'gatsby';

const HeaderBlock = styled.div<{ floating: boolean }>`
  z-index: ${zIndexes.Header};
  font-family: 'NanumSquareRound', source-code-pro, Menlo, Monaco, Consolas,
    'Courier New', monospace;
  width: 100%;
  > .wrapper {
    width: ${breakpoints.xlarge};
    height: 6rem;
    margin: 0rem auto;
    padding-left: 1rem;
    padding-right: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    a {
      text-decoration: none;
      color: black;
      font-size: 1.25rem;
    }
    ${media.large} {
      width: 1024px;
    }
    ${media.medium} {
      width: 100%;
      .write-button {
        display: none;
      }
      .search {
        display: block;
      }
    }
    ${media.small} {
      height: 3.5rem;

      .login-button {
        font-size: 0.875rem;
        padding-left: 0.75rem;
        padding-right: 0.75rem;
      }
    }
    .logged-in {
      position: relative;
      display: flex;
      align-items: center;
    }
    .right {
      font-weight: bold;
    }
  }

  ${props =>
    props.floating &&
    css`
      position: fixed;
      top: 0;
      background: rgba(255, 255, 255, 0.9);
      box-shadow: 0px 0 8px rgba(0, 0, 0, 0.08);
    `}
`;
const Placeholder = styled.div`
  width: 100%;
  height: 4rem;
`;
interface HeaderProps {
  floating: boolean;
  floatingMargin: number;
  isWrite?: boolean;
}

const Header: React.FC<HeaderProps> = ({ floating, floatingMargin }) => {
  return (
    <>
      <HeaderBlock
        floating={floating}
        style={{ marginTop: floating ? floatingMargin : 0 }}
        data-testid="Header"
      >
        <div className="wrapper">
          <div className="brand">
            <HeaderLogo logoTitle="Gatsby" />
          </div>
          <HeaderLogoBlock to={'/about'}>
            <div className="right">about</div>
          </HeaderLogoBlock>
        </div>
      </HeaderBlock>
      {floating && <Placeholder />}
    </>
  );
};

export default Header;
