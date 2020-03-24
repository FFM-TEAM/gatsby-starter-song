import React, { useState, useRef, useCallback } from 'react';
import styled from 'styled-components';
import Header from './Header';
import { getScrollTop } from '../../lib/utils';

const PageTemplateBlock = styled.div``;

interface PageTemplateProps {
  style?: React.CSSProperties;
  className?: string;
}

const PageTemplate: React.FC<PageTemplateProps> = ({
  style,
  className,
  children,
}) => {
  // Header event
  const lastY = useRef(0);
  const direction = useRef<null | 'UP' | 'DOWN'>(null);

  const [floating, setFloating] = useState(false);
  const [baseY, setBaseY] = useState(0);
  const [floatingMargin, setFloatingMargin] = useState(-60);
  const onScroll = useCallback(() => {
    const scrollTop = getScrollTop();

    // turn floating OFF
    if (floating && scrollTop === 0) {
      setFloating(false);
      setFloatingMargin(-60);
      return;
    }
    if (floating) {
      const calculated = -60 + baseY - scrollTop;
      setFloatingMargin(calculated > 0 ? 0 : calculated);
    }
    const d = scrollTop < lastY.current ? 'UP' : 'DOWN';

    // FIxes flickiering issue
    if (
      d !== direction.current &&
      (floatingMargin === 0 || floatingMargin <= -60)
    ) {
      setBaseY(scrollTop + (d === 'DOWN' ? 60 : 0));
    }

    // turns floating
    if (direction.current !== 'UP' && d === 'UP' && scrollTop > 120) {
      setFloating(true);
    }

    direction.current = d;
    lastY.current = scrollTop;
  }, [baseY, floating, floatingMargin]);

  React.useEffect(() => {
    document.addEventListener('scroll', onScroll);
    const reset = () => {
      document.removeEventListener('scroll', onScroll);
    };
    return reset;
  }, [floating, baseY, floatingMargin, onScroll]);

  // Header event end
  return (
    <PageTemplateBlock style={style} className={className}>
      <Header floating={floating} floatingMargin={floatingMargin} />
      {children}
    </PageTemplateBlock>
  );
};

export default PageTemplate;
