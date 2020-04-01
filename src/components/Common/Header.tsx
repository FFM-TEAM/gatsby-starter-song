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
    }
    ${media.small} {
      height: 3.5rem;
      .right {
        font-size: 0.875rem;
      }
    }
    .right {
      display: flex;
      font-weight: bold;
      a {
        margin-right: 1rem;
      }
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
          <div className="right">
            <HeaderLogoBlock to={'/about'}>
              <div className="right">about</div>
            </HeaderLogoBlock>
            <div>
              <a
                href="https://github.com/FFM-TEAM/https://github.com/FFM-TEAM/gatsby-starter-song"
                className="github"
                aria-label="GitHub"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </HeaderBlock>
      {floating && <Placeholder />}
    </>
  );
};

export default Header;
