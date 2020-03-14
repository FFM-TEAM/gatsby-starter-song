import * as React from 'react';
import styled from 'styled-components';
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

const HeaderLogoBlock = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: ${palette.gray8};
  font-size: 1.3125rem;
  text-decoration: none;
`;

export interface HeaderLogoProps {
  logoTitle: string;
}

const HeaderLogo: React.FC<HeaderLogoProps> = ({ logoTitle }) => {
  //   if (!custom) {
  //     return (
  //       <HeaderLogoBlock to="/">
  //         <Logo data-testid="songc-logo" />
  //       </HeaderLogoBlock>
  //     );
  //   }
  //   if (!userLogo) return null;
  //   if (!songcUsername) return null;
  //   const songcPath = `/@${songcUsername}`;
  return (
    <HeaderLogoBlock to="/">{createFallbackTitle(logoTitle)}</HeaderLogoBlock>
  );
};

export default HeaderLogo;
