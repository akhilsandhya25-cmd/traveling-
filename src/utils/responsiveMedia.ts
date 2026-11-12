/**
 * Builds verified responsive `srcSet` and `sizes` attributes for Wikimedia Commons
 * (using official MediaWiki thumbnail steps 500, 960, 1280, 1920) and Unsplash CDN URLs.
 */
export function getResponsiveImageProps(src: string, sizes: string) {
  if (src.includes('thumb.wikimedia.org') && src.includes('/1920px-')) {
    const w500 = src.replace('/1920px-', '/500px-');
    const w960 = src.replace('/1920px-', '/960px-');
    const w1280 = src.replace('/1920px-', '/1280px-');
    return {
      src,
      srcSet: `${w500} 500w, ${w960} 960w, ${w1280} 1280w, ${src} 1920w`,
      sizes,
    };
  }

  if (src.includes('images.unsplash.com') && src.includes('w=1600')) {
    const w640 = src.replace('w=1600', 'w=640');
    const w960 = src.replace('w=1600', 'w=960');
    const w1280 = src.replace('w=1600', 'w=1280');
    return {
      src,
      srcSet: `${w640} 640w, ${w960} 960w, ${w1280} 1280w, ${src} 1600w`,
      sizes,
    };
  }

  return { src, sizes };
}
