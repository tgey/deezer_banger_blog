import Image from "next/legacy/image";
import { Inter } from "next/font/google";
import { EnvVars } from 'env';
import Head from 'next/head';
import Hero from 'views/HomePage/Hero';
import styled from 'styled-components';
import { InferGetStaticPropsType } from 'next';
import { getAllPosts } from 'utils/postsFetcher';
import ScrollableBlogPosts from 'views/HomePage/ScrollableBlogPosts';

const inter = Inter({ subsets: ["latin"] });

export default function Home({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>

    <Head>
        <title>{EnvVars.SITE_NAME}</title>
        <meta
          name="description"
          content="Tempor nostrud velit fugiat nostrud duis incididunt Lorem deserunt est tempor aute dolor ad elit."
        />
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Hero />
        </WhiteBackgroundContainer>
        <DarkerBackgroundContainer>
        <ScrollableBlogPosts posts={posts} />
        </DarkerBackgroundContainer>
      </HomepageWrapper>
    </>
  );
}

const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;

const WhiteBackgroundContainer = styled.div`
  background: rgb(var(--background));
  padding-top: 5rem;

  & > :last-child {
    padding-bottom: 5rem;
  }

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));
  padding-top: 5rem;

  & > :last-child {
    padding-bottom: 5rem;
  }

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllPosts(),
    },
  };
}