/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

interface Props {
  description?: string;
  lang?: string;
  meta?: [];
  title: string;
  image?: string;
  isPost?: boolean;
  pathUrl?: string;
}

const SEO = ({
  description,
  isPost,
  lang,
  meta,
  title,
  image,
  pathUrl,
}: Props) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `,
  );

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet titleTemplate={`%s | ${site.siteMetadata.title}`}>
      <html lang={lang} />
      <title lang={lang}>{title}</title>
      <link rel="canonical" href={site.siteMetadata.siteUrl + pathUrl} />

      {/* 기본 */}
      <meta name="description" content={description} />
      {image && <meta name="image" content={image} />}

      {/* Open Graph */}
      <meta property="og:url" content={site.siteMetadata.siteUrl + pathUrl} />
      {isPost ? <meta property="og:type" content="article" /> : null}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={site.siteMetadata.author} />
    </Helmet>
  );
};

export default SEO;
