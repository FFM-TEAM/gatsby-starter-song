import React, { useRef } from 'react';
import { MdMoreVert } from 'react-icons/md';
import { DiReact } from 'react-icons/di';
import { FiThumbsUp, FiActivity, FiCode } from 'react-icons/fi';
import styled from 'styled-components';
import { Link, graphql } from 'gatsby';
import palette from '../../lib/styles/palette';
import media from '../../lib/styles/media';

export type MainTopHeadProps = {
  categories: any[];
};

const MainTopHead: React.FC<MainTopHeadProps> = ({ categories }) => {
  return (
    <Section>
      <div className="menu">
        {categories.map(item => {
          return (
            <MenuItem to={`/${item}`} activeClassName="active">
              {item}
              <FiActivity />
            </MenuItem>
          );
        })}
      </div>
    </Section>
  );
};

const Section = styled.section`
  position: relative;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1.5rem;
  .menu {
    display: flex;
  }
  .more {
    font-size: 1.5rem;
    color: ${palette.gray6};
  }

  ${media.medium} {
    display: flex;
  }
`;

const MenuItem = styled(Link)`
  width: 8rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-weight: 800;
  svg {
    font-size: 1.125rem;
    margin-right: 0.5rem;
  }
  .reactIcon {
    color: #61dbfb;
  }
  font-size: 0.875rem;
  border-bottom: 2px solid transparent;
  color: ${palette.gray7};
  color: rgba(0, 0, 0, 0.65) !important;
  &.active {
    background: ${palette.teal0};
    color: rgba(0, 0, 0, 0.84) !important;
    border-bottom: 2px solid #0184bc;
  }
`;

export default MainTopHead;
