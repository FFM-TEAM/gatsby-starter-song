import React from 'react';
import { Link, graphql } from 'gatsby';
import _, { get } from 'lodash';
import PostCard from '../components/Common/PostCard';
import '../typography.css';
import MainTemplate from '../components/Common/MainTemplate';
import styled from 'styled-components';
import Profile from '../components/Common/Profile';
import Footer from '../components/Common/Footer';

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
      <Footer />
    </>
  );
};

export default React.memo(BlogIndex);

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
