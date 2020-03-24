import * as React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palette';
import media from '../../lib/styles/media';

const TypographyBlock = styled.div<{ isAbout?: boolean }>`
  font-size: 1.125rem;
  color: ${palette.gray8};
  line-height: 1.85;
  letter-spacing: -0.02em;
  word-break: keep-all;
  word-wrap: break-word;
  p {
    b {
      font-weight: 400;
    }
    code {
      color: #547196;
      background: #fffbfe;
      margin: 0 0.1em;
      border-radius: 0.3em;

      padding-left: 0.25em;
      padding-right: 0.25em;
    }
    a {
      code {
        color: ${palette.teal6};
      }
    }
  }

  a {
    color: ${palette.teal7};
    text-decoration: none;
    text-decoration-style: dashed;
    &:hover {
      color: ${palette.teal6};
      text-decoration: underline;
      text-decoration-style: dashed;
    }
  }
  code {
    font-family: 'NanumSquareRound', source-code-pro, Menlo, Monaco, Consolas,
      'Courier New', monospace;
  }

  hr {
    border: none;
    height: 1px;
    width: 100%;
    background: #dedede;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  p {
    img {
      display: block;
      margin: 0 auto;
      max-width: 100%;
      margin-top: 3rem;
      margin-bottom: 3rem;
    }
  }

  h1 {
    font-size: 2.5rem;
  }
  h2 {
    font-size: 2rem;
  }
  h3 {
    font-size: 1.5rem;
  }
  h4 {
    font-size: 1.125rem;
  }

  h1,
  h2,
  h3,
  h4 {
    line-height: 1.5;
    margin-bottom: 1rem;
  }
  p + h1,
  p + h2,
  p + h3,
  p + h4 {
    margin-top: 2.5rem;
  }

  ${media.small} {
    ${props =>
      props.isAbout &&
      css`
        h1 {
          font-size: 1.75rem;
        }
        h2 {
          font-size: 1.25rem;
        }
        h3 {
          font-size: 1rem;
        }
        h4 {
          font-size: 0.875rem;
        }
      `}
    font-size: 1rem;
    h1 {
      font-size: 2.25rem;
    }
    h2 {
      font-size: 1.75rem;
    }
    h3 {
      font-size: 1.25rem;
    }
    h4 {
      font-size: 1rem;
    }

    h1,
    h2,
    h3,
    h4 {
      margin-bottom: 0.75rem;
    }
    p + h1,
    p + h2,
    p + h3,
    p + h4 {
      margin-top: 2rem;
    }
  }

  blockquote {
    margin-top: 2rem;
    margin-bottom: 2rem;
    border-left: 4px solid #0f4c81;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    background: #b5a8a824;
    margin-left: 0;
    margin-right: 0;
    padding: 1rem;
    padding-left: 1rem;
    color: ${palette.gray9};

    code {
      background: none;
    }

    text-shadow: 2px 2px 0 #6fd1bd;
    -webkit-transition: text-shadow 0.2s ease-in-out;
    transition: text-shadow 0.2s ease-in-out;

    ul,
    ol {
      padding-left: 1rem;
    }
    *:first-child {
      margin-top: 0;
    }
    *:last-child {
      margin-bottom: 0;
    }
  }
`;

export interface TypographyProps {
  isAbout?: boolean;
}

const Typography: React.FC<TypographyProps> = ({
  children,
  isAbout = false,
}) => {
  return <TypographyBlock isAbout={isAbout}>{children}</TypographyBlock>;
};

export default Typography;
