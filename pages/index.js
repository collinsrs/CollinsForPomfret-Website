import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPostsForHome } from '../lib/api'
import Head from 'next/head'
import ContactForm from '../components/form'
import { CMS_NAME } from '../lib/constants'

export default function Index({ preview, allPosts }) {
  const heroPost = allPosts[0].node
  const morePosts = allPosts.slice(1)
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Collins 2022- For Pomfret School President</title>
          <meta property="description" content="Vote Rishi Collins for Pomfret School President! View campaign information, about me, and share your thoughts." />
        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverimage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost._meta.uid}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          <ContactForm />
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false, previewData }) {
  const allPosts = await getAllPostsForHome(previewData)
  return {
    props: { preview, allPosts },
  }
}
