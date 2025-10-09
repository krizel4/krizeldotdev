import { getGlobalData } from '../../utils/global-data';
import {
  getNextPostBySlug,
  getPostBySlug,
  getPreviousPostBySlug,
  postFilePaths,
} from '../../utils/mdx-utils';
import { MDXRemote } from 'next-mdx-remote';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';
import ArrowIcon from '../../components/ArrowIcon';
import CustomLink from '../../components/CustomLink';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import SEO from '../../components/SEO';
import pageTransitionManager from '../../utils/page-transitions';


const components = {
  a: CustomLink,
  Head,
};

export default function PostPage({
  source,
  frontMatter,
  prevPost,
  nextPost,
  globalData,
}) {
  useEffect(() => {
   if (pageTransitionManager) {
      pageTransitionManager.switchPage(`/posts/${frontMatter.slug || 'post'}`);
    }
  }, [frontMatter.slug]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 relative">
      {/* Background Patterns */}
      {/* Light mode dithered dot pattern */}
      <div
        className="absolute inset-0 pointer-events-none dark:hidden"
        style={{
          background: `
            radial-gradient(circle at 0.5px 0.5px, rgba(0,0,0,0.15) 0.6px, transparent 0),
            radial-gradient(circle at 1.5px 1.5px, rgba(0,0,0,0.12) 0.4px, transparent 0),
            radial-gradient(circle at 2.5px 0.5px, rgba(0,0,0,0.1) 0.5px, transparent 0),
            radial-gradient(circle at 0.5px 2.5px, rgba(0,0,0,0.08) 0.4px, transparent 0),
            radial-gradient(circle at 1px 1px, rgba(0,0,0,0.06) 0.3px, transparent 0),
            radial-gradient(circle at 2px 2px, rgba(0,0,0,0.04) 0.3px, transparent 0),
            radial-gradient(circle at 0px 0px, rgba(0,0,0,0.03) 0.2px, transparent 0),
            radial-gradient(circle at 3px 3px, rgba(0,0,0,0.02) 0.2px, transparent 0)
          `,
          backgroundSize: '3px 3px',
          opacity: 0.6,
        }}
      ></div>

      {/* Dark mode dithered dot pattern */}
      <div
        className="absolute inset-0 pointer-events-none dark:block hidden"
        style={{
          background: `
            radial-gradient(circle at 0.5px 0.5px, rgba(255,255,255,0.25) 0.6px, transparent 0),
            radial-gradient(circle at 1.5px 1.5px, rgba(255,255,255,0.18) 0.4px, transparent 0),
            radial-gradient(circle at 2.5px 0.5px, rgba(255,255,255,0.15) 0.5px, transparent 0),
            radial-gradient(circle at 0.5px 2.5px, rgba(255,255,255,0.12) 0.4px, transparent 0),
            radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 0.3px, transparent 0),
            radial-gradient(circle at 2px 2px, rgba(255,255,255,0.06) 0.3px, transparent 0),
            radial-gradient(circle at 0px 0px, rgba(255,255,255,0.04) 0.2px, transparent 0),
            radial-gradient(circle at 3px 3px, rgba(255,255,255,0.03) 0.2px, transparent 0)
          `,
          backgroundSize: '3px 3px',
          opacity: 1,
          mixBlendMode: 'multiply',
        }}
      ></div>

      <SEO
        title={`${frontMatter.title} - ${globalData.name}`}
        description={frontMatter.description}
      />
      
      {/* Content Frame for iframe-like scrolling */}
      <div className="content-frame">
        <article className="px-6 md:px-0">
          <header>
            <h1>
              {frontMatter.title}
            </h1>
            {frontMatter.description && (
              <h2 className="post-description">{frontMatter.description}</h2>
            )}
          </header>
          <main>
            <article className="prose dark:prose-dark">
              <MDXRemote {...source} components={components} />
            </article>
          </main>
          <div className="grid md:grid-cols-2 lg:-mx-24 mt-12">
            {prevPost && (
              <Link href={`/posts/${prevPost.slug}`}>
                <a className="py-8 px-10 text-center md:text-right first:rounded-t-lg md:first:rounded-tr-none md:first:rounded-l-lg last:rounded-r-lg first last:rounded-b-lg backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 last:border-t md:border-r-0 md:last:border-r md:last:rounded-r-none flex flex-col">
                  <p className="nav-label">Previous</p>
                  <h4 className="nav-title">{prevPost.title}</h4>
                  <ArrowIcon className="transform rotate-180 mx-auto md:mr-0 mt-auto" />
                </a>
              </Link>
            )}
            {nextPost && (
              <Link href={`/posts/${nextPost.slug}`}>
                <a className="py-8 px-10 text-center md:text-left md:first:rounded-t-lg last:rounded-b-lg first:rounded-l-lg md:last:rounded-bl-none md:last:rounded-r-lg backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 border-t-0 first:border-t first:rounded-t-lg md:border-t border-b-0 last:border-b flex flex-col">
                  <p className="nav-label">Next</p>
                  <h4 className="nav-title">{nextPost.title}</h4>
                  <ArrowIcon className="mt-auto mx-auto md:ml-0" />
                </a>
              </Link>
            )}
          </div>
        </article>
      </div>
    </div>
  );
}

export const getStaticProps = async ({ params }) => {
  const globalData = getGlobalData();
  const { mdxSource, data } = await getPostBySlug(params.slug);
  const prevPost = getPreviousPostBySlug(params.slug);
  const nextPost = getNextPostBySlug(params.slug);

  return {
    props: {
      globalData,
      source: mdxSource,
      frontMatter: data,
      prevPost,
      nextPost,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = postFilePaths
    .map((path) => path.replace(/\.mdx?$/, ''))
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
