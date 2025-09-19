import Link from 'next/link';
import { getPosts } from '../utils/mdx-utils';
import ArrowIcon from '../components/ArrowIcon';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';
import { useEffect } from 'react';
import pageTransitionManager from '../utils/page-transitions';

export default function Blog({ posts, globalData }) {
  useEffect(() => {
    // Initialize page transition for this page
    if (pageTransitionManager) {
      pageTransitionManager.switchPage('/blog');
    }
  }, []);

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

      <SEO title="Blog" description="Latest blog posts by Krizel Minnema" />
      
      {/* Content Frame for iframe-like scrolling */}
      <div className="content-frame">
        <main className="w-full">
          <h1 
            className="text-4xl mobile:text-5xl tablet:text-6xl laptop:text-7xl font-light text-gray-900 dark:text-gray-100 tracking-tight text-left animate-slide-up"
            style={{ fontFamily: 'moret, serif' }}
          >
            Blog Posts
          </h1>
          <ul className="w-full">
            {posts.map((post) => (
              <li
                key={post.filePath}
                className="md:first:rounded-t-lg md:last:rounded-b-lg backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 border-b-0 last:border-b hover:border-b hovered-sibling:border-t-0"
              >
                <Link
                  as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
                  href={`/posts/[slug]`}
                >
                  <a className="py-4 mobile:py-6 tablet:py-10 px-4 mobile:px-6 tablet:px-16 block focus:outline-none focus:ring-4">
                    {post.data.date && (
                      <p className="blog-date">{post.data.date}</p>
                    )}
                    <h2 className="blog-title">{post.data.title}</h2>
                    {post.data.description && (
                      <p className="blog-description">{post.data.description}</p>
                    )}
                    <ArrowIcon className="mt-4" />
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </main>
      </div>
    </div>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}
