import React, { useState, useRef, useCallback } from 'react';
import { Link } from 'gatsby';

import { rhythm, scale } from '../utils/typography';
import styled from 'styled-components';
import media from '../lib/styles/media';

interface Props {
  location: Location;
  title: string;
  children?: any;
}
const Layout: React.FC<Props> = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  let header;
  if (location.pathname === rootPath) {
    // header = (
    //   <h1
    //     style={{
    //       ...scale(1.5),
    //       marginBottom: rhythm(1.5),
    //       marginTop: 0,
    //     }}
    //   >
    //     <Link
    //       style={{
    //         boxShadow: `none`,
    //         textDecoration: `none`,
    //         color: `inherit`,
    //       }}
    //       to={`/`}
    //     >
    //       {title}
    //     </Link>
    //   </h1>
    // );
  } else {
    // header = (
    //   <h3
    //     style={{
    //       fontFamily: `Montserrat, sans-serif`,
    //       marginTop: 0,
    //     }}
    //   >
    //     <Link
    //       style={{
    //         boxShadow: `none`,
    //         textDecoration: `none`,
    //         color: `inherit`,
    //       }}
    //       to={`/`}
    //     >
    //       {title}
    //     </Link>
    //   </h3>
    // );
  }

  return (
    <>
      {children}
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </>
  );
};

export default Layout;
