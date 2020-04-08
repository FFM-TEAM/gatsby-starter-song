import * as React from 'react';
import styled from 'styled-components';
import SocialIcon from './SocialIcon';
import palette from '../../lib/styles/palette';
import media, { mediaQuery } from '../../lib/styles/media';
import { graphql, StaticQuery, Link } from 'gatsby';
import Sticky from './Sticky';
import Image from 'gatsby-image';

const ProfileBlock = styled.div`
  width: 15rem;
  ${mediaQuery(1440)} {
    width: 12rem;
  }
  margin-top: 0.25rem;
  padding-left: 1rem;
  padding: 1rem;
  margin-right: 2rem;
  border-radius: 4px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05), 0 0 1px rgba(0, 0, 0, 0.1);
  a {
    text-decoration: none;
  }
  .userInfo {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
    img {
      height: 6rem;
      display: block;
      margin-right: 1rem;
      object-fit: cover;
      border-radius: 50%;
      ${media.small} {
        width: 2rem;
        height: 2rem;
        border-radius: 1rem;
      }
    }
  }
  .username {
    color: black;
    text-shadow: 2px 2px 0 #6fd1bd;
  }
  .icons-wrapper {
    display: flex;
    justify-content: center;
    justify-content: space-around;
    margin-top: 1.5rem;
  }
`;
export interface ProfileProps {}

const Profile: React.FC<ProfileProps> = props => {
  return (
    <Sticky top={118}>
      <StaticQuery
        query={bioQuery}
        render={data => {
          const {
            author,
            social,
            introduction,
            email,
          } = data.site.siteMetadata;
          return (
            <ProfileBlock>
              <div className="userInfo">
                <Image
                  className="author-image"
                  fixed={data.avatar.childImageSharp.fixed}
                  alt={author}
                  style={{
                    width: `6rem`,
                    height: `6rem`,
                    borderRadius: `100%`,
                  }}
                />
              </div>
              <Link to={'/about'} className="author-name-content">
                <div className="username">
                  Written by <b>@{author}</b>
                </div>
              </Link>
              <div className="bio">{introduction}</div>
              <div className="icons-wrapper">
                <SocialIcon provider="github" Id={social.github} />
                <SocialIcon provider="google" Id={email} />
                {/* <SocialIcon provider="facebook" /> */}
              </div>
            </ProfileBlock>
          );
        }}
      />
    </Sticky>
  );
};

export default Profile;

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile.jpg/" }) {
      childImageSharp {
        fixed(width: 72, height: 72) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        introduction
        email
        social {
          twitter
          github
          medium
          facebook
        }
      }
    }
  }
`;
