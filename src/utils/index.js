import { frontMatter } from '../pages/thoughts/*.mdx';

console.log(frontMatter);

export const posts = frontMatter.sort(
  (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
);
