import Link from 'next/link';
import { getPosts } from '../utils/mdx-utils';
import { useEffect } from 'react';
import Hero from '../components/Hero';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';
import pageTransitionManager from '../utils/page-transitions';

export default function Index({ posts, globalData }) {
  // Show only the first 3 posts as featured posts
  const featuredPosts = posts.slice(0, 3);

  useEffect(() => {
    if (pageTransitionManager) {
      pageTransitionManager.switchPage('/');
    }
  }, []);

  return (
    <>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      
      <div className="content-frame">
        <div className="relative">
          <Hero globalData={globalData} />
        </div>
      </div>
    </>
  );
}

export function getStaticProps() {  
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}
