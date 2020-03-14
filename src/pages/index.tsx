import React, { useState, useRef, useCallback } from 'react';
import { Link, graphql } from 'gatsby';
import _ from 'lodash';

import '../typography.css';
import Bio from '../components/bio';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { rhythm } from '../utils/typography';
import MainTemplate from '../components/Common/MainTemplate';
import styled, { css } from 'styled-components';
import { mediaQuery } from '../lib/styles/media';
import palette from '../lib/styles/palette';
import { ellipsis } from '../lib/styles/utils';
import MainTopHead from '../components/Common/MainTopHead';
import GlobalStyles from '../GlobalStyles';
import { MarkdownRemarkConnection, ImageSharp } from '../graphql-types';

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
const PostCardBlock = styled.div`
  flex: none;
`;
const Block = styled.div`
  /* width: 20rem; */
  background: white;
  border-radius: 4px;
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.04);
  transition: 0.25s box-shadow ease-in, 0.25s transform ease-in;
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 20px 0 rgba(0, 0, 0, 0.08);
    ${mediaQuery(1024)} {
      transform: none;
    }
  }
  margin: 1rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  ${mediaQuery(944)} {
    width: calc(50% - 2rem);
  }
  ${mediaQuery(767)} {
    margin: 0;
    width: 100%;
    & + & {
      margin-top: 1rem;
    }
  }
`;

const Content = styled.div`
  padding: 1rem;
  display: flex;
  flex: 1;
  flex-direction: column;
  h4 {
    font-size: 1rem;
    margin: 0;
    margin-bottom: 0.25rem;
    line-height: 1.5;
    ${ellipsis}
    color: ${palette.gray9};
    ${mediaQuery(767)} {
      white-space: initial;
    }
  }
  .description-wrapper {
    flex: 1;
  }
  p {
    margin: 0;
    word-break: break-word;
    overflow-wrap: break-word;
    font-size: 0.875rem;
    line-height: 1.5;
    /* ${props =>
      props.clamp &&
      css`
        height: 3.9375rem;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
      `} */
    /* ${props =>
      !props.clamp &&
      css`
        height: 15.875rem;
      `} */
  
    color: ${palette.gray7};
    margin-bottom: 1.5rem;
  }
  .sub-info {
    font-size: 0.75rem;
    line-height: 1.5;
    color: ${palette.gray6};
    .separator {
      margin-left: 0.25rem;
      margin-right: 0.25rem;
    }
  }
`;

const StyledLink = styled(Link)`
  display: block;
  color: inherit;
  text-decoration: none;
`;
const BlogIndex: React.FC<Props> = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges;

  const categories = _.uniq(posts.map(({ node }) => node.frontmatter.category));
  return (
    <>
      <GlobalStyles />
      <MainTemplate>
        <MainTemplate.Left></MainTemplate.Left>
        <MainTemplate.Main>
          {/* <SEO title="All posts" /> */}
          <Layout location={window.location} title={siteTitle}>
            <PostCardBlock>
              {/* <Bio /> */}
              {posts.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug;
                return (
                  <Block key={node.frontmatter.date}>
                    <Content>
                      <StyledLink to={node.fields.slug}>
                        <h4>{title}</h4>
                        <div className="description-wrapper">
                          {/* <p
                            dangerouslySetInnerHTML={{
                              __html:
                                node.frontmatter.description || node.excerpt,
                            }}
                          /> */}
                          {/* {post.short_description.replace(/&#x3A;/g, ':')}
                        {post.short_description.length === 150 && '...'} */}
                        </div>
                      </StyledLink>
                      <div className="sub-info">
                        <span>{node.frontmatter.date}</span>
                        <span className="separator">·</span>
                        <span>{}개의 댓글</span>
                      </div>
                    </Content>
                  </Block>
                );
              })}
            </PostCardBlock>
          </Layout>
        </MainTemplate.Main>
        <MainTemplate.Right></MainTemplate.Right>
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
          }
        }
      }
    }
  }
`;
