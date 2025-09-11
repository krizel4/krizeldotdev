import Link from 'next/link';
import { getPosts } from '../utils/mdx-utils';

import Footer from '../components/Footer';
import Layout, { GradientBackground } from '../components/Layout';
import Hero from '../components/Hero';
import ArrowIcon from '../components/ArrowIcon';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';

export default function Index({ posts, globalData }) {
  // Show only the first 3 posts as featured posts
  const featuredPosts = posts.slice(0, 3);

  return (
    <div className="min-h-screen">
      <SEO title={globalData.name} description={globalData.blogTitle} />
      <Hero globalData={globalData} />
      
      {/* Featured Blog Posts Section */}
      <div className="bg-gray-100 dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Posts
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Discover insights and experiences from my journey in Marketing Operations, Data Analytics and Digital Marketing.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <div
                key={post.filePath}
                className="backdrop-blur-lg bg-white/80 dark:bg-white/10 dark:bg-black/30 rounded-lg border border-gray-300 dark:border-gray-700 dark:border-white border-opacity-20 dark:border-opacity-10 overflow-hidden hover:bg-white/90 dark:hover:bg-white/20 dark:hover:bg-black/50 transition-all duration-300 hover:scale-105"
              >
                {/* Preview Image */}
                <div className="h-48 bg-gradient-to-br from-gradient-1 to-gradient-2 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-6xl font-bold opacity-30">
                      {post.data.title?.charAt(0) || 'B'}
                    </div>
                  </div>
                  {post.data.date && (
                    <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.data.date}
                    </div>
                  )}
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white line-clamp-2">
                    {post.data.title}
                  </h3>
                  {post.data.description && (
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                      {post.data.description}
                    </p>
                  )}
                  
                  {/* Read More Button */}
                  <Link
                    as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
                    href={`/posts/[slug]`}
                  >
                    <a className="inline-flex items-center bg-white text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900">
                      Read More
                      <ArrowIcon className="ml-2" />
                    </a>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          {/* View All Posts Button */}
          <div className="text-center mt-12">
            <Link href="/blog">
              <a className="inline-flex items-center bg-white text-gray-900 px-6 py-3 rounded-lg font-medium border border-gray-300 hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900">
                View All Posts
                <ArrowIcon className="ml-2" />
              </a>
            </Link>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-200 dark:bg-gray-800">
        <Footer copyrightText={globalData.footerText} />
      </div>
    </div>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}
