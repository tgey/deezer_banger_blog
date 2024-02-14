import Image from "next/legacy/image";
import { Inter } from "next/font/google";
import { EnvVars } from 'env';
import Head from 'next/head';
import Hero from 'views/HomePage/Hero';
import styled from 'styled-components';
import { InferGetStaticPropsType } from 'next';
import { getAllPosts } from 'utils/postsFetcher';
import ScrollableBlogPosts from 'views/HomePage/ScrollableBlogPosts';
import { media } from 'utils/media';

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
        <WhiteBackgroundContainer>
        <DeezerWidgetWrapper>
          <Heading>Notre playlist Deezer</Heading>
          <iframe title="deezer-widget" src="https://widget.deezer.com/widget/auto/playlist/12300548131" width="80%" height="400" allow="encrypted-media; clipboard-write"></iframe>
        </DeezerWidgetWrapper>
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

const Heading = styled.h1`
  font-size: 7.2rem;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 4rem;
  letter-spacing: -0.03em;

  ${media('<=tablet')} {
    font-size: 4.6rem;
    margin-bottom: 2rem;
  }
`;
const DeezerWidgetWrapper = styled.div`
  display: flex;
  padding: 5rem 0;
  margin: 5rem 0;
  justify-content: center;
  align-items: center;
  flex-direction: column;

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