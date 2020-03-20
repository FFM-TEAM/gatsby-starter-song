import * as React from 'react';
import styled from 'styled-components';

const PostPageTemplateBlock = styled.div``;
export interface PostPageTemplateProps {}

const PostPageTemplate: React.FC<PostPageTemplateProps> = ({ children }) => {
  return <PostPageTemplateBlock>{{ children }}</PostPageTemplateBlock>;
};

export default PostPageTemplate;
