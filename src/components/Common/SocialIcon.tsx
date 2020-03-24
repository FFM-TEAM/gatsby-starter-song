import * as React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palette';
import { IoLogoGithub, IoLogoFacebook, IoMdSend } from 'react-icons/io';
import media from '../../lib/styles/media';
const SocialIconBlock = styled.a<{ border: boolean }>`
  width: 3rem;
  height: 3rem;
  border-radius: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  transition: 0.125s all ease-in;
  color: white;
  ${props =>
    props.border &&
    css`
      border: 1px solid ${palette.gray3};
    `}
  &:focus {
    box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.35);
  }
`;

const EmailBlock = styled.div`
  position: absolute;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  div {
    background: ${palette.gray7};
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.05);
    padding: 0.5rem;
    font-size: 0.875rem;
    color: white;
    border-radius: 4px;
    ${media.small} {
      padding: 0.25rem 0.5rem;
      font-size: 0.75rem;
    }
  }
`;

interface SocialIconProps {
  provider: 'facebook' | 'google' | 'github';
  tabIndex?: number;
  Id?: string;
}

const providerMap = {
  github: {
    color: '#272e33',
    icon: IoLogoGithub,
    border: false,
    url: 'https://github.com/',
  },
  google: {
    color: 'black',
    icon: IoMdSend,
    border: true,
    url: 'mailto:',
  },
  facebook: {
    color: '#3b5998',
    icon: IoLogoFacebook,
    border: false,
    url: 'https://github.com/',
  },
};
const SocialIcon: React.FC<SocialIconProps> = ({ provider, tabIndex, Id }) => {
  const info = providerMap[provider];
  const { icon: Icon, color, border, url } = info;
  const [hoverEmail, setHoverEmail] = React.useState(false);
  const emailBlockRef = React.useRef<HTMLDivElement>(null);

  const onMouseEnterEmail = () => {
    setHoverEmail(true);
  };
  const onMouseLeaveEmail = (e: React.MouseEvent) => {
    if (e.relatedTarget === emailBlockRef.current) return;
    setHoverEmail(false);
  };
  return (
    <>
      <SocialIconBlock
        style={{
          background: color,
        }}
        border={border}
        tabIndex={tabIndex}
        href={url + Id}
        onMouseEnter={onMouseEnterEmail}
        onMouseLeave={onMouseLeaveEmail}
      >
        <Icon />
      </SocialIconBlock>
      {hoverEmail && (
        <EmailBlock ref={emailBlockRef} onMouseLeave={onMouseLeaveEmail}>
          <div>{Id}</div>
        </EmailBlock>
      )}
    </>
  );
};

export default SocialIcon;
