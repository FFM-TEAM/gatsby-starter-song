import React from 'react';
import { Link, graphql } from 'gatsby';
import _, { get } from 'lodash';
import PostCard from '../components/Common/PostCard';
import '../typography.css';
import MainTemplate from '../components/Common/MainTemplate';
import styled, { css } from 'styled-components';
import media, { mediaQuery } from '../lib/styles/media';
import palette from '../lib/styles/palette';
import { ellipsis } from '../lib/styles/utils';
import GlobalStyles from '../GlobalStyles';
import ImageSection from '../components/Common/ImageSection';
import { defaultImage } from '../static/images';
import Profile from '../components/Common/Profile';
import MainTopHead from '../components/Common/MainTopHead';
import Footer from '../components/Common/Footer';
// import MainTopHead from '../components/Common/MainTopHead';

interface Props {
  data: {
    allMarkdownRemark: any;
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
}

export const StyledLink = styled(Link)`
  display: block;
  color: inherit;
  text-decoration: none;
`;

const BlogIndex: React.FC<Props> = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
  return (
    <>
      <Footer />
      <GlobalStyles />
      <MainTemplate>
        <MainTemplate.Left />
        <MainTemplate.Main>
          {/*Todo categories */}
          <PostCard posts={posts} />
        </MainTemplate.Main>
        <MainTemplate.Right>
          <Profile />
        </MainTemplate.Right>
      </MainTemplate>
    </>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        configs {
          countOfInitialPost
        }
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { ne: null } } }
    ) {
      totalCount
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            category
            image {
              children {
                ... on ImageSharp {
                  fixed(width: 640, height: 300) {
                    src
                    srcSet
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
