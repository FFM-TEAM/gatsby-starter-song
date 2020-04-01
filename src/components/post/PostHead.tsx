import * as React from 'react';
import styled from 'styled-components';
import media from '../../lib/styles/media';
import PostResponsive from './PostResponsive';
import palette from '../../lib/styles/palette';
import Image from 'gatsby-image';
const PostHeadBlock = styled(PostResponsive)`
  margin-top: 5.5rem;

  .head-wrapper {
    ${media.medium} {
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }
  h1 {
    font-size: 3rem;
    line-height: 1.5;
    letter-spacing: -0.02em;
    margin-top: 0;
    font-weight: 800;
    color: ${palette.gray8};
    margin-bottom: 1rem;
    word-break: keep-all;

    text-shadow: 2px 2px 0 #6fd1bd;
    -webkit-transition: text-shadow 0.2s ease-in-out;
    transition: text-shadow 0.2s ease-in-out;
  }
  h4 {
    color: rgba(0, 0, 0, 0.54);
  }

  ${media.medium} {
    margin-top: 2rem;
    h1 {
      font-size: 1.75rem;
    }
    h4 {
      font-size: 0.875rem;
      color: rgba(0, 0, 0, 0.54);
    }
  }
`;

const SubInfo = styled.div`
  align-items: center;
  font-size: 1rem;
  color: ${palette.gray7};
  display: flex;
  justify-content: space-between;
  .information {
    display: flex;
    justify-items: center;
    align-items: center;
    img {
      width: 3rem;
      height: 3rem;
      margin-right: 1rem;
      background: ${palette.gray0};
      object-fit: cover;
      border-radius: 1.5rem;
      box-shadow: 0px 0 8px rgba(0, 0, 0, 0.1);
      ${media.small} {
        width: 2rem;
        height: 2rem;
        border-radius: 1rem;
      }
    }
    .username {
      color: ${palette.gray8};
      font-weight: bold;
      a {
        color: inherit;
        text-decoration: none;
        &:hover {
          color: ${palette.gray7};
          text-decoration: underline;
        }
      }
    }
    .separator {
      margin-left: 0.5rem;
      margin-right: 0.5rem;
    }

    ${media.small} {
      font-size: 0.875rem;
    }
  }
  ${media.small} {
    margin-bottom: 0.75rem;
  }
`;
export interface PostHeadProps {
  toc: React.ReactNode;
  subject: string;
  date: string;
  image: any;
  siteMetadata: any;
}

const PostHead: React.FC<PostHeadProps> = ({
  toc,
  subject,
  date,
  image,
  siteMetadata,
}) => {
  const { author, introduction } = siteMetadata;
  return (
    <PostHeadBlock>
      <div className="head-wrapper">
        {/* <TagList tags={tags} link /> */}
        <h1>{subject}</h1>
        <h4>{introduction}</h4>
        <SubInfo>
          <div className="information">
            <Image
              className="author-image"
              fixed={image}
              alt={author}
              style={{
                width: `3rem`,
                height: `3rem`,
                marginRight: `0.75rem`,
                borderRadius: `100%`,
              }}
            />
            <span className="username">{author}</span>
            <span className="separator">&middot;</span>
            <span>{date}</span>
          </div>
        </SubInfo>
        {toc}
      </div>
    </PostHeadBlock>
  );
};

export default PostHead;
