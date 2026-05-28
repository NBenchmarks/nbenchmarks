import type { APIRoute } from 'astro';

const getRobotsTxt = (sitemapURL: URL) => `\
User-agent: *
Allow: /

Sitemap: ${sitemapURL.href}
`;

export const GET: APIRoute = ({ site }) => {
  // Changed name from'sitemap-index.xml' to 'sitemap_final.xml'
  const sitemapURL = new URL('sitemap_final.xml', site); 
  return new Response(getRobotsTxt(sitemapURL));
};