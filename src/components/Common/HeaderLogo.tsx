import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'gatsby';
import palette from '../../lib/styles/palette';

const createFallbackTitle = (username: string | null) => {
  if (!username) return null;
  const lastChar = username.slice(-1).toLowerCase();
  if (lastChar === 's') {
    return `${username}' 크리에이터`;
  }
  return `${username}'s 크리에이터`;
};

export const flutter = keyframes`
  0% {
    transform: rotate(0deg);
  }
  35% {
    transform: rotate(0deg);
  }
  40% {
    transform: rotate(-5deg);
  }
  60% {
    transform: rotate(5deg);
  }
  65% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
  `;

export const HeaderLogoBlock = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: ${palette.gray8};
  font-size: 1.3125rem;
  text-decoration: none;

  -webkit-animation: ${flutter} 2s linear infinite;
  animation: ${flutter} 1s linear infinite;
`;

export interface HeaderLogoProps {
  logoTitle: string;
}

const HeaderLogo: React.FC<HeaderLogoProps> = ({ logoTitle }) => {
  return (
    <HeaderLogoBlock to="/">{createFallbackTitle(logoTitle)}</HeaderLogoBlock>
  );
};

export default HeaderLogo;
