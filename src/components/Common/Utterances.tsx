import React, { createRef, useEffect } from 'react';

const src = 'https://utteranc.es/client.js';

export interface UtterancesProps {
  repo: string;
}
const Utterances: React.FC<UtterancesProps> = React.memo(({ repo }) => {
  const conRef = createRef<HTMLDivElement>();

  useEffect(() => {
    const utterances = document.createElement('script');

    const attributes = {
      src,
      repo,
      'issue-term': 'pathname',
      label: 'comments 🙌',
      theme: 'github-light',
      crossOrigin: 'anonymous',
      async: 'true',
    };

    Object.entries(attributes).forEach(([key, value]) => {
      utterances.setAttribute(key, value);
    });

    if (conRef && conRef.current) {
      conRef.current.appendChild(utterances);
    }
  }, [repo]);

  return <div ref={conRef} />;
});

export default Utterances;
