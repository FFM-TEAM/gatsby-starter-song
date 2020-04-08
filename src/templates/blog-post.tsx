import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';

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
import palette from '../lib/styles/palette';
import Footer from '../components/Common/Footer';

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
export const MarkdownBlock = styled.div`
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
`;

const Block = styled(PostResponsive)`
  margin-bottom: 5rem;
`;

const PreviousNext = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  padding: 1rem;
  ${media.small} {
    flex-direction: column-reverse;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  a {
    text-decoration: none;
    color: ${palette.gray6};
  }
  .card {
    height: 4rem;
    border-radius: 4px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05), 0 0 1px rgba(0, 0, 0, 0.1);
    width: 18rem;
    align-items: center;
    justify-items: center;
    align-items: center;
    text-align: center;
    font-size: 0.875rem;
    .name {
      color: black;
    }
    .left {
      text-align: left;
      padding-left: 2rem;
    }
    .right {
      text-align: right;
      padding-right: 2rem;
    }
    ${media.small} {
      text-align: center;
      flex: initial;
      width: 100%;
      & + & {
        margin-left: 0;
        margin-top: 1.5rem;
      }
    }
  }
`;
const BlogPostTemplate = ({ data, pageContext }: Props) => {
  const post = data.markdownRemark;
  const { childImageSharp } = data.avatar;
  const siteMetadata = data.site.siteMetadata;

  const { previous, next } = pageContext;
  const markup = { __html: post.html };
  const codeTheme = 'atom-one-light';
  return (
    <>
      <GlobalStyles />
      <MainTemplate>
        <MainTemplate.Main>
          <SEO title={post.frontmatter.title} />
          <PostHead
            subject={post.frontmatter.title}
            date={post.frontmatter.date}
            image={childImageSharp.fixed}
            siteMetadata={siteMetadata}
            toc={<PostToc html={post.html} />}
          />
          <Block>
            <Typography>
              <MarkdownBlock
                dangerouslySetInnerHTML={markup}
                className={codeTheme}
              />

              <PreviousNext>
                {previous && previous.frontmatter.title !== 'about' && (
                  <Link to={previous.fields.slug}>
                    <div className="card">
                      <div className="name">
                        <FaAngleDoubleLeft />
                        이전
                      </div>
                      <div className="left">{previous.frontmatter.title}</div>
                    </div>
                  </Link>
                )}
                {next && next.frontmatter.title !== 'about' && (
                  <Link to={next.fields.slug}>
                    <div className="card">
                      <div className="name">
                        다음글
                        <FaAngleDoubleRight />
                      </div>
                      <div className="right">{next.frontmatter.title}</div>
                    </div>
                  </Link>
                )}
              </PreviousNext>
            </Typography>
          </Block>
          <Utterances repo="FFM-TEAM/gatsby-starter-song" />
          <Footer />
        </MainTemplate.Main>
        <MainTemplate.Right />
      </MainTemplate>
    </>
  );
};

export default React.memo(BlogPostTemplate);

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    avatar: file(absolutePath: { regex: "/profile.jpg/" }) {
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
