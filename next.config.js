const withMdxEnhanced = require('next-mdx-enhanced');

module.exports = withMdxEnhanced({
  usesSrc: true,
  layoutPath: 'src/layouts',
  defaultLayout: true,
  fileExtensions: ['mdx'],
  remarkPlugins: [require('remark-autolink-headings'), require('remark-slug')],
  rehypePlugins: [],
  extendFrontMatter: {
    process: (mdxContent, frontMatter) =>
      generatePostDetails(frontMatter.__resourcePath),
  },
})({
  pageExtensions: ['js', 'mdx'],
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./scripts/generate-sitemap');
    }

    return config;
  },
});

function generatePostDetails(resourcePath) {
  const pathArr = resourcePath.split('/');

  return {
    id: `${pathArr[0]}-${pathArr[1].replace('.mdx', '')}`,
    slug: pathArr[1].replace('.mdx', ''),
    path: resourcePath.replace('.mdx', ''),
    page: pathArr[0],
  };
}
