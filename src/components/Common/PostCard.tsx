import * as React from 'react';
import styled, { css } from 'styled-components';
import media, { mediaQuery } from '../../lib/styles/media';
import palette from '../../lib/styles/palette';
import { Link, graphql } from 'gatsby';
import ImageSection from './ImageSection';
import { defaultImage } from '../../static/images';
import { get } from 'lodash';
import { ellipsis } from '../../lib/styles/utils';
const PostCardBlock = styled.div`
  width: 20rem;
  display: flex;
  padding-top: 2rem;
  padding-bottom: 2rem;
  ${media.small} {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
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

  & > a {
    color: inherit;
    text-decoration: none;
  }
  .user-info {
    display: flex;
    align-items: center;
    img {
      width: 3rem;
      height: 3rem;
      display: block;
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
      font-size: 0.875rem;
      color: ${palette.gray9};
      font-weight: bold;
      a {
        color: inherit;
        text-decoration: none;
        &:hover {
          color: ${palette.gray8};
        }
      }
    }
    margin-bottom: 1.5rem;
    ${media.small} {
      margin-bottom: 0.75rem;
    }
  }
  .post-thumbnail {
    margin-bottom: 1rem;
    ${media.small} {
    }
  }
  line-height: 1.5;
  h2 {
    font-size: 1.5rem;
    margin: 0;
    color: ${palette.gray9};
    word-break: keep-all;
    ${media.small} {
      font-size: 1rem;
    }
  }
  p {
    margin-bottom: 2rem;
    margin-top: 0.5rem;
    font-size: 1rem;
    color: ${palette.gray7};
    word-break: keep-all;
    overflow-wrap: break-word;
    ${media.small} {
      font-size: 0.875rem;
      margin-bottom: 1.5rem;
    }
  }
  .subinfo {
    display: flex;
    align-items: center;
    margin-top: 1rem;
    color: ${palette.gray6};
    font-size: 0.875rem;
    ${media.small} {
      font-size: 0.75rem;
    }
    span {
    }
    .separator {
      margin-left: 0.5rem;
      margin-right: 0.5rem;
    }
  }
  .tags-wrapper {
    margin-bottom: -0.875rem;
    ${media.small} {
      margin-bottom: -0.5rem;
    }
  }
`;
const Block = styled.div`
  flex: 1;
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

  ${mediaQuery(1440)} {
    width: 18rem;
  }
  ${mediaQuery(1312)} {
    width: 20rem;
  }

  ${mediaQuery(944)} {
    width: 20rem;
  }
  ${mediaQuery(767)} {
    margin: 0;
    width: 100%;
    & + & {
      margin-top: 1rem;
    }
  }
`;
const Top = styled.div`
  padding: 0.625rem 1rem;
  border-top: 1px solid ${palette.gray0};
  display: flex;
  font-size: 0.75rem;
  line-height: 1.5;
  justify-content: center;
  .userinfo {
    text-decoration: none;
    color: inherit;
    display: flex;
    align-items: center;
    img {
      object-fit: cover;
      border-radius: 50%;
      width: 1.5rem;
      height: 1.5rem;
      display: block;
      margin-right: 0.5rem;
    }
    span {
      color: ${palette.gray6};
      b {
        color: ${palette.gray8};
      }
    }
  }
  .likes {
    display: flex;
    align-items: center;
    svg {
      width: 0.75rem;
      height: 0.75rem;
      margin-right: 0.5rem;
    }
  }
`;
const Content = styled.div<{ clamp: boolean }>`
  padding: 1rem;
  display: flex;
  flex: 1;
  flex-direction: column;
  h4 {
    font-size: 1.125rem;
    
    margin: 0;
    font-weight:bold;
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
    color: ${palette.gray7};
    margin-bottom: 1.5rem;
    ${props =>
      props.clamp &&
      css`
        height: 3.9375rem;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
      `}
    ${props =>
      !props.clamp &&
      css`
        height: 15.875rem;
      `} 
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
const Grid = styled.div`
  display: flex;
  margin: -1rem;
  flex-wrap: wrap;
  ${mediaQuery(767)} {
    margin: 0;
  }
`;
export const StyledLink = styled(Link)`
  display: block;
  color: inherit;
  text-decoration: none;
`;
export interface PostCardProps {
  posts: any;
  author: string;
}

const PostCard: React.FC<PostCardProps> = ({ posts, author }) => {
  return (
    <Grid>
      {posts.map((data: any, i: number) => {
        const { node } = data;
        const title = node.frontmatter.title || node.fields.slug;
        const cover = get(node.frontmatter, 'image.children.0.fixed', {});
        return (
          <PostCardBlock key={i}>
            <Block>
              <Top>
                <Link className="userinfo" to={'/'}>
                  <img src={cover.src || defaultImage} alt="coverImage" />
                  <span>
                    WRITTEN BY <b>{author}</b>
                  </span>
                </Link>
              </Top>
              <StyledLink to={node.fields.slug}>
                <ImageSection
                  src={cover.src || defaultImage}
                  alt="post-thumbnail"
                  widthRatio={1.91}
                  heightRatio={1}
                  className="post-thumbnail"
                />
              </StyledLink>
              <Content clamp={!!cover.src || !!defaultImage}>
                <StyledLink to={node.fields.slug}>
                  <h4>{title}</h4>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.slug || node.excerpt,
                    }}
                  />

                  <div className="subinfo">
                    <span>{node.frontmatter.date}</span>
                  </div>
                </StyledLink>
              </Content>
            </Block>
          </PostCardBlock>
        );
      })}
    </Grid>
  );
};

export default React.memo(PostCard);
