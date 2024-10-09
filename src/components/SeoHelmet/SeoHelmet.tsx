import { Helmet } from 'react-helmet'

interface SeoData {
  ogTitle?: string
  title?: string
  ogDescription?: string
  description?: string
  keywords?: string
  ogUrl?: string
  ogType?: string
  ogImage?: string
  canonicalLink?: string
}

interface SeoHelmetProps {
  seoData: SeoData
}

function SeoHelmet({ seoData }: SeoHelmetProps) {
  return (
    <Helmet>
      {seoData.title && <title>{seoData.title}</title>}
      {seoData.description && (
        <meta name="description" content={seoData.description} />
      )}
      {seoData.keywords && <meta name="keywords" content={seoData.keywords} />}
      {seoData.ogUrl && <meta property="og:url" content={seoData.ogUrl} />}
      <meta property="og:type" content={seoData.ogType || 'website'} />
      {seoData.ogTitle && (
        <meta property="og:title" content={seoData.ogTitle} />
      )}
      {seoData.ogDescription && (
        <meta property="og:description" content={seoData.ogDescription} />
      )}
      {seoData.ogImage && (
        <meta property="og:image" content={seoData.ogImage} />
      )}
      {seoData.canonicalLink && (
        <link rel="canonical" href={seoData.canonicalLink} />
      )}
    </Helmet>
  )
}

export default SeoHelmet
