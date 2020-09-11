const withOptimizedImages = require('next-optimized-images');
const withMdxEnhanced = require('next-mdx-enhanced');
const rehypePrism = require('@mapbox/rehype-prism');

module.exports = withMdxEnhanced({
  usesSrc: true,
  layoutPath: 'src/layouts',
  defaultLayout: true,
  remarkPlugins: [],
  rehypePlugins: [],
  extendFrontMatter: {
    process: (mdxContent, frontMatter) =>
      generatePostDetails(frontMatter.__resourcePath)
  }
})({
  pageExtensions: ['js', 'mdx']
});

// module.exports = withPlugins(
//   [
//     withMdxEnhanced({
//       layoutPath: 'layouts',
//       defaultLayout: true,
//       rehypePlugins: [require('@mapbox/rehype-prism')],
//       extendFrontMatter: {
//         process: (mdxContent, frontMatter) => {
//           return {
//             id: makeIdFromPath(frontMatter.__resourcePath)
//           };
//         }
//       }
//     })({
//       pageExtensions: ['js', 'mdx']
//     }),
//     withOptimizedImages
//   ],
//   {
//     // Next.js config
//   }
// );

function generatePostDetails(resourcePath) {
  const pathArr = resourcePath.split('/');

  return {
    id: `${pathArr[0]}-${pathArr[1].replace('.mdx', '')}`,
    slug: pathArr[1].replace('.mdx', ''),
    path: resourcePath.replace('.mdx', ''),
    page: pathArr[0]
  };
}
