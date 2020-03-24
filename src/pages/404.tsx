import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/seo';
import styled from 'styled-components';
import PageTemplate from '../components/Common/PageTemplate';
import GlobalStyles from '../GlobalStyles';
import { emptyImage } from '../static/images';
import media from '../lib/styles/media';
interface Props {
  data: {
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
}
const NotFoundPageBlock = styled(PageTemplate)``;
const Block = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  justify-items: center;
  .wrapper {
    h1 {
      text-shadow: 2px 2px 0 #6fd1bd;
      font-size: 3.75rem;
    }
    ${media.small} {
      h1 {
        font-size: 1.75rem;
      }
    }
    img {
      width: 30rem;
      height: auto;
      ${media.small} {
        width: 20rem;
        h1 {
          font-size: 1.25rem;
        }
      }
    }
    padding: 1.75rem;
    /* width: 765px; */
    margin-top: 3rem;
    align-content: center;
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
  }
`;

const NotFoundPage = ({ data }: Props) => {
  const siteTitle = data.site.siteMetadata.title;
  return (
    <>
      <GlobalStyles />
      <SEO title="404: Not Found" />
      <NotFoundPageBlock>
        <Block>
          <div className="wrapper">
            <h1>Not Found 404</h1>
            <h4>아무것도.....</h4>
            <img src={emptyImage} alt="" />
          </div>
        </Block>
      </NotFoundPageBlock>
    </>
  );
};

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
