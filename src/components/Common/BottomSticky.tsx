import React, { useState, useCallback, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { getScrollTop } from '../../lib/utils';
const BottomStickyBlock = styled.div``;

export interface BottomStickyProps {
  bottom: number;
  className?: string;
}

const BottomSticky: React.FC<BottomStickyProps> = ({
  className,
  bottom,
  children,
}) => {
  const [y, setY] = useState(0);
  const element = useRef<HTMLDivElement | null>(null);
  const [fixed, setFixed] = useState(false);

  const setup = useCallback(() => {
    if (!element.current) return;
    const pos = element.current.getBoundingClientRect();
    setY(pos.top + getScrollTop());
  }, []);
  // 처음 0 일때도 sticky 작용
  useEffect(() => {
    const scrollTop = getScrollTop();
    const nextFixed = scrollTop + 112 > y;
    if (scrollTop === 0) {
      setFixed(nextFixed);
    }
    return () => {
      setY(0);
    };
  }, [y]);
  const onScroll = useCallback(() => {
    const scrollTop = getScrollTop();
    const nextFixed = scrollTop + 112 > y;
    if (fixed !== nextFixed) {
      setFixed(nextFixed);
    }
  }, [fixed, y]);

  useEffect(() => {
    setup();
  }, [setup]);

  // register scroll event
  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [onScroll]);

  return (
    <BottomStickyBlock
      ref={element}
      className={className}
      style={{
        position: fixed ? 'fixed' : undefined,
        bottom: fixed ? bottom : undefined,
      }}
    >
      {children}
    </BottomStickyBlock>
  );
};

export default BottomSticky;
