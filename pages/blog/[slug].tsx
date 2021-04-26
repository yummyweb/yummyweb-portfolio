import { getFiles, getFileBySlug } from '../../lib/mdx'
import hydrate from 'next-mdx-remote/hydrate'
import BlogLayout from '../../layout/blog'
import MDXComponents from '../../components/MDXComponents'

const BlogPost = ({ mdxSource, tweets, frontMatter }) => {
    const content = hydrate(mdxSource, {
        components: {
          ...MDXComponents
        }
    });

    return <BlogLayout frontMatter={frontMatter}>{content}</BlogLayout>;
}

export async function getStaticPaths() {
    const posts = await getFiles('blog');
  
    return {
      paths: posts.map((p) => ({
        params: {
          slug: p.replace(/\.mdx/, '')
        }
      })),
      fallback: false
    };
}

export async function getStaticProps({ params }) {
    const post = await getFileBySlug('blog', params.slug);
  
    return { props: { ...post } }
}

export default BlogPost
