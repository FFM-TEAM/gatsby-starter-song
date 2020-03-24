import * as React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Typography from '../components/Common/Typography';
import { MarkdownBlock } from '../templates/blog-post';
import PageTemplate from '../components/Common/PageTemplate';
import media from '../lib/styles/media';
import GlobalStyles from '../GlobalStyles';

const AboutBlock = styled(PageTemplate)``;

export const Block = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  justify-items: center;
  .wrapper {
    padding: 1.75rem;
    width: 765px;
    margin-top: 3rem;
    border-radius: 4px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05), 0 0 1px rgba(0, 0, 0, 0.1);
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
const about: React.FC<Props> = ({ data }) => {
  const resumes = data.allMarkdownRemark.edges;
  const resume = resumes
    .filter(({ node }) => node.frontmatter.title === 'about')
    .map(({ node }) => node)[0];

  const markup = { __html: resume.html };
  const codeTheme = 'atom-one-light';
  return (
    <>
      <GlobalStyles />
      <AboutBlock>
        <Block>
          <div className="wrapper">
            <Typography isAbout={true}>
              <MarkdownBlock
                dangerouslySetInnerHTML={markup}
                className={codeTheme}
              />
            </Typography>
          </div>
        </Block>
      </AboutBlock>
    </>
  );
};

export default about;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(filter: { frontmatter: { category: { eq: null } } }) {
      edges {
        node {
          id
          excerpt(pruneLength: 160)
          html
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
