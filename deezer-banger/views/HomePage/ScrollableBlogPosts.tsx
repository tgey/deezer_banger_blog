import { useEffect, useState } from 'react';
import styled from 'styled-components';

import ArticleCard from 'components/ArticleCard';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import SectionTitle from 'components/SectionTitle';
import { useResizeObserver } from 'hooks/useResizeObserver';
import { SingleArticle } from 'types';
import { media } from 'utils/media';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

interface ScrollableBlogPostsProps {
  posts: SingleArticle[];
}

export default function ScrollableBlogPosts({ posts }: ScrollableBlogPostsProps) {
  const [hasMounted, setHasMounted] = useState(false);
  const { ref, width = 1 } = useResizeObserver<HTMLDivElement>();

  const oneItemWidth = 350;
  const noOfItems = 3;

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <Section>
      <Container>
        <Content>
          <OverTitle>En Tendance</OverTitle>
          <SectionTitle>Nos dernières découvertes</SectionTitle>
        </Content>
      </Container>

      <SwiperContainer ref={ref}>
        {hasMounted && (
          <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={noOfItems} spaceBetween={5} loop>
            {posts.map((singlePost, idx) => (
              <SwiperSlide key={singlePost.meta.title}>
                <ArticleCard
                  title={singlePost.meta.title}
                  description={singlePost.meta.description}
                  imageUrl={singlePost.meta.imageUrl}
                  slug={singlePost.slug}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </SwiperContainer>
    </Section>
  );
}

const Content = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  & > *:last-child {
    margin-top: 1rem;
  }
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  & > *:not(:first-child) {
    margin-top: 1rem;
  }
`;

const SwiperContainer = styled(Container)`
  max-width: 250em;
  // height: 46rem;
  flex-direction: row;


  & > *:first-child {
    margin-top: 4rem;
  }

  ${media('<=largeDesktop')} {
    max-width: 100%;
    padding: 0;
  }
`;
