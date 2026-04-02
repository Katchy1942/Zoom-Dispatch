import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, canonical, ogImage, ogType, twitterHandle }) => {
   const siteName = 'Zoom Dispatch';
   const fullTitle = title ? `${title} | ${siteName}` : siteName;

   return (
      <Helmet>
         {/* Standard metadata tags */}
         <title>{fullTitle}</title>
         <meta name="description" content={description} />
         {keywords && <meta name="keywords" content={keywords} />}
         {canonical && <link rel="canonical" href={canonical} />}

         {/* Open Graph / Facebook */}
         <meta property="og:type" content={ogType || 'website'} />
         <meta property="og:title" content={fullTitle} />
         <meta property="og:description" content={description} />
         {ogImage && <meta property="og:image" content={ogImage} />}
         <meta property="og:site_name" content={siteName} />

         {/* Twitter */}
         <meta name="twitter:card" content="summary_large_image" />
         <meta name="twitter:title" content={fullTitle} />
         <meta name="twitter:description" content={description} />
         {ogImage && <meta name="twitter:image" content={ogImage} />}
         {twitterHandle && <meta name="twitter:site" content={twitterHandle} />}
      </Helmet>
   );
};

export default SEO;
