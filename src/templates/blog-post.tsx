import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import SEO from '../components/seo';
import MainTemplate from '../components/Common/MainTemplate';
import GlobalStyles from '../GlobalStyles';
import prismThemes from '../lib/styles/prismThemes';
import media from '../lib/styles/media';
import Typography from '../components/Common/Typography';
import PostResponsive from '../components/post/PostResponsive';
import PostHead from '../components/post/PostHead';
import PostToc from '../components/post/PostToc';
import Utterances from '../components/Common/Utterances';

interface Props {
  data: {
    avatar: any;
    markdownRemark: any;
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
  pageContext: any;
}
const MarkdownBlock = styled.div`
  &.atom-one-dark {
    ${prismThemes['atom-one-dark']}
  }
  &.atom-one-light {
    ${prismThemes['atom-one-light']}
  }
  &.github {
    ${prismThemes['github']}
  }
  &.monokai {
    ${prismThemes['monokai']}
  }
  &.dracula {
    ${prismThemes['dracula']}
  }

  pre {
    font-family: 'Fira Mono', source-code-pro, Menlo, Monaco, Consolas,
      'Courier New', monospace;
    font-size: 1rem;
    padding: 1rem;
    border-radius: 4px;
    line-height: 1.5;
    overflow-x: auto;
    letter-spacing: 0px;
    ${media.small} {
      font-size: 0.75rem;
      padding: 0.75rem;
    }
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }

  iframe {
    width: 768px;
    height: 430px;
    max-width: 100%;
    background: black;
    display: block;
    margin: auto;
    border: none;
    border-radius: 4px;
    overflow: hidden;
  }

  .twitter-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    border-left: none;
    background: none;
    padding: none;
  }
`;

const Block = styled(PostResponsive)`
  margin-bottom: 5rem;
`;
const BlogPostTemplate = ({ data, pageContext }: Props) => {
  const post = data.markdownRemark;
  const { childImageSharp } = data.avatar;
  const siteMetadata = data.site.siteMetadata;

  //const { previous, next } = pageContext;

  const markup = { __html: post.html };
  const codeTheme = 'atom-one-light';

  return (
    <>
      <GlobalStyles />
      <MainTemplate>
        <MainTemplate.Left></MainTemplate.Left>
        <MainTemplate.Main>
          <SEO title={post.frontmatter.title} />
          <PostHead
            subject={post.frontmatter.title}
            date={post.frontmatter.date}
            image={childImageSharp.fixed.src}
            siteMetadata={siteMetadata}
            toc={<PostToc html={post.html} />}
          />
          <Block>
            <Typography>
              <MarkdownBlock
                dangerouslySetInnerHTML={markup}
                className={codeTheme}
              />
            </Typography>
          </Block>
          <Utterances
            repo="s-ong-c/s-ong-c.github.io"
            url={'https://s-ong-c.github.io'}
          />
        </MainTemplate.Main>
        <MainTemplate.Right></MainTemplate.Right>
      </MainTemplate>
    </>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    avatar: file(absolutePath: { regex: "/songc_profile.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        title
        author
        introduction
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
